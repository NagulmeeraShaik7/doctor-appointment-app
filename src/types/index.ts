export interface Doctor {
  id: number;
  name: string;
  specialization: string;
  image: string;
  availability: 'Available Today' | 'Available Tomorrow' | 'Fully Booked' | 'On Leave';
  schedule: string[];
}