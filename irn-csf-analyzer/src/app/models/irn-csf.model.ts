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
    weight: 20,
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
    weight: 10,
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
    weight: 15,
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

export type LandingZoneType =
  | 'on-premises'
  | 'ibm-cloud'
  | 'hyperscaler'
  | 's3ns'
  | 'bleu'
  | 'ovh'
  | 'scaleway'
  | 'cloud-temple'
  | 'numspot'
  | 'local-csp';

export interface LandingZone {
  id: LandingZoneType;
  name: string;
  category: 'On-Premises' | 'IBM Cloud' | 'Hyperscaler (US)' | 'European Sovereign Cloud (SecNumCloud / EU CSP)' | 'Local CSP';
  jurisdiction: 'EU (France / EU Law)' | 'Mixed (EU-hosted, US Cloud Act)' | 'Customer Premise (Full Customer Law)' | 'Global';
  secNumCloud: boolean;
  description: string;
  dimensionModifiers?: Partial<Record<string, number>>; // Modifiers on RES-1 to RES-8
  rationaleNote: string;
}

export const LANDING_ZONES: LandingZone[] = [
  {
    id: 'on-premises',
    name: 'On-Premises / Private Cloud (Customer Data Center)',
    category: 'On-Premises',
    jurisdiction: 'Customer Premise (Full Customer Law)',
    secNumCloud: false,
    description: 'Infrastructure physically operated within customer premises/datacenters in EU. Full control over data, network, and operational procedures.',
    dimensionModifiers: { 'RES-1': 1, 'RES-2': 1, 'RES-3': 1, 'RES-4': 1, 'RES-7': 1 },
    rationaleNote: 'Customer retains physical custody, hardware security, encryption keys, and network isolation on EU territory under customer law.',
  },
  {
    id: 'ibm-cloud',
    name: 'IBM Cloud (EU Multizone Regions: Paris, Frankfurt, Madrid)',
    category: 'IBM Cloud',
    jurisdiction: 'Mixed (EU-hosted, US Cloud Act)',
    secNumCloud: false,
    description: 'IBM Cloud public enterprise cloud with dedicated EU MZRs, EU Data Shield, Hyper Protect Crypto Services (FIPS 140-2 L4) and Financial Services Cloud controls.',
    dimensionModifiers: { 'RES-1': 0, 'RES-2': 0, 'RES-3': 0, 'RES-4': 0, 'RES-7': 0 },
    rationaleNote: 'EU-hosted multizone region with enterprise security controls, KYOK encryption via HPCS, under standard IBM Cloud DPA and SCCs.',
  },
  {
    id: 'hyperscaler',
    name: 'Hyperscalers (AWS, Azure, Google Cloud EU Regions)',
    category: 'Hyperscaler (US)',
    jurisdiction: 'Mixed (EU-hosted, US Cloud Act)',
    secNumCloud: false,
    description: 'US Hyperscaler public cloud infrastructure deployed in European regions. Subject to US extraterritorial jurisdiction (CLOUD Act / FISA 702).',
    dimensionModifiers: { 'RES-1': -1, 'RES-2': -1, 'RES-3': 0, 'RES-4': -1, 'RES-5': -1 },
    rationaleNote: 'Foreign infrastructure provider creates legal exposure to extraterritorial warrants, requiring technical mitigations like confidential computing.',
  },
  {
    id: 's3ns',
    name: 'S3NS (Google Cloud powered by Thales - SecNumCloud)',
    category: 'European Sovereign Cloud (SecNumCloud / EU CSP)',
    jurisdiction: 'EU (France / EU Law)',
    secNumCloud: true,
    description: 'French sovereign cloud alliance between Thales (majority capital) and Google Cloud, operated by EU personnel with SecNumCloud qualification.',
    dimensionModifiers: { 'RES-1': 1, 'RES-2': 2, 'RES-3': 1, 'RES-4': 1, 'RES-7': 1 },
    rationaleNote: 'French majority-owned legal entity, operated exclusively by EU cleared staff, French jurisdiction, insulated from CLOUD Act.',
  },
  {
    id: 'bleu',
    name: 'Bleu (Microsoft Azure powered by Capgemini & Orange - SecNumCloud)',
    category: 'European Sovereign Cloud (SecNumCloud / EU CSP)',
    jurisdiction: 'EU (France / EU Law)',
    secNumCloud: true,
    description: 'French sovereign cloud joint venture between Capgemini and Orange, running Microsoft Azure technology under exclusive French governance and SecNumCloud qualification.',
    dimensionModifiers: { 'RES-1': 1, 'RES-2': 2, 'RES-3': 1, 'RES-4': 1, 'RES-7': 1 },
    rationaleNote: 'Joint venture under 100% French ownership/governance, isolated autonomous operations, French jurisdiction.',
  },
  {
    id: 'ovh',
    name: 'OVHcloud (SecNumCloud Hosted Private Cloud & Public Cloud)',
    category: 'European Sovereign Cloud (SecNumCloud / EU CSP)',
    jurisdiction: 'EU (France / EU Law)',
    secNumCloud: true,
    description: '100% European cloud provider headquartered in France, SecNumCloud 3.2 qualified Hosted Private Cloud, custom server manufacturing in Europe.',
    dimensionModifiers: { 'RES-1': 2, 'RES-2': 2, 'RES-3': 1, 'RES-4': 1, 'RES-5': 1, 'RES-7': 1, 'RES-8': 1 },
    rationaleNote: 'Pure European sovereignty stack: EU equity, EU hardware manufacturing, ANSSI SecNumCloud qualification, zero extraterritorial exposure.',
  },
  {
    id: 'scaleway',
    name: 'Scaleway (European Multi-AZ Public Cloud)',
    category: 'European Sovereign Cloud (SecNumCloud / EU CSP)',
    jurisdiction: 'EU (France / EU Law)',
    secNumCloud: false,
    description: 'French multi-AZ cloud provider (Iliad Group) offering sovereign computing, Kubernetes (Kapsule), AI clusters and EU-only data processing.',
    dimensionModifiers: { 'RES-1': 2, 'RES-2': 2, 'RES-3': 1, 'RES-4': 1, 'RES-7': 0, 'RES-8': 1 },
    rationaleNote: 'European company and datacenter footprint, 100% GDPR aligned with no US parent dependency.',
  },
  {
    id: 'cloud-temple',
    name: 'Cloud Temple (SecNumCloud IaaS & PaaS)',
    category: 'European Sovereign Cloud (SecNumCloud / EU CSP)',
    jurisdiction: 'EU (France / EU Law)',
    secNumCloud: true,
    description: 'French sovereign cloud provider with ANSSI SecNumCloud qualification for IaaS and OpenShift PaaS, designed for critical financial and public workloads.',
    dimensionModifiers: { 'RES-1': 2, 'RES-2': 2, 'RES-3': 1, 'RES-4': 1, 'RES-7': 1 },
    rationaleNote: 'SecNumCloud qualified OpenShift platform, 100% French operations and sovereign governance.',
  },
  {
    id: 'numspot',
    name: 'NumSpot (Sovereign Cloud: Docaposte, Banque des Territoires, Naval Group, Dassault)',
    category: 'European Sovereign Cloud (SecNumCloud / EU CSP)',
    jurisdiction: 'EU (France / EU Law)',
    secNumCloud: true,
    description: 'Sovereign cloud consortium founded by Docaposte, Banque des Territoires, Naval Group, and Dassault Systèmes for public sector and regulated industries.',
    dimensionModifiers: { 'RES-1': 2, 'RES-2': 2, 'RES-3': 1, 'RES-4': 1, 'RES-7': 1 },
    rationaleNote: 'French institutional and defence industrial governance, targeting SecNumCloud with full EU sovereignty assurance.',
  },
  {
    id: 'local-csp',
    name: 'Local EU CSP (Regional Cloud Service Provider)',
    category: 'Local CSP',
    jurisdiction: 'EU (France / EU Law)',
    secNumCloud: false,
    description: 'Regional European cloud service providers (e.g., Exoscale, Hetzner, Outscale, Clever Cloud, etc.) operating under local national and EU jurisdiction.',
    dimensionModifiers: { 'RES-1': 1, 'RES-2': 1, 'RES-3': 1, 'RES-4': 1, 'RES-7': 0 },
    rationaleNote: 'EU-domiciled regional operator ensuring local data residency and EU jurisdiction.',
  },
];

export interface RagEvidence {
  dimensionCode: string;
  detectedKeywords: string[];
  matchedSnippets: string[];
  confidence: 'High' | 'Medium' | 'Low' | 'Default';
  suggestedLevel: number; // 0-4
}

export interface DocumentRagAnalysis {
  fileName: string;
  fileSize: number;
  extractedTextLength: number;
  detectedProductName?: string;
  detectedCategory?: string;
  detectedProvider?: string;
  evidences: Record<string, RagEvidence>;
  summary: string;
  rawExcerpt: string;
}

export interface IrnScore {
  dimensionCode: string;
  score: number; // 0-4
  baseScore: number;
  sealLevel: SealLevel;
  rationale: string;
  landingZoneImpact?: string;
  ragEvidence?: RagEvidence;
}

export interface ProductAssessment {
  productId: string;
  productName: string;
  category: string;
  sourceMode?: 'catalogue' | 'rag';
  ragAnalysis?: DocumentRagAnalysis;
  landingZone: LandingZone;
  scores: IrnScore[];
  globalScore: number;
  globalSeal: SealLevel;
  baseGlobalScore: number;
  baseGlobalSeal: SealLevel;
}
