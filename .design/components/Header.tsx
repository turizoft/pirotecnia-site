import { Link } from "react-router-dom";
import { Flame } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-primary border-b-4 border-black shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between gap-8">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="flex items-center justify-center w-12 h-12 bg-black rounded-none border-3 border-black group-hover:bg-primary transition-colors">
              <Flame className="w-7 h-7 text-accent" />
            </div>
            <span className="text-2xl font-black text-black hidden sm:inline uppercase tracking-wider">
              IGNITION
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-1 sm:gap-2 md:gap-4 flex-wrap justify-center flex-1 md:flex-none">
            <Link
              to="/"
              className="text-sm md:text-base font-black text-black hover:text-accent transition-colors py-2 px-3 rounded-none uppercase tracking-wider hover:bg-primary/50"
            >
              Home
            </Link>
            <Link
              to="/products"
              className="text-sm md:text-base font-black text-black hover:text-accent transition-colors py-2 px-3 rounded-none uppercase tracking-wider hover:bg-primary/50"
            >
              Products
            </Link>
            <Link
              to="/events"
              className="text-sm md:text-base font-black text-black hover:text-accent transition-colors py-2 px-3 rounded-none uppercase tracking-wider hover:bg-primary/50"
            >
              Events
            </Link>
            <Link
              to="/locations"
              className="text-sm md:text-base font-black text-black hover:text-accent transition-colors py-2 px-3 rounded-none uppercase tracking-wider hover:bg-primary/50"
            >
              Locations
            </Link>
            <Link
              to="/testimonials"
              className="text-sm md:text-base font-black text-black hover:text-accent transition-colors py-2 px-3 rounded-none uppercase tracking-wider hover:bg-primary/50"
            >
              Reviews
            </Link>
          </div>

          {/* CTA Button */}
          <Link
            to="/products"
            className="hidden md:inline-block px-6 py-3 bg-black hover:bg-accent text-primary hover:text-black font-black rounded-none border-2 border-black transition-all uppercase tracking-wider"
          >
            Shop
          </Link>
        </nav>
      </div>
    </header>
  );
}
