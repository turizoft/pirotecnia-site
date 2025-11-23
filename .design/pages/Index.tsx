import { Link } from "react-router-dom";
import { Sparkles, Star, MapPin, Users, Zap, Shield } from "lucide-react";
import Header from "@/components/Header";

export default function Index() {
  return (
    <div className="w-full bg-primary text-foreground">
      <Header />

      {/* Hero Section - Bold Red with Ornate Borders */}
      <section className="relative bg-primary py-0 md:py-0 overflow-hidden">
        {/* Top decorative border */}
        <div className="h-8 bg-black flex items-center justify-center">
          <div className="flex gap-3 text-gold">
            {[...Array(20)].map((_, i) => (
              <span key={i} className="text-accent text-lg">◆</span>
            ))}
          </div>
        </div>

        <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-block px-6 py-3 border-2 border-black bg-primary rounded-none">
                  <p className="text-black font-bold text-sm tracking-widest uppercase">
                    Pyrotechnic Excellence
                  </p>
                </div>
                <h1 className="text-6xl md:text-7xl font-black text-black leading-tight tracking-tight">
                  IGNITION
                </h1>
                <p className="text-2xl md:text-3xl text-black font-bold max-w-lg leading-tight">
                  Premium Fireworks & Pyrotechnics for Colombia
                </p>
              </div>
              <p className="text-lg text-black max-w-lg leading-relaxed font-semibold">
                The most trusted source for professional-grade pyrotechnic displays. Certified safe, expertly crafted, unforgettably spectacular.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  to="/products"
                  className="inline-block px-8 py-4 bg-black text-primary font-black rounded-none border-4 border-black hover:bg-primary hover:text-black transition-all text-center uppercase tracking-wider text-lg"
                >
                  Shop Collection
                </Link>
                <Link
                  to="/events"
                  className="inline-block px-8 py-4 bg-primary text-black font-black rounded-none border-4 border-black hover:bg-black hover:text-primary transition-all text-center uppercase tracking-wider text-lg"
                >
                  View Events
                </Link>
              </div>
              {/* Trust badges */}
              <div className="flex gap-8 pt-8">
                <div className="flex items-center gap-2">
                  <Shield className="w-6 h-6 text-black" />
                  <span className="text-sm font-bold text-black">100% Safe</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-6 h-6 text-black" />
                  <span className="text-sm font-bold text-black">Top Rated</span>
                </div>
              </div>
            </div>

            {/* Right visual - Ornate Box */}
            <div className="relative h-96 md:h-96 flex items-center justify-center">
              <div className="absolute inset-0 border-8 border-black rounded-lg flex flex-col items-center justify-center bg-primary p-8">
                {/* Ornate corners */}
                <div className="absolute top-4 left-4 w-12 h-12 border-t-4 border-l-4 border-black"></div>
                <div className="absolute top-4 right-4 w-12 h-12 border-t-4 border-r-4 border-black"></div>
                <div className="absolute bottom-4 left-4 w-12 h-12 border-b-4 border-l-4 border-black"></div>
                <div className="absolute bottom-4 right-4 w-12 h-12 border-b-4 border-r-4 border-black"></div>

                <div className="text-center space-y-4 relative z-10">
                  <Sparkles className="w-20 h-20 mx-auto text-black" />
                  <h3 className="text-3xl font-black text-black">FIREWORKS</h3>
                  <p className="text-black font-bold text-lg">Professional Grade</p>
                  <p className="text-xs tracking-widest font-black text-black pt-4">
                    ◆ CERTIFIED ◆ SAFE ◆
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom decorative border */}
        <div className="h-8 bg-black flex items-center justify-center">
          <div className="flex gap-3 text-accent">
            {[...Array(20)].map((_, i) => (
              <span key={i} className="text-accent text-lg">◆</span>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-0 bg-white">
        {/* Top border */}
        <div className="h-2 bg-black"></div>

        <div className="container mx-auto px-4 py-20 md:py-28">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-black mb-4 uppercase tracking-tight">
              Featured Collection
            </h2>
            <p className="text-lg text-black font-bold max-w-2xl mx-auto">
              Handpicked premium pyrotechnic products
            </p>
          </div>

          {/* Product grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Dragon Fire Elite", badge: "New Release" },
              { name: "Celestial Burst Premium", badge: "Best Seller" },
              { name: "Imperial Gold Series", badge: "Limited" },
            ].map((product, i) => (
              <div key={i} className="border-6 border-black bg-primary p-8 relative group hover:shadow-2xl transition-shadow">
                {/* Corner decorations */}
                <div className="absolute top-3 left-3 w-6 h-6 border-t-3 border-l-3 border-black"></div>
                <div className="absolute top-3 right-3 w-6 h-6 border-t-3 border-r-3 border-black"></div>
                <div className="absolute bottom-3 left-3 w-6 h-6 border-b-3 border-l-3 border-black"></div>
                <div className="absolute bottom-3 right-3 w-6 h-6 border-b-3 border-r-3 border-black"></div>

                <div className="relative bg-black h-64 flex items-center justify-center mb-6 overflow-hidden">
                  <div className="text-center space-y-2">
                    <Sparkles className="w-16 h-16 mx-auto text-accent" />
                    <p className="text-white font-black text-lg">{product.name}</p>
                  </div>
                  <div className="absolute -top-1 -right-1 bg-black text-accent px-4 py-2 font-black text-sm border-2 border-accent">
                    {product.badge}
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-black text-black">{product.name}</h3>
                  <p className="text-black font-semibold text-sm leading-relaxed">
                    Professional-grade pyrotechnic display kit with certified safety features and expert instructions.
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t-2 border-black">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, j) => (
                        <Star key={j} className="w-5 h-5 text-accent fill-accent" />
                      ))}
                    </div>
                    <span className="text-xs font-black text-black">(48)</span>
                  </div>
                  <Link
                    to="/products"
                    className="w-full block py-3 px-4 bg-black hover:bg-primary text-primary hover:text-black font-black rounded-none border-3 border-black text-center transition-all uppercase text-sm tracking-wider mt-4"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              to="/products"
              className="inline-block px-8 py-4 bg-black text-primary font-black rounded-none border-4 border-black hover:bg-primary hover:text-black transition-all uppercase tracking-wider"
            >
              View Full Collection
            </Link>
          </div>
        </div>

        {/* Bottom border */}
        <div className="h-2 bg-black"></div>
      </section>

      {/* Stats Section - Bold Red */}
      <section className="py-0 bg-primary">
        {/* Top border */}
        <div className="h-8 bg-black flex items-center justify-center">
          <div className="flex gap-3">
            {[...Array(20)].map((_, i) => (
              <span key={i} className="text-accent text-lg">◆</span>
            ))}
          </div>
        </div>

        <div className="container mx-auto px-4 py-20 md:py-28">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2 border-4 border-black bg-white p-6">
              <p className="text-5xl md:text-6xl font-black text-black">5,000+</p>
              <p className="text-black font-bold text-lg">Products Sold</p>
            </div>
            <div className="space-y-2 border-4 border-black bg-white p-6">
              <p className="text-5xl md:text-6xl font-black text-black">98%</p>
              <p className="text-black font-bold text-lg">Satisfaction</p>
            </div>
            <div className="space-y-2 border-4 border-black bg-white p-6">
              <p className="text-5xl md:text-6xl font-black text-black">25+</p>
              <p className="text-black font-bold text-lg">Years Expert</p>
            </div>
            <div className="space-y-2 border-4 border-black bg-white p-6">
              <p className="text-5xl md:text-6xl font-black text-black">50+</p>
              <p className="text-black font-bold text-lg">Locations</p>
            </div>
          </div>
        </div>

        {/* Bottom border */}
        <div className="h-8 bg-black flex items-center justify-center">
          <div className="flex gap-3">
            {[...Array(20)].map((_, i) => (
              <span key={i} className="text-accent text-lg">◆</span>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us - White with Black Borders */}
      <section className="py-0 bg-white">
        {/* Top border */}
        <div className="h-2 bg-black"></div>

        <div className="container mx-auto px-4 py-20 md:py-28">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-black mb-4 uppercase tracking-tight">
              Why IGNITION
            </h2>
            <p className="text-lg text-black font-bold max-w-2xl mx-auto">
              Premium quality meets professional expertise
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Certified Safe",
                desc: "All products meet international safety standards",
              },
              {
                icon: Users,
                title: "Expert Team",
                desc: "Professionals ready to assist with your needs",
              },
              {
                icon: Zap,
                title: "Fast Delivery",
                desc: "Nationwide delivery with professional handling",
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="p-8 bg-primary border-4 border-black relative">
                  <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-black"></div>
                  <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-black"></div>
                  <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-black"></div>
                  <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-black"></div>

                  <div className="w-16 h-16 bg-black rounded-none flex items-center justify-center mb-4 mx-auto">
                    <Icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-2xl font-black text-black mb-2 text-center">
                    {item.title}
                  </h3>
                  <p className="text-black font-semibold text-center text-sm">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom border */}
        <div className="h-2 bg-black"></div>
      </section>

      {/* Events Section - Red with Ornate Style */}
      <section className="py-0 bg-primary">
        {/* Top border */}
        <div className="h-8 bg-black flex items-center justify-center">
          <div className="flex gap-3">
            {[...Array(20)].map((_, i) => (
              <span key={i} className="text-accent text-lg">◆</span>
            ))}
          </div>
        </div>

        <div className="container mx-auto px-4 py-20 md:py-28">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-black mb-4 uppercase tracking-tight">
              Upcoming Events
            </h2>
            <p className="text-lg text-black font-bold max-w-2xl mx-auto">
              Spectacular displays across Colombia
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-white border-4 border-black p-6 relative hover:shadow-2xl transition-shadow"
              >
                <div className="absolute top-2 left-2 w-5 h-5 border-t-2 border-l-2 border-black"></div>
                <div className="absolute top-2 right-2 w-5 h-5 border-t-2 border-r-2 border-black"></div>
                <div className="absolute bottom-2 left-2 w-5 h-5 border-b-2 border-l-2 border-black"></div>
                <div className="absolute bottom-2 right-2 w-5 h-5 border-b-2 border-r-2 border-black"></div>

                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary border-2 border-black rounded-none flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <p className="text-xs font-black text-black uppercase">
                      Dec {15 + i * 5}
                    </p>
                    <p className="text-black font-black">Event {i}</p>
                  </div>
                </div>
                <p className="text-black text-sm font-semibold mb-4">
                  Professional pyrotechnic display with music synchronization.
                </p>
                <Link
                  to="/events"
                  className="text-black hover:text-primary font-black text-sm uppercase tracking-wider"
                >
                  Learn More →
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/events"
              className="inline-block px-8 py-4 bg-black text-primary font-black rounded-none border-4 border-black hover:bg-primary hover:text-black transition-all uppercase tracking-wider"
            >
              All Events
            </Link>
          </div>
        </div>

        {/* Bottom border */}
        <div className="h-8 bg-black flex items-center justify-center">
          <div className="flex gap-3">
            {[...Array(20)].map((_, i) => (
              <span key={i} className="text-accent text-lg">◆</span>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - White with Borders */}
      <section className="py-0 bg-white">
        {/* Top border */}
        <div className="h-2 bg-black"></div>

        <div className="container mx-auto px-4 py-20 md:py-28">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-black mb-4 uppercase tracking-tight">
              What Customers Say
            </h2>
            <p className="text-lg text-black font-bold max-w-2xl mx-auto">
              Trusted by professionals across Colombia
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-primary border-4 border-black p-8 relative"
              >
                <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-black"></div>
                <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-black"></div>
                <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-black"></div>
                <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-black"></div>

                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      className="w-5 h-5 text-accent fill-accent"
                    />
                  ))}
                </div>
                <p className="text-black font-semibold italic mb-6 text-sm leading-relaxed">
                  "Exceptional quality and service! IGNITION has consistently delivered the best pyrotechnic products for our events. Highly recommended!"
                </p>
                <div className="pt-4 border-t-2 border-black">
                  <p className="font-black text-black">Customer {i}</p>
                  <p className="text-xs font-bold text-black uppercase">
                    Verified Purchase
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              to="/testimonials"
              className="inline-block px-8 py-4 bg-black text-white font-black rounded-none border-4 border-black hover:bg-primary hover:text-black transition-all uppercase tracking-wider"
            >
              More Reviews
            </Link>
          </div>
        </div>

        {/* Bottom border */}
        <div className="h-2 bg-black"></div>
      </section>

      {/* Locations - Red */}
      <section className="py-0 bg-primary">
        {/* Top border */}
        <div className="h-8 bg-black flex items-center justify-center">
          <div className="flex gap-3">
            {[...Array(20)].map((_, i) => (
              <span key={i} className="text-accent text-lg">◆</span>
            ))}
          </div>
        </div>

        <div className="container mx-auto px-4 py-20 md:py-28">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-black mb-4 uppercase tracking-tight">
              Visit Us
            </h2>
            <p className="text-lg text-black font-bold max-w-2xl mx-auto">
              Professional showrooms nationwide
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {["Bogotá", "Medellín", "Cali"].map((city) => (
              <div
                key={city}
                className="bg-white border-4 border-black p-6 relative hover:shadow-2xl transition-shadow"
              >
                <div className="absolute top-2 left-2 w-5 h-5 border-t-2 border-l-2 border-black"></div>
                <div className="absolute top-2 right-2 w-5 h-5 border-t-2 border-r-2 border-black"></div>
                <div className="absolute bottom-2 left-2 w-5 h-5 border-b-2 border-l-2 border-black"></div>
                <div className="absolute bottom-2 right-2 w-5 h-5 border-b-2 border-r-2 border-black"></div>

                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="w-6 h-6 text-primary" />
                  <h3 className="text-2xl font-black text-black">{city}</h3>
                </div>
                <p className="text-black text-sm font-semibold mb-4">
                  Professional showroom and customer service center
                </p>
                <Link
                  to="/locations"
                  className="text-primary hover:text-black font-black text-sm uppercase tracking-wider"
                >
                  View Details →
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              to="/locations"
              className="inline-block px-8 py-4 bg-black text-primary font-black rounded-none border-4 border-black hover:bg-primary hover:text-black transition-all uppercase tracking-wider"
            >
              All Locations
            </Link>
          </div>
        </div>

        {/* Bottom border */}
        <div className="h-8 bg-black flex items-center justify-center">
          <div className="flex gap-3">
            {[...Array(20)].map((_, i) => (
              <span key={i} className="text-accent text-lg">◆</span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Bold Black */}
      <section className="py-0 bg-black">
        <div className="container mx-auto px-4 py-20 md:py-24 text-center space-y-6 border-8 border-primary m-8">
          <h2 className="text-4xl md:text-5xl font-black text-primary uppercase tracking-wider">
            Ready to Ignite?
          </h2>
          <p className="text-lg text-accent font-bold max-w-2xl mx-auto">
            Browse our premium collection and experience pyrotechnic excellence.
          </p>
          <Link
            to="/products"
            className="inline-block px-8 py-4 bg-primary hover:bg-accent text-black font-black rounded-none border-4 border-primary transition-all uppercase tracking-wider"
          >
            Shop Now
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white border-t-8 border-primary py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-black text-2xl mb-4 text-accent uppercase">
                IGNITION
              </h3>
              <p className="text-white/80 text-sm font-semibold">
                Premium pyrotechnic products trusted across Colombia.
              </p>
            </div>
            <div>
              <h4 className="font-black mb-4 text-accent uppercase">Products</h4>
              <ul className="space-y-2 text-sm text-white/70 font-semibold">
                <li>
                  <Link to="/products" className="hover:text-accent transition-colors">
                    All Products
                  </Link>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition-colors">
                    Bestsellers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition-colors">
                    New Arrivals
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-black mb-4 text-accent uppercase">Company</h4>
              <ul className="space-y-2 text-sm text-white/70 font-semibold">
                <li>
                  <Link to="/events" className="hover:text-accent transition-colors">
                    Events
                  </Link>
                </li>
                <li>
                  <Link to="/locations" className="hover:text-accent transition-colors">
                    Locations
                  </Link>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition-colors">
                    About Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-black mb-4 text-accent uppercase">Support</h4>
              <ul className="space-y-2 text-sm text-white/70 font-semibold">
                <li>
                  <a href="#" className="hover:text-accent transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition-colors">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition-colors">
                    Safety Info
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60 font-semibold">
              <p>&copy; 2024 IGNITION. All rights reserved.</p>
              <div className="flex gap-6">
                <a href="#" className="hover:text-accent transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-accent transition-colors">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
