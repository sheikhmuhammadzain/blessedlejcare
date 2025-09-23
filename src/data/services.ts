export interface Service {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  longDescription: string;
  benefits: string[];
  whatsIncluded: string[];
  sessionDuration: string;
  pricingNotes: string;
  ndisSupported: boolean;
  icon: string;
  relatedServices: string[];
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}

export const services: Service[] = [
  {
    id: "aged-care",
    title: "Aged Care Support",
    slug: "aged-care",
    shortDescription: "Compassionate in-home aged care services to help seniors maintain independence and dignity in their own homes.",
    longDescription: `Our Aged Care Support service provides comprehensive assistance for older adults who want to remain in their own homes while receiving the care they need. We focus on maintaining dignity, independence, and quality of life through person-centered care.

Our qualified support workers provide assistance with daily activities, companionship, and practical support tailored to each individual's needs and preferences. We work closely with families and healthcare professionals to ensure continuity of care.`,
    benefits: [
      "Maintain independence at home",
      "Qualified and experienced carers", 
      "Flexible scheduling to suit your routine",
      "Dignity-focused approach to care",
      "Regular communication with family",
      "Coordinated care with healthcare providers"
    ],
    whatsIncluded: [
      "Personal care and grooming assistance",
      "Meal preparation and nutrition support",
      "Medication reminders and assistance",
      "Light housekeeping and domestic tasks",
      "Companionship and social interaction",
      "Transportation to appointments",
      "Mobility and exercise support"
    ],
    sessionDuration: "2-8 hours per visit",
    pricingNotes: "Available through NDIS funding or private pay arrangements",
    ndisSupported: true,
    icon: "Heart",
    relatedServices: ["personal-care", "meal-preparation", "respite-care"],
    faqs: [
      {
        question: "What qualifications do your aged care workers have?",
        answer: "All our support workers are qualified in aged care with certifications including First Aid, CPR, Manual Handling, and Infection Control. They also undergo police checks and working with vulnerable people checks."
      },
      {
        question: "Can I choose my regular carer?",
        answer: "Yes, we believe in continuity of care. Where possible, we assign a regular carer who gets to know your preferences and routine, with backup carers available when needed."
      }
    ]
  },
  {
    id: "disability-support",
    title: "Disability Support", 
    slug: "disability-support",
    shortDescription: "NDIS-approved disability support services for self-managed and plan-managed participants.",
    longDescription: `Our Disability Support services are designed to help people with disabilities live independently and achieve their goals. We provide person-centered support that focuses on building capacity, developing skills, and enhancing quality of life.

As an NDIS-approved provider, we work with participants to deliver support that aligns with their NDIS plan goals. Our approach is strengths-based, focusing on what participants can do while providing assistance where needed.`,
    benefits: [
      "NDIS approved provider",
      "Person-centered approach",
      "Capacity building focus",
      "Flexible support arrangements",
      "Goal-oriented service delivery",
      "Community participation support"
    ],
    whatsIncluded: [
      "Personal care and daily living skills",
      "Community access and participation",
      "Domestic assistance and life skills",
      "Social and recreational activities",
      "Transport and mobility support",
      "Assistance with self-care activities"
    ],
    sessionDuration: "1-8 hours per session",
    pricingNotes: "NDIS funded for eligible participants (self-managed and plan-managed)",
    ndisSupported: true,
    icon: "Users",
    relatedServices: ["personal-care", "community-access", "life-skills"],
    faqs: [
      {
        question: "Do you work with self-managed NDIS participants?",
        answer: "Yes, we work with both self-managed and plan-managed NDIS participants. We provide all necessary documentation and invoicing to make the process simple."
      },
      {
        question: "What areas do you service?",
        answer: "We provide disability support services across the Sydney metropolitan area, with our primary service area being Brighton Le Sands and surrounding suburbs."
      }
    ]
  },
  {
    id: "personal-care",
    title: "Personal Care",
    slug: "personal-care",
    shortDescription: "Dignified personal care assistance including showering, dressing, and grooming support.",
    longDescription: `Our Personal Care service provides respectful, dignified assistance with intimate personal care needs. We understand that requiring help with personal care can be sensitive, which is why our approach prioritizes dignity, privacy, and individual preferences.

Our qualified support workers are trained in person-centered care approaches and understand the importance of maintaining dignity while providing necessary assistance. We work at your pace and respect your choices about how care is provided.`,
    benefits: [
      "Dignified and respectful approach",
      "Trained in person-centered care",
      "Flexible to personal preferences", 
      "Maintains privacy and independence",
      "Qualified and experienced staff",
      "Same-gender carer options available"
    ],
    whatsIncluded: [
      "Assistance with showering and bathing",
      "Help with dressing and undressing",
      "Grooming and personal hygiene support",
      "Incontinence care and management",
      "Oral care and dental hygiene",
      "Mobility assistance and positioning"
    ],
    sessionDuration: "1-3 hours per visit",
    pricingNotes: "Available through NDIS, aged care packages, or private arrangements",
    ndisSupported: true,
    icon: "User",
    relatedServices: ["aged-care", "disability-support", "respite-care"],
    faqs: [
      {
        question: "Can I request a same-gender carer?",
        answer: "Absolutely. We understand the importance of comfort and dignity in personal care. We can arrange same-gender carers based on availability and your preferences."
      },
      {
        question: "What if I need help with incontinence care?",
        answer: "Our support workers are trained and experienced in incontinence care. We provide respectful assistance while maintaining your dignity and comfort."
      }
    ]
  },
  {
    id: "meal-preparation",
    title: "Meal Preparation",
    slug: "meal-preparation", 
    shortDescription: "Nutritious meal planning, preparation, and assistance with special dietary requirements.",
    longDescription: `Our Meal Preparation service ensures you receive nutritious, tasty meals that meet your dietary needs and personal preferences. We can prepare meals in your home or assist with meal planning and shopping.

We understand that good nutrition is essential for health and wellbeing. Our support workers can accommodate special diets, cultural preferences, and medical dietary requirements while ensuring meals remain enjoyable and appealing.`,
    benefits: [
      "Nutritious meal planning",
      "Accommodates special diets",
      "Uses fresh, quality ingredients",
      "Respects cultural preferences", 
      "Portion control and nutrition focus",
      "Meal preparation in your kitchen"
    ],
    whatsIncluded: [
      "Meal planning and menu development",
      "Grocery shopping assistance", 
      "Fresh meal preparation and cooking",
      "Special dietary requirement support",
      "Kitchen cleaning and organization",
      "Assistance with eating if required"
    ],
    sessionDuration: "2-4 hours per session",
    pricingNotes: "Grocery costs additional to service fees",
    ndisSupported: true,
    icon: "ChefHat",
    relatedServices: ["aged-care", "disability-support", "domestic-assistance"],
    faqs: [
      {
        question: "Can you accommodate special diets like diabetic or gluten-free?",
        answer: "Yes, our support workers are trained to prepare meals for various dietary requirements including diabetic, gluten-free, low-sodium, and other medical diets."
      },
      {
        question: "Do you do the grocery shopping too?",
        answer: "Yes, we can accompany you to do grocery shopping or do the shopping for you based on your meal plan and preferences."
      }
    ]
  },
  {
    id: "respite-care",
    title: "Respite Care",
    slug: "respite-care",
    shortDescription: "Temporary relief care for family caregivers, providing peace of mind and quality care.",
    longDescription: `Our Respite Care service provides temporary relief for family caregivers while ensuring their loved ones receive quality, professional care. We understand that caring for someone can be physically and emotionally demanding, and taking breaks is essential.

During respite care, we provide the same level of care and attention that families provide, allowing caregivers to rest, attend to other commitments, or simply take some personal time knowing their loved one is in capable, caring hands.`,
    benefits: [
      "Professional relief for family carers",
      "Maintains routine and familiarity",
      "Qualified and trustworthy staff",
      "Flexible duration options",
      "Peace of mind for families",
      "Continuity of care approach"
    ],
    whatsIncluded: [
      "Personal care and supervision",
      "Medication administration",
      "Meal preparation and assistance",
      "Companionship and activities",
      "Safety monitoring and support",
      "Emergency response if needed"
    ],
    sessionDuration: "4 hours to overnight care",
    pricingNotes: "Available through NDIS, aged care packages, or private pay",
    ndisSupported: true,
    icon: "Clock",
    relatedServices: ["aged-care", "disability-support", "personal-care"],
    faqs: [
      {
        question: "How much notice do you need for respite care?",
        answer: "We prefer at least 48 hours notice for planned respite care, though we can accommodate urgent requests where possible based on staff availability."
      },
      {
        question: "Can you provide overnight respite care?",
        answer: "Yes, we offer overnight respite care for situations where family carers need extended time away or assistance during night hours."
      }
    ]
  }
];