const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const { body, validationResult } = require('express-validator');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Trust proxy for rate limiting
app.set('trust proxy', 1);

// Security middleware
app.use(helmet());
app.use(cors());
app.use(express.json({ limit: '10mb' }));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});
app.use(limiter);

// Contact form rate limiting
const contactLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 5 // limit each IP to 5 contact form submissions per hour
});

// MongoDB connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/zekvian';
mongoose.connect(MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Contact form schema
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true, lowercase: true },
  company: { type: String, trim: true },
  message: { type: String, required: true, trim: true },
  status: { type: String, enum: ['new', 'contacted', 'pending'], default: 'new' },
  createdAt: { type: Date, default: Date.now },
  ipAddress: String,
  userAgent: String
});

const Contact = mongoose.model('Contact', contactSchema);

// Validation middleware
const validateContact = [
  body('name')
    .trim()
    .isLength({ min: 2, max: 100 })
    .withMessage('Name must be between 2 and 100 characters'),
  body('email')
    .isEmail()
    .normalizeEmail()
    .withMessage('Please provide a valid email address'),
  body('company')
    .optional()
    .trim()
    .isLength({ max: 100 })
    .withMessage('Company name must be less than 100 characters'),
  body('message')
    .trim()
    .isLength({ min: 10, max: 1000 })
    .withMessage('Message must be between 10 and 1000 characters')
];

// Routes
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

app.post('/api/contact', contactLimiter, validateContact, async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: errors.array()
      });
    }

    const { name, email, company, message } = req.body;
    
    const contact = new Contact({
      name,
      email,
      company,
      message,
      ipAddress: req.ip,
      userAgent: req.get('User-Agent')
    });

    const savedContact = await contact.save();
    const referenceId = savedContact._id.toString().slice(-6).toUpperCase();

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Notification email to admin
    const notificationEmail = {
      from: `"Zekvian Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `New Contact from ${name} - Zekvian`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #000;">
          <div style="background: linear-gradient(135deg, #fbbf24, #f59e0b); padding: 30px; border-radius: 10px; text-align: center; margin-bottom: 20px;">
            <h2 style="color: black; margin: 0;">NEW ZEKVIAN CONTACT SUBMISSION!</h2>
          </div>
          <div style="background: #1f2937; padding: 30px; border-radius: 10px; border: 1px solid #fbbf24;">
            <p style="font-size: 16px; color: #fbbf24;"><strong>Reference ID:</strong> #${referenceId}</p>
            <p style="font-size: 16px; color: #fff;"><strong>Name:</strong> ${name}</p>
            <p style="font-size: 16px; color: #fff;"><strong>Email:</strong> ${email}</p>
            <p style="font-size: 16px; color: #fff;"><strong>Company:</strong> ${company || 'Not provided'}</p>
            <div style="background: #374151; padding: 20px; border-left: 4px solid #fbbf24; margin: 20px 0;">
              <p style="margin: 0; color: #d1d5db;"><strong>Message:</strong> ${message}</p>
            </div>
          </div>
        </div>
      `,
    };

    // Reply email to sender
    const replyEmail = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank you for contacting Zekvian - Enterprise Automation Solutions',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #000;">
          <div style="background: linear-gradient(135deg, #fbbf24, #f59e0b); padding: 30px; border-radius: 10px; text-align: center; margin-bottom: 20px;">
            <h2 style="color: black; margin: 0;">Thank You for Contacting Zekvian!</h2>
          </div>
          <div style="background: #1f2937; padding: 30px; border-radius: 10px; border: 1px solid #fbbf24;">
            <p style="font-size: 16px; color: #fff;">Dear <strong style="color: #fbbf24;">${name}</strong>,</p>
            <p style="font-size: 16px; color: #d1d5db; line-height: 1.6;">Thank you for your interest in Zekvian's enterprise automation solutions! Your inquiry has been successfully received and assigned reference ID <strong style="color: #fbbf24;">#${referenceId}</strong>.</p>
            <div style="background: #374151; padding: 20px; border-left: 4px solid #fbbf24; margin: 20px 0;">
              <p style="margin: 0; font-style: italic; color: #d1d5db;">"${message}"</p>
            </div>
            <p style="font-size: 16px; color: #d1d5db; line-height: 1.6;">Our enterprise solutions team will review your requirements and provide a comprehensive response within <strong style="color: #fbbf24;">24 business hours</strong>. In the meantime, feel free to:</p>
            <ul style="color: #d1d5db; line-height: 1.8;">
              <li>Explore our automation platform features</li>
              <li>Schedule a demo at your convenience</li>
              <li>Contact our priority support at <strong style="color: #fbbf24;">+1-800-ZEKVIAN</strong></li>
            </ul>
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #374151;">
              <p style="margin: 0; color: #d1d5db;">Best regards,</p>
              <p style="margin: 5px 0 0 0; font-weight: bold; color: #fbbf24;">The Zekvian Team</p>
              <p style="margin: 0; color: #9ca3af; font-size: 14px;">Enterprise Automation Solutions</p>
              <p style="margin: 0; color: #9ca3af; font-size: 14px;">🚀 Transforming Business Operations</p>
            </div>
          </div>
          <div style="text-align: center; margin-top: 20px; color: #6b7280; font-size: 12px;">
            <p>This is an automated response. Please do not reply to this email.</p>
          </div>
        </div>
      `,
    };

    try {
      console.log('Verifying SMTP connection...');
      await transporter.verify();
      console.log('SMTP connection verified');
      
      console.log('Sending notification email...');
      await transporter.sendMail(notificationEmail);
      console.log('Notification email sent');
      
      console.log('Sending reply email...');
      await transporter.sendMail(replyEmail);
      console.log('Reply email sent');
      
      console.log('All emails sent successfully for contact:', referenceId);
    } catch (emailError) {
      console.error('Email sending failed:', emailError.message);
      console.error('Full email error:', emailError);
    }

    res.status(201).json({
      success: true,
      referenceId: referenceId,
      message: `Dear ${name}, thank you for reaching out to Zekvian. Your inquiry has been successfully received and assigned reference ID #${referenceId}. Our enterprise solutions team will review your requirements and provide a comprehensive response within 24 business hours. Please check your email for confirmation.`
    });

  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({
      success: false,
      message: 'An error occurred while processing your request. Please try again later.'
    });
  }
});

// Get all contacts (admin endpoint - in production, add authentication)
app.get('/api/contacts', async (req, res) => {
  try {
    const contacts = await Contact.find()
      .sort({ createdAt: -1 })
      .limit(100)
      .select('-ipAddress -userAgent'); // Don't expose sensitive data

    res.json({
      success: true,
      contacts
    });
  } catch (error) {
    console.error('Error fetching contacts:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching contacts'
    });
  }
});

// Update contact status (admin endpoint)
app.put('/api/contacts/:id/status', async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    // Validate status
    if (!['new', 'contacted', 'pending'].includes(status)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid status. Must be new, contacted, or pending.'
      });
    }

    const contact = await Contact.findByIdAndUpdate(
      id,
      { status },
      { new: true, runValidators: true }
    );

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: 'Contact not found'
      });
    }

    res.json({
      success: true,
      contact
    });
  } catch (error) {
    console.error('Error updating contact status:', error);
    res.status(500).json({
      success: false,
      message: 'Error updating contact status'
    });
  }
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: 'Endpoint not found'
  });
});

// Error handler
app.use((error, req, res, next) => {
  console.error('Server error:', error);
  res.status(500).json({
    success: false,
    message: 'Internal server error'
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});