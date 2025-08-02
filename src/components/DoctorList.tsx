import React from 'react';
import { Doctor } from '../types';
import DoctorCard from './DoctorCard';
import './DoctorList.css';

interface Props {
  doctors: Doctor[];
  onSelect: (id: number) => void;
}

const DoctorList: React.FC<Props> = ({ doctors, onSelect }) => {
  return (
    <div className="doctor-list">
      {doctors.map((doc) => (
        <DoctorCard key={doc.id} doctor={doc} onClick={onSelect} />
      ))}
    </div>
  );
};

export default DoctorList;