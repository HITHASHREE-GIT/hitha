import { useState } from 'react';

const Reminders = () => {
  const [reminders, setReminders] = useState([
    { id: 1, medicine: 'Aspirin', time: '09:00', dosage: '100mg', frequency: 'Daily', active: true },
    { id: 2, medicine: 'Vitamin D', time: '14:00', dosage: '1000 IU', frequency: 'Daily', active: true },
    { id: 3, medicine: 'Blood Pressure Check', time: '18:00', dosage: '-', frequency: 'Daily', active: false },
  ]);

  const [formData, setFormData] = useState({
    medicine: '',
    time: '',
    dosage: '',
    frequency: 'Daily',
  });

  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleSubmit = (e) => {
    e.preventDefault();
    const newReminder = {
      id: reminders.length + 1,
      ...formData,
      active: true,
    };
    setReminders([...reminders, newReminder]);
    setFormData({ medicine: '', time: '', dosage: '', frequency: 'Daily' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const toggleReminder = (id) => {
    setReminders(reminders.map(reminder =>
      reminder.id === id ? { ...reminder, active: !reminder.active } : reminder
    ));
  };

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    return { firstDay, daysInMonth };
  };

  const { firstDay, daysInMonth } = getDaysInMonth(selectedDate);
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-text-dark mb-2">Reminders</h1>
        <p className="text-text-light">Set up medication and health check reminders</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Add Reminder Form */}
        <div className="lg:col-span-2">
          <div className="card mb-6">
            <h2 className="text-xl font-bold text-text-dark mb-4">Add New Reminder</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-text-dark mb-2">
                    Medicine/Activity Name
                  </label>
                  <input
                    type="text"
                    name="medicine"
                    value={formData.medicine}
                    onChange={handleChange}
                    className="input-field"
                    placeholder="e.g., Aspirin"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-dark mb-2">
                    Time
                  </label>
                  <input
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="input-field"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-dark mb-2">
                    Dosage
                  </label>
                  <input
                    type="text"
                    name="dosage"
                    value={formData.dosage}
                    onChange={handleChange}
                    className="input-field"
                    placeholder="e.g., 100mg"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-dark mb-2">
                    Frequency
                  </label>
                  <select
                    name="frequency"
                    value={formData.frequency}
                    onChange={handleChange}
                    className="input-field"
                  >
                    <option value="Daily">Daily</option>
                    <option value="Weekly">Weekly</option>
                    <option value="Monthly">Monthly</option>
                  </select>
                </div>
              </div>

              <button type="submit" className="btn-primary w-full">
                Add Reminder
              </button>
            </form>
          </div>

          {/* Active Reminders */}
          <div className="card">
            <h2 className="text-xl font-bold text-text-dark mb-4">Your Reminders</h2>
            <div className="space-y-3">
              {reminders.map((reminder) => (
                <div
                  key={reminder.id}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    reminder.active
                      ? 'border-primary-teal bg-soft-mint'
                      : 'border-gray-200 bg-gray-50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <span className="text-3xl">
                        {reminder.medicine.toLowerCase().includes('check') ? '🩺' : '💊'}
                      </span>
                      <div>
                        <p className="font-bold text-text-dark text-lg">{reminder.medicine}</p>
                        <p className="text-text-light text-sm">
                          {reminder.dosage} • {reminder.time} • {reminder.frequency}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => toggleReminder(reminder.id)}
                      className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors ${
                        reminder.active ? 'bg-primary-teal' : 'bg-gray-300'
                      }`}
                    >
                      <span
                        className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                          reminder.active ? 'translate-x-7' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Calendar */}
        <div className="card h-fit">
          <h2 className="text-xl font-bold text-text-dark mb-4">Calendar</h2>
          <div className="mb-4">
            <div className="flex items-center justify-between mb-4">
              <button
                onClick={() => setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() - 1))}
                className="text-primary-teal font-bold text-xl"
              >
                ←
              </button>
              <h3 className="font-semibold text-text-dark">
                {monthNames[selectedDate.getMonth()]} {selectedDate.getFullYear()}
              </h3>
              <button
                onClick={() => setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1))}
                className="text-primary-teal font-bold text-xl"
              >
                →
              </button>
            </div>
            <div className="grid grid-cols-7 gap-1 text-center">
              {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
                <div key={i} className="text-xs font-semibold text-text-light py-2">
                  {day}
                </div>
              ))}
              {Array.from({ length: firstDay }).map((_, i) => (
                <div key={`empty-${i}`} className="py-2"></div>
              ))}
              {Array.from({ length: daysInMonth }).map((_, i) => {
                const day = i + 1;
                const hasReminder = reminders.some(r => r.active);
                const isToday = day === new Date().getDate() && 
                               selectedDate.getMonth() === new Date().getMonth() &&
                               selectedDate.getFullYear() === new Date().getFullYear();
                return (
                  <div
                    key={day}
                    className={`py-2 text-sm rounded-lg ${
                      isToday
                        ? 'bg-primary-teal text-white font-bold'
                        : hasReminder && day % 3 === 0
                        ? 'bg-soft-mint text-text-dark'
                        : 'text-text-dark'
                    }`}
                  >
                    {day}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="mt-4 p-3 bg-soft-mint rounded-lg">
            <p className="text-sm text-text-dark">
              <span className="font-semibold">{reminders.filter(r => r.active).length}</span> active reminders
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reminders;
