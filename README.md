
# TaskFlow - Prioritized To-Do List Application

![TaskFlow Banner](https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=400&q=80)

A modern, prioritized to-do list application built with React, TypeScript, and Tailwind CSS. TaskFlow helps you organize tasks by priority, estimate time, and stay productive with an intuitive interface.

## ✨ Features

### 🎯 Priority-Based Task Management
- **Urgent**: Tasks that must be completed today
- **Important**: Tasks for the next 2-3 days  
- **Long-term**: Upcoming deadlines and future tasks
- ![image](https://github.com/user-attachments/assets/ba749927-9238-40d3-a575-422be3046e28)


### ⏰ Time Management
- Time estimates for each task (in minutes)
- Visual time summaries for each priority category
- Smart filtering by today, this week, or this month

### 🎨 Modern Interface
- Beautiful mountain landscape background
  ![image](https://github.com/user-attachments/assets/4af2f9cf-7255-4fe7-acb4-23d3be4cf903)

- Glass-morphism design elements
- Responsive layout for all devices
- Smooth animations and transitions

### 📱 Multi-Page Application
- **Tasks**: Main task management interface
- **About**: Learn about TaskFlow features
- **Settings**: Customize your experience

## 🚀 Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/kidulajumba254/tempo-time-tracker-today.git
   cd tempo-time-tracker-today
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to see the application.

## 🛠️ Technology Stack

- **Frontend Framework**: React 18
- **Type Safety**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Routing**: React Router DOM
- **State Management**: React Hooks

## 📖 Usage Guide

### Adding Tasks
1. Click on the "Add New Task" form on the left side
2. Fill in the task title (required)
3. Add an optional description
4. Select priority level:
   - 🔴 **Urgent**: Must complete today
   - 🟡 **Important**: Next 2-3 days
   - 🟢 **Long-term**: Future deadlines
5. Set time estimate and due date
6. Click "Add Task"

### Managing Tasks
- **Complete**: Click the circle icon to mark as done
- **Delete**: Click the trash icon to remove
- **Filter**: Use time filters (Today/Week/Month) at the top

### Navigation
- **Tasks**: Main task management page
- **About**: Learn about features and mission
- **Settings**: Customize notifications, appearance, and defaults

## 🎨 Design Philosophy

TaskFlow follows a clean, modern design approach with:
- **Glass-morphism**: Translucent elements with backdrop blur
- **Natural Imagery**: Mountain landscape for calm focus
- **Color Psychology**: Red for urgent, yellow for important, green for long-term
- **Accessibility**: High contrast text and intuitive icons

## 🔧 Configuration

### Environment Setup
No environment variables required for basic functionality.

### Customization
Visit the Settings page to customize:
- Notification preferences
- Theme selection
- Default time estimates
- Data export/import

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── ui/              # shadcn/ui components
│   ├── AddTaskForm.tsx  # Task creation form
│   ├── Navigation.tsx   # App navigation
│   ├── TaskBoard.tsx    # Task display board
│   ├── TaskCard.tsx     # Individual task component
│   └── TimeFilter.tsx   # Time filtering controls
├── pages/               # Page components
│   ├── Index.tsx        # Main tasks page
│   ├── About.tsx        # About page
│   ├── Settings.tsx     # Settings page
│   └── NotFound.tsx     # 404 error page
├── types/               # TypeScript type definitions
│   └── task.ts          # Task-related types
└── App.tsx              # Main app component
```


### Manual Deployment
1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy the `dist` folder** to your preferred hosting platform:
   - Vercel
   - Netlify
   - AWS S3
   - GitHub Pages

## 📝 License

This project is open source and available under the [MIT License](LICENSE).



## 📧 Support

For support, questions, or feedback:
Email me: kidulajesse@gmail.com


---

**Made with ❤️ using Lovable - The AI-powered web development platform**
