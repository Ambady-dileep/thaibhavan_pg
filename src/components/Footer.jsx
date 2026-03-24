import { Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-neutral-900 border-t border-neutral-800 py-8 text-neutral-400 text-center">
      <div className="container mx-auto px-4 md:px-6">
        <p className="flex items-center justify-center gap-2 mb-2">
          Made with <Heart size={16} className="text-red-500 fill-red-500 animate-pulse" /> for Thaibhavan PG
        </p>
        <p className="text-sm">
          &copy; {currentYear} Thaibhavan PG. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
