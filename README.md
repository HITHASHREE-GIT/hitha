# HealthBook - Your Health Records Management System

![HealthBook](https://img.shields.io/badge/HealthBook-v1.0-00BFA6?style=for-the-badge)
![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=for-the-badge&logo=tailwind-css)

**Your Health, Your Records, Always with You**

HealthBook is a comprehensive health records management system that allows patients and doctors to securely store, manage, and share medical records. Built with modern web technologies, it provides an intuitive interface for managing your health data.

## 🌟 Features

### 📱 10 Complete Pages

1. **Sign-In / Sign-Up** - Secure authentication with split-screen design
2. **Registration** - Separate registration flows for Patients and Doctors
3. **Dashboard** - Overview of health metrics, reports, and reminders
4. **My Reports** - Upload, view, and manage medical reports with drag-and-drop
5. **Reminders** - Set medication and health check reminders with calendar view
6. **Share Records** - Generate secure QR codes and links to share records
7. **HealthBot** - AI-powered health assistant for instant answers
8. **Analytics** - Visualize health metrics and track progress over time
9. **Settings** - Manage profile, security, and privacy settings
10. **Help & Support** - FAQ section, contact form, and partner hospitals

### 🎨 Design Features

- **Modern UI/UX** - Clean, rounded cards with soft shadows
- **Custom Color Palette**:
  - Primary Teal: `#00BFA6`
  - Soft Mint: `#A7E5E2`
  - Crisp White: `#F8FEFF`
  - Accent Blue: `#3EB4C1`
  - Success Green: `#4BD37B`
  - Error Red: `#FF6B6B`
- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile
- **Smooth Animations** - Transitions and hover effects throughout
- **Accessibility** - Built with accessibility best practices

## 🚀 Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Deployment**: GitHub Pages

## 📦 Installation

### Prerequisites

- Node.js 16+ and npm

### Setup

1. Clone the repository:
```bash
git clone <your-repo-url>
cd healthbook
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🏗️ Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 📂 Project Structure

```
healthbook/
├── src/
│   ├── components/
│   │   └── Layout.jsx          # Main layout with sidebar
│   ├── pages/
│   │   ├── SignIn.jsx          # Authentication page
│   │   ├── Registration.jsx    # User registration
│   │   ├── Dashboard.jsx       # Main dashboard
│   │   ├── MyReports.jsx       # Reports management
│   │   ├── Reminders.jsx       # Medication reminders
│   │   ├── ShareRecords.jsx    # Share functionality
│   │   ├── HealthBot.jsx       # AI assistant
│   │   ├── Analytics.jsx       # Health analytics
│   │   ├── Settings.jsx        # User settings
│   │   └── HelpSupport.jsx     # Help & support
│   ├── App.jsx                 # Main app component
│   ├── main.jsx                # Entry point
│   └── index.css               # Global styles
├── public/
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

## 🎯 Key Features Explained

### Dashboard
- Quick stats overview (reports, reminders, appointments)
- Recent reports and upcoming reminders
- Quick action buttons for common tasks

### My Reports
- Drag-and-drop file upload
- Sortable reports table
- Preview and delete functionality
- Support for PDF, JPG, PNG formats

### Reminders
- Add medication reminders with dosage and time
- Calendar view showing reminder days
- Toggle reminders on/off
- Daily/Weekly/Monthly frequency options

### Share Records
- Select multiple reports to share
- Generate secure QR codes
- Create temporary shareable links
- Email sharing functionality
- Manage active shares with revoke option

### HealthBot
- Chat interface with AI assistant
- Conversation history
- Quick action buttons
- Real-time typing indicators

### Analytics
- Health score overview
- Progress tracking for key metrics
- Visual charts and graphs
- Recent test results
- Health goals tracking

### Settings
- Profile management
- Password change with validation
- Two-factor authentication setup
- Privacy controls with toggle switches

### Help & Support
- Comprehensive FAQ section
- Contact form
- Support contact information
- Partner hospital showcase

## 🔒 Security Features

- Secure authentication flow
- Password validation
- Privacy settings for data sharing
- Temporary shareable links with expiration
- Two-factor authentication support

## 🎨 Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Primary Teal | `#00BFA6` | Primary actions, active states |
| Soft Mint | `#A7E5E2` | Backgrounds, highlights |
| Crisp White | `#F8FEFF` | Main background |
| Accent Blue | `#3EB4C1` | Secondary actions |
| Text Dark | `#1B2B34` | Primary text |
| Text Light | `#6E8A8F` | Secondary text |
| Success Green | `#4BD37B` | Success messages |
| Error Red | `#FF6B6B` | Error messages, alerts |

## 📱 Responsive Design

HealthBook is fully responsive and works on:
- 📱 Mobile devices (320px+)
- 📱 Tablets (768px+)
- 💻 Desktops (1024px+)
- 🖥️ Large screens (1440px+)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Built with React and Vite
- Styled with Tailwind CSS
- Icons: Emoji (no external dependencies)

## 📞 Support

For support, email support@healthbook.com or visit the Help & Support page in the application.

---

**Made with ❤️ for better health management**
