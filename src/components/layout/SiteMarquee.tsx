import React from "react";
import Marquee from "@/components/ui/Marquee";
import { Shield, Phone, MapPin, Clock, Heart, Star } from "lucide-react";

const Dot = () => (
  <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary/60" aria-hidden="true" />
);

const Item: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground care-transition">
    {children}
  </div>
);

const SiteMarquee: React.FC = () => {
  return (
    <div className="w-full bg-secondary/40 border-b border-border">
      <Marquee
        durationMs={28000}
        className="py-2"
        trackClassName="px-6"
        pauseOnHover
        gradient
      >
        <div className="flex items-center gap-8">
          <Item>
            <Shield className="w-4 h-4 text-primary" />
            <span className="font-medium">NDIS Registered Provider</span>
          </Item>
          <Dot />
          <Item>
            <MapPin className="w-4 h-4 text-primary" />
            <span>Brighton Le Sands • Rockdale • Sans Souci • Kogarah • Ramsgate</span>
          </Item>
          <Dot />
          <Item>
            <Clock className="w-4 h-4 text-primary" />
            <span>Reliable & Flexible Scheduling (Weekends/Public Holidays)</span>
          </Item>
          <Dot />
          <Item>
            <Heart className="w-4 h-4 text-primary" />
            <span>Person‑centred, compassionate in‑home care</span>
          </Item>
          <Dot />
          <Item>
            <Star className="w-4 h-4 text-warning" />
            <span>5‑Star Client Feedback</span>
          </Item>
          <Dot />
          <a
            href="tel:+61414326448"
            className="flex items-center gap-2 text-sm font-semibold text-primary hover:opacity-90 care-transition"
            aria-label="Call 0414 326 448"
          >
            <Phone className="w-4 h-4" />
            <span>Call 0414 326 448</span>
          </a>
        </div>
      </Marquee>
    </div>
  );
};

export default SiteMarquee;
