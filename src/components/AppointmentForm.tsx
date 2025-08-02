import React, { useState } from 'react';
import Swal from 'sweetalert2';
import './AppointmentForm.css';

interface Props {
  onSubmit: (name: string, email: string, datetime: string) => void;
}

const AppointmentForm: React.FC<Props> = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [datetime, setDatetime] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  Swal.fire({
    title: 'Appointment Confirmed!',
    text: `Your appointment is booked for ${name} at ${datetime}.`,
    icon: 'success',
    confirmButtonColor: '#ff9800',
    confirmButtonText: 'OK',
    background: 'linear-gradient(135deg, #ffe3e3 0%, #e3ffe3 50%, #e3f7ff 100%)',
  });
  onSubmit(name, email, datetime);
};

  return (
    <form className="appointment-form" onSubmit={handleSubmit}>
      <h2 className="form-title">Book Your Appointment</h2>
      <p className="form-desc">Fill in your details and select a date & time.</p>
      <div className="input-group">
        <span className="input-icon"><i className="fa fa-user"></i></span>
        <input type="text" placeholder="Patient Name" value={name} onChange={e => setName(e.target.value)} required />
      </div>
      <div className="input-group">
        <span className="input-icon"><i className="fa fa-envelope"></i></span>
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
      </div>
      <div className="input-group">
        <span className="input-icon"><i className="fa fa-calendar"></i></span>
        <input type="datetime-local" value={datetime} onChange={e => setDatetime(e.target.value)} required />
      </div>
      <button type="submit" className="animated-btn">Confirm Appointment</button>
    </form>
  );
};

export default AppointmentForm;