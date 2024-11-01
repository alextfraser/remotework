import React from 'react';
import { SlidersHorizontal } from 'lucide-react';
import WorkplaceCard from './WorkplaceCard';
import type { Workplace } from '../types/workplace';

interface WorkplaceListProps {
  workplaces: Workplace[];
}

export default function WorkplaceList({ workplaces }: WorkplaceListProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-slate-900">Remote Workplaces</h2>
        <button className="inline-flex items-center px-4 py-2 border border-slate-300 rounded-md shadow-sm text-sm font-medium text-slate-700 bg-white hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
          <SlidersHorizontal className="h-4 w-4 mr-2" />
          Filters
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {workplaces.map((workplace) => (
          <WorkplaceCard key={workplace.id} workplace={workplace} />
        ))}
      </div>
    </div>
  );
}