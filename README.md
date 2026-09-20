# Dev Insights - Mini Blog

## Overview

Dev Insights is a small internal Mini Blog platform created for employees to share quick tips, insights, and updates related to web development.

This project was developed using React, TypeScript, and Vite. It demonstrates the React concepts covered during the first three weeks of the course, including TypeScript types, reusable components, CSS styling, conditional styling, component optimization, and Higher-Order Components (HOCs).

The application currently displays three sample blog posts with information about the post title, author, content, and date posted.

---

## Project Objectives

The main objectives of this project are to demonstrate:

- React component development
- TypeScript type safety
- Vite project setup
- Reusable React components
- Component-based CSS styling
- Inline styling
- Conditional styling
- Rendering lists with unique keys
- React component optimization using `React.memo`
- Higher-Order Components
- Git and GitHub version control
- Incremental development and meaningful commits

---

## Technologies Used

The project uses the following technologies:

- **React** - Used to build the user interface and reusable components.
- **TypeScript** - Used to provide type safety and define the structure of blog post data.
- **Vite** - Used as the development server and build tool.
- **CSS** - Used to style the application and individual components.
- **ESLint** - Used for code quality and identifying potential problems.

---

## Features

The current Mini Blog includes the following features:

- Dev Insights header and logo
- New Post navigation link
- Welcome section
- List of three sample blog posts
- Reusable Post component
- TypeScript interface for blog post data
- External CSS styling
- Inline CSS styling
- Conditional styling
- Unique keys for posts rendered in a list
- React.memo component optimization
- Custom `withLogger` Higher-Order Component
- Console logging when the Header component mounts and unmounts

---

## Project Structure

The project is organized into separate folders for components, types, styles, and Higher-Order Components.

```text
dev-insights-mini-blog/
│
├── public/
│
├── src/
│   ├── assets/
│   │
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Header.css
│   │   ├── Post.tsx
│   │   ├── Post.css
│   │   ├── PostList.tsx
│   │   └── PostList.css
│   │
│   ├── hoc/
│   │   └── withLogger.tsx
│   │
│   ├── types/
│   │   └── Post.ts
│   │
│   ├── App.tsx
│   ├── App.css
│   ├── index.css
│   └── main.tsx
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
└── README.md

## Installation

### Prerequisites

Before installing the project, make sure you have the following installed on your computer:

- [Node.js](https://nodejs.org/)
- npm (included with Node.js)
- Git

### 1. Clone the Repository

Clone the project from GitHub:

```bash
git clone https://github.com/Christia3/dev-insights-mini-blog.git
cd dev-insights-mini-blog
npm install
