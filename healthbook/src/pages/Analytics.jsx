const Analytics = () => {
  const healthMetrics = [
    { label: 'Blood Pressure', current: '120/80', target: '120/80', progress: 100, unit: 'mmHg' },
    { label: 'Blood Sugar', current: '95', target: '100', progress: 95, unit: 'mg/dL' },
    { label: 'Weight', current: '72', target: '70', progress: 85, unit: 'kg' },
    { label: 'Heart Rate', current: '72', target: '70', progress: 90, unit: 'bpm' },
  ];

  const monthlyData = [
    { month: 'Jan', bp: 125, sugar: 100, weight: 75 },
    { month: 'Feb', bp: 123, sugar: 98, weight: 74 },
    { month: 'Mar', bp: 122, sugar: 96, weight: 73 },
    { month: 'Apr', bp: 121, sugar: 95, weight: 72 },
    { month: 'May', bp: 120, sugar: 95, weight: 72 },
  ];

  const recentTests = [
    { name: 'Complete Blood Count', date: '2025-10-25', status: 'Normal' },
    { name: 'Lipid Profile', date: '2025-10-20', status: 'Normal' },
    { name: 'Thyroid Function', date: '2025-10-15', status: 'Attention' },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-text-dark mb-2">Health Analytics</h1>
        <p className="text-text-light">Track your health metrics and progress over time</p>
      </div>

      {/* Headline Metric */}
      <div className="card mb-8 bg-gradient-to-r from-primary-teal to-accent-blue text-white">
        <div className="text-center py-8">
          <h2 className="text-5xl font-bold mb-2">92%</h2>
          <p className="text-xl opacity-90">Your Health Score</p>
          <p className="text-sm opacity-75 mt-2">Based on your recent health metrics and activities</p>
        </div>
      </div>

      {/* Health Metrics Progress */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {healthMetrics.map((metric, index) => (
          <div key={index} className="card">
            <h3 className="font-semibold text-text-dark mb-2">{metric.label}</h3>
            <div className="flex items-baseline gap-2 mb-3">
              <span className="text-3xl font-bold text-primary-teal">{metric.current}</span>
              <span className="text-sm text-text-light">{metric.unit}</span>
            </div>
            <div className="mb-2">
              <div className="flex justify-between text-xs text-text-light mb-1">
                <span>Progress</span>
                <span>{metric.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                <div
                  className="bg-primary-teal h-full rounded-full transition-all duration-500"
                  style={{ width: `${metric.progress}%` }}
                ></div>
              </div>
            </div>
            <p className="text-xs text-text-light">Target: {metric.target} {metric.unit}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Charts */}
        <div className="lg:col-span-2 space-y-6">
          {/* Blood Pressure Trend */}
          <div className="card">
            <h2 className="text-xl font-bold text-text-dark mb-4">Blood Pressure Trend</h2>
            <div className="h-64 flex items-end justify-between gap-2">
              {monthlyData.map((data, index) => (
                <div key={index} className="flex-1 flex flex-col items-center">
                  <div className="w-full bg-soft-mint rounded-t-lg relative" style={{ height: `${(data.bp / 130) * 100}%` }}>
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs font-semibold text-text-dark">
                      {data.bp}
                    </div>
                  </div>
                  <p className="text-xs text-text-light mt-2">{data.month}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 flex items-center justify-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-soft-mint rounded"></div>
                <span className="text-text-light">Systolic</span>
              </div>
            </div>
          </div>

          {/* Blood Sugar Trend */}
          <div className="card">
            <h2 className="text-xl font-bold text-text-dark mb-4">Blood Sugar Levels</h2>
            <div className="h-64 flex items-end justify-between gap-2">
              {monthlyData.map((data, index) => (
                <div key={index} className="flex-1 flex flex-col items-center">
                  <div className="w-full bg-accent-blue rounded-t-lg relative" style={{ height: `${(data.sugar / 120) * 100}%` }}>
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs font-semibold text-text-dark">
                      {data.sugar}
                    </div>
                  </div>
                  <p className="text-xs text-text-light mt-2">{data.month}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 flex items-center justify-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-accent-blue rounded"></div>
                <span className="text-text-light">mg/dL</span>
              </div>
            </div>
          </div>

          {/* Weight Progress */}
          <div className="card">
            <h2 className="text-xl font-bold text-text-dark mb-4">Weight Progress</h2>
            <div className="relative h-64">
              <svg className="w-full h-full" viewBox="0 0 500 200">
                <polyline
                  points={monthlyData.map((data, i) => `${i * 125 + 50},${200 - (data.weight - 65) * 10}`).join(' ')}
                  fill="none"
                  stroke="#00BFA6"
                  strokeWidth="3"
                />
                {monthlyData.map((data, i) => (
                  <circle
                    key={i}
                    cx={i * 125 + 50}
                    cy={200 - (data.weight - 65) * 10}
                    r="5"
                    fill="#00BFA6"
                  />
                ))}
              </svg>
              <div className="flex justify-between mt-2">
                {monthlyData.map((data, i) => (
                  <span key={i} className="text-xs text-text-light">{data.month}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Recent Tests */}
          <div className="card">
            <h2 className="text-xl font-bold text-text-dark mb-4">Recent Tests</h2>
            <div className="space-y-3">
              {recentTests.map((test, index) => (
                <div key={index} className="p-3 bg-crisp-white rounded-lg">
                  <p className="font-semibold text-text-dark text-sm">{test.name}</p>
                  <div className="flex items-center justify-between mt-1">
                    <p className="text-xs text-text-light">{test.date}</p>
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${
                        test.status === 'Normal'
                          ? 'bg-success-green text-white'
                          : 'bg-error-red text-white'
                      }`}
                    >
                      {test.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Health Goals */}
          <div className="card">
            <h2 className="text-xl font-bold text-text-dark mb-4">Health Goals</h2>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-text-dark">Daily Steps</span>
                  <span className="text-text-light">7,500 / 10,000</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-primary-teal h-full rounded-full" style={{ width: '75%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-text-dark">Water Intake</span>
                  <span className="text-text-light">6 / 8 glasses</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-accent-blue h-full rounded-full" style={{ width: '75%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-text-dark">Sleep Hours</span>
                  <span className="text-text-light">7 / 8 hours</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-success-green h-full rounded-full" style={{ width: '87.5%' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Insights */}
          <div className="card bg-soft-mint">
            <h2 className="text-xl font-bold text-text-dark mb-3">💡 Insights</h2>
            <p className="text-sm text-text-dark">
              Your blood pressure has improved by 4% this month. Keep maintaining your current lifestyle!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
