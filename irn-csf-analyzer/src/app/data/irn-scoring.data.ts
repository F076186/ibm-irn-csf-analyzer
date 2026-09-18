/**
 * IRN/CSF scoring database.
 * Each entry maps a product ID to SEAL levels (0-4) for each of the 8 IRN dimensions.
 * Scores reflect IBM's public product documentation, certifications, and positioning
 * as of the IBM Technology 2026 catalogue, aligned with the CSF Sovereignty Effective
 * Assurance Levels (SEAL-0 to SEAL-4).
 *
 * Rationale keys:
 *   RES-1  Résilience Stratégique
 *   RES-2  Résilience Économique et Juridique
 *   RES-3  Résilience Data & IA
 *   RES-4  Résilience Opérationnelle
 *   RES-5  Résilience Supply-Chain
 *   RES-6  Résilience Technologique
 *   RES-7  Résilience Sécurité
 *   RES-8  Résilience Environnementale
 */

export interface ProductScoreEntry {
  scores: Record<string, number>;      // dimensionCode -> 0..4
  rationale: Record<string, string>;   // dimensionCode -> rationale text
}

export const PRODUCT_SCORES: Record<string, ProductScoreEntry> = {

  // ── watsonx.ai ──────────────────────────────────────────────────────────
  'wx-ai': {
    scores: { 'RES-1':2,'RES-2':2,'RES-3':2,'RES-4':2,'RES-5':2,'RES-6':3,'RES-7':3,'RES-8':2 },
    rationale: {
      'RES-1': 'IBM is a US-headquartered corporation; EU governance commitments are present via GDPR DPA but strategic control remains non-EU.',
      'RES-2': 'Subject to US CLOUD Act; IBM DPA and EU SCCs in place, but extraterritorial exposure persists.',
      'RES-3': 'EU data residency selectable; customer-managed keys via HPCS available; foundation model training is US-based.',
      'RES-4': 'Deployable on-prem via OpenShift; EU-based support available; strong local ecosystem (IBM France, Consulting).',
      'RES-5': 'Software supply chain is US-controlled; open-source components (PyTorch, Hugging Face) with SBOM transparency.',
      'RES-6': 'Supports open standards (OpenAPI, ONNX, open-source models); architectural transparency via IBM documentation.',
      'RES-7': 'ISO 27001, SOC 2, EU GDPR compliance; IBM Security Guardium integration for data monitoring.',
      'RES-8': 'IBM committed to net-zero by 2030; EU data centres powered by renewable energy; Energy Star compliant infrastructure.',
    },
  },

  // ── watsonx.data ────────────────────────────────────────────────────────
  'wx-data': {
    scores: { 'RES-1':2,'RES-2':2,'RES-3':3,'RES-4':3,'RES-5':2,'RES-6':4,'RES-7':3,'RES-8':2 },
    rationale: {
      'RES-1': 'IBM US HQ; EU business unit present but ultimate governance outside EU.',
      'RES-2': 'GDPR DPA in place; US CLOUD Act applies; EU SCCs mitigate but do not eliminate extraterritorial risk.',
      'RES-3': 'EU data residency enforced; customer-controlled encryption via HPCS; built on open Apache Iceberg format ensuring data portability.',
      'RES-4': 'Fully deployable on-prem via OpenShift; EU operational teams available; strong portability via open table formats.',
      'RES-5': 'Based on open-source (Spark, Presto, Iceberg); SBOM available; US-governed core engineering team.',
      'RES-6': 'Native open formats (Parquet, Iceberg, Delta Lake); open APIs; no proprietary lock-in on data format.',
      'RES-7': 'Integrates with Guardium for audit; RBAC and column-level security; GDPR and DORA compliant configurations.',
      'RES-8': 'Shared IBM cloud infrastructure sustainability targets; efficient columnar storage reduces compute footprint.',
    },
  },

  // ── watsonx.governance ──────────────────────────────────────────────────
  'wx-gov': {
    scores: { 'RES-1':2,'RES-2':3,'RES-3':3,'RES-4':2,'RES-5':2,'RES-6':3,'RES-7':4,'RES-8':2 },
    rationale: {
      'RES-1': 'US-headquartered IBM; EU AI Act alignment roadmap published but governance remains outside EU.',
      'RES-2': 'Designed for EU AI Act, GDPR, DORA, NIS2 compliance; model risk documentation and audit trails.',
      'RES-3': 'Model metadata and training data catalogued; bias/fairness metrics per EU AI Act; EU data residency supported.',
      'RES-4': 'On-prem deployment on OpenShift; EU consulting support; workflow integration with existing IBM toolchain.',
      'RES-5': 'Open-source Elyra and OpenPipes lineage; US-controlled IBM core development.',
      'RES-6': 'REST APIs; open FactSheets standard; interoperable with third-party AI platforms.',
      'RES-7': 'Central audit trail for all AI decisions; EU AI Act Article 13/14/62 compliance features; automated compliance checks.',
      'RES-8': 'Model efficiency metrics; encourages smaller, more efficient model selection to reduce energy consumption.',
    },
  },

  // ── watsonx Assistant ────────────────────────────────────────────────────
  'wx-assistant': {
    scores: { 'RES-1':2,'RES-2':2,'RES-3':2,'RES-4':2,'RES-5':2,'RES-6':2,'RES-7':3,'RES-8':2 },
    rationale: {
      'RES-1': 'US HQ; EU operations present; governance and product roadmap controlled from US.',
      'RES-2': 'GDPR DPA; SCCs in place; US CLOUD Act residual risk for SaaS deployment.',
      'RES-3': 'EU region deployable; conversation data stays in EU region; BYOK via IBM Key Protect.',
      'RES-4': 'Deployable on OpenShift on-prem; EU support available; rich integration ecosystem.',
      'RES-5': 'SaaS dependency on IBM Cloud US; on-prem reduces but does not eliminate US supply chain dependency.',
      'RES-6': 'REST/WebSocket APIs; limited open-source transparency; proprietary NLU engine.',
      'RES-7': 'SOC 2 Type II; ISO 27001; GDPR compliant; role-based access controls.',
      'RES-8': 'Cloud-based inference is energy efficient relative to on-prem; IBM Green initiatives apply.',
    },
  },

  // ── watsonx Orchestrate ──────────────────────────────────────────────────
  'wx-orchestrate': {
    scores: { 'RES-1':2,'RES-2':2,'RES-3':2,'RES-4':2,'RES-5':2,'RES-6':3,'RES-7':3,'RES-8':2 },
    rationale: {
      'RES-1': 'IBM US HQ; EU AI agents roadmap exists; strategic governance non-EU.',
      'RES-2': 'GDPR compliant SaaS; US CLOUD Act applies; EU SCCs in place.',
      'RES-3': 'Agent data in EU region selectable; tool execution and secrets in EU-hosted instances.',
      'RES-4': 'On-prem via IBM ADK on OpenShift; EU support; open agent definition format.',
      'RES-5': 'ADK open-sourced on GitHub; MCP protocol open standard; US-controlled IBM Cloud.',
      'RES-6': 'MCP open standard; OpenAPI tool integration; open-source ADK enables auditability.',
      'RES-7': 'IAM via IBM Security Verify; audit logs per action; GDPR consent management.',
      'RES-8': 'Serverless agent execution optimises resource consumption; IBM net-zero commitments.',
    },
  },

  // ── watsonx Code Assistant ───────────────────────────────────────────────
  'wx-code': {
    scores: { 'RES-1':2,'RES-2':2,'RES-3':2,'RES-4':2,'RES-5':2,'RES-6':3,'RES-7':3,'RES-8':2 },
    rationale: {
      'RES-1': 'IBM US HQ; EU developer productivity tool; no EU strategic control.',
      'RES-2': 'GDPR DPA; code data subject to US CLOUD Act for SaaS tier.',
      'RES-3': 'Enterprise tier supports on-prem deployment; code snippets not retained by default.',
      'RES-4': 'IDE plugin model; on-prem LLM option; EU support channels.',
      'RES-5': 'Granite models open-sourced under Apache 2.0; US-developed core.',
      'RES-6': 'Open Granite model weights; standard VS Code/JetBrains plugin interface.',
      'RES-7': 'No code retention by default; enterprise audit mode; GDPR compliant.',
      'RES-8': 'Reduces developer effort and compute by code reuse; small model footprint.',
    },
  },

  // ── watsonx Code Assistant for Z ────────────────────────────────────────
  'wx-caa': {
    scores: { 'RES-1':2,'RES-2':2,'RES-3':2,'RES-4':2,'RES-5':3,'RES-6':3,'RES-7':3,'RES-8':2 },
    rationale: {
      'RES-1': 'IBM US HQ; critical mainframe modernisation tool; no EU governance.',
      'RES-2': 'GDPR DPA; US CLOUD Act applies to SaaS; on-prem mode avoids data exfiltration.',
      'RES-3': 'On-prem deployment option keeps COBOL source code on-site; no external data retention.',
      'RES-4': 'On-prem model deployment on Z; EU COBOL expertise ecosystem; knowledge transfer included.',
      'RES-5': 'Runs on IBM Z hardware manufactured partly in EU; Granite model open-sourced.',
      'RES-6': 'Generates standard Java output; interoperable with OpenShift pipelines.',
      'RES-7': 'Air-gapped deployment possible on Z; no external calls in on-prem mode.',
      'RES-8': 'Migrating from COBOL batch to modern Java containers reduces energy per transaction.',
    },
  },

  // ── Cloud Pak for Data ───────────────────────────────────────────────────
  'cpd-saas': {
    scores: { 'RES-1':2,'RES-2':2,'RES-3':3,'RES-4':3,'RES-5':2,'RES-6':3,'RES-7':3,'RES-8':2 },
    rationale: {
      'RES-1': 'IBM US HQ; EU product lines present; strategic control non-EU.',
      'RES-2': 'GDPR DPA; EU SCCs; US CLOUD Act residual for SaaS.',
      'RES-3': 'EU data residency; BYOK via HPCS; Guardium integration for data governance.',
      'RES-4': 'Full on-prem deployment on OpenShift; EU skills ecosystem; local IBM support.',
      'RES-5': 'Open-source components (Spark, Jupyter); IBM-controlled proprietary services layer.',
      'RES-6': 'Open APIs; Jupyter/Spark standards; supports open data formats.',
      'RES-7': 'Guardium data monitoring; RBAC; SOC 2; ISO 27001; GDPR compliant.',
      'RES-8': 'Efficient shared services model; IBM net-zero 2030 commitment applies.',
    },
  },

  // ── Watson Discovery ─────────────────────────────────────────────────────
  'watson-discovery': {
    scores: { 'RES-1':2,'RES-2':2,'RES-3':2,'RES-4':2,'RES-5':2,'RES-6':2,'RES-7':3,'RES-8':2 },
    rationale: {
      'RES-1': 'IBM US HQ; SaaS product governed by US entity.',
      'RES-2': 'GDPR DPA in place; US CLOUD Act risk; EU SCCs available.',
      'RES-3': 'EU region deployable; indexed documents remain in EU; BYOK available.',
      'RES-4': 'Cloud Pak for Data on-prem option; EU support available.',
      'RES-5': 'Proprietary NLU engine; limited open-source transparency.',
      'RES-6': 'REST API; standard JSON query interface; limited open-source model disclosure.',
      'RES-7': 'SOC 2; ISO 27001; GDPR compliant; audit logging.',
      'RES-8': 'Cloud inference efficiency; IBM sustainability targets.',
    },
  },

  // ── IBM Cloud ───────────────────────────────────────────────────────────
  'ibm-cloud': {
    scores: { 'RES-1':2,'RES-2':2,'RES-3':3,'RES-4':3,'RES-5':2,'RES-6':3,'RES-7':3,'RES-8':3 },
    rationale: {
      'RES-1': 'IBM US HQ; EU regions available (Frankfurt, Madrid) but governance non-EU.',
      'RES-2': 'GDPR DPA; EU SCCs; US CLOUD Act residual; EU-based contracts available.',
      'RES-3': 'EU data residency enforced per region selection; HPCS for KYOK; VPC isolation.',
      'RES-4': 'EU operational teams; local IBM support; multi-zone EU regions; workload portability.',
      'RES-5': 'Significant US software supply chain; some EU-manufactured hardware components.',
      'RES-6': 'Kubernetes-native; open Terraform provider; VMware compatibility; standard APIs.',
      'RES-7': 'FedRAMP; ISO 27001; SOC 2; GDPR; PCI DSS; EU financial services compliance.',
      'RES-8': 'EU data centres use renewable energy; PUE targets below 1.3; IBM net-zero 2030.',
    },
  },

  // ── IBM Cloud Satellite ─────────────────────────────────────────────────
  'ibm-cloud-satellite': {
    scores: { 'RES-1':2,'RES-2':2,'RES-3':3,'RES-4':3,'RES-5':2,'RES-6':3,'RES-7':3,'RES-8':2 },
    rationale: {
      'RES-1': 'IBM US HQ; Satellite extends IBM Cloud to on-prem; governance remains non-EU.',
      'RES-2': 'Data stays on-prem; management plane in IBM Cloud; US jurisdiction for control plane.',
      'RES-3': 'Customer owns data location; encryption at customer site; control plane in IBM Cloud EU region.',
      'RES-4': 'On-prem compute fully customer-controlled; IBM Cloud Satellite Link for secure connectivity.',
      'RES-5': 'Customer provides on-prem hardware; IBM software supply chain applies to Satellite software.',
      'RES-6': 'OpenShift-based; open Kubernetes APIs; standard RHEL OS; infrastructure portability.',
      'RES-7': 'IBM Cloud security services extend to Satellite; FedRAMP controls applicable.',
      'RES-8': 'Reduces data centre footprint by using existing on-prem infrastructure.',
    },
  },

  // ── Red Hat OpenShift ────────────────────────────────────────────────────
  'openshift': {
    scores: { 'RES-1':2,'RES-2':2,'RES-3':3,'RES-4':4,'RES-5':3,'RES-6':4,'RES-7':3,'RES-8':3 },
    rationale: {
      'RES-1': 'Red Hat/IBM US HQ; OCP is the de-facto EU enterprise Kubernetes but strategic control is US.',
      'RES-2': 'US CLOUD Act applies to SaaS subscription; self-managed on-prem eliminates direct exposure.',
      'RES-3': 'On-prem deployment keeps all data under customer control; no mandatory IBM telemetry in air-gap mode.',
      'RES-4': 'Fully self-operable on-prem; extensive EU talent pool (OCP certification widely held); EU support available.',
      'RES-5': 'Built on open Kubernetes/CRI-O/Linux; Red Hat open-source supply chain; CentOS Stream as upstream; SBOM published.',
      'RES-6': '100% open Kubernetes API; open-source operators; standard OCI containers; no proprietary lock-in at runtime.',
      'RES-7': 'CIS Kubernetes benchmark; PodSecurity; NetworkPolicy; RHEL SELinux; OpenShift Compliance Operator.',
      'RES-8': 'Efficient container density reduces hardware footprint; RHEL power management; Kubernetes autoscaling.',
    },
  },

  // ── Red Hat OpenShift AI ─────────────────────────────────────────────────
  'openshift-ai': {
    scores: { 'RES-1':2,'RES-2':2,'RES-3':3,'RES-4':4,'RES-5':3,'RES-6':4,'RES-7':3,'RES-8':2 },
    rationale: {
      'RES-1': 'Red Hat/IBM US HQ; open-source project but governed from US.',
      'RES-2': 'On-prem deployment eliminates SaaS jurisdiction risk; US CLOUD Act for subscription.',
      'RES-3': 'All training data on-prem; customer-controlled encryption; no external model calls required.',
      'RES-4': 'Self-contained ML platform on OCP; EU teams fully operable; KubeFlow/Ray standard tooling.',
      'RES-5': 'Upstream open-source (KubeFlow, Ray, Elyra); SBOM transparency; US-governed IBM/RH core.',
      'RES-6': 'Fully open-source; standard Jupyter; KServe inference; OpenVINO EU-origin optimizer.',
      'RES-7': 'Same OCP security posture; model isolation; namespace-level RBAC.',
      'RES-8': 'GPU auto-scaler; model serving efficiency; supports AMD/Intel EU-manufactured accelerators.',
    },
  },

  // ── Red Hat Enterprise Linux ─────────────────────────────────────────────
  'rhel': {
    scores: { 'RES-1':2,'RES-2':2,'RES-3':3,'RES-4':4,'RES-5':3,'RES-6':4,'RES-7':4,'RES-8':3 },
    rationale: {
      'RES-1': 'Red Hat US HQ; RHEL widely deployed in EU; strategic control non-EU.',
      'RES-2': 'US CLOUD Act for subscription; on-prem self-managed removes direct SaaS risk.',
      'RES-3': 'OS data entirely on-prem; no mandatory telemetry in air-gap; LUKS encryption.',
      'RES-4': 'Fully self-operable; massive EU talent; Ansible automation; extensive documentation.',
      'RES-5': 'CentOS Stream upstream fully open; SRPM sources published; SBOM via Red Hat security advisory.',
      'RES-6': '100% open-source OS; standard POSIX interfaces; SELinux; no proprietary kernel modules required.',
      'RES-7': 'FIPS 140-2/3 validated crypto; SELinux mandatory access control; CIS benchmark; CVE patching SLA.',
      'RES-8': 'Power tuning profiles (tuned daemon); energy-efficient scheduling; long kernel support lifecycle reduces churn.',
    },
  },

  // ── Red Hat Ansible ──────────────────────────────────────────────────────
  'ansible': {
    scores: { 'RES-1':2,'RES-2':2,'RES-3':3,'RES-4':4,'RES-5':3,'RES-6':4,'RES-7':3,'RES-8':3 },
    rationale: {
      'RES-1': 'Red Hat/IBM US HQ; Ansible is globally dominant IT automation; governance non-EU.',
      'RES-2': 'Agentless; no mandatory SaaS; US CLOUD Act for AAP subscription only.',
      'RES-3': 'Playbooks and inventory fully on-prem; no data leaves the customer environment.',
      'RES-4': 'Self-operable automation; offline execution; EU talent pool for Ansible certifications.',
      'RES-5': 'Core Ansible fully open-source (GPL); Ansible Galaxy public modules; SBOM available.',
      'RES-6': 'Agentless YAML playbooks; open REST API; interoperable with any REST target.',
      'RES-7': 'Vault for secrets; no credentials in plaintext; audit logs; RBAC on AAP.',
      'RES-8': 'Automation reduces manual intervention and travel; efficient idempotent operations.',
    },
  },

  // ── IBM Power Systems ────────────────────────────────────────────────────
  'ibm-power': {
    scores: { 'RES-1':2,'RES-2':2,'RES-3':3,'RES-4':3,'RES-5':2,'RES-6':3,'RES-7':3,'RES-8':3 },
    rationale: {
      'RES-1': 'IBM US HQ; Power hardware in EU data centres; roadmap and IP held by IBM US.',
      'RES-2': 'On-prem hardware under EU customer control; US export regulations apply to chip technology.',
      'RES-3': 'On-prem data never leaves customer premises; hardware-enforced memory encryption.',
      'RES-4': 'EU-based IBM support; strong EU Power expert community; PowerVM portability.',
      'RES-5': 'US-designed Power10 processor; manufactured in US/Asia; firmware US-controlled.',
      'RES-6': 'KVM and PowerVM hypervisor; OpenShift support; AIX/IBM i/Linux workloads.',
      'RES-7': 'Hardware RNG; PowerSC security suite; FIPS 140-2; transparent memory encryption.',
      'RES-8': 'Power10 energy efficiency: 50% better perf/watt vs Power9; Power Management Unit.',
    },
  },

  // ── IBM Power Virtual Server ─────────────────────────────────────────────
  'ibm-power-vs': {
    scores: { 'RES-1':2,'RES-2':2,'RES-3':3,'RES-4':3,'RES-5':2,'RES-6':3,'RES-7':3,'RES-8':2 },
    rationale: {
      'RES-1': 'IBM Cloud infrastructure; EU regions (Frankfurt); strategic governance non-EU.',
      'RES-2': 'EU data residency; GDPR DPA; US CLOUD Act residual for cloud management plane.',
      'RES-3': 'Customer data in EU region; HPCS KYOK option; AIX/IBM i workloads isolated.',
      'RES-4': 'EU support; LPARs customer-controlled; IBM i portability model.',
      'RES-5': 'IBM Cloud US supply chain; Power hardware US-designed.',
      'RES-6': 'Standard VM APIs; SSH; PowerHA for HA; OpenShift deployable.',
      'RES-7': 'IBM Cloud IAM; VPC isolation; encryption at rest; GDPR compliant.',
      'RES-8': 'Shared infrastructure efficiency; EU data centre renewable energy.',
    },
  },

  // ── IBM z16 ──────────────────────────────────────────────────────────────
  'ibm-z': {
    scores: { 'RES-1':2,'RES-2':2,'RES-3':4,'RES-4':3,'RES-5':2,'RES-6':3,'RES-7':4,'RES-8':4 },
    rationale: {
      'RES-1': 'IBM US HQ; z16 widely deployed in EU banks/government; strategic IP non-EU.',
      'RES-2': 'On-prem hardware; customer controls data; US export control on Z encryption technology.',
      'RES-3': 'Pervasive encryption: all data encrypted at rest and in flight; customer-controlled master keys; air-gappable.',
      'RES-4': 'Extremely high operational autonomy; EU Z-certified specialists; decades of EU banking expertise.',
      'RES-5': 'Z processor US-designed/manufactured; firmware IBM-controlled; limited EU hardware sovereignty.',
      'RES-6': 'z/OS, Linux on Z, KVM; OpenShift on Z; standard APIs; zCX for container workloads.',
      'RES-7': 'FIPS 140-2 Level 4 crypto; CC EAL5+ evaluated; quantum-safe crypto (Kyber, Dilithium); tamper-evident hardware.',
      'RES-8': 'Consolidation: one z16 replaces hundreds of x86 servers; PUE-equivalent 1.0; 40% less floor space.',
    },
  },

  // ── IBM LinuxONE ─────────────────────────────────────────────────────────
  'ibm-linuxone': {
    scores: { 'RES-1':2,'RES-2':2,'RES-3':4,'RES-4':3,'RES-5':2,'RES-6':3,'RES-7':4,'RES-8':4 },
    rationale: {
      'RES-1': 'IBM US HQ; EU banking and government deployments; governance non-EU.',
      'RES-2': 'On-prem; EU data stays on-site; US export control on chip IP.',
      'RES-3': 'Pervasive encryption; confidential computing via Secure Execution; customer-owned key material.',
      'RES-4': 'Large EU LinuxONE talent community; self-operable with standard Linux skills.',
      'RES-5': 'Z-based processor US-designed; IBM firmware; no EU-manufactured chip option.',
      'RES-6': 'Standard Linux; KVM; OCI containers; KubeVirt; open ecosystem.',
      'RES-7': 'CC EAL5+; FIPS 140-2 Level 4; data confidentiality hardware guarantees; cryptographic co-processor.',
      'RES-8': 'Best-in-class energy efficiency; LinuxONE Emperor consolidates 2000+ x86 VMs; carbon footprint reports available.',
    },
  },

  // ── IBM Storage Scale ────────────────────────────────────────────────────
  'ibm-storage-scale': {
    scores: { 'RES-1':2,'RES-2':2,'RES-3':3,'RES-4':3,'RES-5':2,'RES-6':3,'RES-7':3,'RES-8':2 },
    rationale: {
      'RES-1': 'IBM US HQ; widely deployed in EU HPC and AI.',
      'RES-2': 'On-prem; data under EU control; US export control on some encryption features.',
      'RES-3': 'Encryption at rest; customer-controlled keys; on-prem deployment ensures data sovereignty.',
      'RES-4': 'EU support; self-operable; extensive documentation; EU HPC community familiar.',
      'RES-5': 'US-developed GPFS software; on-prem hardware from multiple vendors.',
      'RES-6': 'POSIX-compatible; NFSv4; object storage S3; open client interface.',
      'RES-7': 'AES-256 encryption; WORM compliance; audit logging; ImmutaVault for ransomware protection.',
      'RES-8': 'Tiered storage reduces active SSD use; transparent compression reduces capacity.',
    },
  },

  // ── IBM FlashSystem ──────────────────────────────────────────────────────
  'ibm-storage-flashsystem': {
    scores: { 'RES-1':2,'RES-2':2,'RES-3':3,'RES-4':3,'RES-5':2,'RES-6':3,'RES-7':4,'RES-8':3 },
    rationale: {
      'RES-1': 'IBM US HQ; hardware sold globally; no EU-specific governance.',
      'RES-2': 'On-prem hardware; data under EU customer control.',
      'RES-3': 'Hardware-based AES-256 encryption; customer-managed keys; air-gapped deployment possible.',
      'RES-4': 'EU IBM support; IBM Spectrum Control management; self-operable.',
      'RES-5': 'US-designed flash controllers; storage drives from multiple vendors (Kioxia, Samsung, Western Digital).',
      'RES-6': 'Block/file/object multi-protocol; NVMe-oF; iSCSI; FC; standard interfaces.',
      'RES-7': 'SafeGuarded Copy immutable snapshots; cyber-vault isolation; encryption; WORM; GDPR data erasure certified.',
      'RES-8': 'NVMe efficiency vs HDD: 80% lower energy per IOPS; deduplication reduces media wear.',
    },
  },

  // ── IBM Turbonomic ──────────────────────────────────────────────────────
  'turbonomic': {
    scores: { 'RES-1':2,'RES-2':2,'RES-3':2,'RES-4':3,'RES-5':2,'RES-6':3,'RES-7':2,'RES-8':3 },
    rationale: {
      'RES-1': 'IBM US HQ; SaaS and on-prem options; no EU governance.',
      'RES-2': 'On-prem deployment avoids direct SaaS jurisdiction risk; EU SaaS tier subject to US CLOUD Act.',
      'RES-3': 'Performance telemetry only; no customer data processed; on-prem mode available.',
      'RES-4': 'Self-operable; EU support; integrates with existing tooling (vSphere, OpenShift).',
      'RES-5': 'US-developed commercial software; limited open-source component.',
      'RES-6': 'REST API; Kubernetes operator; integrates with standard cloud APIs.',
      'RES-7': 'RBAC; audit logging; no customer data exposure in infrastructure recommendations.',
      'RES-8': 'Core purpose: reduces overprovisioning; measured carbon reduction dashboard; sustainability KPIs.',
    },
  },

  // ── IBM Instana ──────────────────────────────────────────────────────────
  'instana': {
    scores: { 'RES-1':2,'RES-2':2,'RES-3':2,'RES-4':3,'RES-5':2,'RES-6':3,'RES-7':3,'RES-8':2 },
    rationale: {
      'RES-1': 'IBM US HQ; SaaS observability; no EU governance.',
      'RES-2': 'SaaS subject to US CLOUD Act; on-prem self-hosted option available.',
      'RES-3': 'Traces and metrics; on-prem mode keeps telemetry in customer environment.',
      'RES-4': 'On-prem agent-based; EU support; auto-discovery reduces ops burden.',
      'RES-5': 'IBM commercial software; agent open-sourced for some integrations.',
      'RES-6': 'OpenTelemetry compatible; REST API; Prometheus metrics export.',
      'RES-7': 'RBAC; EU GDPR compliant SaaS option; audit trail for configuration changes.',
      'RES-8': 'Helps identify inefficient services; rightsizing recommendations reduce energy.',
    },
  },

  // ── IBM QRadar SIEM ──────────────────────────────────────────────────────
  'qradar-siem': {
    scores: { 'RES-1':2,'RES-2':2,'RES-3':3,'RES-4':3,'RES-5':2,'RES-6':3,'RES-7':4,'RES-8':2 },
    rationale: {
      'RES-1': 'IBM US HQ; widely used in EU government and banking; governance non-EU.',
      'RES-2': 'On-prem deployment available; no mandatory cloud dependency; US CLOUD Act for SaaS.',
      'RES-3': 'Security log data fully on-prem; EU data residency for SaaS; GDPR compliant.',
      'RES-4': 'Self-operable on-prem; EU SOC teams familiar; EU IBM Security support.',
      'RES-5': 'IBM commercial SIEM software; QRadar CE community edition; limited open-source transparency.',
      'RES-6': 'REST API; AQL query language; STIX/TAXII threat intel integration; OpenSearch backend (SaaS).',
      'RES-7': 'Core security product: GDPR, NIS2, DORA compliance packs; CC EAL2+ evaluated; SOC2; FedRAMP.',
      'RES-8': 'Log normalisation reduces storage overhead; event compression; efficient SIEM architecture.',
    },
  },

  // ── IBM QRadar SOAR ──────────────────────────────────────────────────────
  'qradar-soar': {
    scores: { 'RES-1':2,'RES-2':2,'RES-3':3,'RES-4':3,'RES-5':2,'RES-6':3,'RES-7':4,'RES-8':2 },
    rationale: {
      'RES-1': 'IBM US HQ; resilient platform acquisition (Resilient Systems); non-EU governance.',
      'RES-2': 'On-prem deployment; GDPR DPA; NIS2 incident reporting workflows built-in.',
      'RES-3': 'Incident data on-prem; EU residency option for SaaS; privacy-preserving playbooks.',
      'RES-4': 'Self-operable; EU SOAR playbook ecosystem; IBM X-Force integration.',
      'RES-5': 'IBM commercial software; Python-based playbooks open-community.',
      'RES-6': 'REST API; SOAR open platform; integration with 350+ tools.',
      'RES-7': 'Automates GDPR breach notifications; DORA incident management; NIS2 reporting workflows.',
      'RES-8': 'Automation reduces manual security analyst effort and associated travel/hardware.',
    },
  },

  // ── IBM QRadar EDR ───────────────────────────────────────────────────────
  'qradar-edr': {
    scores: { 'RES-1':2,'RES-2':2,'RES-3':3,'RES-4':3,'RES-5':2,'RES-6':2,'RES-7':4,'RES-8':2 },
    rationale: {
      'RES-1': 'IBM US HQ; ReaQta acquired 2021; EU operations; non-EU governance.',
      'RES-2': 'On-prem deployment; US CLOUD Act for SaaS console; GDPR DPA available.',
      'RES-3': 'Endpoint telemetry on-prem or EU cloud; no exfiltration of customer data.',
      'RES-4': 'Self-contained on-prem server; EU support; autonomous threat remediation reduces ops burden.',
      'RES-5': 'IBM commercial EDR; agent closed-source.',
      'RES-6': 'REST API; STIX/TAXII integration; limited open-source transparency for agent.',
      'RES-7': 'NanoOS kernel-level monitoring; autonomous response; AI threat classification; MITRE ATT&CK mapping.',
      'RES-8': 'Lightweight agent; autonomous response reduces time-to-contain = less damage = less recovery compute.',
    },
  },

  // ── IBM X-Force Threat Intelligence ─────────────────────────────────────
  'qradar-threat-intel': {
    scores: { 'RES-1':2,'RES-2':2,'RES-3':2,'RES-4':2,'RES-5':2,'RES-6':2,'RES-7':4,'RES-8':2 },
    rationale: {
      'RES-1': 'IBM US HQ; global threat research team; non-EU governance.',
      'RES-2': 'US CLOUD Act applies; threat data under IBM jurisdiction.',
      'RES-3': 'No customer data processed; inbound IOC feed; STIX/TAXII standard.',
      'RES-4': 'Subscription-based; integration via standard APIs; EU-operated client-side.',
      'RES-5': 'IBM commercial intelligence product; US-based research team.',
      'RES-6': 'STIX/TAXII open standards; REST API; TAXII server integration.',
      'RES-7': 'Core value: global CVE, malware, and phishing intelligence; MITRE ATT&CK alignment.',
      'RES-8': 'Threat intelligence reduces reactive incident response = less compute spent on incident recovery.',
    },
  },

  // ── IBM Security Verify (SaaS) ───────────────────────────────────────────
  'verify-saas': {
    scores: { 'RES-1':2,'RES-2':2,'RES-3':2,'RES-4':2,'RES-5':2,'RES-6':3,'RES-7':4,'RES-8':2 },
    rationale: {
      'RES-1': 'IBM US HQ; SaaS IAM; governance non-EU.',
      'RES-2': 'GDPR DPA; SCCs; US CLOUD Act applies to SaaS identity logs.',
      'RES-3': 'EU region SaaS option; identity data in EU; BYOK for token signing.',
      'RES-4': 'SaaS-based; EU support; REST API for enterprise integration.',
      'RES-5': 'IBM commercial IAM SaaS; limited open-source transparency.',
      'RES-6': 'OIDC; OAuth 2.0; SAML; SCIM; FIDO2 – all open standards.',
      'RES-7': 'MFA; adaptive access; fraud signals; GDPR consent management; NIS2 identity requirements.',
      'RES-8': 'SaaS multi-tenancy efficiency; shared authentication infrastructure.',
    },
  },

  // ── IBM Security Verify Access (on-prem) ────────────────────────────────
  'verify-access': {
    scores: { 'RES-1':2,'RES-2':2,'RES-3':3,'RES-4':3,'RES-5':2,'RES-6':3,'RES-7':4,'RES-8':2 },
    rationale: {
      'RES-1': 'IBM US HQ; on-prem product; no EU governance.',
      'RES-2': 'On-prem = no SaaS jurisdiction risk; US CLOUD Act applies only to support channels.',
      'RES-3': 'Identity data fully on-prem; customer-controlled key material; LDAP/AD integration.',
      'RES-4': 'Self-operable; EU IBM support; extensive documentation; Docker/OpenShift deployment.',
      'RES-5': 'IBM commercial software; some open-source components (Apache); limited SBOM.',
      'RES-6': 'OIDC; OAuth2; SAML; REST API; open standards throughout.',
      'RES-7': 'Step-up MFA; session management; risk-based authentication; GDPR consent; PKI integration.',
      'RES-8': 'On-prem deployment; container-based = efficient resource use; no dedicated SaaS servers.',
    },
  },

  // ── IBM Guardium Data Security Center ────────────────────────────────────
  'guardium-data': {
    scores: { 'RES-1':2,'RES-2':2,'RES-3':4,'RES-4':3,'RES-5':2,'RES-6':3,'RES-7':4,'RES-8':2 },
    rationale: {
      'RES-1': 'IBM US HQ; critical data security product; non-EU governance.',
      'RES-2': 'On-prem collectors; GDPR DPA; NIS2 and DORA compliance packs.',
      'RES-3': 'Data activity monitoring without data exfiltration; customer retains all data; KYOK integration.',
      'RES-4': 'On-prem or hybrid; EU support; self-operable collectors.',
      'RES-5': 'IBM commercial data security software; appliance or software form factor.',
      'RES-6': 'REST API; STIX export; integration with SIEM tools; standard SQL/NoSQL monitoring.',
      'RES-7': 'Core data security: GDPR Article 30 records; PCI DSS; SOX; NIS2; DORA data protection controls.',
      'RES-8': 'Efficient agent-based monitoring; shared infrastructure management reduces hardware sprawl.',
    },
  },

  // ── IBM Hyper Protect Crypto Services ────────────────────────────────────
  'hpcs': {
    scores: { 'RES-1':2,'RES-2':2,'RES-3':4,'RES-4':3,'RES-5':2,'RES-6':3,'RES-7':4,'RES-8':2 },
    rationale: {
      'RES-1': 'IBM US HQ; FIPS 140-2 L4 cloud HSM; governance non-EU.',
      'RES-2': 'EU region available; GDPR DPA; US CLOUD Act residual for cloud management plane.',
      'RES-3': 'Keep Your Own Key: IBM operators cannot access master keys; customer-exclusive cryptographic control; EU data residency.',
      'RES-4': 'Cloud-based; EU support; well-documented API; integration with IBM Cloud services.',
      'RES-5': 'IBM Z-based HSM; Z hardware US-manufactured; IBM-controlled firmware.',
      'RES-6': 'PKCS#11; EP11; REST API; integrates with OpenShift Secrets and Kubernetes CSI.',
      'RES-7': 'FIPS 140-2 Level 4 (highest available); CC EAL5+; quantum-safe key derivation; master key ceremonies.',
      'RES-8': 'Shared HSM infrastructure reduces dedicated appliance footprint; efficient key operations.',
    },
  },

  // ── IBM Hyper Protect Virtual Servers ────────────────────────────────────
  'hpvs': {
    scores: { 'RES-1':2,'RES-2':2,'RES-3':4,'RES-4':3,'RES-5':2,'RES-6':3,'RES-7':4,'RES-8':3 },
    rationale: {
      'RES-1': 'IBM US HQ; unique confidential computing offering; strategic control non-EU.',
      'RES-2': 'EU region; GDPR DPA; US CLOUD Act residual for management plane.',
      'RES-3': 'Hardware-based workload isolation (Secure Execution); IBM operators technically excluded; customer-owned key material.',
      'RES-4': 'Self-contained workloads; IBM Z-backed; EU support available.',
      'RES-5': 'IBM Z hardware US-manufactured; IBM-controlled firmware; unique in EU market.',
      'RES-6': 'OCI container-based; standard Docker images; no proprietary runtime API.',
      'RES-7': 'Highest confidentiality assurance in public cloud; CC EAL5+; FIPS 140-2 L4 backing HSM.',
      'RES-8': 'Runs on shared Z infrastructure with highest consolidation ratio; efficient per workload.',
    },
  },

  // ── IBM QRadar (on-prem integration placeholder) ─────────────────────────
  'ibm-keyprotect': {
    scores: { 'RES-1':2,'RES-2':2,'RES-3':3,'RES-4':3,'RES-5':2,'RES-6':3,'RES-7':3,'RES-8':2 },
    rationale: {
      'RES-1': 'IBM US HQ; IBM Cloud KMS service; non-EU governance.',
      'RES-2': 'EU region; GDPR DPA; US CLOUD Act residual.',
      'RES-3': 'Bring Your Own Key (BYOK); EU region; keys dedicated per customer.',
      'RES-4': 'Cloud service; EU support; REST API.',
      'RES-5': 'IBM Cloud US supply chain.',
      'RES-6': 'PKCS#11; REST API; KMIP; open standards.',
      'RES-7': 'FIPS 140-2 L3; HSM-backed; key rotation; audit logging.',
      'RES-8': 'Shared cloud HSM infrastructure efficiency.',
    },
  },

  // ── IBM Cloud Pak for Integration ────────────────────────────────────────
  'cp4i': {
    scores: { 'RES-1':2,'RES-2':2,'RES-3':3,'RES-4':4,'RES-5':2,'RES-6':4,'RES-7':3,'RES-8':2 },
    rationale: {
      'RES-1': 'IBM US HQ; on-prem deployment common in EU banks/utilities; governance non-EU.',
      'RES-2': 'On-prem deployment eliminates SaaS jurisdiction risk; GDPR DPA for subscription.',
      'RES-3': 'Integration messages on-prem; MQ encryption; customer-controlled keys.',
      'RES-4': 'Full on-prem deployment on OpenShift; EU integration expert community; IBM support.',
      'RES-5': 'IBM commercial software layer; open-source Kafka (Strimzi), MQ LTS, ACE; SBOM partially available.',
      'RES-6': 'Open APIs (REST, SOAP, Kafka, MQ); AsyncAPI; OpenAPI 3.0; AMQP; MQTT – industry standards.',
      'RES-7': 'DataPower gateway inline security; mTLS; OAuth; API rate limiting; GDPR compliant.',
      'RES-8': 'Consolidated integration platform reduces server sprawl; efficient shared services model.',
    },
  },

  // ── IBM MQ ───────────────────────────────────────────────────────────────
  'mq': {
    scores: { 'RES-1':2,'RES-2':2,'RES-3':3,'RES-4':4,'RES-5':2,'RES-6':3,'RES-7':3,'RES-8':2 },
    rationale: {
      'RES-1': 'IBM US HQ; MQ is critical EU financial infrastructure; IP non-EU.',
      'RES-2': 'On-prem deployment; US CLOUD Act for support; GDPR DPA.',
      'RES-3': 'Messages on-prem; AES-256 in-flight and at-rest; customer-managed keys.',
      'RES-4': 'Fully self-operable; 40 years of EU talent; extensive documentation; multi-platform.',
      'RES-5': 'IBM commercial messaging; no open-source MQ core; SBOM limited.',
      'RES-6': 'AMQP 1.0; MQTT; REST messaging API; JMS; MQTT; open protocol support.',
      'RES-7': 'TLS 1.3; mTLS; channel authentication; GDPR data in transit protection.',
      'RES-8': 'Efficient persistent messaging; batching reduces network overhead.',
    },
  },

  // ── IBM API Connect ──────────────────────────────────────────────────────
  'apic': {
    scores: { 'RES-1':2,'RES-2':2,'RES-3':3,'RES-4':3,'RES-5':2,'RES-6':4,'RES-7':3,'RES-8':2 },
    rationale: {
      'RES-1': 'IBM US HQ; widely deployed in EU financial services; non-EU governance.',
      'RES-2': 'On-prem or hybrid; GDPR DPA; DORA API management compliance.',
      'RES-3': 'API traffic on-prem; gateway enforces data residency; customer-managed keys.',
      'RES-4': 'Self-operable on OpenShift; EU support; API developer community.',
      'RES-5': 'IBM commercial API management; DataPower gateway commercial.',
      'RES-6': 'OpenAPI 3.0 native; REST; GraphQL; SOAP; AsyncAPI 2.0; open standards throughout.',
      'RES-7': 'OAuth 2.0; JWT; mTLS; rate limiting; API threat protection; GDPR consent at API layer.',
      'RES-8': 'API consolidation reduces backend calls; efficient gateway caching.',
    },
  },

  // ── IBM Cloud Pak for Business Automation ────────────────────────────────
  'cp4ba': {
    scores: { 'RES-1':2,'RES-2':2,'RES-3':3,'RES-4':3,'RES-5':2,'RES-6':3,'RES-7':3,'RES-8':2 },
    rationale: {
      'RES-1': 'IBM US HQ; EU financial services and government deployments; non-EU governance.',
      'RES-2': 'On-prem on OpenShift; GDPR process automation; DORA workflow compliance.',
      'RES-3': 'Process data on-prem; document encryption; customer-controlled keys.',
      'RES-4': 'Self-operable; EU certified IBM consultants; BPMN skill widely available.',
      'RES-5': 'IBM commercial software; ODM open-source FEEL/DMN; FileNet proprietary.',
      'RES-6': 'BPMN 2.0; DMN 1.3; CMIS; REST APIs; open standards for process definitions.',
      'RES-7': 'GDPR consent workflows; audit trails; DORA incident documentation; role-based access.',
      'RES-8': 'Process automation reduces paper and manual effort; efficient containerised deployment.',
    },
  },

  // ── IBM Db2 ──────────────────────────────────────────────────────────────
  'db2': {
    scores: { 'RES-1':2,'RES-2':2,'RES-3':3,'RES-4':3,'RES-5':2,'RES-6':3,'RES-7':3,'RES-8':2 },
    rationale: {
      'RES-1': 'IBM US HQ; Db2 critical in EU banking and telco; IP non-EU.',
      'RES-2': 'On-prem deployment; US CLOUD Act for subscription; GDPR DPA.',
      'RES-3': 'Data on-prem; AES-256 TDE; customer-managed keys; row/column access control.',
      'RES-4': 'Fully self-operable; EU DBA community; IBM support EU SLAs.',
      'RES-5': 'IBM commercial RDBMS; some open-source tooling; limited SBOM.',
      'RES-6': 'SQL:2016 standard; JDBC/ODBC; REST API; Kafka Connect; partial open interfaces.',
      'RES-7': 'GDPR Article 25 data minimisation; field-level encryption; DCGM auditing; SOC 2; ISO 27001.',
      'RES-8': 'In-memory columnar processing reduces I/O; row compression by default; efficient buffer pool.',
    },
  },

  // ── IBM Cognos Analytics ─────────────────────────────────────────────────
  'cognos': {
    scores: { 'RES-1':2,'RES-2':2,'RES-3':2,'RES-4':3,'RES-5':2,'RES-6':2,'RES-7':3,'RES-8':2 },
    rationale: {
      'RES-1': 'IBM US HQ; BI tool; governance non-EU.',
      'RES-2': 'On-prem or SaaS; GDPR DPA; US CLOUD Act for SaaS.',
      'RES-3': 'Report data on-prem; BYOK for SaaS; user credential separation.',
      'RES-4': 'Self-operable; EU support; broad EU analyst community.',
      'RES-5': 'IBM commercial BI; proprietary query engine.',
      'RES-6': 'REST API; JDBC; OData; limited open interface compared to open BI tools.',
      'RES-7': 'RBAC; LDAP/AD integration; data masking; GDPR report access controls.',
      'RES-8': 'Efficient centralised BI replaces distributed spreadsheets; server consolidation.',
    },
  },

  // ── IBM Cloud Pak for AIOps ──────────────────────────────────────────────
  'cp4aiops': {
    scores: { 'RES-1':2,'RES-2':2,'RES-3':2,'RES-4':3,'RES-5':2,'RES-6':3,'RES-7':3,'RES-8':3 },
    rationale: {
      'RES-1': 'IBM US HQ; AIOps platform; no EU governance.',
      'RES-2': 'On-prem on OpenShift; GDPR DPA; US CLOUD Act for support channels.',
      'RES-3': 'Event data on-prem; no customer data exfiltration; topology maps private.',
      'RES-4': 'Self-operable on OCP; EU support; SRE community adoption growing.',
      'RES-5': 'IBM commercial + open-source (Prometheus, OpenTelemetry) hybrid supply chain.',
      'RES-6': 'OpenTelemetry; Prometheus metrics; REST API; Kafka event bus – open standards.',
      'RES-7': 'Alert correlation reduces noise; MTTR reduction; integrates with QRadar for SecOps.',
      'RES-8': 'AI-driven resource optimisation = reduced overprovisioning = lower energy; sustainability metrics.',
    },
  },

  // ── IBM Maximo Application Suite ─────────────────────────────────────────
  'maximo': {
    scores: { 'RES-1':2,'RES-2':2,'RES-3':2,'RES-4':3,'RES-5':2,'RES-6':3,'RES-7':3,'RES-8':3 },
    rationale: {
      'RES-1': 'IBM US HQ; Maximo deployed in EU energy/transport/public sector; governance non-EU.',
      'RES-2': 'On-prem or IBM Cloud EU; GDPR DPA; US CLOUD Act for SaaS.',
      'RES-3': 'Asset data on-prem; IoT sensor data encrypted; customer-controlled keys available.',
      'RES-4': 'Self-operable; huge EU Maximo community; IBM support; offline mobile capability.',
      'RES-5': 'IBM commercial EAM; IoT sensors from multiple vendors; open Maximo Application Framework.',
      'RES-6': 'REST APIs; open application framework (Maximo Application Framework); Kafka integration.',
      'RES-7': 'RBAC; GDPR asset data compliance; physical security audit trails.',
      'RES-8': 'Core sustainability use case: predictive maintenance reduces energy waste and premature asset replacement.',
    },
  },

  // ── IBM Envizi ESG Suite ─────────────────────────────────────────────────
  'envizi': {
    scores: { 'RES-1':2,'RES-2':2,'RES-3':2,'RES-4':2,'RES-5':2,'RES-6':2,'RES-7':3,'RES-8':4 },
    rationale: {
      'RES-1': 'IBM US HQ; SaaS ESG tool; governance non-EU.',
      'RES-2': 'GDPR DPA; SaaS subject to US CLOUD Act; EU SCCs in place.',
      'RES-3': 'Emissions data in EU region; user access controls; GDPR compliant.',
      'RES-4': 'SaaS; EU support; REST API for data integration.',
      'RES-5': 'IBM Cloud SaaS; US supply chain.',
      'RES-6': 'REST API; GRI/TCFD/CSRD alignment; open reporting frameworks.',
      'RES-7': 'SOC 2; GDPR; role-based access to ESG data.',
      'RES-8': 'Core purpose: Scope 1/2/3 measurement; EU CSRD reporting; GHG Protocol aligned; decarbonisation tracking.',
    },
  },

  // ── IBM Financial Services Cloud ─────────────────────────────────────────
  'ibm-fss': {
    scores: { 'RES-1':2,'RES-2':3,'RES-3':3,'RES-4':3,'RES-5':2,'RES-6':3,'RES-7':4,'RES-8':2 },
    rationale: {
      'RES-1': 'IBM US HQ; EU-specific financial services platform; governance non-EU but EU-aligned policies.',
      'RES-2': 'Designed for DORA, NIS2, GDPR, EBA guidelines; EU-specific contractual commitments; US CLOUD Act residual.',
      'RES-3': 'EU data residency enforced; HPCS KYOK; financial data isolation.',
      'RES-4': 'EU-based support; financial services expertise; EU operational autonomy plan.',
      'RES-5': 'IBM Cloud supply chain US-based; EU-specific architecture validated.',
      'RES-6': 'OpenShift-based; open banking APIs; PSD2 compliance; FDX data standards.',
      'RES-7': 'FedRAMP equivalent; ISO 27001; SOC 1/2; DORA compliance controls; NIS2 incident response SLAs.',
      'RES-8': 'EU data centre renewable energy; efficient multi-tenant infrastructure.',
    },
  },

  // ── IBM Sterling Order Management ────────────────────────────────────────
  'sterling-oms': {
    scores: { 'RES-1':2,'RES-2':2,'RES-3':2,'RES-4':3,'RES-5':2,'RES-6':3,'RES-7':3,'RES-8':2 },
    rationale: {
      'RES-1': 'IBM US HQ; EU retail and e-commerce deployments; governance non-EU.',
      'RES-2': 'On-prem or SaaS; GDPR DPA; US CLOUD Act for SaaS.',
      'RES-3': 'Order data on-prem option; customer encryption available.',
      'RES-4': 'On-prem deployment on OpenShift; EU support; extensive implementation community.',
      'RES-5': 'IBM commercial OMS; US supply chain for software.',
      'RES-6': 'REST APIs; GraphQL; open integration framework; event-driven architecture.',
      'RES-7': 'GDPR order data compliance; PCI DSS for payment data; RBAC.',
      'RES-8': 'Demand-driven inventory optimisation reduces overstock and logistics emissions.',
    },
  },

  // ── Red Hat Advanced Cluster Security ────────────────────────────────────
  'stackrox': {
    scores: { 'RES-1':2,'RES-2':2,'RES-3':3,'RES-4':4,'RES-5':3,'RES-6':4,'RES-7':4,'RES-8':2 },
    rationale: {
      'RES-1': 'Red Hat/IBM US HQ; open-source StackRox; non-EU governance.',
      'RES-2': 'On-prem on OCP; no mandatory SaaS; US CLOUD Act for subscription only.',
      'RES-3': 'Container/cluster data fully on-prem; no external telemetry required.',
      'RES-4': 'Self-operable on OCP; EU security community; RHACS certifications widely available.',
      'RES-5': 'StackRox open-sourced (Apache 2.0); SBOM published; open-source supply chain.',
      'RES-6': 'Kubernetes-native; open OPA/Rego policies; open-source scanner; STIX export.',
      'RES-7': 'CIS Kubernetes benchmarks; NIS2 container security; GDPR image scanning; runtime threat detection.',
      'RES-8': 'Identifies unused/oversized container resources; policy enforcement reduces bloat.',
    },
  },

  // ── IBM Envizi Supply Chain ──────────────────────────────────────────────
  'envizi-spm': {
    scores: { 'RES-1':2,'RES-2':2,'RES-3':2,'RES-4':2,'RES-5':2,'RES-6':2,'RES-7':2,'RES-8':4 },
    rationale: {
      'RES-1': 'IBM US HQ; SaaS ESG tool; non-EU governance.',
      'RES-2': 'GDPR DPA; US CLOUD Act applies.',
      'RES-3': 'Supplier data in EU region; GDPR compliant.',
      'RES-4': 'SaaS; EU support.',
      'RES-5': 'IBM Cloud US supply chain.',
      'RES-6': 'REST API; GRI/CSRD frameworks; open reporting.',
      'RES-7': 'SOC 2; GDPR supplier data.',
      'RES-8': 'Scope 3 supplier emissions measurement; CSRD value chain reporting; SBTi alignment.',
    },
  },

  // ── IBM TRIRIGA ──────────────────────────────────────────────────────────
  'tririga': {
    scores: { 'RES-1':2,'RES-2':2,'RES-3':2,'RES-4':3,'RES-5':2,'RES-6':2,'RES-7':3,'RES-8':3 },
    rationale: {
      'RES-1': 'IBM US HQ; facility management platform; non-EU governance.',
      'RES-2': 'On-prem or SaaS; GDPR DPA.',
      'RES-3': 'Facility and occupancy data on-prem; GDPR data minimisation.',
      'RES-4': 'Self-operable; IBM support; large EU real estate customer base.',
      'RES-5': 'IBM commercial IWMS; US supply chain.',
      'RES-6': 'REST API; IFC/BIM integration; open reporting.',
      'RES-7': 'RBAC; GDPR occupancy data; access control integration.',
      'RES-8': 'Energy monitoring; space utilisation optimisation; carbon footprint per building; ISO 14001 support.',
    },
  },

  // ── Red Hat OpenShift GitOps ─────────────────────────────────────────────
  'gitops': {
    scores: { 'RES-1':2,'RES-2':2,'RES-3':3,'RES-4':4,'RES-5':4,'RES-6':4,'RES-7':3,'RES-8':3 },
    rationale: {
      'RES-1': 'Red Hat/IBM US HQ; ArgoCD open-source; CNCF project; non-EU governance.',
      'RES-2': 'On-prem only; no SaaS component; US CLOUD Act only for subscription.',
      'RES-3': 'Git repository fully customer-controlled; manifests on-prem; no external data.',
      'RES-4': 'Fully self-operable; EU GitOps community; declarative automation.',
      'RES-5': 'ArgoCD fully open-source (Apache 2.0); CNCF graduated; transparent supply chain; SBOM.',
      'RES-6': 'Kubernetes-native; Helm; Kustomize; open declarative APIs; no proprietary lock-in.',
      'RES-7': 'Declarative drift detection; audit trails; RBAC; signed commits via Cosign.',
      'RES-8': 'Declarative infrastructure reduces configuration drift = less remediation compute.',
    },
  },

  // ── Red Hat Quay ─────────────────────────────────────────────────────────
  'quay': {
    scores: { 'RES-1':2,'RES-2':2,'RES-3':3,'RES-4':4,'RES-5':3,'RES-6':4,'RES-7':3,'RES-8':2 },
    rationale: {
      'RES-1': 'Red Hat/IBM US HQ; open-source Quay; non-EU governance.',
      'RES-2': 'On-prem; no SaaS dependency; US CLOUD Act only for subscription.',
      'RES-3': 'Container images fully on-prem; customer-controlled storage; no external calls.',
      'RES-4': 'Self-operable; EU container community; declarative configuration.',
      'RES-5': 'Quay open-source (Apache 2.0); integrated Clair scanner open-source.',
      'RES-6': 'OCI registry; Docker v2 API; cosign artifact signing; open standards.',
      'RES-7': 'CVE scanning via Clair; image signing; RBAC; vulnerability policy enforcement.',
      'RES-8': 'Image layer deduplication; garbage collection; efficient storage use.',
    },
  },

  // ── IBM DataStage ────────────────────────────────────────────────────────
  'datastage': {
    scores: { 'RES-1':2,'RES-2':2,'RES-3':3,'RES-4':3,'RES-5':2,'RES-6':3,'RES-7':3,'RES-8':2 },
    rationale: {
      'RES-1': 'IBM US HQ; critical ETL platform in EU financial services; non-EU governance.',
      'RES-2': 'On-prem or Cloud Pak; GDPR DPA; US CLOUD Act for SaaS.',
      'RES-3': 'ETL data on-prem; encryption in transit/at rest; customer-controlled keys.',
      'RES-4': 'Self-operable; EU IBM support; large ETL community.',
      'RES-5': 'IBM commercial ETL; limited open-source components.',
      'RES-6': 'REST API; ODBC/JDBC; Kafka Connect; open connector framework.',
      'RES-7': 'GDPR data transformation logging; RBAC; data lineage for compliance.',
      'RES-8': 'Parallel execution efficiency; pushdown optimization reduces data movement.',
    },
  },

  // ── Red Hat Advanced Cluster Management ──────────────────────────────────
  'rhacs': {
    scores: { 'RES-1':2,'RES-2':2,'RES-3':3,'RES-4':4,'RES-5':3,'RES-6':4,'RES-7':3,'RES-8':3 },
    rationale: {
      'RES-1': 'Red Hat/IBM US HQ; RHACM open-source; non-EU governance.',
      'RES-2': 'On-prem on OCP; no mandatory SaaS dependency.',
      'RES-3': 'Cluster data on-prem; no external telemetry required in disconnected mode.',
      'RES-4': 'Fully self-operable; EU multicluster ops; GitOps integration.',
      'RES-5': 'Open Cluster Management (OCM) open-source; CNCF sandbox; SBOM available.',
      'RES-6': 'Kubernetes-native; open OCM APIs; Helm integration; GitOps declarative.',
      'RES-7': 'Policy-based compliance across clusters; CIS benchmarks; RBAC propagation.',
      'RES-8': 'Efficient cluster lifecycle management; hibernation policy for non-production cost/energy.',
    },
  },

  // ── IBM Sovereign Core ────────────────────────────────────────────────────
  'sovereign-core': {
    scores: { 'RES-1':3,'RES-2':3,'RES-3':4,'RES-4':4,'RES-5':3,'RES-6':4,'RES-7':4,'RES-8':3 },
    rationale: {
      'RES-1': 'Conçu pour les marchés souverains ; gouvernance opérationnelle sous contrôle EU possible via déploiement on-prem ; IBM US HQ reste le titulaire de la propriété intellectuelle.',
      'RES-2': 'Déploiement on-prem ou cloud souverain EU éliminant l\'exposition directe au CLOUD Act américain ; contrats gouvernants les opérations soumis au droit EU ; conformité RGPD, NIS2, DORA intégrée.',
      'RES-3': 'Contrôle exclusif des clés de chiffrement par le client (Keep Your Own Key) ; résidence des données garantie sur territoire EU ; aucune dépendance externe aux modèles de données non-EU ; chiffrement omniprésent.',
      'RES-4': 'Conçu pour une autonomie opérationnelle complète des équipes EU ; portabilité maximale sur OpenShift ; support IBM EU ; documentation et runbooks souverains inclus ; pas de dépendance aux équipes US pour l\'exploitation.',
      'RES-5': 'Basé sur la stack open source Red Hat / OpenShift (Apache 2.0 / GPL) ; SBOM publiée ; couche logicielle IBM commerciale au-dessus d\'une fondation open source auditée.',
      'RES-6': 'APIs ouvertes Kubernetes-native ; interopérabilité avec tout écosystème EU ; standards ouverts (OpenAPI, OIDC, KMIP) ; aucun vendor lock-in au niveau du runtime ; compatible avec des alternatives EU.',
      'RES-7': 'ISO 27001 ; FIPS 140-2 L4 via HPCS ; CC EAL évaluation en cours ; contrôles NIS2 & DORA natifs ; audit EU indépendant possible ; détection des menaces et réponse sous juridiction EU.',
      'RES-8': 'Infrastructure consolidée réduisant l\'empreinte carbone ; data centres EU alimentés en énergie renouvelable ; engagement IBM net-zéro 2030 ; Power Management et auto-scaling pour optimiser la consommation énergétique.',
    },
  },
};

