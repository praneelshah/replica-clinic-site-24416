import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-serif mb-4">Imagine Dental & Orthodontics</h3>
            <p className="text-sm text-primary-foreground/80 mb-4">
              Your complete comprehensive cosmetic dental care destination. We offer a new encounter in patient care and comfort.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/services" className="hover:text-accent transition-colors">
                  Dental Services
                </Link>
              </li>
              <li>
                <Link to="/orthodontics" className="hover:text-accent transition-colors">
                  Orthodontics & Braces
                </Link>
              </li>
              <li>
                <Link to="/virtual-consultation" className="hover:text-accent transition-colors">
                  Virtual Consultation
                </Link>
              </li>
              <li>
                <Link to="/payment" className="hover:text-accent transition-colors">
                  Payment Options
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-lg">Contact Information</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>4600 S Nolan Rd, Ste C<br />Independence, MO 64055</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <a href="tel:8168803900" className="hover:text-accent transition-colors">
                  (816) 880-3900
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <a href="mailto:imaginedentalkc@gmail.com" className="hover:text-accent transition-colors">
                  imaginedentalkc@gmail.com
                </a>
              </li>
            </ul>
            <p className="mt-4 text-sm text-primary-foreground/80">
              Se Habla Español
            </p>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Imagine Dental & Orthodontics. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
