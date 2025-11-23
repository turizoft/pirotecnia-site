import { Link } from "react-router-dom";
import Header from "@/components/Header";
import { MapPin, Phone, Clock } from "lucide-react";

export default function Locations() {
  return (
    <div className="w-full">
      <Header />

      {/* Hero Section */}
      <section className="bg-primary py-16 md:py-20 border-b-8 border-black">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-black text-black mb-4 uppercase tracking-tight">
            Find Our Locations
          </h1>
          <p className="text-lg text-black font-bold max-w-2xl">
            Professional showrooms nationwide
          </p>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {[
              {
                city: "Bogotá",
                address: "Carrera 7 #45-25, La Candelaria",
                phone: "(1) 2345-6789",
                hours: "Mon-Fri: 9AM-6PM, Sat: 10AM-4PM",
              },
              {
                city: "Medellín",
                address: "Calle 49 #50-25, Centro Comercial",
                phone: "(4) 2345-6789",
                hours: "Mon-Fri: 9AM-6PM, Sat: 10AM-4PM",
              },
              {
                city: "Cali",
                address: "Carrera 5 #12-45, San Antonio",
                phone: "(2) 2345-6789",
                hours: "Mon-Fri: 9AM-6PM, Sat: 10AM-4PM",
              },
              {
                city: "Barranquilla",
                address: "Calle 84 #50-25, Altos",
                phone: "(5) 2345-6789",
                hours: "Mon-Fri: 9AM-6PM, Sat: 10AM-4PM",
              },
            ].map((location) => (
              <div
                key={location.city}
                className="bg-primary border-4 border-black rounded-none p-8 relative hover:shadow-2xl transition-shadow"
              >
                <div className="absolute top-2 left-2 w-5 h-5 border-t-2 border-l-2 border-black"></div>
                <div className="absolute top-2 right-2 w-5 h-5 border-t-2 border-r-2 border-black"></div>
                <div className="absolute bottom-2 left-2 w-5 h-5 border-b-2 border-l-2 border-black"></div>
                <div className="absolute bottom-2 right-2 w-5 h-5 border-b-2 border-r-2 border-black"></div>

                <h3 className="text-3xl font-black text-black mb-6 uppercase">
                  {location.city}
                </h3>
                <div className="space-y-4 relative z-10">
                  <div className="flex gap-3 items-start">
                    <MapPin className="w-5 h-5 text-black flex-shrink-0 mt-1" />
                    <p className="text-black font-semibold">{location.address}</p>
                  </div>
                  <div className="flex gap-3 items-center">
                    <Phone className="w-5 h-5 text-black flex-shrink-0" />
                    <p className="text-black font-semibold">{location.phone}</p>
                  </div>
                  <div className="flex gap-3 items-start">
                    <Clock className="w-5 h-5 text-black flex-shrink-0 mt-1" />
                    <p className="text-black font-semibold text-sm">
                      {location.hours}
                    </p>
                  </div>
                </div>
                <button className="w-full py-3 px-4 bg-black hover:bg-accent text-primary hover:text-black font-black rounded-none border-2 border-black transition-all text-sm uppercase tracking-wider mt-6">
                  Get Directions
                </button>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/"
              className="inline-block px-8 py-4 bg-black text-primary font-black rounded-none border-4 border-black hover:bg-primary hover:text-black transition-all uppercase tracking-wider"
            >
              Back Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
