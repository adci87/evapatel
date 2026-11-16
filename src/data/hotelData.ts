export interface Destination {
  id: string;
  city: string;
  district: string;
  suites: string;
  tables: string;
  highlight: string;
}

export interface ServiceItem {
  id: string;
  number: string;
  category: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  highlights: string[];
  actionLabel: string;
  inquiryValue: string;
}

export const HERO_IMAGE = {
  src: '/src/assets/images/hero_dutch_casino_hotel_1794834512733.jpg',
  alt: 'Amstel Grand modern limestone and glass casino hotel illuminated along an Amsterdam canal at blue hour dusk',
};

export const ABOUT_IMAGE = {
  src: '/src/assets/images/about_hotel_atrium_1794834515095.jpg',
  alt: 'Sunlit white limestone hotel lobby atrium with tall glass windows and royal blue lounge seating',
};

export const DESTINATIONS: Destination[] = [
  {
    id: 'amsterdam',
    city: 'Amsterdam',
    district: 'Amstel Canal District',
    suites: '210 Suites',
    tables: '38 Tables',
    highlight: 'Waterfront penthouses and private boat arrival',
  },
  {
    id: 'scheveningen',
    city: 'Scheveningen',
    district: 'North Sea Boulevard',
    suites: '185 Suites',
    tables: '32 Tables',
    highlight: 'Panoramic ocean terraces and coastal thermal spa',
  },
  {
    id: 'rotterdam',
    city: 'Rotterdam',
    district: 'Kop van Zuid',
    suites: '165 Suites',
    tables: '28 Tables',
    highlight: 'Skyline architectural tower overlooking the Maas',
  },
  {
    id: 'maastricht',
    city: 'Maastricht',
    district: 'Vrijthof Quarter',
    suites: '120 Suites',
    tables: '22 Tables',
    highlight: 'Limburg limestone courtyard and private cellar salon',
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'suites',
    number: '01',
    category: 'Accommodation',
    title: 'Waterfront Suites & Penthouses',
    description:
      'Soundproofed five-star suites tailored in white oak, Belgian linen, and deep Dutch blue textiles with unobstructed canal or North Sea views.',
    image: '/src/assets/images/service_luxury_suites_1794834512426.jpg',
    imageAlt: 'Modern Dutch five-star hotel suite with crisp white bedding, navy armchair, and canal views',
    highlights: [
      'Private chauffeur transfer from Schiphol Airport',
      'Guaranteed 14:00 late checkout for salon guests',
      '24-hour in-suite dining and pressing service',
    ],
    actionLabel: 'Inquire About Suites',
    inquiryValue: 'Waterfront Suites & Accommodation',
  },
  {
    id: 'gaming',
    number: '02',
    category: 'Licensed Gaming',
    title: 'Private Gaming & VIP Salons',
    description:
      'Discreet European roulette, blackjack, punto banco, and poker salons regulated under Dutch Kansspelautoriteit standards with dedicated table hosts.',
    image: '/src/assets/images/service_vip_casino_salon_1794834513753.jpg',
    imageAlt: 'Private European VIP casino salon with navy-blue baize roulette and blackjack tables',
    highlights: [
      'Single-zero European roulette & high-limit tables',
      'Private Salon Privé bookings for up to 12 guests',
      'KSA-certified fair play and discreet entry protocol',
    ],
    actionLabel: 'Request Salon Access',
    inquiryValue: 'Private Gaming & VIP Salons',
  },
  {
    id: 'dining',
    number: '03',
    category: 'Culinary & Wellness',
    title: 'Coastal Dining & Thermal Spa',
    description:
      'Seasonal North Sea seafood, sommelier-curated European cellars, and blue-stone thermal hydrotherapy circuits reserved for overnight and salon guests.',
    image: '/src/assets/images/service_dining_wellness_1794834512798.jpg',
    imageAlt: 'Contemporary Dutch coastal hotel restaurant with white tablecloths and cobalt blue glassware overlooking the sea',
    highlights: [
      'Tasting menus featuring Zeeland oysters & turbot',
      'Late-evening brasserie open until 02:00 CET',
      'Heated saltwater pool, Finnish sauna & hammam',
    ],
    actionLabel: 'Reserve Dining & Spa',
    inquiryValue: 'Coastal Dining & Thermal Spa',
  },
];

export const ABOUT_METRICS = [
  { value: '4', label: 'Dutch Flagship Cities' },
  { value: '680+', label: 'Waterfront Suites' },
  { value: '24/7', label: 'Licensed Concierge' },
];
