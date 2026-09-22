#!/bin/bash
# ═══════════════════════════════════════════════════════════════════════════════
#  IBM IRN / CSF Analyzer — Démarrage macOS / Linux
#  Indice de Résilience Numérique × Cloud Sovereignty Framework EU
# ═══════════════════════════════════════════════════════════════════════════════
#
#  Lance l'application sur http://localhost:8080 et ouvre le navigateur.
#
#  Usage :
#    ./start-macos.sh
#    ./start-macos.sh --port 9090   (port personnalisé)
# ═══════════════════════════════════════════════════════════════════════════════

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PORT=8080

# Parse optional --port argument
while [[ "$#" -gt 0 ]]; do
  case $1 in
    --port) PORT="$2"; shift ;;
    *) ;;
  esac
  shift
done

echo ""
echo "╔══════════════════════════════════════════════════════════════════╗"
echo "║         IBM IRN / CSF Analyzer — IBM Technology 2026            ║"
echo "║   Indice de Résilience Numérique × Cloud Sovereignty EU         ║"
echo "╚══════════════════════════════════════════════════════════════════╝"
echo ""

# ── Vérifier que l'installation a été faite ────────────────────────────────
if [ ! -d "$SCRIPT_DIR/node_modules/.bin" ]; then
  echo "⚠️   Les dépendances ne semblent pas installées."
  echo "    Exécutez d'abord : ./install-macos.sh"
  echo ""
  echo "⏳  Tentative d'installation automatique..."
  bash "$SCRIPT_DIR/install-macos.sh"
fi

SERVE_BIN="$SCRIPT_DIR/node_modules/.bin/serve"

if [ ! -f "$SERVE_BIN" ]; then
  echo "❌  Serveur 'serve' introuvable. Relancez ./install-macos.sh"
  exit 1
fi

APP_DIR="$SCRIPT_DIR/app/browser"
if [ ! -d "$APP_DIR" ]; then
  # Fallback: try app/ directly
  APP_DIR="$SCRIPT_DIR/app"
fi

echo "🚀  Démarrage de l'application..."
echo "    URL  : http://localhost:$PORT"
echo "    App  : $APP_DIR"
echo ""
echo "    Appuyez sur Ctrl+C pour arrêter le serveur."
echo ""

# Open browser after a short delay (macOS / Linux)
(sleep 1.5 && \
  if command -v open &>/dev/null; then
    open "http://localhost:$PORT"
  elif command -v xdg-open &>/dev/null; then
    xdg-open "http://localhost:$PORT"
  fi
) &

# Start server
"$SERVE_BIN" "$APP_DIR" --listen "$PORT" --single --no-clipboard
