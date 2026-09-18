#!/bin/bash
# ─── IRN / CSF Analyzer — IBM Technology 2026 ─────────────────────────────
# Lancer l'application Angular localement
# Usage: ./run.sh
#
# L'application sera accessible sur http://localhost:4200
# ────────────────────────────────────────────────────────────────────────────
set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
APP_DIR="$SCRIPT_DIR/irn-csf-analyzer"

echo ""
echo "╔══════════════════════════════════════════════════════════════╗"
echo "║          IBM IRN / CSF Analyzer — Technology 2026           ║"
echo "║  Indice de Résilience Numérique × Cloud Sovereignty EU      ║"
echo "╚══════════════════════════════════════════════════════════════╝"
echo ""

if [ ! -d "$APP_DIR/node_modules" ]; then
  echo "⏳  Installation des dépendances npm..."
  cd "$APP_DIR" && npm install
fi

echo "🚀  Démarrage de l'application sur http://localhost:4200 ..."
echo "   Ctrl+C pour arrêter."
echo ""

cd "$APP_DIR" && npx ng serve --open
