export interface IrnDimension {
  code: string;       // e.g. RES-1
  csfCode: string;    // e.g. SOV-1
  labelFr: string;    // French IRN label
  labelEn: string;    // English CSF label
  weight: number;     // percentage
  subdimensions: string[];
}

export const IRN_DIMENSIONS: IrnDimension[] = [
  {
    code: 'RES-1', csfCode: 'SOV-1',
    labelFr: 'Résilience Stratégique',
    labelEn: 'Strategic Sovereignty',
    weight: 15,
    subdimensions: [
      'EU governance: Decision-making under EU jurisdiction',
      'Control stability: Protection against ownership/control changes',
      'EU financing: Reliance on European funding sources',
      'EU value creation: Investment, jobs, and economic contribution in the EU',
      'EU sovereignty alignment: Supports EU digital, green, and industrial goals',
      'Resilience: Maintains secure operations despite external pressure',
    ],
  },
  {
    code: 'RES-2', csfCode: 'SOV-2',
    labelFr: 'Résilience Économique et Juridique',
    labelEn: 'Legal & Jurisdictional Sovereignty',
    weight: 10,
    subdimensions: [
      'Legal jurisdiction: National laws governing operations and contracts',
      'Non-EU law exposure: Impact of extraterritorial régulations',
      'Foreign access risk: Potential authority access to data/systems',
      'International restrictions: Constraints on technology, data, or transfers',
      'IP sovereignty: Location and jurisdiction of IP creation and ownership',
    ],
  },
  {
    code: 'RES-3', csfCode: 'SOV-3',
    labelFr: 'Résilience Data & IA',
    labelEn: 'Data & AI Sovereignty',
    weight: 10,
    subdimensions: [
      'Customer-controlled encryption: Customer retains exclusive cryptographic control',
      'Transparency & deletion: Full access auditing and verifiable data erasure',
      'EU data residency: Storage and processing remain strictly within the EU',
      'EU AI sovereignty: AI models and pipelines under EU control',
      'Reduced dependency: Limits reliance on non-EU technologies',
    ],
  },
  {
    code: 'RES-4', csfCode: 'SOV-4',
    labelFr: 'Résilience Opérationnelle',
    labelEn: 'Operational Sovereignty',
    weight: 15,
    subdimensions: [
      'Portability: Easy migration and integration with EU alternatives',
      'EU operational autonomy: EU teams can operate and support services independently',
      'EU skills ecosystem: Availability of qualified EU talent',
      'EU-based support: Support delivered within the EU under EU law',
      'Knowledge sovereignty: Access to documentation, source code, and operational know-how',
      'Supply chain control: Critical suppliers and subcontractors under EU legal control',
    ],
  },
  {
    code: 'RES-5', csfCode: 'SOV-5',
    labelFr: 'Résilience Supply-Chain',
    labelEn: 'Supply Chain Sovereignty',
    weight: 20,
    subdimensions: [
      'Hardware sovereignty: Origin and manufacturing location of critical hardware',
      'Firmware control: Jurisdiction and provenance of embedded code and firmware',
      'Software sovereignty: Origin, development, distribution, and update governance',
      'Dependency risk: Reliance on non-EU vendors, facilities, or proprietary technologies',
      'Supply chain transparency: End-to-end visibility and auditability',
    ],
  },
  {
    code: 'RES-6', csfCode: 'SOV-6',
    labelFr: 'Résilience Technologique',
    labelEn: 'Technology Sovereignty',
    weight: 15,
    subdimensions: [
      'Open interoperability: Uses open APIs, protocols, and standards',
      'Open source transparency: Audit, modify, and redistribute under open licenses',
      'Architectural visibility: Clear documentation of design, data flows, and dependencies',
      'EU technology autonomy: Strength of EU-controlled HPC, processors, and software ecosystems',
      'Reduced dependency: Limits reliance on proprietary and non-EU technologies',
    ],
  },
  {
    code: 'RES-7', csfCode: 'SOV-7',
    labelFr: 'Résilience Sécurité',
    labelEn: 'Security & Compliance Sovereignty',
    weight: 10,
    subdimensions: [
      'Certifications & compliance: Meets recognized EU/international standards',
      'EU regulatory alignment: Complies with GDPR, NIS2, DORA',
      'EU-controlled security operations: Monitoring, logging, and incident response under EU jurisdiction',
      'Transparent incident management: Timely reporting of breaches and vulnerabilities',
      'Security autonomy: Ability to develop and deploy patches independently',
      'Independent audits: Full access for EU-led security and compliance assessments',
    ],
  },
  {
    code: 'RES-8', csfCode: 'SOV-8',
    labelFr: 'Résilience Environnementale',
    labelEn: 'Environmental Sustainability',
    weight: 5,
    subdimensions: [
      'Energy efficiency: Optimized infrastructure with measurable efficiency targets',
      'Circular economy: Hardware reuse, refurbishment, and responsible disposal',
      'Sustainability transparency: Monitoring and reporting of emissions, water use',
      'Clean energy: Use of renewable or low-carbon energy sources',
      'Environmental responsibility: Continuous reduction of infrastructure footprint',
    ],
  },
];

export interface SealLevel {
  level: number;
  code: string;
  label: string;
  description: string;
  color: string;
}

export const SEAL_LEVELS: SealLevel[] = [
  {
    level: 0, code: 'SEAL-0', label: 'No Sovereignty',
    description: 'Service, technology or operations under exclusive control of non-EU third parties, governed entirely in non-EU jurisdictions.',
    color: '#d32f2f',
  },
  {
    level: 1, code: 'SEAL-1', label: 'Jurisdictional Sovereignty',
    description: 'EU law formally applies with limited practical enforceability; service, technology or operations under exclusive control of non-EU third parties.',
    color: '#f57c00',
  },
  {
    level: 2, code: 'SEAL-2', label: 'Data Sovereignty',
    description: 'EU law applicable and enforceable, with material non-EU dependencies remaining; service, technology or operations under indirect control of non-EU third parties.',
    color: '#fbc02d',
  },
  {
    level: 3, code: 'SEAL-3', label: 'Digital Resilience',
    description: 'EU law applicable and enforceable, EU actors exercising meaningful but not full influence; service, technology or operations under marginal control of non-EU third parties.',
    color: '#388e3c',
  },
  {
    level: 4, code: 'SEAL-4', label: 'Full Digital Sovereignty',
    description: 'Technology and operations under complete EU control, subject only to EU law, with no critical non-EU dependencies.',
    color: '#1565c0',
  },
];

export interface IrnScore {
  dimensionCode: string;
  score: number; // 0-4
  sealLevel: SealLevel;
  rationale: string;
}

export interface ProductAssessment {
  productId: string;
  productName: string;
  category: string;
  scores: IrnScore[];
  globalScore: number;
  globalSeal: SealLevel;
}
