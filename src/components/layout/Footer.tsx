import { Link } from "react-router-dom";
import { Heart, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="care-container">
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-primary-foreground rounded-lg flex items-center justify-center">
                <Heart className="w-5 h-5 text-primary" />
              </div>
              <div className="text-xl font-bold">Blessed LEJ Care</div>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Compassionate aged care and disability support services in Brighton Le Sands and surrounding areas.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <nav className="space-y-2">
              <Link to="/" className="block hover:text-accent care-transition">
                Home
              </Link>
              <Link to="/about" className="block hover:text-accent care-transition">
                About Us
              </Link>
              <Link to="/services" className="block hover:text-accent care-transition">
                Services
              </Link>
              <Link to="/team" className="block hover:text-accent care-transition">
                Our Team
              </Link>
              <Link to="/testimonials" className="block hover:text-accent care-transition">
                Testimonials
              </Link>
              <Link to="/faq" className="block hover:text-accent care-transition">
                FAQ
              </Link>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Services</h3>
            <nav className="space-y-2">
              <Link to="/services/aged-care" className="block hover:text-accent care-transition">
                Aged Care Support
              </Link>
              <Link to="/services/disability-support" className="block hover:text-accent care-transition">
                Disability Support
              </Link>
              <Link to="/services/personal-care" className="block hover:text-accent care-transition">
                Personal Care
              </Link>
              <Link to="/services/meal-preparation" className="block hover:text-accent care-transition">
                Meal Preparation
              </Link>
              <Link to="/services/respite-care" className="block hover:text-accent care-transition">
                Respite Care
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3">
              <a
                href="tel:+61414326448"
                className="flex items-center space-x-3 hover:text-accent care-transition"
              >
                <Phone className="w-5 h-5" />
                <span>0414 326 448</span>
              </a>
              <a
                href="mailto:info@blessedlejcare.com.au"
                className="flex items-center space-x-3 hover:text-accent care-transition"
              >
                <Mail className="w-5 h-5" />
                <span>info@blessedlejcare.com.au</span>
              </a>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-0.5" />
                <div>
                  <div>Brighton Le Sands, NSW</div>
                  <div className="text-sm text-primary-foreground/70">
                    Serving Sydney Metro Area
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary/20 py-6 flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
          <div className="text-sm text-primary-foreground/70">
            &copy; {new Date().getFullYear()} Blessed LEJ Care. All rights reserved. ABN: 12345678901
          </div>
          <div className="flex space-x-6 text-sm">
            <Link 
              to="/legal/privacy-policy" 
              className="hover:text-accent care-transition"
            >
              Privacy Policy
            </Link>
            <Link 
              to="/legal/terms" 
              className="hover:text-accent care-transition"
            >
              Terms of Service
            </Link>
            <Link 
              to="/accessibility" 
              className="hover:text-accent care-transition"
            >
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;