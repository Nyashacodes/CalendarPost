# CalendarPost 📅

CalendarPost is a modern social media content calendar dashboard built with React, TypeScript, and TailwindCSS. It allows users to visualize their social media posting schedule, filter posts by platform, and view daily post details.

## ✨ Features

- **Month View Calendar**: Visualize your content schedule with a clear, grid-based calendar view.
- **Platform Filtering**: Toggle visibility for Instagram, LinkedIn, and Facebook posts to focus on specific channels.
- **Daily Details**: Click on any day to see the list of posts scheduled for that date.
- **Simulated Backend**: Includes a simulated data fetching mechanism to demonstrate loading states and asynchronous data handling.
- **Responsive Design**: Fully responsive interface that works on different screen sizes.

## 🛠️ Technology Stack

- **[React 19](https://react.dev/)**: The library for web and native user interfaces.
- **[TypeScript](https://www.typescriptlang.org/)**: Strongly typed JavaScript for better developer experience and code safety.
- **[Vite](https://vitejs.dev/)**: Next Generation Frontend Tooling for fast development and building.
- **[Tailwind CSS](https://tailwindcss.com/)**: A utility-first CSS framework for rapid UI development.
- **[Lucide React](https://lucide.dev/)**: Beautiful & consistent icons.

## 🚀 Getting Started

Follow these steps to set up the project locally.

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1.  Clone the repository (or download the source code).
2.  Navigate to the project directory:
    ```bash
    cd calendar-post
    ```
3.  Install dependencies:
    ```bash
    npm install
    ```

### Running the Application

Start the development server:

```bash
npm run dev
```

Open your browser and visit `http://localhost:5173` (or the URL shown in the terminal) to view the app.

## 📂 Project Structure

- **`src/components`**: Reusable UI components.
    - **`Calendar`**: Contains the main calendar logic and sub-components (`CalendarGrid`, `CalendarHeader`, etc.).
    - **`UI`**: Generic UI elements like `Loader`.
- **`src/data`**: detailed mock data for calendar posts.
- **`src/utils`**: Utility functions, including date helper functions.

## 📜 Scripts

- **`npm run dev`**: Starts the development server.
- **`npm run build`**: Compiles TypeScript and builds the app for production.
- **`npm run lint`**: Runs ESLint to check for code quality issues.
- **`npm run preview`**: Preview the production build locally.

---

### 📝 Notes

This project uses a mock data source (`src/data/calendarPosts.ts`) to simulate a backend response. Real-world implementation would replace this with actual API calls.
