import { CircleCheck, CircleCheckFill } from 'akar-icons';
import React from 'react';

interface ArtistCardProps {
  artistName: string;
  followers: number;
  monthlyListeners: number;
}

const ArtistDetail: React.FC<ArtistCardProps> = ({
  artistName,
  followers,
  monthlyListeners,
}) => {
  return (
    <div className="mb-10 flex w-full flex-col items-start text-white md:mb-0 md:flex-row md:items-center md:justify-center">
      <div className="flex h-full flex-col items-center justify-center">
        <img
          src="https://placehold.co/220"
          alt="albumName"
          className="rounded-full object-cover"
        />
      </div>
      <div className="mt-8 md:mt-0">
        <div className="flex gap-3">
          <CircleCheckFill size={20} fill="#619CED" />
          <h5 className="text-sm font-medium">Artista certificado</h5>
        </div>
        <h3 className="mt-1.5 text-4xl font-semibold lg:text-2xl">
          {'artistName'}
        </h3>
        <div className="mt-10">
          <p className="mt-4 text-sm font-semibold lg:text-xs">
            Followers: {'123.234'}
          </p>
          <p className="mt-1.5 text-sm font-semibold lg:text-xs">
            Oyentes mensuales: {'123.234'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ArtistDetail;