/**
 * Default fallback scores for products without a specific entry.
 * Represents a generic IBM SaaS product profile.
 */
export const DEFAULT_SCORES: ProductScoreEntry = {
  scores: { 'RES-1':2,'RES-2':2,'RES-3':2,'RES-4':2,'RES-5':2,'RES-6':2,'RES-7':2,'RES-8':2 },
  rationale: {
    'RES-1': 'IBM is a US-headquartered corporation; EU business units present; strategic governance outside EU.',
    'RES-2': 'GDPR Data Processing Agreement in place; EU Standard Contractual Clauses; US CLOUD Act residual risk.',
    'RES-3': 'EU data residency option available; IBM Key Protect for BYOK; data processing subject to DPA.',
    'RES-4': 'EU-based IBM support teams; deployment flexibility on OpenShift; IBM Consulting EU presence.',
    'RES-5': 'US-based software development; IBM open-source participation; limited EU supply chain independence.',
    'RES-6': 'REST APIs; OpenAPI 3.0 documentation; partial open-source transparency; standard integration.',
    'RES-7': 'ISO 27001; SOC 2 Type II; GDPR compliance; IBM Security integration capabilities.',
    'RES-8': 'IBM 2030 net-zero commitment; EU data centres use renewable energy; sustainability reporting.',
  },
};
