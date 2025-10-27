import { useState } from 'react';

const HelpSupport = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const faqs = [
    {
      id: 1,
      question: 'How do I upload my medical reports?',
      answer: 'Navigate to the "My Reports" page from the sidebar. You can either drag and drop files into the upload area or click "Choose File" to browse your device. We support PDF, JPG, and PNG formats up to 10MB.',
    },
    {
      id: 2,
      question: 'How secure is my health data?',
      answer: 'Your health data is encrypted using industry-standard AES-256 encryption. We comply with HIPAA regulations and never share your data without your explicit consent. All data transfers use secure SSL connections.',
    },
    {
      id: 3,
      question: 'Can I share my records with multiple doctors?',
      answer: 'Yes! Go to the "Share Records" page, select the reports you want to share, and generate a secure link or QR code. You can share with as many healthcare providers as needed, and you can revoke access at any time.',
    },
    {
      id: 4,
      question: 'How do medication reminders work?',
      answer: 'Set up reminders in the "Reminders" page by entering the medicine name, dosage, time, and frequency. You\'ll receive notifications at the scheduled times. You can toggle reminders on/off and edit them anytime.',
    },
    {
      id: 5,
      question: 'What is the HealthBot assistant?',
      answer: 'HealthBot is an AI-powered assistant that can help you understand your medical reports, answer health-related questions, and provide general health information. It\'s available 24/7 in the HealthBot page.',
    },
    {
      id: 6,
      question: 'How do I change my password?',
      answer: 'Go to Settings > Security tab. Enter your current password, then your new password twice to confirm. Make sure your password is at least 8 characters long for security.',
    },
    {
      id: 7,
      question: 'Can I export my health data?',
      answer: 'Yes, you can export all your health records and data. Contact our support team, and we\'ll provide you with a complete export of your data in a standard format within 48 hours.',
    },
    {
      id: 8,
      question: 'What should I do if I forget my password?',
      answer: 'Click "Forgot password?" on the sign-in page. Enter your email address, and we\'ll send you a secure link to reset your password. The link expires after 1 hour for security.',
    },
  ];

  const partners = [
    { name: 'City General Hospital', logo: '🏥' },
    { name: 'MediCare Center', logo: '🏥' },
    { name: 'Health Plus Clinic', logo: '🏥' },
    { name: 'St. Mary\'s Hospital', logo: '🏥' },
  ];

  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  const handleContactChange = (e) => {
    setContactForm({ ...contactForm, [e.target.name]: e.target.value });
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setShowSuccess(true);
    setContactForm({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setShowSuccess(false), 5000);
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-text-dark mb-2">Help & Support</h1>
        <p className="text-text-light">Find answers to common questions or contact us</p>
      </div>

      {/* Success Message */}
      {showSuccess && (
        <div className="mb-6 p-4 bg-success-green text-white rounded-lg shadow-lg">
          <div className="flex items-center gap-3">
            <span className="text-2xl">✓</span>
            <div>
              <p className="font-semibold">Message sent successfully!</p>
              <p className="text-sm opacity-90">We'll get back to you within 24 hours.</p>
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* FAQ Section */}
        <div className="lg:col-span-2">
          <div className="card">
            <h2 className="text-2xl font-bold text-text-dark mb-6">Frequently Asked Questions</h2>
            <div className="space-y-3">
              {faqs.map((faq) => (
                <div key={faq.id} className="border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full flex items-center justify-between p-4 text-left hover:bg-soft-mint transition-all"
                  >
                    <span className="font-semibold text-text-dark pr-4">{faq.question}</span>
                    <span className="text-primary-teal text-xl flex-shrink-0">
                      {openFaq === faq.id ? '−' : '+'}
                    </span>
                  </button>
                  {openFaq === faq.id && (
                    <div className="p-4 pt-0 text-text-light bg-crisp-white">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="card mt-6">
            <h2 className="text-2xl font-bold text-text-dark mb-6">Contact Us</h2>
            <form onSubmit={handleContactSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-text-dark mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={contactForm.name}
                    onChange={handleContactChange}
                    className="input-field"
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-dark mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={contactForm.email}
                    onChange={handleContactChange}
                    className="input-field"
                    placeholder="you@example.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-text-dark mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={contactForm.subject}
                  onChange={handleContactChange}
                  className="input-field"
                  placeholder="How can we help?"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-text-dark mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={contactForm.message}
                  onChange={handleContactChange}
                  rows="5"
                  className="input-field resize-none"
                  placeholder="Tell us more about your inquiry..."
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn-primary w-full">
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Contact Information */}
          <div className="card">
            <h2 className="text-xl font-bold text-text-dark mb-4">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-2xl">📧</span>
                <div>
                  <p className="font-semibold text-text-dark">Email</p>
                  <a href="mailto:support@healthbook.com" className="text-primary-teal hover:underline">
                    support@healthbook.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-2xl">📞</span>
                <div>
                  <p className="font-semibold text-text-dark">Phone</p>
                  <a href="tel:+15551234567" className="text-primary-teal hover:underline">
                    +1 (555) 123-4567
                  </a>
                  <p className="text-xs text-text-light">Mon-Fri, 9AM-6PM EST</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-2xl">💬</span>
                <div>
                  <p className="font-semibold text-text-dark">Live Chat</p>
                  <button className="text-primary-teal hover:underline">
                    Start a conversation
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="card">
            <h2 className="text-xl font-bold text-text-dark mb-4">Quick Links</h2>
            <div className="space-y-2">
              <a href="#" className="block text-primary-teal hover:underline">
                📖 User Guide
              </a>
              <a href="#" className="block text-primary-teal hover:underline">
                🔒 Privacy Policy
              </a>
              <a href="#" className="block text-primary-teal hover:underline">
                📜 Terms of Service
              </a>
              <a href="#" className="block text-primary-teal hover:underline">
                🆘 Report a Problem
              </a>
            </div>
          </div>

          {/* Response Time */}
          <div className="card bg-soft-mint">
            <h2 className="text-xl font-bold text-text-dark mb-2">⏱️ Response Time</h2>
            <p className="text-sm text-text-dark">
              We typically respond to inquiries within <span className="font-bold">24 hours</span> during business days.
            </p>
          </div>
        </div>
      </div>

      {/* Partner Hospitals */}
      <div className="card mt-6">
        <h2 className="text-2xl font-bold text-text-dark mb-6 text-center">Our Partner Hospitals</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {partners.map((partner, index) => (
            <div key={index} className="text-center p-4 hover:bg-soft-mint rounded-lg transition-all">
              <div className="text-5xl mb-2">{partner.logo}</div>
              <p className="text-sm font-semibold text-text-dark">{partner.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HelpSupport;
