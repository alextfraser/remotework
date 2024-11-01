import React from 'react';
import { Wifi, Power, Coffee, UtensilsCrossed, Volume2, Users, Car } from 'lucide-react';
import type { Workplace, AmenityType } from '../types/workplace';

const amenityIcons: Record<AmenityType, React.ReactNode> = {
  wifi: <Wifi className="h-4 w-4" />,
  power: <Power className="h-4 w-4" />,
  coffee: <Coffee className="h-4 w-4" />,
  food: <UtensilsCrossed className="h-4 w-4" />,
  quiet: <Volume2 className="h-4 w-4" />,
  meeting_rooms: <Users className="h-4 w-4" />,
  parking: <Car className="h-4 w-4" />
};

interface WorkplaceCardProps {
  workplace: Workplace;
}

export default function WorkplaceCard({ workplace }: WorkplaceCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      <div className="relative h-48">
        <img
          src={workplace.photos[0] || 'https://images.unsplash.com/photo-1497366216548-37526070297c'}
          alt={workplace.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-full text-sm font-medium text-slate-700">
          {'$'.repeat(workplace.priceRange)}
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-semibold text-slate-900">{workplace.name}</h3>
            <p className="text-sm text-slate-500 capitalize">{workplace.type.replace('_', ' ')}</p>
          </div>
          <div className="flex items-center">
            <span className="text-yellow-400 mr-1">★</span>
            <span className="text-slate-700">{workplace.rating.overall.toFixed(1)}</span>
          </div>
        </div>

        <p className="mt-2 text-sm text-slate-600 line-clamp-2">{workplace.description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {workplace.amenities.map((amenity) => (
            <div
              key={amenity}
              className="flex items-center gap-1 bg-slate-100 px-2 py-1 rounded-full text-xs text-slate-600"
              title={amenity.replace('_', ' ')}
            >
              {amenityIcons[amenity]}
              <span className="capitalize">{amenity.replace('_', ' ')}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}