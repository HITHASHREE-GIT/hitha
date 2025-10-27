import { useState } from 'react';

const MyReports = () => {
  const [reports, setReports] = useState([
    { id: 1, name: 'Blood Test Results.pdf', date: '2025-10-25', type: 'Lab Report' },
    { id: 2, name: 'X-Ray Chest.jpg', date: '2025-10-20', type: 'Imaging' },
    { id: 3, name: 'Annual Checkup.pdf', date: '2025-10-15', type: 'General' },
    { id: 4, name: 'MRI Scan.pdf', date: '2025-10-10', type: 'Imaging' },
    { id: 5, name: 'Prescription.pdf', date: '2025-10-05', type: 'Prescription' },
  ]);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFiles(e.dataTransfer.files);
    }
  };

  const handleFileInput = (e) => {
    if (e.target.files && e.target.files[0]) {
      handleFiles(e.target.files);
    }
  };

  const handleFiles = (files) => {
    const newReport = {
      id: reports.length + 1,
      name: files[0].name,
      date: new Date().toISOString().split('T')[0],
      type: 'Uploaded',
    };
    setReports([newReport, ...reports]);
  };

  const handleDelete = (id) => {
    setDeleteId(id);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    setReports(reports.filter(report => report.id !== deleteId));
    setShowDeleteModal(false);
    setDeleteId(null);
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-text-dark mb-2">My Reports</h1>
        <p className="text-text-light">Upload and manage your medical reports</p>
      </div>

      {/* Upload Area */}
      <div className="card mb-8">
        <div
          className={`border-4 border-dashed rounded-lg p-12 text-center transition-all ${
            dragActive
              ? 'border-primary-teal bg-soft-mint'
              : 'border-gray-300 bg-gray-50'
          }`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <div className="text-6xl mb-4">📤</div>
          <h3 className="text-xl font-semibold text-text-dark mb-2">
            Drop files here or click to browse
          </h3>
          <p className="text-text-light mb-4">
            Supported formats: PDF, JPG, PNG (Max 10MB)
          </p>
          <input
            type="file"
            id="fileInput"
            className="hidden"
            onChange={handleFileInput}
            accept=".pdf,.jpg,.jpeg,.png"
          />
          <label htmlFor="fileInput" className="btn-primary cursor-pointer inline-block">
            Choose File
          </label>
        </div>
      </div>

      {/* Reports Table */}
      <div className="card">
        <h2 className="text-xl font-bold text-text-dark mb-4">Your Reports</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 text-text-dark font-semibold">Report Name</th>
                <th className="text-left py-3 px-4 text-text-dark font-semibold">Date</th>
                <th className="text-left py-3 px-4 text-text-dark font-semibold">Type</th>
                <th className="text-left py-3 px-4 text-text-dark font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {reports.map((report) => (
                <tr key={report.id} className="border-b border-gray-100 hover:bg-soft-mint transition-all">
                  <td className="py-3 px-4 text-text-dark">{report.name}</td>
                  <td className="py-3 px-4 text-text-light">{report.date}</td>
                  <td className="py-3 px-4">
                    <span className="bg-primary-teal text-white px-3 py-1 rounded-full text-sm">
                      {report.type}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex gap-2">
                      <button className="text-2xl hover:scale-110 transition-transform" title="Preview">
                        👁️
                      </button>
                      <button
                        onClick={() => handleDelete(report.id)}
                        className="text-2xl hover:scale-110 transition-transform"
                        title="Delete"
                      >
                        🗑️
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-card p-8 max-w-md w-full mx-4">
            <h3 className="text-2xl font-bold text-text-dark mb-4">Confirm Delete</h3>
            <p className="text-text-light mb-6">
              Are you sure you want to delete this report? This action cannot be undone.
            </p>
            <div className="flex gap-4">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="flex-1 px-6 py-3 border border-gray-300 rounded-button font-semibold hover:bg-gray-50 transition-all"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                className="flex-1 px-6 py-3 bg-error-red text-white rounded-button font-semibold hover:bg-opacity-90 transition-all"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyReports;
