# CalendarPost 📅

CalendarPost is a modern social media content calendar dashboard built with React, TypeScript, and TailwindCSS. It allows users to visualize their social media posting schedule, filter posts by platform, and view daily post details.

## ✨ Features

- **Month View Calendar**: Visualize your content schedule with a clear, grid-based calendar view.
- **Platform Filtering**: Toggle visibility for Instagram, LinkedIn, and Facebook posts to focus on specific channels.
- **Daily Details**: Click on any day to see the list of posts scheduled for that date.
- **Simulated Backend**: Includes a simulated data fetching mechanism to demonstrate loading states and asynchronous data handling.
- **Responsive Design**: Fully responsive interface that works on different screen sizes.

## ✅ Assessment Coverage

This implementation satisfies the assessment requirements:

- Month navigation with year rollover
- Accurate calendar date rendering (including leap years)
- Platform-based filtering with loading simulation
- Mock server data scoped by month and filters
- Interactive UI states (hover, selected date)

## 🛠️ Technology Stack

- **[React 19](https://react.dev/)**: The library for web and native user interfaces.
- **[TypeScript](https://www.typescriptlang.org/)**: Strongly typed JavaScript for better developer experience and code safety.
- **[Vite](https://vitejs.dev/)**: Next Generation Frontend Tooling for fast development and building.
- **[Tailwind CSS](https://tailwindcss.com/)**: A utility-first CSS framework for rapid UI development.
- **[Lucide React](https://lucide.dev/)**: Beautiful & consistent icons.

## 🎨 Design Reference

UI and interactions are implemented based on the provided Figma design:  
[Front-End Assessment Figma Link](https://www.figma.com/design/3Xr9VCtO0zvrEOtSPJ5qGX/Front-End-Assessment)

## 🚀 Getting Started

Follow these steps to set up the project locally.

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Clone the repository (or download the source code).
2. Navigate to the project directory:
    ```bash
    cd calendar-post
    ```
3. Install dependencies:
    ```bash
    npm install
    ```

### Running the Application

Start the development server:

```bash
npm run dev
