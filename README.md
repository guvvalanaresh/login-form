# 🚀 Authentication UI System — React + Vite + Tailwind + React Hook Form

## This project is a fully functional Authentication UI System built using:

* React (Vite)

* TailwindCSS

* React Hook Form

* React Router DOM

* Context API

* Reusable UI Components

* Protected Routes

Custom Toast Notifications

This is a frontend-only authentication system, with clean UI and professional folder structure.

# 🌟 Features
## 🔐 Complete Authentication Flow

[^1]: Login

[^2]: Signup

[^3]: Forgot Password

[^4]: OTP Verification

[^5]: Reset Password

[^6]: Dashboard (Protected)

## 🧩 Reusable UI Components

- Input Component (with password toggle)

- Button Component

- Card Component

- Form Header

- Toast Notifications

- Protected Route Wrapper

# 🎯 Clean UI (Tailwind Minimal Style - Variant A)

* Modern look

* Responsive

* Lightweight styling

# 🧠 React Hook Form for Validation

* Fast + optimized forms

* Realtime validation messages

* Password matching logic

* OTP auto-focus

# 🔐 Custom Authentication Context
```
login()

logout()

isAuthenticated

user data

Dashboard access only after login
```

# 📁 Project Structure
```
src/
│
├── App.jsx
├── main.jsx
│
├── context/
│   └── AuthContext.jsx
│
├── components/
│   ├── protected/
│   │   └── ProtectedRoute.jsx
│   ├── ui/
│   │   ├── button/
│   │   │   └── Button.jsx
│   │   ├── card/
│   │   │   └── Card.jsx
│   │   ├── input/
│   │   │   └── Input.jsx
│   │   ├── form-header/
│   │   │   └── FormHeader.jsx
│   │   └── toast/
│   │       └── ToastProvider.jsx
│
├── pages/
│   └── auth/
│       ├── Login.jsx
│       ├── Signup.jsx
│       ├── ForgotPassword.jsx
│       ├── OTPVerification.jsx
│       ├── ResetPassword.jsx
│       └── Dashboard.jsx
│
└── index.css
```

# 🛠️ Tech Stack

* Technology	Purpose
* React (Vite)	Fast development & build
* TailwindCSS	Modern, responsive styling
* React Hook Form	Form validation + performance
* React Router DOM	Routing + protected routes
* Context API	Global auth management
* Custom Toasts	Feedback notifications

# 🧪 Pages Summary

## 🔐 Login Page

* Email + password

* Password visibility toggle

* Validation with React Hook Form

* Forgot password link

* Optional social logins (UI only)

## 📝 Signup Page

* Name, email, password, confirm password

* Password match validation

* Password strength indicator (simple)

* Terms & conditions checkbox

## 🔁 Forgot Password Page

* Email field

* Sends a dummy reset link or OTP

## 🔢 OTP Verification Page

* 4-box OTP input

* Auto-focus on next input

* Timer + resend OTP

## 🆕 Reset Password Page

* New password

* Confirm password

* Match validation

* Redirect to login after success

## 🛡️ Dashboard (Protected)

* Only accessible after login

* Shows user info

* Simple status cards

* Logout button

# 🚀 Getting Started

1️⃣ Clone the repository
```
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

2️⃣ Install dependencies
```
npm install
```

3️⃣ Start development server
```
npm run dev
```

4️⃣ Build for production
```
npm run build
```

🎨 Tailwind Setup

## This project uses TailwindCSS with:
```
@import "tailwindcss";
```

* All UI styling is done using Tailwind utility classes.

# 🔐 Authentication (Frontend Only)

## This project does not include backend authentication.

>[!It uses a fake auth simulation with]:

[^1]: Mock login

[^2]: Mock signup

[^3]: Fake OTP verification

[^4]: Fake reset password

# Replace with your backend (Node, Firebase, Django, Laravel, Supabase, etc.) whenever needed.

# 🧹 Future Improvements (Optional)

## You can extend this project with:

* Real backend APIs

* JWT authentication

* OAuth login (Google, GitHub, etc.)

* Dark mode

* Framer Motion animations

# ❤️ Contribution

**Pull Requests, Issues, and Suggestions are welcome!**

**Feel free to fork the repo and contribute 🎉**

# 📄 License

***Licensed under the MIT License.***
