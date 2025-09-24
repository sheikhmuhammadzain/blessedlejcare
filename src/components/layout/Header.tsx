import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Heart, Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-sm border-b border-border sticky top-0 z-50">
      <div className="care-container">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-4">
            <div className="w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20  rounded-lg flex items-center justify-center">
              <img src="/logo1.png" alt="Logo" className="w-full h-full object-contain" />
            </div>
            <div className="text-2xl lg:text-4xl font-bold text-primary leading-none">
              Blessed LEJ Care
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`font-medium care-transition ${
                  isActive(item.href)
                    ? "text-primary border-b-2 border-primary"
                    : "text-foreground hover:text-primary"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:+61414326448"
              className="flex items-center space-x-2 text-primary hover:text-primary/80 care-transition"
            >
              <Phone className="w-4 h-4" />
              <span className="font-semibold">0414 326 448</span>
            </a>
            <Button asChild className="care-button-primary">
              <Link to="/contact">Get Support</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border bg-white">
            <div className="py-4 space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block font-medium care-transition ${
                    isActive(item.href)
                      ? "text-primary"
                      : "text-foreground hover:text-primary"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-border space-y-3">
                <a
                  href="tel:+61414326448"
                  className="flex items-center space-x-2 text-primary font-semibold"
                >
                  <Phone className="w-4 h-4" />
                  <span>0414 326 448</span>
                </a>
                <Button asChild className="care-button-primary w-full">
                  <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                    Get Support
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;