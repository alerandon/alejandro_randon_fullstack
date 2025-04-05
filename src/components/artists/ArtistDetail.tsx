import { CircleCheck, CircleCheckFill } from 'akar-icons';
import React from 'react';

interface ArtistCardProps {
  artistName: string;
  artistImage: string;
  followers: number;
  monthlyListeners: number;
}

const ArtistDetail: React.FC<ArtistCardProps> = ({
  artistName,
  artistImage,
  followers,
  monthlyListeners,
}) => {
  return (
    <div className="mb-10 flex w-full flex-col items-start text-white md:mb-0 md:flex-row md:items-center md:justify-start md:gap-12 md:pl-5">
      <div className="flex h-full flex-col items-center justify-center">
        <img
          src={artistImage}
          alt="albumName"
          className="rounded-full object-cover"
        />
      </div>
      <div className="mt-8 md:mt-0">
        <div className="flex gap-3">
          <div className="flex flex-col justify-center">
            <CircleCheckFill size={20} fill="#619CED" />
          </div>
          <h5 className="text-sm font-medium">Artista certificado</h5>
        </div>
        <h3 className="mt-1.5 text-4xl font-semibold lg:text-5xl">
          {artistName}
        </h3>
        <div className="mt-10">
          <p className="mt-4 text-sm font-semibold lg:text-xs">
            Followers: {followers.toLocaleString()}
          </p>
          <p className="mt-1.5 text-sm font-semibold lg:text-xs">
            Oyentes mensuales: {monthlyListeners.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ArtistDetail;
