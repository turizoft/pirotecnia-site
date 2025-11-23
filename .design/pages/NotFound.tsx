import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import { AlertCircle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="w-full bg-primary">
      <Header />
      <div className="min-h-screen flex items-center justify-center bg-primary py-20 px-4">
        <div className="text-center space-y-6 border-8 border-black bg-white p-12 max-w-2xl relative">
          <div className="absolute top-3 left-3 w-6 h-6 border-t-3 border-l-3 border-black"></div>
          <div className="absolute top-3 right-3 w-6 h-6 border-t-3 border-r-3 border-black"></div>
          <div className="absolute bottom-3 left-3 w-6 h-6 border-b-3 border-l-3 border-black"></div>
          <div className="absolute bottom-3 right-3 w-6 h-6 border-b-3 border-r-3 border-black"></div>

          <AlertCircle className="w-20 h-20 mx-auto text-primary" />
          <div>
            <h1 className="text-7xl font-black text-primary mb-4 uppercase">
              404
            </h1>
            <p className="text-3xl font-black text-black mb-2 uppercase">
              Page Not Found
            </p>
            <p className="text-lg text-black font-bold mb-8 max-w-md mx-auto">
              Sorry, the page you're looking for doesn't exist. Let's get you back on track.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="inline-block px-8 py-4 bg-primary hover:bg-accent text-black font-black rounded-none border-4 border-black transition-all uppercase tracking-wider"
            >
              Back Home
            </Link>
            <Link
              to="/products"
              className="inline-block px-8 py-4 bg-black hover:bg-accent text-primary hover:text-black font-black rounded-none border-4 border-black transition-all uppercase tracking-wider"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
