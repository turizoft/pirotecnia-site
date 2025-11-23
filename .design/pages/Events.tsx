import { Link } from "react-router-dom";
import Header from "@/components/Header";
import { Calendar, Sparkles } from "lucide-react";

export default function Events() {
  return (
    <div className="w-full">
      <Header />

      {/* Hero Section */}
      <section className="bg-primary py-16 md:py-20 border-b-8 border-black">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-black text-black mb-4 uppercase tracking-tight">
            Upcoming Events
          </h1>
          <p className="text-lg text-black font-bold max-w-2xl">
            Spectacular pyrotechnic displays across Colombia
          </p>
        </div>
      </section>

      {/* Events List */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-6 mb-12">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="bg-primary border-4 border-black rounded-none p-8 flex items-start gap-6 hover:shadow-2xl transition-shadow relative"
              >
                <div className="absolute top-2 left-2 w-5 h-5 border-t-2 border-l-2 border-black"></div>
                <div className="absolute top-2 right-2 w-5 h-5 border-t-2 border-r-2 border-black"></div>
                <div className="absolute bottom-2 left-2 w-5 h-5 border-b-2 border-l-2 border-black"></div>
                <div className="absolute bottom-2 right-2 w-5 h-5 border-b-2 border-r-2 border-black"></div>

                <div className="flex-shrink-0 bg-black rounded-none p-4 border-2 border-black">
                  <div className="text-center">
                    <p className="text-4xl font-black text-accent">
                      {15 + i * 5}
                    </p>
                    <p className="text-xs font-black text-accent uppercase">
                      Dec
                    </p>
                  </div>
                </div>
                <div className="flex-grow relative z-10">
                  <h3 className="text-2xl font-black text-black mb-2 uppercase">
                    Event {i}: Spectacular Display
                  </h3>
                  <p className="text-black font-semibold text-sm mb-4">
                    Professional fireworks display with synchronized music and special effects. All ages welcome!
                  </p>
                  <button className="px-6 py-2 bg-black hover:bg-accent text-primary hover:text-black font-black rounded-none border-2 border-black transition-all text-xs uppercase tracking-wider">
                    Learn More
                  </button>
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
