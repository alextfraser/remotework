export type AmenityType = 'wifi' | 'power' | 'coffee' | 'food' | 'quiet' | 'meeting_rooms' | 'parking';

export type WorkplaceType = 'cafe' | 'library' | 'coworking' | 'hotel_lobby' | 'other';

export interface Rating {
  internet: number;
  noise: number;
  comfort: number;
  price: number;
  overall: number;
}

export interface Review {
  id: string;
  userId: string;
  rating: Rating;
  comment: string;
  createdAt: Date;
}

export interface Workplace {
  id: string;
  name: string;
  type: WorkplaceType;
  description: string;
  address: string;
  coordinates: [number, number];
  amenities: AmenityType[];
  photos: string[];
  rating: Rating;
  reviews: Review[];
  priceRange: 1 | 2 | 3 | 4;
  createdAt: Date;
  updatedAt: Date;
}