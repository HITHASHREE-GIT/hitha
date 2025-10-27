import { useState } from 'react';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [profileData, setProfileData] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    age: '32',
    gender: 'male',
  });

  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const [privacySettings, setPrivacySettings] = useState({
    allowHospitalAccess: true,
    allowDoctorAccess: true,
    shareAnalytics: false,
    publicProfile: false,
  });

  const [showSuccess, setShowSuccess] = useState(false);
  const [passwordError, setPasswordError] = useState('');

  const handleProfileChange = (e) => {
    setProfileData({ ...profileData, [e.target.name]: e.target.value });
  };

  const handlePasswordChange = (e) => {
    setPasswordData({ ...passwordData, [e.target.name]: e.target.value });
    setPasswordError('');
  };

  const handlePrivacyToggle = (setting) => {
    setPrivacySettings({ ...privacySettings, [setting]: !privacySettings[setting] });
  };

  const handleProfileSubmit = (e) => {
    e.preventDefault();
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      setPasswordError('Passwords do not match');
      return;
    }
    if (passwordData.newPassword.length < 8) {
      setPasswordError('Password must be at least 8 characters');
      return;
    }
    setShowSuccess(true);
    setPasswordData({ currentPassword: '', newPassword: '', confirmPassword: '' });
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const tabs = [
    { id: 'profile', label: 'Profile Details', icon: '👤' },
    { id: 'security', label: 'Security', icon: '🔒' },
    { id: 'privacy', label: 'Privacy', icon: '🛡️' },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-text-dark mb-2">Settings</h1>
        <p className="text-text-light">Manage your account preferences and security</p>
      </div>

      {/* Success Message */}
      {showSuccess && (
        <div className="mb-6 p-4 bg-success-green text-white rounded-lg shadow-lg">
          <div className="flex items-center gap-3">
            <span className="text-2xl">✓</span>
            <p className="font-semibold">Changes saved successfully!</p>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Tabs Sidebar */}
        <div className="lg:col-span-1">
          <div className="card">
            <nav className="space-y-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                    activeTab === tab.id
                      ? 'bg-primary-teal text-white'
                      : 'text-text-dark hover:bg-soft-mint'
                  }`}
                >
                  <span className="text-xl">{tab.icon}</span>
                  <span className="font-medium">{tab.label}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Content Area */}
        <div className="lg:col-span-3">
          {/* Profile Details */}
          {activeTab === 'profile' && (
            <div className="card">
              <h2 className="text-2xl font-bold text-text-dark mb-6">Profile Details</h2>
              <form onSubmit={handleProfileSubmit} className="space-y-6">
                <div className="flex items-center gap-6 mb-6">
                  <div className="w-24 h-24 bg-primary-teal rounded-full flex items-center justify-center text-white text-3xl font-bold">
                    JD
                  </div>
                  <div>
                    <button type="button" className="btn-secondary text-sm">
                      Change Photo
                    </button>
                    <p className="text-xs text-text-light mt-2">JPG, PNG or GIF (Max 2MB)</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-text-dark mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={profileData.name}
                      onChange={handleProfileChange}
                      className="input-field"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-text-dark mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={profileData.email}
                      onChange={handleProfileChange}
                      className="input-field"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-text-dark mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={profileData.phone}
                      onChange={handleProfileChange}
                      className="input-field"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-text-dark mb-2">
                      Age
                    </label>
                    <input
                      type="number"
                      name="age"
                      value={profileData.age}
                      onChange={handleProfileChange}
                      className="input-field"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-text-dark mb-2">
                      Gender
                    </label>
                    <select
                      name="gender"
                      value={profileData.gender}
                      onChange={handleProfileChange}
                      className="input-field"
                    >
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <button type="submit" className="btn-primary">
                  Save Changes
                </button>
              </form>
            </div>
          )}

          {/* Security */}
          {activeTab === 'security' && (
            <div className="space-y-6">
              <div className="card">
                <h2 className="text-2xl font-bold text-text-dark mb-6">Change Password</h2>
                <form onSubmit={handlePasswordSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-text-dark mb-2">
                      Current Password
                    </label>
                    <input
                      type="password"
                      name="currentPassword"
                      value={passwordData.currentPassword}
                      onChange={handlePasswordChange}
                      className="input-field"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-text-dark mb-2">
                      New Password
                    </label>
                    <input
                      type="password"
                      name="newPassword"
                      value={passwordData.newPassword}
                      onChange={handlePasswordChange}
                      className="input-field"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-text-dark mb-2">
                      Confirm New Password
                    </label>
                    <input
                      type="password"
                      name="confirmPassword"
                      value={passwordData.confirmPassword}
                      onChange={handlePasswordChange}
                      className={`input-field ${passwordError ? 'border-error-red' : ''}`}
                      required
                    />
                    {passwordError && (
                      <p className="text-error-red text-sm mt-1">{passwordError}</p>
                    )}
                  </div>

                  <button type="submit" className="btn-primary">
                    Update Password
                  </button>
                </form>
              </div>

              <div className="card">
                <h2 className="text-2xl font-bold text-text-dark mb-4">Two-Factor Authentication</h2>
                <p className="text-text-light mb-6">
                  Add an extra layer of security to your account
                </p>
                <button className="btn-secondary">
                  Enable 2FA
                </button>
              </div>
            </div>
          )}

          {/* Privacy */}
          {activeTab === 'privacy' && (
            <div className="card">
              <h2 className="text-2xl font-bold text-text-dark mb-6">Privacy Settings</h2>
              <div className="space-y-6">
                <div className="flex items-center justify-between py-4 border-b border-gray-200">
                  <div>
                    <h3 className="font-semibold text-text-dark">Allow Hospital Access</h3>
                    <p className="text-sm text-text-light">
                      Hospitals can view your medical records
                    </p>
                  </div>
                  <button
                    onClick={() => handlePrivacyToggle('allowHospitalAccess')}
                    className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors ${
                      privacySettings.allowHospitalAccess ? 'bg-primary-teal' : 'bg-gray-300'
                    }`}
                  >
                    <span
                      className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                        privacySettings.allowHospitalAccess ? 'translate-x-7' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>

                <div className="flex items-center justify-between py-4 border-b border-gray-200">
                  <div>
                    <h3 className="font-semibold text-text-dark">Allow Doctor Access</h3>
                    <p className="text-sm text-text-light">
                      Doctors can view your health data
                    </p>
                  </div>
                  <button
                    onClick={() => handlePrivacyToggle('allowDoctorAccess')}
                    className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors ${
                      privacySettings.allowDoctorAccess ? 'bg-primary-teal' : 'bg-gray-300'
                    }`}
                  >
                    <span
                      className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                        privacySettings.allowDoctorAccess ? 'translate-x-7' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>

                <div className="flex items-center justify-between py-4 border-b border-gray-200">
                  <div>
                    <h3 className="font-semibold text-text-dark">Share Analytics</h3>
                    <p className="text-sm text-text-light">
                      Help improve HealthBook with anonymous data
                    </p>
                  </div>
                  <button
                    onClick={() => handlePrivacyToggle('shareAnalytics')}
                    className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors ${
                      privacySettings.shareAnalytics ? 'bg-primary-teal' : 'bg-gray-300'
                    }`}
                  >
                    <span
                      className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                        privacySettings.shareAnalytics ? 'translate-x-7' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>

                <div className="flex items-center justify-between py-4">
                  <div>
                    <h3 className="font-semibold text-text-dark">Public Profile</h3>
                    <p className="text-sm text-text-light">
                      Make your profile visible to other users
                    </p>
                  </div>
                  <button
                    onClick={() => handlePrivacyToggle('publicProfile')}
                    className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors ${
                      privacySettings.publicProfile ? 'bg-primary-teal' : 'bg-gray-300'
                    }`}
                  >
                    <span
                      className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                        privacySettings.publicProfile ? 'translate-x-7' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Settings;
