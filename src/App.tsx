import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { MapPin, Clock, Phone, Menu as MenuIcon, X, Star, ChevronRight, Instagram, Facebook, Twitter } from 'lucide-react';

const MENU_ITEMS = [
  {
    id: 1,
    name: 'Benne Khali Dose',
    description: 'Soft, spongy dosa cooked with generous amounts of homemade butter. Served with spicy coconut chutney and potato palya.',
    price: '₹70',
    image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&q=80&w=800&h=600',
    popular: true,
  },
  {
    id: 2,
    name: 'Benne Masala Dose',
    description: 'Crispy on the outside, soft inside, smeared with red chili garlic paste and stuffed with potato masala.',
    price: '₹90',
    image: 'https://images.unsplash.com/photo-1589301760014-d929f39ce9b1?auto=format&fit=crop&q=80&w=800&h=600',
  },
  {
    id: 3,
    name: 'Open Dose',
    description: 'Thick dosa topped with a special spicy powder and dollops of melting butter.',
    price: '₹80',
    image: 'https://images.unsplash.com/photo-1630383249896-424e482dfcb6?auto=format&fit=crop&q=80&w=800&h=600',
  },
  {
    id: 4,
    name: 'Filter Coffee',
    description: 'Authentic South Indian filter coffee, the perfect companion for your benne dose.',
    price: '₹30',
    image: 'https://images.unsplash.com/photo-1611162458324-aae1eb4129a4?auto=format&fit=crop&q=80&w=800&h=600',
  },
];

