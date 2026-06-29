import React from 'react';

export function CoffeeBeanIcon({ className = 'w-6 h-6', ...props }: React.SVGProps<SVGSVGElement>) {
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
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z" />
      <path d="M12 2c4 4 4 16 0 20" />
      <path d="M2.5 10.5c3 1.5 7 1.5 9.5 0s5-1 9.5.5" />
    </svg>
  );
}
