import React from 'react';
import { Doctor } from '../types';
import './DoctorCard.css';

interface Props {
  doctor: Doctor;
  onClick: (id: number) => void;
}

const DoctorCard: React.FC<Props> = ({ doctor, onClick }) => {
  const specIconColor = {
    Cardiologist: '#e91e63',
    Dermatologist: '#00bcd4',
    Pediatrician: '#4caf50',
    'Orthopedic Surgeon': '#ff9800',
    Gynecologist: '#9c27b0',
    Neurologist: '#3f51b5',
  }[doctor.specialization] || '#00bcd4';

  // Map availability to color class and icon
  let availabilityClass = 'unavailable';
  let availabilityIcon = 'fa-times-circle';
  if (doctor.availability === 'Available Today') {
    availabilityClass = 'available';
    availabilityIcon = 'fa-check-circle';
  } else if (doctor.availability === 'Available Tomorrow') {
    availabilityClass = 'tomorrow';
    availabilityIcon = 'fa-clock';
  } else if (doctor.availability === 'Fully Booked') {
    availabilityClass = 'unavailable';
    availabilityIcon = 'fa-ban';
  } else if (doctor.availability === 'On Leave') {
    availabilityClass = 'unavailable';
    availabilityIcon = 'fa-user-slash';
  }

  return (
    <div className="doctor-card" onClick={() => onClick(doctor.id)}>
      <img src={doctor.image} alt={doctor.name} />
      <h3>{doctor.name}</h3>
      <p className="specialization">
        <i className="fa fa-user-md" style={{ marginRight: '8px', color: specIconColor }}></i>
        {doctor.specialization}
      </p>
      <p className={`availability ${availabilityClass}`}>
        <i className={`fa ${availabilityIcon}`} style={{ marginRight: '8px' }}></i>
        {doctor.availability}
      </p>
    </div>
  );
};

export default DoctorCard;