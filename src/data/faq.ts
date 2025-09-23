export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
  order: number;
}

export const faqs: FAQ[] = [
  {
    id: "1",
    question: "What areas do you service?",
    answer: "We primarily service Brighton Le Sands and surrounding areas in the Sydney metropolitan region. This includes Rockdale, Kogarah, Sans Souci, Monterey, and nearby suburbs. Contact us to confirm if we service your specific location.",
    category: "Service Area",
    order: 1
  },
  {
    id: "2", 
    question: "Are you NDIS registered?",
    answer: "Yes, we are an NDIS registered provider. We work with both self-managed and plan-managed NDIS participants to deliver support services aligned with their NDIS goals and plans.",
    category: "NDIS",
    order: 2
  },
  {
    id: "3",
    question: "What qualifications do your support workers have?",
    answer: "All our support workers hold relevant qualifications including Certificate III in Individual Support (Ageing, Home and Community) or equivalent. They also have current First Aid, CPR, Manual Handling certifications, and undergo regular training updates.",
    category: "Qualifications",
    order: 3
  },
  {
    id: "4",
    question: "How do I get started with your services?",
    answer: "Getting started is easy. Contact us by phone or through our website to discuss your needs. We'll arrange an initial consultation to understand your requirements and develop a care plan that works for you.",
    category: "Getting Started",
    order: 4
  },
  {
    id: "5",
    question: "What are your rates?",
    answer: "Our rates vary depending on the type of service and timing. For NDIS participants, we charge according to NDIS price guidelines. For private clients, we provide competitive rates. Contact us for a detailed quote based on your specific needs.",
    category: "Pricing",
    order: 5
  },
  {
    id: "6", 
    question: "Can I choose my support worker?",
    answer: "Yes, we believe in matching clients with compatible support workers. We'll introduce you to potential carers and, where possible, assign someone you're comfortable with. Continuity of care is important to us.",
    category: "Service Delivery",
    order: 6
  },
  {
    id: "7",
    question: "What if I need to cancel or change an appointment?",
    answer: "We understand that plans can change. We ask for at least 2 hours notice for cancellations where possible. For planned changes, please give us as much notice as you can. Emergency situations are always accommodated.",
    category: "Scheduling",
    order: 7
  },
  {
    id: "8",
    question: "Do you provide services on weekends and public holidays?",
    answer: "Yes, we provide services seven days a week including weekends and public holidays. Weekend and public holiday services may have different rates. Contact us to discuss your specific scheduling needs.",
    category: "Scheduling", 
    order: 8
  },
  {
    id: "9",
    question: "Are your support workers police checked?",
    answer: "Absolutely. All our support workers undergo thorough background checks including police checks and Working with Vulnerable People checks. We also verify their qualifications and check references before employment.",
    category: "Safety & Security",
    order: 9
  },
  {
    id: "10",
    question: "What COVID-19 safety measures do you follow?",
    answer: "We follow all current health department guidelines for COVID-19 safety. This includes health screening, appropriate use of PPE, vaccination requirements for staff, and maintaining hygiene protocols during all service delivery.",
    category: "Health & Safety",
    order: 10
  },
  {
    id: "11",
    question: "Can family members be involved in the care planning?",
    answer: "Yes, we encourage family involvement in care planning where the client consents. We believe in collaborative care and regular communication with families to ensure the best outcomes for our clients.",
    category: "Family Involvement",
    order: 11
  },
  {
    id: "12",
    question: "What happens in an emergency during a visit?",
    answer: "All our support workers are trained in emergency procedures and first aid. In case of an emergency, they will call emergency services if needed and contact our management team and emergency contacts. We have clear protocols for different emergency situations.",
    category: "Emergency Procedures",
    order: 12
  }
];