import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/services", label: "Dental Services" },
    { path: "/orthodontics", label: "Braces/Orthodontics/Clear Aligners" },
    { path: "/virtual-consultation", label: "Virtual Orthodontic Consultation" },
    { path: "/payment", label: "Payment Options" },
    { path: "/contact", label: "Contact Us" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-background/98 backdrop-blur-lg shadow-xl border-b border-border/50' : 'bg-background/40 backdrop-blur-md border-b border-white/10'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center">
            <h1 className={`text-xl md:text-2xl font-serif font-bold tracking-wide transition-all duration-300 ${
              scrolled ? 'text-foreground' : 'text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]'
            }`}>
              IMAGINE DENTAL <span className="text-accent drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">&</span> ORTHODONTICS
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  scrolled
                    ? isActive(item.path)
                      ? "text-primary font-semibold"
                      : "text-foreground/80 hover:text-primary"
                    : isActive(item.path)
                      ? "text-white font-semibold drop-shadow-lg"
                      : "text-white/90 hover:text-white drop-shadow-lg"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Button variant="default" size="sm" className="ml-4 bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg">
              <a href="tel:8168803900">Call (816) 880-3900</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-2 transition-all duration-300 ${scrolled ? 'text-foreground' : 'text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]'} hover:scale-110`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden pb-4 space-y-2 bg-background/98 backdrop-blur-lg rounded-b-lg shadow-xl animate-in slide-in-from-top-4 duration-300">
            {navItems.map((item, index) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 text-sm font-medium transition-all duration-300 animate-in slide-in-from-right-4 ${
                  isActive(item.path)
                    ? "text-primary bg-secondary font-semibold"
                    : "text-foreground hover:text-primary hover:bg-secondary/50 hover:translate-x-1"
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {item.label}
              </Link>
            ))}
            <div className="px-4 pt-2 animate-in fade-in duration-500" style={{ animationDelay: '300ms' }}>
              <Button variant="default" size="sm" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <a href="tel:8168803900">Call (816) 880-3900</a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
