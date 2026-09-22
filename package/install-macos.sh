#!/bin/bash
# ═══════════════════════════════════════════════════════════════════════════════
#  IBM IRN / CSF Analyzer — Installateur macOS / Linux
#  Indice de Résilience Numérique × Cloud Sovereignty Framework EU
# ═══════════════════════════════════════════════════════════════════════════════
#
#  Ce script installe les dépendances minimales nécessaires pour exécuter
#  l'application sur ce poste de travail. L'application Angular est déjà
#  compilée — aucun build n'est requis.
#
#  Prérequis : Node.js 18+ doit être installé.
#              Téléchargement gratuit : https://nodejs.org
#
#  Usage :
#    chmod +x install-macos.sh
#    ./install-macos.sh
# ═══════════════════════════════════════════════════════════════════════════════

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

echo ""
echo "╔══════════════════════════════════════════════════════════════════╗"
echo "║       IBM IRN / CSF Analyzer — Installation macOS / Linux       ║"
echo "╚══════════════════════════════════════════════════════════════════╝"
echo ""

# ── 1. Vérifier Node.js ────────────────────────────────────────────────────
if ! command -v node &>/dev/null; then
  echo "❌  Node.js n'est pas installé sur ce poste."
  echo "    Veuillez le télécharger et l'installer depuis : https://nodejs.org"
  echo "    Version minimale requise : 18.x"
  exit 1
fi

NODE_VERSION=$(node -e "process.stdout.write(process.version)")
NODE_MAJOR=$(node -e "process.stdout.write(String(parseInt(process.version.slice(1))))")

echo "✅  Node.js détecté : $NODE_VERSION"

if [ "$NODE_MAJOR" -lt 18 ]; then
  echo "⚠️   Attention : Node.js $NODE_VERSION est inférieur à la version recommandée (18+)."
  echo "    L'application pourrait ne pas fonctionner correctement."
  echo "    Mise à jour recommandée : https://nodejs.org"
fi

# ── 2. Vérifier npm ────────────────────────────────────────────────────────
if ! command -v npm &>/dev/null; then
  echo "❌  npm n'est pas disponible. Réinstallez Node.js depuis https://nodejs.org"
  exit 1
fi
echo "✅  npm détecté : $(npm --version)"

# ── 3. Installer le serveur HTTP léger ────────────────────────────────────
echo ""
echo "⏳  Installation du serveur HTTP léger (serve)..."
cd "$SCRIPT_DIR"
cp server-package.json package.json
npm install --omit=dev --no-fund --no-audit 2>&1 | grep -v "^npm warn" || true
rm -f package.json

echo "✅  Serveur HTTP installé."

# ── 4. Fin ────────────────────────────────────────────────────────────────
echo ""
echo "╔══════════════════════════════════════════════════════════════════╗"
echo "║  ✅  Installation terminée avec succès !                        ║"
echo "║                                                                  ║"
echo "║  Pour démarrer l'application, exécutez :                        ║"
echo "║    ./start-macos.sh                                              ║"
echo "╚══════════════════════════════════════════════════════════════════╝"
echo ""
