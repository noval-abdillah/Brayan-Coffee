import React from 'react';

export function SnackIcon({ className = 'w-6 h-6', ...props }: React.SVGProps<SVGSVGElement>) {
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
      <path d="M3 7h18l-1.5 13H4.5L3 7z" />
      <path d="M6 7V5a3 3 0 0 1 6 0v2" />
      <path d="M12 7V5a3 3 0 0 1 6 0v2" />
    </svg>
  );
}