const REVIEWS = [
  {
    id: 1,
    name: 'Rahul K.',
    text: 'The best Benne Dose outside of Davangere! The butter literally melts in your mouth. The chutney is perfectly spicy.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Sneha M.',
    text: 'Authentic taste. The wood-fired aroma makes all the difference. Highly recommend the Benne Masala Dose.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Karthik S.',
    text: 'Crispy, buttery, and absolutely delicious. Pair it with their strong filter coffee for the best experience.',
    rating: 4,
  },
];

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-surface text-ink font-sans selection:bg-brand-500 selection:text-white">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-surface/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-serif font-bold text-2xl tracking-tight text-brand-950">
              Davangere <span className="text-brand-600">Benne Dose</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-sm font-medium hover:text-brand-600 transition-colors">Our Story</a>
            <a href="#menu" className="text-sm font-medium hover:text-brand-600 transition-colors">Menu</a>
            <a href="#reviews" className="text-sm font-medium hover:text-brand-600 transition-colors">Reviews</a>
            <a href="#visit" className="text-sm font-medium hover:text-brand-600 transition-colors">Visit Us</a>
            <button className="bg-brand-600 hover:bg-brand-700 text-white px-6 py-2.5 rounded-full text-sm font-medium transition-colors shadow-lg shadow-brand-500/20">
              Order Online
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-ink"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-full left-0 w-full bg-surface shadow-lg py-6 px-6 flex flex-col gap-4 md:hidden border-t border-brand-100"
          >
            <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium">Our Story</a>
            <a href="#menu" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium">Menu</a>
            <a href="#reviews" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium">Reviews</a>
            <a href="#visit" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium">Visit Us</a>
            <button className="bg-brand-600 text-white px-6 py-3 rounded-full text-base font-medium mt-2">
              Order Online
            </button>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&q=80&w=2000" 
            alt="Delicious Benne Dose" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-surface/95 via-surface/80 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100 text-brand-900 text-xs font-semibold uppercase tracking-wider mb-6">
              <Star size={14} className="fill-brand-500 text-brand-500" />
              Authentic Taste of Karnataka
            </div>
            <h1 className="text-6xl md:text-8xl font-serif font-bold leading-[1.1] tracking-tight mb-6 text-brand-950">
              Wood-fired.<br />
              <span className="italic font-light text-brand-600">Butter-drenched.</span><br />
              Perfection.
            </h1>
            <p className="text-lg md:text-xl text-brand-900/80 mb-10 max-w-lg leading-relaxed">
              Experience the legendary taste of Davangere right here. Crispy on the outside, soft inside, and served with our signature spicy chutney.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a href="#menu" className="bg-brand-950 hover:bg-brand-900 text-white px-8 py-4 rounded-full text-base font-medium transition-colors flex items-center gap-2">
                Explore Menu <ChevronRight size={18} />
              </a>
              <a href="#visit" className="bg-white hover:bg-brand-50 text-brand-950 px-8 py-4 rounded-full text-base font-medium transition-colors border border-brand-200">
                Find Location
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-brand-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-3xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1589301760014-d929f39ce9b1?auto=format&fit=crop&q=80&w=1000" 
                  alt="Making of Benne Dose" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl max-w-xs hidden md:block">
                <p className="font-serif text-xl italic text-brand-950 mb-2">"The secret is in the wood-fire and the homemade butter."</p>
                <p className="text-sm text-brand-600 font-medium uppercase tracking-wider">— Our Master Chef</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-950 mb-6">The Davangere Legacy</h2>
              <p className="text-lg text-brand-900/70 mb-6 leading-relaxed">
                Originating from the city of Davangere in Karnataka, the Benne Dose is not just a dish; it's a culinary emotion. Unlike regular dosas, our batter is fermented differently and cooked exclusively on wood-fired cast iron tawas.
              </p>
              <p className="text-lg text-brand-900/70 mb-8 leading-relaxed">
                We use generous amounts of fresh, homemade white butter (benne) that gives the dosa its characteristic golden-brown crust and melt-in-the-mouth texture. Served with our unique potato palya and spicy coconut chutney.
              </p>
              
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="font-serif text-2xl font-bold text-brand-600 mb-2">100%</h4>
                  <p className="text-sm font-medium uppercase tracking-wider text-brand-900/60">Wood-Fired Cooking</p>
                </div>
                <div>
                  <h4 className="font-serif text-2xl font-bold text-brand-600 mb-2">Fresh</h4>
                  <p className="text-sm font-medium uppercase tracking-wider text-brand-900/60">Homemade Butter</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-950 mb-4">Our Signatures</h2>
            <p className="text-lg text-brand-900/60 max-w-2xl mx-auto">Simple menu, perfected over years. Every item is crafted to deliver the authentic Davangere experience.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {MENU_ITEMS.map((item, index) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group flex flex-col sm:flex-row gap-6 bg-white p-6 rounded-3xl border border-brand-100 hover:border-brand-300 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-full sm:w-40 h-40 shrink-0 rounded-2xl overflow-hidden relative">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  {item.popular && (
                    <div className="absolute top-2 left-2 bg-brand-500 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full">
                      Popular
                    </div>
                  )}
                </div>
                <div className="flex flex-col justify-center flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-serif text-2xl font-bold text-brand-950">{item.name}</h3>
                    <span className="font-serif text-xl font-bold text-brand-600">{item.price}</span>
                  </div>
                  <p className="text-brand-900/60 leading-relaxed text-sm mb-4">{item.description}</p>
                  <button className="text-sm font-semibold text-brand-600 hover:text-brand-800 flex items-center gap-1 w-fit mt-auto transition-colors">
                    Add to Order <ChevronRight size={16} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Marquee Gallery */}
      <section className="py-12 bg-brand-950 overflow-hidden">
        <div className="flex gap-4 animate-marquee whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-4">
              <img src="https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&q=80&w=400&h=300" alt="Gallery" className="w-72 h-48 object-cover rounded-2xl opacity-80 hover:opacity-100 transition-opacity" referrerPolicy="no-referrer" />
              <img src="https://images.unsplash.com/photo-1589301760014-d929f39ce9b1?auto=format&fit=crop&q=80&w=400&h=300" alt="Gallery" className="w-72 h-48 object-cover rounded-2xl opacity-80 hover:opacity-100 transition-opacity" referrerPolicy="no-referrer" />
              <img src="https://images.unsplash.com/photo-1630383249896-424e482dfcb6?auto=format&fit=crop&q=80&w=400&h=300" alt="Gallery" className="w-72 h-48 object-cover rounded-2xl opacity-80 hover:opacity-100 transition-opacity" referrerPolicy="no-referrer" />
              <img src="https://images.unsplash.com/photo-1611162458324-aae1eb4129a4?auto=format&fit=crop&q=80&w=400&h=300" alt="Gallery" className="w-72 h-48 object-cover rounded-2xl opacity-80 hover:opacity-100 transition-opacity" referrerPolicy="no-referrer" />
            </div>
          ))}
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-24 bg-brand-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-950 mb-4">Loved by Locals</h2>
            <p className="text-lg text-brand-900/60 max-w-2xl mx-auto">Don't just take our word for it. Here's what our customers have to say.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {REVIEWS.map((review, index) => (
              <motion.div 
                key={review.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-brand-100"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={18} className="fill-brand-500 text-brand-500" />
                  ))}
                </div>
                <p className="text-brand-900/80 leading-relaxed mb-6 italic">"{review.text}"</p>
                <p className="font-serif font-bold text-brand-950">— {review.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit Us Section */}
      <section id="visit" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-brand-950 rounded-[3rem] overflow-hidden flex flex-col md:flex-row">
            <div className="p-12 md:p-16 flex-1 text-white flex flex-col justify-center">
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">Come Visit Us</h2>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-900 flex items-center justify-center shrink-0">
                    <MapPin className="text-brand-500" size={24} />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl font-bold mb-2">Location</h4>
                    <p className="text-white/70 leading-relaxed">123 Food Street, Indiranagar<br />Bengaluru, Karnataka 560038</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-900 flex items-center justify-center shrink-0">
                    <Clock className="text-brand-500" size={24} />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl font-bold mb-2">Opening Hours</h4>
                    <p className="text-white/70 leading-relaxed">Mon - Sun: 7:00 AM - 10:30 PM<br />(Closed on Tuesdays)</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-900 flex items-center justify-center shrink-0">
                    <Phone className="text-brand-500" size={24} />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl font-bold mb-2">Contact</h4>
                    <p className="text-white/70 leading-relaxed">+91 98765 43210<br />hello@davangerebennedose.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex-1 min-h-[400px] relative">
              {/* Placeholder for Map */}
              <img 
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1000" 
                alt="Restaurant Interior" 
                className="absolute inset-0 w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-surface py-12 border-t border-brand-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="font-serif font-bold text-xl tracking-tight text-brand-950">
              Davangere <span className="text-brand-600">Benne Dose</span>
            </span>
          </div>
          
          <div className="flex items-center gap-6 text-brand-900/60">
            <a href="#" className="hover:text-brand-600 transition-colors"><Instagram size={20} /></a>
            <a href="#" className="hover:text-brand-600 transition-colors"><Facebook size={20} /></a>
            <a href="#" className="hover:text-brand-600 transition-colors"><Twitter size={20} /></a>
          </div>
          
          <p className="text-sm text-brand-900/60">
            © {new Date().getFullYear()} Davangere Benne Dose. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
