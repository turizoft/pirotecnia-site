import { Link } from "react-router-dom";
import Header from "@/components/Header";
import { Sparkles, Star } from "lucide-react";

export default function Products() {
  return (
    <div className="w-full">
      <Header />

      {/* Hero Section */}
      <section className="bg-primary py-16 md:py-20 border-b-8 border-black">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-black text-black mb-4 uppercase tracking-tight">
            Our Collection
          </h1>
          <p className="text-lg text-black font-bold max-w-2xl">
            Premium pyrotechnic products for every celebration
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="border-4 border-black bg-primary p-6 relative hover:shadow-2xl transition-shadow"
              >
                <div className="absolute top-2 left-2 w-5 h-5 border-t-2 border-l-2 border-black"></div>
                <div className="absolute top-2 right-2 w-5 h-5 border-t-2 border-r-2 border-black"></div>
                <div className="absolute bottom-2 left-2 w-5 h-5 border-b-2 border-l-2 border-black"></div>
                <div className="absolute bottom-2 right-2 w-5 h-5 border-b-2 border-r-2 border-black"></div>

                <div className="bg-black h-48 rounded-none flex items-center justify-center mb-6">
                  <Sparkles className="w-12 h-12 text-accent" />
                </div>
                <h3 className="text-xl font-black text-black mb-2">Product {i}</h3>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      className="w-4 h-4 text-accent fill-accent"
                    />
                  ))}
                </div>
                <p className="text-black text-sm font-semibold mb-4">
                  Premium quality pyrotechnic product
                </p>
                <button className="w-full py-2 px-4 bg-black hover:bg-accent text-primary hover:text-black font-black rounded-none border-2 border-black transition-all uppercase text-xs tracking-wider">
                  View Details
                </button>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
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
