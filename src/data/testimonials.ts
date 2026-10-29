export interface Testimonial {
  id: string;
  clientName: string;
  quote: string;
  rating: number;
  serviceReference: string;
  date: string;
  published: boolean;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    clientName: "Margaret S.",
    quote: "Clarice has been absolutely wonderful. She treats my mother with such dignity and respect, and we can see how much happier Mum is since she started coming. The personal care is excellent and Clarice always goes above and beyond.",
    rating: 5,
    serviceReference: "Personal Care",
    date: "2024-08-15",
    published: true
  },
  {
    id: "2", 
    clientName: "David K.",
    quote: "The disability support services have made such a difference to our son's independence. The team understands his needs and helps him participate in community activities he loves. Highly professional and caring service.",
    rating: 5,
    serviceReference: "Disability Support", 
    date: "2024-07-22",
    published: true
  },
  {
    id: "3",
    clientName: "Jennifer M.",
    quote: "We were struggling to care for Dad at home until we found Blessed LEJ Care. The respite care gives us peace of mind and Dad enjoys the companionship. The carers are qualified, reliable, and truly care.",
    rating: 5,
    serviceReference: "Respite Care",
    date: "2024-06-10", 
    published: true
  },
  {
    id: "4",
    clientName: "Robert T.",
    quote: "The meal preparation service has been fantastic. The meals are nutritious, delicious, and cater to my diabetic diet perfectly. It's wonderful to have home-cooked meals without the stress of shopping and cooking.",
    rating: 5,
    serviceReference: "Meal Preparation",
    date: "2024-05-28",
    published: true
  },
  {
    id: "5",
    clientName: "Sarah L.",
    quote: "Clarice helped us navigate the NDIS system and provided excellent support for our daughter. The communication is excellent and the care is always person-centered. We couldn't ask for better support.",
    rating: 5,
    serviceReference: "NDIS Support",
    date: "2024-04-18",
    published: true
  },
  {
    id: "6",
    clientName: "Frank W.",
    quote: "After my stroke, I thought I'd have to go into care. The aged care support from Blessed LEJ Care has allowed me to stay in my own home. The staff are professional, kind, and help me maintain my independence.",
    rating: 5,
    serviceReference: "Aged Care Support",
    date: "2024-03-14",
    published: true
  }
];