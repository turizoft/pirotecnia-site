import { Link } from "react-router-dom";
import Header from "@/components/Header";
import { Star } from "lucide-react";

export default function Testimonials() {
  return (
    <div className="w-full">
      <Header />

      {/* Hero Section */}
      <section className="bg-primary py-16 md:py-20 border-b-8 border-black">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-black text-black mb-4 uppercase tracking-tight">
            Customer Reviews
          </h1>
          <p className="text-lg text-black font-bold max-w-2xl">
            Real experiences from satisfied clients
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {[
              {
                name: "Carlos Rodríguez",
                title: "Event Organizer",
                city: "Bogotá",
                text: "IGNITION has been our trusted partner for over 5 years. Their professionalism and product quality are unmatched. Every event is a success!",
              },
              {
                name: "María García",
                title: "Wedding Planner",
                city: "Medellín",
                text: "The customer service was exceptional. They guided us through every step and our celebration was absolutely spectacular!",
              },
              {
                name: "Juan Martínez",
                title: "City Event Manager",
                city: "Cali",
                text: "Professional, reliable, and safe. IGNITION sets the standard for pyrotechnic displays. Highly recommended!",
              },
              {
                name: "Laura Sánchez",
                title: "Corporate Event Coordinator",
                city: "Barranquilla",
                text: "Outstanding quality and service. The displays were magnificent and added the perfect touch to our corporate event.",
              },
              {
                name: "Fernando López",
                title: "Festival Director",
                city: "Cali",
                text: "Year after year, IGNITION delivers excellence. Their safety standards and product variety make them the best choice.",
              },
              {
                name: "Ana Pérez",
                title: "Hotel Event Manager",
                city: "Bogotá",
                text: "Professional team, amazing results. Our guests were blown away by the pyrotechnic displays. Will definitely use them again!",
              },
            ].map((testimonial, i) => (
              <div
                key={i}
                className="bg-primary border-4 border-black rounded-none p-8 relative"
              >
                <div className="absolute top-2 left-2 w-5 h-5 border-t-2 border-l-2 border-black"></div>
                <div className="absolute top-2 right-2 w-5 h-5 border-t-2 border-r-2 border-black"></div>
                <div className="absolute bottom-2 left-2 w-5 h-5 border-b-2 border-l-2 border-black"></div>
                <div className="absolute bottom-2 right-2 w-5 h-5 border-b-2 border-r-2 border-black"></div>

                <div className="flex gap-1 mb-4 relative z-10">
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      className="w-5 h-5 text-accent fill-accent"
                    />
                  ))}
                </div>
                <p className="text-black font-semibold italic mb-6 text-sm leading-relaxed relative z-10">
                  "{testimonial.text}"
                </p>
                <div className="pt-4 border-t-2 border-black relative z-10">
                  <p className="font-black text-black text-lg uppercase">
                    {testimonial.name}
                  </p>
                  <p className="text-xs font-bold text-black uppercase">
                    {testimonial.title} • {testimonial.city}
                  </p>
                </div>
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
