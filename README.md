# 🩺 Doctor Appointment App

A modern, responsive web application for booking appointments with healthcare professionals. Users can search for doctors, view profiles, and book appointments with ease.

---

## 📁 Folder Structure

```
frontend/
├── public/                # Static files and assets
│   ├── index.html         # Main HTML file
│   ├── favicon.ico        # App icon
│   ├── manifest.json      # PWA manifest
│   ├── robots.txt         # SEO robots file
│   └── images/            # Doctor and UI images
├── src/                   # Source code
│   ├── App.tsx            # Main app component
│   ├── App.css            # Global styles
│   ├── index.tsx          # Entry point
│   ├── index.css          # Entry styles
│   ├── components/        # Reusable UI components
│   │   ├── DoctorCard.tsx
│   │   ├── DoctorProfile.tsx
│   │   ├── AppointmentForm.tsx
│   │   └── ...
│   ├── pages/             # Page-level components
│   │   ├── Home.tsx
│   │   ├── Profile.tsx
│   │   └── ...
│   ├── data/              # Static data files
│   │   └── doctors.json
│   ├── types/             # TypeScript types
│   │   └── index.ts
│   └── ...
├── package.json           # Project metadata and dependencies
├── tsconfig.json          # TypeScript configuration
└── README.md              # Project documentation
```

### 📂 Folder Structure Overview

- **public/**: Contains static assets and files served directly.
- **src/**: Main source code for the frontend app.
  - **components/**: Reusable UI elements (cards, forms, etc.).
  - **pages/**: Route-based page components.
  - **data/**: Static JSON or mock data.
  - **types/**: TypeScript type definitions.
- **package.json**: Lists dependencies and scripts.
- **tsconfig.json**: TypeScript configuration.
- **README.md**: Project documentation.

---

## 📝 Project Summary

Doctor Appointment App streamlines the process of finding and booking appointments with healthcare professionals. Users can:

- 🔍 Search doctors by name or specialization
- 👨‍⚕️ View detailed doctor profiles and availability
- 📅 Book appointments with an intuitive form
- 🎨 Enjoy a clean, responsive, and modern UI

---

## 🚦 Process Overview

1. **Home Page:**  
   Users search and browse doctors using a search bar and filter results.

2. **Doctor Profile:**  
   Clicking a doctor shows their profile, specialization, availability, and slots.

3. **Appointment Booking:**  
   Users fill a form to book an appointment, with instant confirmation.

---

## 🛠️ Technologies Used

- **React** (TypeScript) – UI development
- **React Router** – Routing and navigation
- **SweetAlert2** – Stylish alerts and confirmations
- **Font Awesome** – Icons
- **Tailwind CSS** (via CDN) – Utility-first styling
- **Jest & React Testing Library** – Unit testing

---

## 📦 Libraries & Tools

- [`react`](https://react.dev/)
- [`react-dom`](https://react.dev/)
- [`react-router-dom`](https://reactrouter.com/)
- [`sweetalert2`](https://sweetalert2.github.io/)
- [`@testing-library/react`](https://testing-library.com/docs/react-testing-library/intro/)
- [`@testing-library/jest-dom`](https://github.com/testing-library/jest-dom)
- [`font-awesome`](https://fontawesome.com/)
- [`typescript`](https://www.typescriptlang.org/)
- [`tailwindcss`](https://tailwindcss.com/) (CDN)

---

## 🚀 Getting Started

1. **Install dependencies:**
   ```sh
   npm install
   ```
2. **Run the app:**
   ```sh
   npm start
   ```
3. **Build for production:**
   ```sh
   npm run build
   ```

--- 

- Demo Video:

<video controls src="20250802-1620-30.2329729.mp4" title="Title"></video>


- Deployed URL : [https://doctor-appointment-app-flax.vercel.app/](https://doctor-appointment-app-flax.vercel.app/)

## 💡 Contributing

Feel free to fork, open issues, or submit pull requests to improve the app!

---

##