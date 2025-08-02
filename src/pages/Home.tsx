import React, { useEffect, useState } from 'react';
import { Doctor } from '../types';
import doctorsData from '../data/doctors.json';
import SearchBar from '../components/SearchBar';
import DoctorList from '../components/DoctorList';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home: React.FC = () => {
  const [query, setQuery] = useState('');
  const [filtered, setFiltered] = useState<Doctor[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    // For real API: fetch('/api/doctors').then(res => res.json()).then(setFiltered);
    const filteredDoctors = doctorsData.filter(
      (doc) =>
        doc.name.toLowerCase().includes(query.toLowerCase()) ||
        doc.specialization.toLowerCase().includes(query.toLowerCase())
    ).map((doc) => ({
      ...doc,
      availability: doc.availability as "Available Today" | "Fully Booked" | "On Leave"
    }));
    setFiltered(filteredDoctors);
  }, [query]);

  return (
    <div className="home">
      <h1>Doctors List</h1>
      <SearchBar query={query} onChange={(e) => setQuery(e.target.value)} />
      <DoctorList doctors={filtered} onSelect={(id) => navigate(`/doctor/${id}`)} />
    </div>
  );
};

export default Home;