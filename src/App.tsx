import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import AppointmentForm from './components/AppointmentForm';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/doctor/:id" element={<Profile />} />
          <Route
            path="/book/:id"
            element={
              <AppointmentForm
                onSubmit={(name, email, datetime) =>
                  alert(`Appointment booked for ${name} at ${datetime}`)
                }
              />
            }
          />
        </Routes>
      </main>
    </Router>
  );
};

export default App;