
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

interface BookingHeaderProps {
  businessName: string;
}

const BookingHeader: React.FC<BookingHeaderProps> = ({ businessName }) => {
  return (
    <header className="py-6 px-4 border-b border-gray-200 bg-white">
      <div className="container mx-auto max-w-4xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="mr-4 text-gray-600 hover:text-agilis-accent">
              <ArrowLeft className="h-5 w-5" />
            </Link>
            <h1 className="text-xl font-bold text-agilis-dark">
              {businessName}
            </h1>
          </div>
          <div>
            <span className="text-sm text-gray-500">Powered by</span>
            <span className="ml-1 text-sm font-semibold text-agilis-dark">
              Agilis<span className="text-agilis-accent">.</span>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default BookingHeader;
