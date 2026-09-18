export interface IbmProduct {
  id: string;
  name: string;
  category: string;
  subcategory: string;
  description: string;
}

export interface IbmCategory {
  name: string;
  subcategories: string[];
  products: IbmProduct[];
}

// IBM Technology 2026 Catalogue – comprehensive list ordered by category
export const IBM_PRODUCTS: IbmProduct[] = [

  // ── AI & Data Platform ─────────────────────────────────────────────────
  { id: 'wx-ai', name: 'IBM watsonx.ai', category: 'AI & Data Platform', subcategory: 'Foundation Models & Studio', description: 'AI studio for building, training, and deploying custom AI models and foundation models.' },
  { id: 'wx-data', name: 'IBM watsonx.data', category: 'AI & Data Platform', subcategory: 'Data Lakehouse', description: 'Open, hybrid, and governed data store optimised for AI workloads.' },
  { id: 'wx-gov', name: 'IBM watsonx.governance', category: 'AI & Data Platform', subcategory: 'AI Governance', description: 'End-to-end AI lifecycle governance, model risk management, and regulatory compliance.' },
  { id: 'wx-assistant', name: 'IBM watsonx Assistant', category: 'AI & Data Platform', subcategory: 'Conversational AI', description: 'Enterprise-grade AI assistant platform for building conversational experiences.' },
  { id: 'wx-orchestrate', name: 'IBM watsonx Orchestrate', category: 'AI & Data Platform', subcategory: 'AI Agents', description: 'Agentic AI platform for automating business processes with AI agents and tools.' },
  { id: 'wx-code', name: 'IBM watsonx Code Assistant', category: 'AI & Data Platform', subcategory: 'AI for Code', description: 'AI-powered code generation and transformation for developers and IT operations.' },
  { id: 'wx-caa', name: 'IBM watsonx Code Assistant for Z', category: 'AI & Data Platform', subcategory: 'AI for Code', description: 'Generative AI for mainframe application modernisation (COBOL to Java).' },
  { id: 'cpd-saas', name: 'IBM Cloud Pak for Data', category: 'AI & Data Platform', subcategory: 'Integrated Data & AI', description: 'Integrated platform for data management, analytics, and AI at scale.' },
  { id: 'watson-discovery', name: 'IBM Watson Discovery', category: 'AI & Data Platform', subcategory: 'AI Search', description: 'AI-powered enterprise search and document understanding service.' },
  { id: 'watson-nlu', name: 'IBM Watson Natural Language Understanding', category: 'AI & Data Platform', subcategory: 'NLP', description: 'NLP service for text analysis, entity extraction, sentiment, and classification.' },
  { id: 'watson-stt', name: 'IBM Watson Speech to Text', category: 'AI & Data Platform', subcategory: 'Speech AI', description: 'Automatic speech recognition service for real-time and batch transcription.' },
  { id: 'watson-tts', name: 'IBM Watson Text to Speech', category: 'AI & Data Platform', subcategory: 'Speech AI', description: 'Neural text-to-speech service for natural-sounding voice synthesis.' },
  { id: 'watson-translate', name: 'IBM Watson Language Translator', category: 'AI & Data Platform', subcategory: 'NLP', description: 'Machine translation service supporting dozens of language pairs.' },
  { id: 'watson-studio', name: 'IBM Watson Studio', category: 'AI & Data Platform', subcategory: 'Data Science', description: 'Collaborative environment for data scientists to build, train, and deploy models.' },
  { id: 'watson-ml', name: 'IBM Watson Machine Learning', category: 'AI & Data Platform', subcategory: 'ML Operations', description: 'Automated machine learning and model management service.' },
  { id: 'openscale', name: 'IBM OpenScale (Watson OpenScale)', category: 'AI & Data Platform', subcategory: 'AI Governance', description: 'AI fairness, explainability, and model monitoring (precursor to watsonx.governance).' },

  // ── Hybrid Cloud & Infrastructure ──────────────────────────────────────
  { id: 'ibm-cloud', name: 'IBM Cloud', category: 'Hybrid Cloud & Infrastructure', subcategory: 'Public Cloud', description: 'Full-stack public cloud with 60+ global regions and a broad set of cloud services.' },
  { id: 'ibm-cloud-satellite', name: 'IBM Cloud Satellite', category: 'Hybrid Cloud & Infrastructure', subcategory: 'Hybrid Cloud', description: 'Distributed cloud platform extending IBM Cloud services to any on-prem or edge location.' },
  { id: 'openshift', name: 'Red Hat OpenShift', category: 'Hybrid Cloud & Infrastructure', subcategory: 'Kubernetes Platform', description: 'Enterprise Kubernetes platform for hybrid and multi-cloud workloads.' },
  { id: 'openshift-ai', name: 'Red Hat OpenShift AI', category: 'Hybrid Cloud & Infrastructure', subcategory: 'AI Infrastructure', description: 'Kubernetes-native AI/ML platform built on OpenShift.' },
  { id: 'rhel', name: 'Red Hat Enterprise Linux (RHEL)', category: 'Hybrid Cloud & Infrastructure', subcategory: 'Operating System', description: 'Enterprise-grade Linux OS for on-prem, cloud, and edge deployments.' },
  { id: 'ansible', name: 'Red Hat Ansible Automation Platform', category: 'Hybrid Cloud & Infrastructure', subcategory: 'IT Automation', description: 'Agentless IT automation platform for configuration management, orchestration, and DevOps.' },
  { id: 'ibm-power', name: 'IBM Power Systems (Power10)', category: 'Hybrid Cloud & Infrastructure', subcategory: 'Hardware – Servers', description: 'High-performance RISC servers for enterprise workloads including SAP and AI inference.' },
  { id: 'ibm-power-vs', name: 'IBM Power Virtual Server', category: 'Hybrid Cloud & Infrastructure', subcategory: 'Cloud Infrastructure', description: 'Cloud-based Power infrastructure (AIX, IBM i, Linux) with enterprise SLAs.' },
  { id: 'ibm-z', name: 'IBM z16 (Mainframe)', category: 'Hybrid Cloud & Infrastructure', subcategory: 'Hardware – Mainframe', description: 'IBM Z mainframe with integrated on-chip AI accelerator and quantum-safe cryptography.' },
  { id: 'ibm-linuxone', name: 'IBM LinuxONE Emperor 4', category: 'Hybrid Cloud & Infrastructure', subcategory: 'Hardware – Mainframe', description: 'Linux-only mainframe for scale-up consolidation and data privacy.' },
  { id: 'ibm-storage-scale', name: 'IBM Storage Scale', category: 'Hybrid Cloud & Infrastructure', subcategory: 'Storage Software', description: 'Parallel file system for high-performance AI, analytics, and HPC storage.' },
  { id: 'ibm-storage-flashsystem', name: 'IBM FlashSystem 9500', category: 'Hybrid Cloud & Infrastructure', subcategory: 'Hardware – Storage', description: 'All-NVMe enterprise storage array with cyber-resilience capabilities.' },
  { id: 'ibm-tape', name: 'IBM TS7770 Tape', category: 'Hybrid Cloud & Infrastructure', subcategory: 'Hardware – Storage', description: 'Virtual tape library for mainframe and open-systems long-term retention.' },
  { id: 'ibm-san', name: 'IBM SAN Volume Controller', category: 'Hybrid Cloud & Infrastructure', subcategory: 'Storage Software', description: 'Block storage virtualisation controller for heterogeneous SAN environments.' },
  { id: 'turbonomic', name: 'IBM Turbonomic', category: 'Hybrid Cloud & Infrastructure', subcategory: 'AIOps & Resource Optimisation', description: 'AI-powered resource management and cloud cost optimisation platform.' },
  { id: 'instana', name: 'IBM Instana', category: 'Hybrid Cloud & Infrastructure', subcategory: 'Observability', description: 'Automated application performance management and observability platform.' },

  // ── Security ───────────────────────────────────────────────────────────
  { id: 'qradar-siem', name: 'IBM QRadar SIEM', category: 'Security', subcategory: 'Security Operations', description: 'Next-gen SIEM platform for threat detection, investigation, and response.' },
  { id: 'qradar-soar', name: 'IBM QRadar SOAR', category: 'Security', subcategory: 'Security Operations', description: 'Security orchestration, automation, and response platform for incident management.' },
  { id: 'qradar-edr', name: 'IBM QRadar EDR (ReaQta)', category: 'Security', subcategory: 'Endpoint Security', description: 'AI-powered endpoint detection and response with autonomous threat remediation.' },
  { id: 'qradar-threat-intel', name: 'IBM X-Force Threat Intelligence', category: 'Security', subcategory: 'Threat Intelligence', description: 'Global threat intelligence feed for proactive cyber defense and IOC enrichment.' },
  { id: 'verify-access', name: 'IBM Security Verify Access', category: 'Security', subcategory: 'Identity & Access Management', description: 'On-prem identity and access management for web, API, and legacy apps.' },
  { id: 'verify-saas', name: 'IBM Security Verify (SaaS)', category: 'Security', subcategory: 'Identity & Access Management', description: 'Cloud-delivered IAM with MFA, SSO, and workforce/customer identity management.' },
  { id: 'guardium-data', name: 'IBM Guardium Data Security Center', category: 'Security', subcategory: 'Data Security', description: 'Centralised data security and compliance management for hybrid cloud environments.' },
  { id: 'guardium-insights', name: 'IBM Guardium Insights', category: 'Security', subcategory: 'Data Security', description: 'Data activity monitoring and compliance analytics for structured data stores.' },
  { id: 'hpcs', name: 'IBM Hyper Protect Crypto Services', category: 'Security', subcategory: 'Cryptography & Key Management', description: 'FIPS 140-2 Level 4 cloud HSM with Keep Your Own Key (KYOK) capability.' },
  { id: 'hpvs', name: 'IBM Hyper Protect Virtual Servers', category: 'Security', subcategory: 'Confidential Computing', description: 'Confidential computing service backed by IBM Z hardware-based isolation.' },
  { id: 'ibm-keyprotect', name: 'IBM Key Protect', category: 'Security', subcategory: 'Cryptography & Key Management', description: 'Multi-tenant key management service for cloud workloads.' },
  { id: 'ibm-secrets-manager', name: 'IBM Secrets Manager', category: 'Security', subcategory: 'Cryptography & Key Management', description: 'Secrets lifecycle management for API keys, certificates, and credentials.' },
  { id: 'trusteer', name: 'IBM Trusteer', category: 'Security', subcategory: 'Fraud Prevention', description: 'AI-powered fraud detection and digital identity trust for online banking.' },
  { id: 'isva', name: 'IBM Security Verify Bridge', category: 'Security', subcategory: 'Identity & Access Management', description: 'Bridges on-prem LDAP/AD with cloud identity services.' },
  { id: 'zoltan', name: 'IBM Z Security & Compliance Center', category: 'Security', subcategory: 'Compliance Management', description: 'Compliance posture management for IBM Z workloads.' },
  { id: 'masq', name: 'IBM Security MASQ', category: 'Security', subcategory: 'Post-Quantum Cryptography', description: 'Post-quantum cryptography services for data-at-rest and data-in-transit.' },

  // ── Automation & Integration ────────────────────────────────────────────
  { id: 'cp4i', name: 'IBM Cloud Pak for Integration', category: 'Automation & Integration', subcategory: 'Enterprise Integration', description: 'Unified integration platform covering API management, messaging, and event streaming.' },
  { id: 'ace', name: 'IBM App Connect Enterprise', category: 'Automation & Integration', subcategory: 'Integration', description: 'Low-code integration platform for connecting applications and data across hybrid environments.' },
  { id: 'mq', name: 'IBM MQ', category: 'Automation & Integration', subcategory: 'Messaging', description: 'Enterprise-grade messaging middleware for reliable, transactional message delivery.' },
  { id: 'event-streams', name: 'IBM Event Streams', category: 'Automation & Integration', subcategory: 'Event Streaming', description: 'Managed Kafka service for real-time data streaming and event-driven architectures.' },
  { id: 'apic', name: 'IBM API Connect', category: 'Automation & Integration', subcategory: 'API Management', description: 'Full lifecycle API management platform for creation, security, and monetisation.' },
  { id: 'datapower', name: 'IBM DataPower Gateway', category: 'Automation & Integration', subcategory: 'API Gateway', description: 'Hardened multi-protocol API and message gateway for enterprise security.' },
  { id: 'cp4ba', name: 'IBM Cloud Pak for Business Automation', category: 'Automation & Integration', subcategory: 'Business Automation', description: 'Low-code platform for workflow automation, RPA, decision management, and document capture.' },
  { id: 'rpa', name: 'IBM Robotic Process Automation (RPA)', category: 'Automation & Integration', subcategory: 'RPA', description: 'Software robot platform for automating repetitive back-office tasks.' },
  { id: 'baw', name: 'IBM Business Automation Workflow', category: 'Automation & Integration', subcategory: 'BPM', description: 'BPMN-based workflow platform combining case management and process automation.' },
  { id: 'odm', name: 'IBM Operational Decision Manager', category: 'Automation & Integration', subcategory: 'Business Rules', description: 'Business rules management system for automated decision-making.' },
  { id: 'filenet', name: 'IBM FileNet Content Manager', category: 'Automation & Integration', subcategory: 'Content Management', description: 'Enterprise content management and document imaging platform.' },
  { id: 'datastage', name: 'IBM DataStage', category: 'Automation & Integration', subcategory: 'Data Integration', description: 'High-volume ETL and data integration platform for data warehousing and analytics.' },
  { id: 'sterling-oms', name: 'IBM Sterling Order Management', category: 'Automation & Integration', subcategory: 'Supply Chain', description: 'Omnichannel order management with real-time inventory and fulfilment orchestration.' },
  { id: 'sterling-b2b', name: 'IBM Sterling B2B Integrator', category: 'Automation & Integration', subcategory: 'B2B Integration', description: 'EDI and B2B integration platform for trading partner connectivity.' },
  { id: 'sovereign-core', name: 'IBM Sovereign Core', category: 'Automation & Integration', subcategory: 'Sovereign Cloud', description: 'Sovereign cloud automation platform enabling full digital sovereignty — data residency, encryption key ownership, and operational autonomy — for regulated industries and government workloads.' },

  // ── Data & Analytics ───────────────────────────────────────────────────
  { id: 'db2', name: 'IBM Db2', category: 'Data & Analytics', subcategory: 'Relational Database', description: 'Enterprise relational database for OLTP and analytics with built-in AI capabilities.' },
  { id: 'db2-warehouse', name: 'IBM Db2 Warehouse', category: 'Data & Analytics', subcategory: 'Data Warehouse', description: 'Cloud-native columnar data warehouse for high-performance analytics.' },
  { id: 'informix', name: 'IBM Informix', category: 'Data & Analytics', subcategory: 'Relational Database', description: 'Embedded and IoT-optimised database for time-series and spatial data.' },
  { id: 'idr', name: 'IBM InfoSphere DataStage Replication (CDC)', category: 'Data & Analytics', subcategory: 'Data Replication', description: 'Real-time data replication and change data capture across heterogeneous systems.' },
  { id: 'mdm', name: 'IBM InfoSphere Master Data Management', category: 'Data & Analytics', subcategory: 'Master Data Management', description: 'Enterprise MDM for managing authoritative business entities like customer, product, and supplier.' },
  { id: 'cognos', name: 'IBM Cognos Analytics', category: 'Data & Analytics', subcategory: 'Business Intelligence', description: 'AI-augmented BI platform with self-service dashboards, reports, and data exploration.' },
  { id: 'planning-analytics', name: 'IBM Planning Analytics (TM1)', category: 'Data & Analytics', subcategory: 'Financial Planning', description: 'In-memory planning and analytics platform for financial and operational FP&A.' },
  { id: 'spss', name: 'IBM SPSS Statistics', category: 'Data & Analytics', subcategory: 'Statistical Analysis', description: 'Advanced statistical analysis software for research and business analytics.' },
  { id: 'spss-modeler', name: 'IBM SPSS Modeler', category: 'Data & Analytics', subcategory: 'Predictive Analytics', description: 'Visual data science and predictive modelling workbench.' },
  { id: 'databand', name: 'IBM Databand', category: 'Data & Analytics', subcategory: 'Data Observability', description: 'Data pipeline observability and incident management for data quality.' },
  { id: 'data-catalog', name: 'IBM Watson Knowledge Catalog', category: 'Data & Analytics', subcategory: 'Data Catalog', description: 'AI-powered data catalog for data discovery, governance, and collaboration.' },

  // ── IT Operations & AIOps ──────────────────────────────────────────────
  { id: 'cp4aiops', name: 'IBM Cloud Pak for AIOps', category: 'IT Operations & AIOps', subcategory: 'AIOps Platform', description: 'AI-driven IT operations platform for event correlation, incident management, and SRE.' },
  { id: 'bigfix', name: 'IBM BigFix', category: 'IT Operations & AIOps', subcategory: 'Endpoint Management', description: 'Unified endpoint management and security compliance platform for hybrid environments.' },
  { id: 'control-desk', name: 'IBM Control Desk', category: 'IT Operations & AIOps', subcategory: 'IT Service Management', description: 'ITSM platform integrating service desk, asset, and change management.' },
  { id: 'maximo', name: 'IBM Maximo Application Suite', category: 'IT Operations & AIOps', subcategory: 'Asset Management', description: 'Enterprise asset management with AI-powered predictive maintenance and IoT integration.' },
  { id: 'tivoli-netcool', name: 'IBM Netcool Operations Insight', category: 'IT Operations & AIOps', subcategory: 'Network Management', description: 'Event management and network operations intelligence platform.' },
  { id: 'rational-ioiq', name: 'IBM IIQM (Infrastructure Insight)', category: 'IT Operations & AIOps', subcategory: 'Infrastructure Monitoring', description: 'IT infrastructure performance monitoring and capacity planning.' },

  // ── DevOps & Software Supply Chain ────────────────────────────────────
  { id: 'tekton', name: 'Tekton / OpenShift Pipelines', category: 'DevOps & Software Supply Chain', subcategory: 'CI/CD', description: 'Cloud-native Kubernetes CI/CD framework for containerised workloads.' },
  { id: 'gitops', name: 'Red Hat OpenShift GitOps (ArgoCD)', category: 'DevOps & Software Supply Chain', subcategory: 'GitOps', description: 'Declarative GitOps continuous delivery for Kubernetes environments.' },
  { id: 'stackrox', name: 'Red Hat Advanced Cluster Security (StackRox)', category: 'DevOps & Software Supply Chain', subcategory: 'Container Security', description: 'Kubernetes-native container and supply chain security with policy enforcement.' },
  { id: 'quay', name: 'Red Hat Quay', category: 'DevOps & Software Supply Chain', subcategory: 'Container Registry', description: 'Enterprise container and artifact registry with image scanning and lifecycle management.' },
  { id: 'rhacs', name: 'Red Hat Advanced Cluster Management', category: 'DevOps & Software Supply Chain', subcategory: 'Multicluster Management', description: 'Policy-based multicluster Kubernetes lifecycle and compliance management.' },
  { id: 'ibm-urbancode', name: 'IBM UrbanCode Deploy', category: 'DevOps & Software Supply Chain', subcategory: 'Deployment Automation', description: 'Automated application deployment across heterogeneous environments.' },
  { id: 'ibm-urbancode-velocity', name: 'IBM UrbanCode Velocity', category: 'DevOps & Software Supply Chain', subcategory: 'Value Stream Management', description: 'VSM platform for visibility and delivery performance across DevOps pipelines.' },
  { id: 'codeready', name: 'Red Hat OpenShift Dev Spaces', category: 'DevOps & Software Supply Chain', subcategory: 'Cloud IDE', description: 'Cloud-native collaborative IDE based on Eclipse Che running inside OpenShift.' },

  // ── Sustainability & ESG ───────────────────────────────────────────────
  { id: 'envizi', name: 'IBM Envizi ESG Suite', category: 'Sustainability & ESG', subcategory: 'ESG Reporting', description: 'Sustainability data management platform for scope 1/2/3 emissions tracking and ESG reporting.' },
  { id: 'envizi-spm', name: 'IBM Envizi Supply Chain Intelligence', category: 'Sustainability & ESG', subcategory: 'Supply Chain Sustainability', description: 'Supplier ESG risk assessment and supply chain emissions analytics.' },
  { id: 'tririga', name: 'IBM TRIRIGA', category: 'Sustainability & ESG', subcategory: 'Real Estate & Facilities', description: 'Integrated workplace management with energy and space optimisation capabilities.' },

  // ── Industry Solutions ─────────────────────────────────────────────────
  { id: 'ibm-fss', name: 'IBM Financial Services Cloud', category: 'Industry Solutions', subcategory: 'Financial Services', description: 'Compliance-ready cloud platform for regulated financial institutions (DORA, NIS2).' },
  { id: 'ibm-health', name: 'IBM Watson Health (Merative)', category: 'Industry Solutions', subcategory: 'Healthcare', description: 'Clinical decision support and health data analytics platform.' },
  { id: 'ibm-mas-monitor', name: 'IBM Maximo Monitor', category: 'Industry Solutions', subcategory: 'Industrial IoT', description: 'AI-powered equipment monitoring and anomaly detection for industrial assets.' },
  { id: 'mas-visual-inspection', name: 'IBM Maximo Visual Inspection', category: 'Industry Solutions', subcategory: 'Industrial AI', description: 'Computer vision AI for automated quality control and defect inspection.' },
  { id: 'ibm-weather', name: 'IBM Environmental Intelligence Suite', category: 'Industry Solutions', subcategory: 'Climate Risk', description: 'Weather and climate risk analytics for enterprise resilience and supply chain planning.' },
  { id: 'sterling-tms', name: 'IBM Sterling Transparent Supply', category: 'Industry Solutions', subcategory: 'Supply Chain Visibility', description: 'Blockchain-based supply chain transparency and food safety traceability platform.' },
  { id: 'telco-network', name: 'IBM Telco Network Cloud Manager', category: 'Industry Solutions', subcategory: 'Telecommunications', description: 'Lifecycle management for virtualised and containerised network functions.' },
];

export function getCategories(): string[] {
  const cats = new Set<string>();
  IBM_PRODUCTS.forEach(p => cats.add(p.category));
  return Array.from(cats).sort();
}

export function getProductsByCategory(category: string): IbmProduct[] {
  return IBM_PRODUCTS.filter(p => p.category === category);
}

export function getAllCategories(): IbmCategory[] {
  const map = new Map<string, IbmCategory>();
  IBM_PRODUCTS.forEach(p => {
    if (!map.has(p.category)) {
      map.set(p.category, { name: p.category, subcategories: [], products: [] });
    }
    const cat = map.get(p.category)!;
    cat.products.push(p);
    if (!cat.subcategories.includes(p.subcategory)) {
      cat.subcategories.push(p.subcategory);
    }
  });
  return Array.from(map.values()).sort((a, b) => a.name.localeCompare(b.name));
}
