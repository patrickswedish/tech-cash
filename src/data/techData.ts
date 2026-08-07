export interface TechCategory {
  id: string;
  name: string;
  icon: string;
  description: string;
  popularModels: TechModel[];
}

export interface TechModel {
  id: string;
  name: string;
  baseMarketPrice: number; // Avg estimated resale price on Marktplaats/Tweakers
  specsOptions: {
    label: string;
    multiplier: number;
  }[];
}

export interface RefurbishedItem {
  id: string;
  title: string;
  category: string;
  specs: string;
  conditionGrade: 'A+' | 'A' | 'B';
  conditionText: string;
  batteryHealth?: string;
  price: number;
  originalPrice: number;
  image: string;
  badge?: string;
  inStock: boolean;
  warranty: string;
  features: string[];
}

export const CATEGORIES: TechCategory[] = [
  {
    id: 'macbook',
    name: 'Apple MacBook',
    icon: 'Laptop',
    description: 'MacBook Pro, MacBook Air (M1, M2, M3, M4 & Intel)',
    popularModels: [
      {
        id: 'mbp-m3-pro',
        name: 'MacBook Pro 14" M3 Pro (2023)',
        baseMarketPrice: 1450,
        specsOptions: [
          { label: '18GB RAM / 512GB SSD', multiplier: 1.0 },
          { label: '36GB RAM / 1TB SSD', multiplier: 1.25 },
        ],
      },
      {
        id: 'mbp-m2-pro',
        name: 'MacBook Pro 14" M2 Pro (2023)',
        baseMarketPrice: 1150,
        specsOptions: [
          { label: '16GB RAM / 512GB SSD', multiplier: 1.0 },
          { label: '32GB RAM / 1TB SSD', multiplier: 1.2 },
        ],
      },
      {
        id: 'mba-m2',
        name: 'MacBook Air 13" M2 (2022)',
        baseMarketPrice: 780,
        specsOptions: [
          { label: '8GB RAM / 256GB SSD', multiplier: 1.0 },
          { label: '16GB RAM / 512GB SSD', multiplier: 1.22 },
        ],
      },
      {
        id: 'mba-m1',
        name: 'MacBook Air 13" M1 (2020)',
        baseMarketPrice: 520,
        specsOptions: [
          { label: '8GB RAM / 256GB SSD', multiplier: 1.0 },
          { label: '16GB RAM / 512GB SSD', multiplier: 1.18 },
        ],
      },
    ],
  },
  {
    id: 'iphone',
    name: 'iPhone & iPad',
    icon: 'Smartphone',
    description: 'iPhone 15, 14, 13 Pro Max, iPad Pro M2',
    popularModels: [
      {
        id: 'ip15-pro-max',
        name: 'iPhone 15 Pro Max',
        baseMarketPrice: 850,
        specsOptions: [
          { label: '256GB', multiplier: 1.0 },
          { label: '512GB', multiplier: 1.15 },
        ],
      },
      {
        id: 'ip15-pro',
        name: 'iPhone 15 Pro',
        baseMarketPrice: 720,
        specsOptions: [
          { label: '128GB', multiplier: 1.0 },
          { label: '256GB', multiplier: 1.12 },
        ],
      },
      {
        id: 'ip14-pro',
        name: 'iPhone 14 Pro',
        baseMarketPrice: 580,
        specsOptions: [
          { label: '128GB', multiplier: 1.0 },
          { label: '256GB', multiplier: 1.1 },
        ],
      },
      {
        id: 'ipad-pro-m2',
        name: 'iPad Pro 11" M2 WiFi',
        baseMarketPrice: 620,
        specsOptions: [
          { label: '128GB', multiplier: 1.0 },
          { label: '256GB + 5G', multiplier: 1.2 },
        ],
      },
    ],
  },
  {
    id: 'gpu',
    name: 'NVIDIA & AMD GPUs',
    icon: 'Cpu',
    description: 'RTX 4090, 4080, 4070 Ti, 3080, RX 7900 XTX',
    popularModels: [
      {
        id: 'rtx-4090',
        name: 'NVIDIA GeForce RTX 4090 24GB',
        baseMarketPrice: 1400,
        specsOptions: [
          { label: 'ASUS / MSI / Gigabyte Custom', multiplier: 1.0 },
          { label: 'ROG Strix / Suprim X Watercooled', multiplier: 1.12 },
        ],
      },
      {
        id: 'rtx-4080-super',
        name: 'NVIDIA GeForce RTX 4080 Super 16GB',
        baseMarketPrice: 820,
        specsOptions: [
          { label: 'Standaard Dual/Triple Fan', multiplier: 1.0 },
          { label: 'OC Edition', multiplier: 1.08 },
        ],
      },
      {
        id: 'rtx-3080',
        name: 'NVIDIA GeForce RTX 3080 10GB',
        baseMarketPrice: 380,
        specsOptions: [
          { label: '10GB GDDR6X', multiplier: 1.0 },
          { label: '12GB LHR', multiplier: 1.12 },
        ],
      },
    ],
  },
  {
    id: 'console',
    name: 'Gaming Consoles',
    icon: 'Gamepad2',
    description: 'PlayStation 5, PS5 Pro, Xbox Series X, Nintendo Switch OLED',
    popularModels: [
      {
        id: 'ps5-slim',
        name: 'PlayStation 5 Slim Disc Edition',
        baseMarketPrice: 380,
        specsOptions: [
          { label: 'Standaard + 1 Controller', multiplier: 1.0 },
          { label: 'Inclusief 2 Controllers + Extra SSD 1TB', multiplier: 1.2 },
        ],
      },
      {
        id: 'xbox-series-x',
        name: 'Xbox Series X 1TB',
        baseMarketPrice: 320,
        specsOptions: [
          { label: 'Standaard Zwart 1TB', multiplier: 1.0 },
          { label: 'Digital Robot White 2TB', multiplier: 1.15 },
        ],
      },
      {
        id: 'switch-oled',
        name: 'Nintendo Switch OLED',
        baseMarketPrice: 210,
        specsOptions: [
          { label: 'Standaard Wit/Neon', multiplier: 1.0 },
          { label: 'Zelda / Mario Special Edition', multiplier: 1.15 },
        ],
      },
    ],
  },
];

