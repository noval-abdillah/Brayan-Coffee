import React from 'react';

export function IceCreamIcon({ className = 'w-6 h-6', ...props }: React.SVGProps<SVGSVGElement>) {
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
      <path d="M12 2a5 5 0 0 0-5 5v3h10V7a5 5 0 0 0-5-5z" />
      <path d="M6 10h12l-6 11z" />
    </svg>
  );
}
