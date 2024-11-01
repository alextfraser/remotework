import React from 'react';
import Header from './components/Header';
import Map from './components/Map';
import WorkplaceList from './components/WorkplaceList';
import type { Workplace } from './types/workplace';

// Sample data - in a real app, this would come from an API
const sampleWorkplaces: Workplace[] = [
  {
    id: '1',
    name: 'The Creative Hub',
    type: 'coworking',
    description: 'Modern coworking space with high-speed internet and meeting rooms',
    address: '123 Innovation Street',
    coordinates: [51.505, -0.09],
    amenities: ['wifi', 'power', 'coffee', 'meeting_rooms'],
    photos: ['https://images.unsplash.com/photo-1497366216548-37526070297c'],
    rating: {
      internet: 4.5,
      noise: 4,
      comfort: 4.5,
      price: 3.5,
      overall: 4.2
    },
    reviews: [],
    priceRange: 3,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '2',
    name: 'Quiet Corner Café',
    type: 'cafe',
    description: 'Cozy café with excellent coffee and peaceful atmosphere',
    address: '456 Tranquil Lane',
    coordinates: [51.51, -0.1],
    amenities: ['wifi', 'power', 'coffee', 'food', 'quiet'],
    photos: ['https://images.unsplash.com/photo-1521017432531-fbd92d768814'],
    rating: {
      internet: 4.0,
      noise: 4.5,
      comfort: 4.0,
      price: 2.5,
      overall: 3.8
    },
    reviews: [],
    priceRange: 2,
    createdAt: new Date(),
    updatedAt: new Date()
  }
];

function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <main>
        <Map workplaces={sampleWorkplaces} center={[51.505, -0.09]} />
        <WorkplaceList workplaces={sampleWorkplaces} />
      </main>
    </div>
  );
}

export default App;