import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Registration = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('patient');
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    specialization: '',
    licenseNumber: '',
    agreeToTerms: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccess(true);
    setTimeout(() => {
      navigate('/app/dashboard');
    }, 2000);
  };

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };

  if (showSuccess) {
    return (
      <div className="min-h-screen bg-success-green flex items-center justify-center">
        <div className="text-center text-white">
          <div className="text-8xl mb-6 animate-bounce">✓</div>
          <h2 className="text-4xl font-bold mb-4">Registration Successful!</h2>
          <p className="text-xl">Redirecting to your dashboard...</p>
          <div className="mt-8 w-64 h-2 bg-white bg-opacity-30 rounded-full mx-auto overflow-hidden">
            <div className="h-full bg-white rounded-full animate-pulse" style={{ width: '100%' }}></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-crisp-white py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-primary-teal mb-2">Complete Registration</h1>
          <p className="text-text-light">Join HealthBook and manage your health records</p>
        </div>

        {/* Tabs */}
        <div className="flex bg-white rounded-card shadow-md mb-8 overflow-hidden">
          <button
            onClick={() => setActiveTab('patient')}
            className={`flex-1 py-4 font-semibold transition-all ${
              activeTab === 'patient'
                ? 'bg-primary-teal text-white'
                : 'bg-white text-text-dark hover:bg-gray-50'
            }`}
          >
            👤 Patient Registration
          </button>
          <button
            onClick={() => setActiveTab('doctor')}
            className={`flex-1 py-4 font-semibold transition-all ${
              activeTab === 'doctor'
                ? 'bg-primary-teal text-white'
                : 'bg-white text-text-dark hover:bg-gray-50'
            }`}
          >
            👨‍⚕️ Doctor Registration
          </button>
        </div>

        {/* Form */}
        <div className="bg-white rounded-card shadow-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-text-dark mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="input-field"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-text-dark mb-2">
                  Age *
                </label>
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  className="input-field"
                  placeholder="25"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-text-dark mb-2">
                  Gender *
                </label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="input-field"
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-text-dark mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="input-field"
                  placeholder="+1 (555) 123-4567"
                  required
                />
              </div>
            </div>

            {activeTab === 'doctor' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-text-dark mb-2">
                    Specialization *
                  </label>
                  <input
                    type="text"
                    name="specialization"
                    value={formData.specialization}
                    onChange={handleChange}
                    className="input-field"
                    placeholder="Cardiology"
                    required={activeTab === 'doctor'}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-dark mb-2">
                    License Number *
                  </label>
                  <input
                    type="text"
                    name="licenseNumber"
                    value={formData.licenseNumber}
                    onChange={handleChange}
                    className="input-field"
                    placeholder="MD123456"
                    required={activeTab === 'doctor'}
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-text-dark mb-2">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="input-field"
                placeholder="you@example.com"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-text-dark mb-2">
                  Password *
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="input-field"
                  placeholder="••••••••"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-text-dark mb-2">
                  Confirm Password *
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="input-field"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            <div className="flex items-start">
              <input
                type="checkbox"
                name="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleChange}
                className="mt-1 mr-3"
                required
              />
              <label className="text-sm text-text-light">
                I agree to the{' '}
                <a href="#" className="text-primary-teal hover:underline">
                  Terms and Conditions
                </a>{' '}
                and{' '}
                <a href="#" className="text-primary-teal hover:underline">
                  Privacy Policy
                </a>
              </label>
            </div>

            <button type="submit" className="btn-primary w-full">
              Complete Registration
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-text-light">
              Already have an account?{' '}
              <a href="/" className="text-primary-teal font-semibold hover:underline">
                Sign In
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
