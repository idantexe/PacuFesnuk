
import React from 'react';

export const Logo: React.FC<{ size?: number; className?: string }> = ({ size = 120, className = "" }) => (
  <div className={`flex items-center justify-center overflow-hidden bg-white rounded-2xl p-2 ${className}`} style={{ width: size, height: size }}>
    <img 
      src="https://api.screenshotone.com/take?url=https%3A%2F%2Fstorage.googleapis.com%2Fstatic.replit.com%2Fmedia-upload%2Fberryly_logo.png&access_key=YOUR_ACCESS_KEY&block_ads=true&full_page=false" 
      alt="Berryly Belle Logo" 
      className="w-full h-full object-contain"
      onError={(e) => {
        // Fallback jika URL gambar bermasalah, menggunakan placeholder logo dari aset yang diupload user
        (e.target as HTMLImageElement).src = "https://storage.googleapis.com/static.replit.com/media-upload/berryly_logo.png";
      }}
    />
  </div>
);

export const ButterflyIcon: React.FC<{ size?: number; className?: string }> = ({ size = 24, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M12 19c-1.5 0-3-1-4-2.5C7 15 7 13 7 11c0-2 1-4 3-5s3.5-1 5 0c1.5 1 2 3 2 5 0 2 0 4-1 5.5s-2.5 2.5-4 2.5Z" />
    <path d="M12 19c1.5 0 3-1 4-2.5 1-1.5 1-3.5 1-5.5 0-2-1-4-3-5s-3.5-1-5 0c-1.5 1-2 3-2 5 0 2 0 4 1 5.5s2.5 2.5 4 2.5Z" />
    <path d="M7 11c-1-1-2.5-1.5-4-1.5s-2.5.5-2.5 1.5c0 2 2.5 3.5 4 3.5 1.5 0 3-1 3-3.5Z" />
    <path d="M17 11c1-1 2.5-1.5 4-1.5s2.5.5 2.5 1.5c0 2-2.5 3.5-4 3.5-1.5 0-3-1-3-3.5Z" />
    <path d="M12 7V5" />
    <path d="M10 5l1 1" />
    <path d="M14 5l-1 1" />
  </svg>
);
