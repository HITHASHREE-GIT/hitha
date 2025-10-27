import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SignIn from './pages/SignIn';
import Registration from './pages/Registration';
import Dashboard from './pages/Dashboard';
import MyReports from './pages/MyReports';
import Reminders from './pages/Reminders';
import ShareRecords from './pages/ShareRecords';
import HealthBot from './pages/HealthBot';
import Analytics from './pages/Analytics';
import Settings from './pages/Settings';
import HelpSupport from './pages/HelpSupport';
import Layout from './components/Layout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/app" element={<Layout />}>
          <Route index element={<Navigate to="/app/dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="reports" element={<MyReports />} />
          <Route path="reminders" element={<Reminders />} />
          <Route path="share" element={<ShareRecords />} />
          <Route path="healthbot" element={<HealthBot />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="settings" element={<Settings />} />
          <Route path="help" element={<HelpSupport />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