export const REFURBISHED_STORE: RefurbishedItem[] = [
  {
    id: 'ref-mbp-m2-14',
    title: 'Apple MacBook Pro 14" M2 Pro (16GB RAM / 512GB SSD)',
    category: 'macbook',
    specs: 'M2 Pro (10-core CPU / 16-core GPU) • Space Grijs • QWERTY',
    conditionGrade: 'A+',
    conditionText: 'Zo goed als nieuw, krasvrij scherm & behuizing',
    batteryHealth: '98% Batterijconditie (Slechts 42 laadcycli)',
    price: 1390,
    originalPrice: 2449,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80',
    badge: '💎 TOPDEAL',
    inStock: true,
    warranty: '6 Maanden Volledige Garantie',
    features: [
      '14-punts inspectie door gecertificeerde technicus',
      'Inclusief originele Apple 67W MagSafe 3 Oplader',
      'Direct op te halen bij TU/e of gratis aangetekende PostNL verzending',
    ],
  },
  {
    id: 'ref-rtx-4080',
    title: 'ASUS ROG Strix GeForce RTX 4080 OC 16GB GDDR6X',
    category: 'gpu',
    specs: '16GB GDDR6X • ARGB Triple Fan • Dual BIOS',
    conditionGrade: 'A',
    conditionText: 'Uitstekende staat, 100% stress-getest in FurMark & 3DMark',
    price: 920,
    originalPrice: 1499,
    image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=800&q=80',
    badge: '🔥 POPULAIR',
    inStock: true,
    warranty: '6 Maanden Garantie',
    features: [
      'Gereinigd, verse thermal paste aangebracht (Thermal Grizzly)',
      'Inclusief originele 16-pin 12VHPWR voedingskabel adapter',
      'Direct af te halen in Eindhoven Centrum',
    ],
  },
  {
    id: 'ref-ip14pro-256',
    title: 'Apple iPhone 14 Pro 256GB - Deep Purple',
    category: 'iphone',
    specs: '6.1" Super Retina XDR • 120Hz ProMotion • Dynamic Island',
    conditionGrade: 'A+',
    conditionText: 'Krasvrij scherm met gehard glas protector',
    batteryHealth: '94% Originele Apple Batterij',
    price: 680,
    originalPrice: 1329,
    image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80',
    badge: '⚡ SNEL LEVERBAAR',
    inStock: true,
    warranty: '6 Maanden Garantie',
    features: [
      'iCloud-vrij & SIM-lock vrij ingesteld',
      'Gratis nieuwe USB-C snellaadkabel inbegrepen',
      'DOR-gecontroleerd op eerlijke herkomst',
    ],
  },
  {
    id: 'ref-ps5-disc',
    title: 'Sony PlayStation 5 Disc Edition + 2e DualSense Controller',
    category: 'console',
    specs: '825GB SSD • 4K 120Hz Ultra HD Blu-Ray Disc Drive',
    conditionGrade: 'A',
    conditionText: 'Zeer schone console, geruisloze koeling',
    price: 410,
    originalPrice: 599,
    image: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=800&q=80',
    inStock: true,
    warranty: '6 Maanden Garantie',
    features: [
      'Inclusief 2x Originele DualSense Draadloze Controllers',
      'Inclusief HDMI 2.1 & Voedingskabel',
      'Grondig stofvrij gemaakt & thermisch getest',
    ],
  },
];