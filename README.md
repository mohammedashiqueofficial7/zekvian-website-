# Zekvian Website

A modern, professional SaaS website built with React and Node.js featuring intelligent automation solutions for enterprise businesses.

## Features

- **Modern Design**: Clean, professional interface with smooth animations
- **Responsive**: Mobile-first design that works on all devices
- **Interactive**: Smooth scrolling navigation and hover effects
- **Contact Forms**: Integrated contact form with backend validation
- **Security**: Enterprise-grade security information and compliance details
- **FAQ**: Comprehensive FAQ section covering all aspects
- **Legal**: Complete legal pages with privacy policy and terms

## Tech Stack

### Frontend
- React 18
- Tailwind CSS
- Lucide React (icons)
- Axios (API calls)

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- Express Validator
- Helmet (security)
- Rate limiting

## Quick Start

1. **Install dependencies**:
   ```bash
   npm run install-all
   ```

2. **Set up environment variables**:
   ```bash
   cd server
   cp .env.example .env
   # Edit .env with your MongoDB connection string
   ```

3. **Start development servers**:
   ```bash
   npm run dev
   ```

This will start both the React frontend (http://localhost:3000) and Node.js backend (http://localhost:5000).

## Project Structure

```
zekvian-website/
├── client/                 # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── App.js         # Main app component
│   │   └── index.js       # Entry point
│   └── package.json
├── server/                 # Node.js backend
│   ├── index.js           # Express server
│   ├── .env.example       # Environment variables template
│   └── package.json
└── package.json           # Root package.json
```

## Components

- **Header**: Sticky navigation with mobile menu
- **Hero**: Landing section with CTAs
- **Features**: Key value propositions
- **HowItWorks**: Step-by-step process
- **SocialProof**: Testimonials and company logos
- **About**: Team information and company story
- **Contact**: Contact form and information
- **Legal**: Privacy policy, terms, GDPR compliance
- **Security**: Security measures and system status
- **FAQ**: Comprehensive Q&A section
- **Footer**: Links and contact information

## API Endpoints

- `GET /api/health` - Health check
- `POST /api/contact` - Submit contact form
- `GET /api/contacts` - Get all contacts (admin)

## Deployment

### Frontend (Netlify/Vercel)
```bash
cd client
npm run build
# Deploy the build/ directory
```

### Backend (Heroku/Railway)
```bash
cd server
# Set environment variables
# Deploy with your preferred platform
```

## Environment Variables

### Server (.env)
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/zekvian
NODE_ENV=development
```

## Security Features

- Helmet.js for security headers
- Rate limiting on API endpoints
- Input validation and sanitization
- CORS configuration
- MongoDB injection protection

## Customization

The website is designed to be easily customizable:

1. **Colors**: Edit `tailwind.config.js` to change the color scheme
2. **Content**: Update component files to change text and images
3. **Styling**: Modify Tailwind classes or add custom CSS
4. **Features**: Add new components or modify existing ones

## License

MIT License - feel free to use this project as a template for your own SaaS website.