import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Doctor } from '../types';
import doctors from '../data/doctors.json';
import DoctorProfile from '../components/DoctorProfile';
import './Profile.css';

const Profile: React.FC = () => {
  const { id } = useParams();
  const [doctor, setDoctor] = useState<Doctor | undefined>(undefined);

  useEffect(() => {
    const found = doctors.find((doc) => doc.id === Number(id));
    if (found && (found.availability === "Available Today" || found.availability === "Fully Booked" || found.availability === "On Leave")) {
      setDoctor(found as Doctor);
    } else {
      setDoctor(undefined);
    }

  }, [id]);

  return (
    <div className="profile-page">
      <DoctorProfile doctor={doctor} />
    </div>
  );
};

export default Profile;