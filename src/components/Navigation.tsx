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
      scrolled ? 'bg-background/98 backdrop-blur-lg shadow-xl border-b border-border/50' : 'bg-gradient-to-b from-black/60 to-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center">
            <h1 className={`text-2xl font-serif font-bold tracking-wide transition-colors ${
              scrolled ? 'text-foreground' : 'text-white drop-shadow-lg'
            }`}>
              IMAGINE DENTAL <span className="text-accent">&</span> ORTHODONTICS
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
            className={`lg:hidden p-2 transition-colors ${scrolled ? 'text-foreground' : 'text-white drop-shadow-lg'}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden pb-4 space-y-2 bg-background/98 backdrop-blur-lg rounded-b-lg shadow-xl">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 text-sm font-medium transition-all ${
                  isActive(item.path)
                    ? "text-primary bg-secondary font-semibold"
                    : "text-foreground/80 hover:text-primary hover:bg-secondary/50"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="px-4 pt-2">
              <Button variant="default" size="sm" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
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
