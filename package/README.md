# IBM IRN / CSF Analyzer — Guide d'installation

**Indice de Résilience Numérique × Cloud Sovereignty Framework EU**
IBM Technology Catalogue 2026

---

## Contenu du package

```
ibm-irn-csf-analyzer/
├── app/
│   └── browser/          ← Application Angular compilée (prête à servir)
│       ├── index.html
│       ├── main-*.js
│       └── styles-*.css
├── install-macos.sh      ← Installateur macOS / Linux
├── start-macos.sh        ← Démarrage macOS / Linux
├── install-windows.bat   ← Installateur Windows
├── start-windows.bat     ← Démarrage Windows
├── server-package.json   ← Dépendance serveur HTTP (serve)
└── README.md             ← Ce fichier
```

---

## Prérequis

**Node.js 18 ou supérieur** doit être installé sur le poste.

| Plateforme | Téléchargement |
|---|---|
| macOS / Linux | https://nodejs.org → LTS |
| Windows | https://nodejs.org → LTS (installer .msi) |

> **Vérifier l'installation de Node.js :**
> Ouvrir un terminal et taper : `node --version`
> Résultat attendu : `v18.x.x` ou supérieur.

---

## Installation et démarrage — macOS / Linux

### 1. Extraire l'archive

```bash
unzip ibm-irn-csf-analyzer.zip
cd ibm-irn-csf-analyzer
```

### 2. Installer (une seule fois)

```bash
chmod +x install-macos.sh start-macos.sh
./install-macos.sh
```

> Cette étape installe uniquement le serveur HTTP léger `serve` (~2 Mo).
> Elle ne modifie pas le système et ne nécessite pas de droits administrateur.

### 3. Démarrer l'application

```bash
./start-macos.sh
```

L'application s'ouvre automatiquement dans le navigateur à l'adresse :
**http://localhost:8080**

### Port personnalisé (optionnel)

```bash
./start-macos.sh --port 9090
```

---

## Installation et démarrage — Windows

### 1. Extraire l'archive

Clic droit sur `ibm-irn-csf-analyzer.zip` → **Extraire tout…**

### 2. Installer (une seule fois)

Double-cliquer sur **`install-windows.bat`**

> Si Windows affiche un avertissement "Éditeur inconnu", cliquer sur
> **"Informations complémentaires"** puis **"Exécuter quand même"**.
> Ce script installe uniquement le serveur HTTP léger `serve`.

### 3. Démarrer l'application

Double-cliquer sur **`start-windows.bat`**

L'application s'ouvre automatiquement dans le navigateur à l'adresse :
**http://localhost:8080**

> **Ne pas fermer la fenêtre noire** (invite de commandes) tant que
> vous utilisez l'application. Fermer cette fenêtre arrête le serveur.

---

## Utilisation de l'application

1. **Sélectionner une catégorie** de produit IBM Technology 2026
2. **Sélectionner un produit** dans la liste déroulante
3. Le **Spider Chart IRN** se génère automatiquement sur les 8 dimensions :

| Code | Dimension IRN (FR) | CSF Code | Poids |
|---|---|---|---|
| RES-1 | Résilience Stratégique | SOV-1 | 15% |
| RES-2 | Résilience Économique et Juridique | SOV-2 | 10% |
| RES-3 | Résilience Data & IA | SOV-3 | 10% |
| RES-4 | Résilience Opérationnelle | SOV-4 | 15% |
| RES-5 | Résilience Supply-Chain | SOV-5 | 20% |
| RES-6 | Résilience Technologique | SOV-6 | 15% |
| RES-7 | Résilience Sécurité | SOV-7 | 10% |
| RES-8 | Résilience Environnementale | SOV-8 | 5% |

4. Cliquer sur **"Détail des Dimensions"** pour voir le tableau complet
   avec les justifications par dimension.

### Niveaux de score SEAL (0 → 4)

| Niveau | Label | Signification |
|---|---|---|
| SEAL-0 | No Sovereignty | Contrôle exclusif non-EU |
| SEAL-1 | Jurisdictional Sovereignty | Droit EU formel, peu applicable |
| SEAL-2 | Data Sovereignty | Droit EU applicable, dépendances non-EU |
| SEAL-3 | Digital Resilience | Influence EU significative, contrôle marginal non-EU |
| SEAL-4 | Full Digital Sovereignty | Contrôle EU complet, aucune dépendance critique non-EU |

---

## Arrêter l'application

- **macOS / Linux :** Appuyer sur `Ctrl+C` dans le terminal
- **Windows :** Fermer la fenêtre invite de commandes

---

## Références

- Indice de Résilience Numérique (IRN) — Bercy, Juillet 2025
- Cloud Sovereignty Framework EU v1.2.1 — Octobre 2025
- IBM Technology Catalogue 2026

---

*Application développée avec Angular 22 · Chart.js · IBM Technology 2026*
