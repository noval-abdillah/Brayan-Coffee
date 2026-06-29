import React from 'react';

export function CupSteamIcon({ className = 'w-6 h-6', ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path d="M6 8h10a2 2 0 0 1 2 2v4a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4v-4a2 2 0 0 1 2-2z" />
      <path d="M18 10h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1" />
      <path d="M8 2c0 .8.5 1.5 1 2s1 .8 1 2" />
      <path d="M12 2c0 .8.5 1.5 1 2s1 .8 1 2" />
    </svg>
  );
}
