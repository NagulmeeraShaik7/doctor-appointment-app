import React from 'react';
import { Doctor } from '../types';
import { useNavigate } from 'react-router-dom';
import './DoctorProfile.css';

interface Props {
  doctor: Doctor | undefined;
}

const DoctorProfile: React.FC<Props> = ({ doctor }) => {
  const navigate = useNavigate();

 if (!doctor) {
  return (
    <div className="not-found-card">
      <i className="fa fa-user-slash not-found-icon"></i>
      <h2>Doctor Not Found</h2>
      <p>Sorry, we couldn't find the doctor you are looking for.</p>
      <button onClick={() => navigate('/')}>
        <i className="fa fa-arrow-left" style={{ marginRight: '8px' }}></i>
        Back to Home
      </button>
    </div>
  );
}

  // Specialization icon color mapping
  const specIconColor = {
    Cardiologist: '#e91e63',
    Dermatologist: '#00bcd4',
    Pediatrician: '#4caf50',
    'Orthopedic Surgeon': '#ff9800',
    Gynecologist: '#9c27b0',
    Neurologist: '#3f51b5',
  }[doctor.specialization] || '#00bcd4';

  // Availability icon and color
  let availabilityIcon = 'fa-times-circle';
  let availabilityColor = '#f44336';
  if (doctor.availability === 'Available Today') {
    availabilityIcon = 'fa-check-circle';
    availabilityColor = '#4caf50';
  } else if (doctor.availability === 'Available Tomorrow') {
    availabilityIcon = 'fa-clock';
    availabilityColor = '#00bcd4';
  } else if (doctor.availability === 'Fully Booked') {
    availabilityIcon = 'fa-ban';
    availabilityColor = '#ff9800';
  } else if (doctor.availability === 'On Leave') {
    availabilityIcon = 'fa-user-slash';
    availabilityColor = '#9c27b0';
  }

  return (
    <div className="doctor-profile">
      <div className="profile-header">
        <img src={doctor.image} alt={doctor.name} />
        <div>
          <h2>{doctor.name}</h2>
          <p className="specialization">
            <i className="fa fa-user-md" style={{ color: specIconColor, marginRight: '8px' }}></i>
            {doctor.specialization}
          </p>
        </div>
      </div>
      <div className="availability-row">
        <span className="availability-label">Availability:</span>
        <span className="availability-status" style={{ color: availabilityColor }}>
          <i className={`fa ${availabilityIcon}`} style={{ marginRight: '6px' }}></i>
          {doctor.availability}
        </span>
      </div>
      <h4>Available Slots</h4>
      <ul>
        {doctor.schedule.map((time, idx) => (
          <li key={idx}>
            <i className="fa fa-clock" style={{ color: '#ff9800', marginRight: '6px' }}></i>
            {time}
          </li>
        ))}
      </ul>
      <button onClick={() => navigate(`/book/${doctor.id}`)}>
        <i className="fa fa-calendar-plus" style={{ marginRight: '8px' }}></i>
        Book Appointment
      </button>
    </div>
  );
};

export default DoctorProfile;