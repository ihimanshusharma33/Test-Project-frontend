# React Authentication App

## Overview
This is a React-based authentication system that includes login, registration, password reset, and update password functionality. The project is structured using React Router for navigation and Tailwind CSS for styling.

## Project Structure
```
src/
├─ App.css
├─ App.jsx
├─ assets/
│  └─ react.svg
├─ components/
│  └─ AuthLayout.jsx
├─ index.css
├─ main.jsx
└─ pages/
   ├─ Home.jsx
   ├─ Login.jsx
   ├─ Register.jsx
   ├─ ResetPassword.jsx
   └─ UpdatePassword.jsx
```

## Features
- User authentication with login and registration.
- Password reset and update functionality.
- Form validation for email and password.
- Error handling and success messages using SweetAlert2.
- Navigation using React Router.
- API calls to a backend authentication system.

## Installation
1. Clone the repository:
   ```sh
   git clone <repository_url>
   cd <project_directory>
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file in the root directory and set the API base URL:
   ```sh
   VITE_BASE_URL=http://your-backend-api-url
   ```
4. Start the development server:
   ```sh
   npm run dev
   ```

## Usage
- Visit `/login` to log in.
- Visit `/register` to create a new account.
- Visit `/reset-password` to request a password reset.
- Visit `/update-password/:token` to update the password using a reset token.
- After successful login, the user is redirected to the home page (`/`).

## Technologies Used
- React.js
- React Router
- Tailwind CSS
- SweetAlert2
- Fetch API
