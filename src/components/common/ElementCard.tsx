import React from 'react';
import { Link } from 'react-router';

interface ElementCardProps {
  title: string;
  subtitle: string;
  imageUrl: string;
  linkTo?: string;
  onPrimaryAction?: () => void;
  onSecondaryAction?: () => void;
  primaryActionLabel?: string;
  secondaryActionLabel?: string;
  isActionable?: boolean;
}

const ElementCard: React.FC<ElementCardProps> = ({
  title,
  subtitle,
  imageUrl,
  linkTo,
  onPrimaryAction,
  primaryActionLabel,
  isActionable = false,
}) => {
  const content = (
    <div className="flex flex-col items-center rounded-3xl bg-transparent p-7 text-white hover:bg-[#D6F379] hover:text-gray-900 md:p-5 lg:p-4">
      <img
        src={imageUrl}
        alt={title}
        className="mb-4 aspect-square rounded-xl"
      />
      <div className="self-start pt-2">
        <h3 className="text-3xl font-semibold lg:text-2xl">{title}</h3>
        <p className="pt-4 text-sm font-semibold lg:text-xs">{subtitle}</p>
      </div>
      {isActionable && (
        <div className="mt-5 flex w-full flex-col gap-2">
          {onPrimaryAction && primaryActionLabel && (
            <button
              onClick={onPrimaryAction}
              className={`w-full cursor-pointer rounded-full px-4 py-2 text-sm font-semibold text-white lg:text-xs ${
                primaryActionLabel === '- Remover album'
                  ? 'bg-[#E3513D]'
                  : 'bg-[#4CAF50]'
              }`}
            >
              {primaryActionLabel}
            </button>
          )}
        </div>
      )}
    </div>
  );

  return linkTo ? <Link to={linkTo}>{content}</Link> : content;
};

export default ElementCard;
