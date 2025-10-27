import { useState } from 'react';

const ShareRecords = () => {
  const [selectedReports, setSelectedReports] = useState([]);
  const [showSuccess, setShowSuccess] = useState(false);
  const [generatedLink, setGeneratedLink] = useState('');
  const [activeShares, setActiveShares] = useState([
    { id: 1, sharedWith: 'Dr. Sarah Johnson', date: '2025-10-25', reports: 2 },
    { id: 2, sharedWith: 'City Hospital', date: '2025-10-20', reports: 5 },
    { id: 3, sharedWith: 'Dr. Michael Chen', date: '2025-10-15', reports: 3 },
  ]);

  const reports = [
    { id: 1, name: 'Blood Test Results', type: 'Lab Report' },
    { id: 2, name: 'X-Ray Chest', type: 'Imaging' },
    { id: 3, name: 'Annual Checkup', type: 'General' },
    { id: 4, name: 'MRI Scan', type: 'Imaging' },
    { id: 5, name: 'Prescription', type: 'Prescription' },
  ];

  const toggleReport = (id) => {
    setSelectedReports(prev =>
      prev.includes(id) ? prev.filter(r => r !== id) : [...prev, id]
    );
  };

  const generateShare = () => {
    const link = `https://healthbook.app/share/${Math.random().toString(36).substr(2, 9)}`;
    setGeneratedLink(link);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const revokeShare = (id) => {
    setActiveShares(activeShares.filter(share => share.id !== id));
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-text-dark mb-2">Share Records</h1>
        <p className="text-text-light">Securely share your medical records with healthcare providers</p>
      </div>

      {/* Success Alert */}
      {showSuccess && (
        <div className="mb-6 p-4 bg-success-green text-white rounded-lg shadow-lg animate-pulse">
          <div className="flex items-center gap-3">
            <span className="text-2xl">✓</span>
            <div>
              <p className="font-semibold">Your record was shared securely!</p>
              <p className="text-sm opacity-90">The recipient can now access the selected reports.</p>
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Select Reports */}
        <div className="card">
          <h2 className="text-xl font-bold text-text-dark mb-4">Select Reports to Share</h2>
          <div className="space-y-3 mb-6">
            {reports.map((report) => (
              <label
                key={report.id}
                className={`flex items-center gap-4 p-4 rounded-lg border-2 cursor-pointer transition-all ${
                  selectedReports.includes(report.id)
                    ? 'border-primary-teal bg-soft-mint'
                    : 'border-gray-200 hover:border-primary-teal'
                }`}
              >
                <input
                  type="checkbox"
                  checked={selectedReports.includes(report.id)}
                  onChange={() => toggleReport(report.id)}
                  className="w-5 h-5 text-primary-teal"
                />
                <div className="flex-1">
                  <p className="font-semibold text-text-dark">{report.name}</p>
                  <p className="text-sm text-text-light">{report.type}</p>
                </div>
              </label>
            ))}
          </div>

          <button
            onClick={generateShare}
            disabled={selectedReports.length === 0}
            className={`btn-primary w-full ${
              selectedReports.length === 0 ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            Generate Secure Link
          </button>
        </div>

        {/* QR Code & Link */}
        <div className="space-y-6">
          <div className="card">
            <h2 className="text-xl font-bold text-text-dark mb-4">Share Options</h2>
            
            {/* QR Code */}
            <div className="bg-white border-2 border-primary-teal rounded-lg p-8 mb-4">
              <div className="w-48 h-48 mx-auto bg-white border-4 border-primary-teal rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-2">📱</div>
                  <p className="text-sm text-text-light">QR Code</p>
                  <p className="text-xs text-text-light mt-1">
                    {selectedReports.length > 0 ? 'Ready to scan' : 'Select reports first'}
                  </p>
                </div>
              </div>
            </div>

            {/* Secure Link */}
            {generatedLink && (
              <div className="bg-soft-mint p-4 rounded-lg">
                <p className="text-sm font-semibold text-text-dark mb-2">Secure Link:</p>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={generatedLink}
                    readOnly
                    className="flex-1 px-3 py-2 bg-white border border-gray-300 rounded-lg text-sm"
                  />
                  <button
                    onClick={() => navigator.clipboard.writeText(generatedLink)}
                    className="px-4 py-2 bg-primary-teal text-white rounded-lg hover:bg-opacity-90 transition-all"
                  >
                    📋
                  </button>
                </div>
                <p className="text-xs text-text-light mt-2">
                  This link expires in 24 hours
                </p>
              </div>
            )}
          </div>

          <div className="card">
            <h2 className="text-xl font-bold text-text-dark mb-4">Share via Email</h2>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Recipient's email"
                className="input-field"
              />
              <textarea
                placeholder="Add a message (optional)"
                rows="3"
                className="input-field resize-none"
              ></textarea>
              <button className="btn-secondary w-full">
                Send via Email
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Active Shares */}
      <div className="card mt-6">
        <h2 className="text-xl font-bold text-text-dark mb-4">Active Shares</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 text-text-dark font-semibold">Shared With</th>
                <th className="text-left py-3 px-4 text-text-dark font-semibold">Date</th>
                <th className="text-left py-3 px-4 text-text-dark font-semibold">Reports</th>
                <th className="text-left py-3 px-4 text-text-dark font-semibold">Action</th>
              </tr>
            </thead>
            <tbody>
              {activeShares.map((share) => (
                <tr key={share.id} className="border-b border-gray-100 hover:bg-soft-mint transition-all">
                  <td className="py-3 px-4 text-text-dark font-medium">{share.sharedWith}</td>
                  <td className="py-3 px-4 text-text-light">{share.date}</td>
                  <td className="py-3 px-4 text-text-light">{share.reports} reports</td>
                  <td className="py-3 px-4">
                    <button
                      onClick={() => revokeShare(share.id)}
                      className="px-4 py-2 bg-accent-blue text-white rounded-lg hover:bg-opacity-90 transition-all text-sm font-semibold"
                    >
                      Revoke
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ShareRecords;
