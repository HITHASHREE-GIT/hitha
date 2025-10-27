import { Link } from 'react-router-dom';

const Dashboard = () => {
  const stats = [
    { label: 'Total Reports', value: '24', icon: '📄', color: 'bg-soft-mint' },
    { label: 'Upcoming Reminders', value: '5', icon: '⏰', color: 'bg-soft-mint' },
    { label: 'Appointments', value: '3', icon: '📅', color: 'bg-soft-mint' },
    { label: 'Shared Records', value: '8', icon: '🔗', color: 'bg-soft-mint' },
  ];

  const recentReports = [
    { name: 'Blood Test Results', date: '2025-10-25', type: 'Lab Report' },
    { name: 'X-Ray Chest', date: '2025-10-20', type: 'Imaging' },
    { name: 'Annual Checkup', date: '2025-10-15', type: 'General' },
  ];

  const upcomingReminders = [
    { medicine: 'Aspirin', time: '09:00 AM', dosage: '100mg' },
    { medicine: 'Vitamin D', time: '02:00 PM', dosage: '1000 IU' },
    { medicine: 'Blood Pressure Check', time: '06:00 PM', dosage: '-' },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-text-dark mb-2">Dashboard</h1>
        <p className="text-text-light">Welcome back! Here's your health overview</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-text-light text-sm mb-1">{stat.label}</p>
                <p className="text-3xl font-bold text-text-dark">{stat.value}</p>
              </div>
              <div className={`${stat.color} w-16 h-16 rounded-full flex items-center justify-center text-3xl`}>
                {stat.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="card mb-8">
        <h2 className="text-xl font-bold text-text-dark mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link to="/app/reports" className="btn-primary text-center">
            📤 Upload Report
          </Link>
          <Link to="/app/reminders" className="btn-primary text-center">
            ➕ Add Reminder
          </Link>
          <Link to="/app/share" className="btn-primary text-center">
            🔗 Share Records
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Reports */}
        <div className="card">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-text-dark">Recent Reports</h2>
            <Link to="/app/reports" className="text-primary-teal text-sm font-semibold hover:underline">
              View All →
            </Link>
          </div>
          <div className="space-y-3">
            {recentReports.map((report, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-crisp-white rounded-lg hover:bg-soft-mint transition-all">
                <div>
                  <p className="font-semibold text-text-dark">{report.name}</p>
                  <p className="text-sm text-text-light">{report.type}</p>
                </div>
                <p className="text-sm text-text-light">{report.date}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Reminders */}
        <div className="card">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-text-dark">Upcoming Reminders</h2>
            <Link to="/app/reminders" className="text-primary-teal text-sm font-semibold hover:underline">
              View All →
            </Link>
          </div>
          <div className="space-y-3">
            {upcomingReminders.map((reminder, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-crisp-white rounded-lg">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">💊</span>
                  <div>
                    <p className="font-semibold text-text-dark">{reminder.medicine}</p>
                    <p className="text-sm text-text-light">{reminder.dosage}</p>
                  </div>
                </div>
                <p className="text-sm font-semibold text-primary-teal">{reminder.time}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
