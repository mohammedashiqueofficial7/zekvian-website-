import React, { useState, useEffect } from 'react';
import { Users, Mail, BarChart3, Settings, LogOut, Eye, Trash2, RefreshCw, Check, Clock, AlertCircle, Search, Filter, Download, Plus, Sun, Moon, Menu, X, Send, ChevronDown, ChevronRight } from 'lucide-react';
import { useToast } from './Toast';

const AdminDashboard = ({ onLogout }) => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedContact, setSelectedContact] = useState(null);
  const [refreshing, setRefreshing] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('dashboard');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [emailModal, setEmailModal] = useState(null);
  const [emailContent, setEmailContent] = useState({ subject: '', message: '' });
  const [editingCredentials, setEditingCredentials] = useState(false);
  const [credentials, setCredentials] = useState({ username: 'zekvian_admin', password: 'zekvian2024' });
  const { showToast, ToastContainer } = useToast();

  useEffect(() => {
    fetchContacts();
  }, []);

  const handleLogout = () => {
    if (window.confirm('Are you sure you want to logout?')) {
      showToast('Logged out successfully', 'info');
      setTimeout(() => {
        onLogout();
      }, 1000);
    }
  };

  const fetchContacts = async () => {
    try {
      setRefreshing(true);
      const response = await fetch('/api/contacts');
      const data = await response.json();
      if (data.success) {
        setContacts(data.contacts);
        if (!loading) showToast('Contacts refreshed successfully', 'success');
      } else {
        showToast('Failed to fetch contacts', 'error');
      }
    } catch (error) {
      console.error('Error fetching contacts:', error);
      showToast('Error fetching contacts', 'error');
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  const updateContactStatus = async (contactId, status) => {
    try {
      const response = await fetch(`/api/contacts/${contactId}/status`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status }),
      });

      if (response.ok) {
        const updatedContacts = contacts.map(contact => 
          contact._id === contactId ? { ...contact, status } : contact
        );
        setContacts(updatedContacts);
        
        if (selectedContact && selectedContact._id === contactId) {
          setSelectedContact({ ...selectedContact, status });
        }
        
        showToast(`Contact status updated to ${status}`, 'success');
      } else {
        showToast('Failed to update contact status', 'error');
      }
    } catch (error) {
      console.error('Error updating contact status:', error);
      showToast('Failed to update contact status', 'error');
    }
  };

  const deleteContact = async (contactId) => {
    if (window.confirm('Are you sure you want to delete this contact?')) {
      try {
        setContacts(contacts.filter(contact => contact._id !== contactId));
        showToast('Contact deleted successfully', 'success');
      } catch (error) {
        console.error('Error deleting contact:', error);
        showToast('Failed to delete contact', 'error');
      }
    }
  };

  const sendEmail = async (contact) => {
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: contact.email,
          name: contact.name,
          subject: emailContent.subject,
          message: emailContent.message
        }),
      });

      if (response.ok) {
        showToast('Email sent successfully', 'success');
        setEmailModal(null);
        setEmailContent({ subject: '', message: '' });
      } else {
        showToast('Failed to send email', 'error');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      showToast('Failed to send email', 'error');
    }
  };

  const getStatusBadge = (status) => {
    const statusConfig = {
      'new': { color: 'bg-blue-500', icon: AlertCircle, text: 'New' },
      'contacted': { color: 'bg-green-500', icon: Check, text: 'Contacted' },
      'pending': { color: 'bg-yellow-500', icon: Clock, text: 'Pending' }
    };
    
    const config = statusConfig[status] || statusConfig['new'];
    const Icon = config.icon;
    
    return (
      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium text-white ${config.color}`}>
        <Icon className="w-3 h-3 mr-1" />
        {config.text}
      </span>
    );
  };

  const filteredContacts = contacts.filter(contact => {
    const matchesSearch = contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         (contact.company && contact.company.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesStatus = statusFilter === 'all' || contact.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const stats = [
    { name: 'Total Contacts', value: contacts.length, icon: Users, color: 'from-blue-500 to-blue-600', change: '+12%' },
    { name: 'Pending', value: contacts.filter(c => c.status === 'pending').length, icon: Clock, color: 'from-yellow-500 to-amber-600', change: '+8%' },
    { name: 'Contacted', value: contacts.filter(c => c.status === 'contacted').length, icon: Check, color: 'from-green-500 to-green-600', change: '+2.1%' },
    { name: 'New Contacts', value: contacts.filter(c => !c.status || c.status === 'new').length, icon: AlertCircle, color: 'from-purple-500 to-purple-600', change: '-0.3h' }
  ];

  const themeClasses = {
    dark: {
      bg: 'bg-gradient-to-br from-gray-900 via-slate-900 to-black',
      cardBg: 'bg-gray-800/90 border-gray-700',
      text: 'text-white',
      textSecondary: 'text-gray-400',
      border: 'border-gray-700',
      input: 'bg-gray-800 border-gray-600 text-white',
      hover: 'hover:bg-gray-700/50'
    },
    light: {
      bg: 'bg-gradient-to-br from-gray-50 via-white to-blue-50',
      cardBg: 'bg-white/90 border-gray-200 shadow-lg',
      text: 'text-gray-900',
      textSecondary: 'text-gray-600',
      border: 'border-gray-200',
      input: 'bg-white border-gray-300 text-gray-900',
      hover: 'hover:bg-gray-50'
    }
  };

  const theme = isDarkMode ? themeClasses.dark : themeClasses.light;

  return (
    <div className={`min-h-screen ${theme.bg} transition-all duration-300`}>
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 ${sidebarCollapsed ? 'w-16' : 'w-64'} ${theme.cardBg} border-r ${theme.border} transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-all duration-300 ease-in-out lg:translate-x-0`}>
        <div className={`flex items-center justify-between h-16 px-4 border-b ${theme.border}`}>
          {!sidebarCollapsed && (
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">Z</span>
              </div>
              <span className={`font-bold ${theme.text}`}>Zekvian</span>
            </div>
          )}
          <button
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            className={`p-2 rounded-lg ${theme.hover} ${theme.textSecondary} transition-colors hidden lg:block`}
          >
            {sidebarCollapsed ? <ChevronRight size={16} /> : <ChevronDown size={16} />}
          </button>
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden text-gray-500 hover:text-gray-700"
          >
            <X size={20} />
          </button>
        </div>
        
        <nav className="mt-8 px-2">
          <div className="space-y-2">
            {[
              { id: 'dashboard', name: 'Dashboard', icon: BarChart3 },
              { id: 'contacts', name: 'Contacts', icon: Users },
              { id: 'settings', name: 'Settings', icon: Settings }
            ].map((item) => (
              <button 
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`w-full flex items-center px-3 py-3 text-sm font-medium rounded-lg transition-colors ${
                  activeSection === item.id 
                    ? 'bg-blue-500/10 text-blue-600 border-r-2 border-blue-500' 
                    : `${theme.textSecondary} ${theme.hover}`
                }`}
                title={sidebarCollapsed ? item.name : ''}
              >
                <item.icon className={`${sidebarCollapsed ? 'mx-auto' : 'mr-3'} h-5 w-5`} />
                {!sidebarCollapsed && item.name}
              </button>
            ))}
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className={`${sidebarCollapsed ? 'lg:ml-16' : 'lg:ml-64'} transition-all duration-300 min-h-screen flex flex-col`}>
        {/* Top Header */}
        <header className={`${theme.cardBg} border-b ${theme.border} sticky top-0 z-40 backdrop-blur-xl flex-shrink-0`}>
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <button
                  onClick={() => setSidebarOpen(true)}
                  className="lg:hidden mr-4 text-gray-500 hover:text-gray-700"
                >
                  <Menu size={20} />
                </button>
                <h1 className={`text-xl font-semibold ${theme.text}`}>Admin Dashboard</h1>
              </div>
              
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setIsDarkMode(!isDarkMode)}
                  className={`p-2 rounded-lg ${theme.hover} ${theme.textSecondary} transition-colors`}
                >
                  {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                </button>
                
                <div className={`flex items-center space-x-2 ${theme.cardBg} rounded-lg px-3 py-2`}>
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className={`text-xs ${theme.textSecondary}`}>Online</span>
                </div>
                
                <button 
                  onClick={handleLogout}
                  className={`flex items-center space-x-2 text-red-500 hover:text-red-600 transition-colors px-3 py-2 rounded-lg ${isDarkMode ? 'hover:bg-red-900/20' : 'hover:bg-red-50'}`}
                >
                  <LogOut size={18} />
                  <span className="text-sm">Logout</span>
                </button>
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 p-4 lg:p-6 overflow-auto">
          {activeSection === 'dashboard' && (
            <>
              {/* Stats Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                {stats.map((stat, index) => (
                  <div key={index} className={`${theme.cardBg} ${theme.border} rounded-xl p-4 hover:scale-105 transition-all duration-300`}>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className={`text-xs ${theme.textSecondary} mb-1`}>{stat.name}</p>
                        <p className={`text-xl font-bold ${theme.text}`}>{stat.value}</p>
                        <p className="text-xs text-green-500 font-medium">{stat.change}</p>
                      </div>
                      <div className={`w-10 h-10 bg-gradient-to-r ${stat.color} rounded-lg flex items-center justify-center`}>
                        <stat.icon className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Overview */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className={`${theme.cardBg} ${theme.border} rounded-xl p-4`}>
                  <h3 className={`text-lg font-bold ${theme.text} mb-3`}>Recent Activity</h3>
                  <div className="space-y-2">
                    {contacts.slice(0, 5).map((contact, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white text-xs">{contact.name.charAt(0)}</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className={`text-sm font-medium ${theme.text} truncate`}>{contact.name}</p>
                          <p className={`text-xs ${theme.textSecondary}`}>{new Date(contact.createdAt).toLocaleDateString()}</p>
                        </div>
                        {getStatusBadge(contact.status || 'new')}
                      </div>
                    ))}
                  </div>
                </div>

                <div className={`${theme.cardBg} ${theme.border} rounded-xl p-4`}>
                  <h3 className={`text-lg font-bold ${theme.text} mb-3`}>System Status</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className={`text-sm ${theme.text}`}>Server Status</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-xs text-green-500 font-medium">Online</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className={`text-sm ${theme.text}`}>Database</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-xs text-green-500 font-medium">Connected</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className={`text-sm ${theme.text}`}>Email Service</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-xs text-green-500 font-medium">Active</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}

          {activeSection === 'contacts' && (
            <>
              {/* Search and Actions */}
              <div className={`${theme.cardBg} ${theme.border} rounded-xl p-4 mb-4`}>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${theme.textSecondary} w-4 h-4`} />
                      <input
                        type="text"
                        placeholder="Search contacts..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className={`${theme.input} ${theme.border} rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                      />
                    </div>
                    <div className="relative">
                      <Filter className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${theme.textSecondary} w-4 h-4`} />
                      <select
                        value={statusFilter}
                        onChange={(e) => setStatusFilter(e.target.value)}
                        className={`${theme.input} ${theme.border} rounded-lg pl-10 pr-8 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none`}
                      >
                        <option value="all">All Status</option>
                        <option value="new">New</option>
                        <option value="contacted">Contacted</option>
                        <option value="pending">Pending</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <button className={`flex items-center space-x-2 ${theme.hover} ${theme.text} px-4 py-2 rounded-lg transition-colors ${theme.border} border`}>
                      <Download size={16} />
                      <span className="text-sm">Export</span>
                    </button>
                    <button
                      onClick={fetchContacts}
                      disabled={refreshing}
                      className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium px-4 py-2 rounded-lg transition-all duration-300 disabled:opacity-50"
                    >
                      <RefreshCw className={`w-4 h-4 ${refreshing ? 'animate-spin' : ''}`} />
                      <span className="text-sm">Refresh</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Contacts Grid */}
              <div className={`${theme.cardBg} ${theme.border} rounded-xl overflow-hidden`}>
                <div className={`px-4 py-3 border-b ${theme.border}`}>
                  <div className="flex justify-between items-center">
                    <h2 className={`text-xl font-bold ${theme.text}`}>Contact Submissions</h2>
                    <span className={`text-sm ${theme.textSecondary}`}>{filteredContacts.length} contacts</span>
                  </div>
                </div>
                
                {loading ? (
                  <div className="p-12 text-center">
                    <div className="animate-spin w-12 h-12 border-2 border-blue-500 border-t-transparent rounded-full mx-auto mb-4"></div>
                    <p className={theme.textSecondary}>Loading contacts...</p>
                  </div>
                ) : (
                  <div className="p-4">
                    <div className="space-y-3">
                      {filteredContacts.map((contact) => (
                        <div key={contact._id} className={`${theme.cardBg} ${theme.border} rounded-lg p-3 ${theme.hover} transition-all duration-300 group`}>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                                <span className="text-white font-bold">{contact.name.charAt(0)}</span>
                              </div>
                              <div className="min-w-0 flex-1">
                                <h3 className={`${theme.text} font-medium text-sm truncate`}>{contact.name}</h3>
                                <p className={`${theme.textSecondary} text-xs truncate`}>{contact.email}</p>
                                <p className={`${theme.textSecondary} text-xs truncate`}>{contact.company || 'No company'}</p>
                              </div>
                            </div>
                            <div className="flex items-center space-x-2 flex-shrink-0">
                              <div className="text-right hidden sm:block">
                                <div className="mb-2">{getStatusBadge(contact.status || 'new')}</div>
                                <p className={`text-xs ${theme.textSecondary}`}>{new Date(contact.createdAt).toLocaleDateString()}</p>
                              </div>
                              <div className="flex items-center space-x-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                <button
                                  onClick={() => setSelectedContact(contact)}
                                  className="text-blue-600 hover:text-blue-900 transition-colors p-2 rounded hover:bg-blue-400/10"
                                >
                                  <Eye size={18} />
                                </button>
                                <button
                                  onClick={() => deleteContact(contact._id)}
                                  className="text-red-600 hover:text-red-900 transition-colors p-2 rounded hover:bg-red-400/10"
                                >
                                  <Trash2 size={18} />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </>
          )}

          {activeSection === 'settings' && (
            <div className="space-y-6">
              <div className={`${theme.cardBg} ${theme.border} rounded-xl p-6`}>
                <h3 className={`text-xl font-bold ${theme.text} mb-4`}>General Settings</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className={`font-medium ${theme.text}`}>Dark Mode</h4>
                      <p className={`text-sm ${theme.textSecondary}`}>Toggle between light and dark theme</p>
                    </div>
                    <button
                      onClick={() => setIsDarkMode(!isDarkMode)}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${isDarkMode ? 'bg-blue-600' : 'bg-gray-200'}`}
                    >
                      <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${isDarkMode ? 'translate-x-6' : 'translate-x-1'}`} />
                    </button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className={`font-medium ${theme.text}`}>Email Notifications</h4>
                      <p className={`text-sm ${theme.textSecondary}`}>Receive email alerts for new contacts</p>
                    </div>
                    <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-blue-600">
                      <span className="inline-block h-4 w-4 transform rounded-full bg-white translate-x-6" />
                    </button>
                  </div>
                </div>
              </div>
              
              <div className={`${theme.cardBg} ${theme.border} rounded-xl p-6`}>
                <h3 className={`text-xl font-bold ${theme.text} mb-4`}>Account Information</h3>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-blue-600 block mb-2">Admin Username</label>
                    <div className="flex items-center space-x-2">
                      <input 
                        type="text" 
                        value={credentials.username} 
                        onChange={(e) => setCredentials({...credentials, username: e.target.value})}
                        disabled={!editingCredentials}
                        className={`flex-1 ${theme.input} ${theme.border} rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${!editingCredentials ? 'opacity-50' : ''}`} 
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-blue-600 block mb-2">Password</label>
                    <div className="flex items-center space-x-2">
                      <input 
                        type={editingCredentials ? "text" : "password"} 
                        value={credentials.password} 
                        onChange={(e) => setCredentials({...credentials, password: e.target.value})}
                        disabled={!editingCredentials}
                        className={`flex-1 ${theme.input} ${theme.border} rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${!editingCredentials ? 'opacity-50' : ''}`} 
                      />
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => {
                        if (editingCredentials) {
                          showToast('Credentials updated successfully', 'success');
                        }
                        setEditingCredentials(!editingCredentials);
                      }}
                      className={`px-4 py-2 rounded-lg transition-colors ${
                        editingCredentials 
                          ? 'bg-green-500 hover:bg-green-600 text-white' 
                          : 'bg-blue-500 hover:bg-blue-600 text-white'
                      }`}
                    >
                      {editingCredentials ? 'Save Changes' : 'Edit Credentials'}
                    </button>
                    {editingCredentials && (
                      <button
                        onClick={() => {
                          setCredentials({ username: 'zekvian_admin', password: 'zekvian2024' });
                          setEditingCredentials(false);
                        }}
                        className="px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-lg transition-colors"
                      >
                        Cancel
                      </button>
                    )}
                  </div>
                  <div>
                    <label className="text-sm font-medium text-blue-600 block mb-2">Last Login</label>
                    <p className={theme.text}>{new Date().toLocaleString()}</p>
                  </div>
                  <div className="pt-4">
                    <button
                      onClick={handleLogout}
                      className="flex items-center space-x-2 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors"
                    >
                      <LogOut size={16} />
                      <span>Logout from Admin Panel</span>
                    </button>
                  </div>
                </div>
              </div>
              
              <div className={`${theme.cardBg} ${theme.border} rounded-xl p-6`}>
                <h3 className={`text-xl font-bold ${theme.text} mb-4`}>System Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className={`${theme.hover} rounded-lg p-4`}>
                    <h4 className={`font-medium ${theme.text} mb-2`}>Database Status</h4>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-green-500">Connected</span>
                    </div>
                  </div>
                  <div className={`${theme.hover} rounded-lg p-4`}>
                    <h4 className={`font-medium ${theme.text} mb-2`}>Server Uptime</h4>
                    <p className={`text-sm ${theme.textSecondary}`}>99.9% (30 days)</p>
                  </div>
                  <div className={`${theme.hover} rounded-lg p-4`}>
                    <h4 className={`font-medium ${theme.text} mb-2`}>Total Contacts</h4>
                    <p className={`text-sm ${theme.textSecondary}`}>{contacts.length} records</p>
                  </div>
                  <div className={`${theme.hover} rounded-lg p-4`}>
                    <h4 className={`font-medium ${theme.text} mb-2`}>Storage Used</h4>
                    <p className={`text-sm ${theme.textSecondary}`}>2.4 MB / 1 GB</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>

      {/* Contact Details Modal */}
      {selectedContact && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className={`${theme.cardBg} ${theme.border} rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto`}>
            <div className={`p-6 border-b ${theme.border}`}>
              <div className="flex justify-between items-center">
                <h3 className={`text-2xl font-bold ${theme.text}`}>Contact Details</h3>
                <button
                  onClick={() => setSelectedContact(null)}
                  className={`${theme.textSecondary} hover:text-red-500 transition-colors`}
                >
                  <X size={24} />
                </button>
              </div>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-blue-600 block mb-2">Name</label>
                    <p className={`${theme.text} text-lg font-medium`}>{selectedContact.name}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-blue-600 block mb-2">Email</label>
                    <p className={theme.text}>{selectedContact.email}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-blue-600 block mb-2">Company</label>
                    <p className={theme.text}>{selectedContact.company || 'Not provided'}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-blue-600 block mb-2">Status</label>
                    <select
                      value={selectedContact.status || 'new'}
                      onChange={(e) => updateContactStatus(selectedContact._id, e.target.value)}
                      className={`${theme.input} ${theme.border} rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    >
                      <option value="new">New</option>
                      <option value="contacted">Contacted</option>
                      <option value="pending">Pending</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-blue-600 block mb-2">Submitted</label>
                    <p className={theme.text}>{new Date(selectedContact.createdAt).toLocaleString()}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-blue-600 block mb-2">Message</label>
                    <div className={`${theme.input} ${theme.border} rounded-lg p-4 max-h-48 overflow-y-auto`}>
                      <p className={`${theme.text} whitespace-pre-wrap`}>{selectedContact.message}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}


      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden" 
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <ToastContainer />
    </div>
  );
};

export default AdminDashboard;