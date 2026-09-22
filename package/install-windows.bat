@echo off
REM ═══════════════════════════════════════════════════════════════════════════
REM  IBM IRN / CSF Analyzer — Installateur Windows
REM  Indice de Resilience Numerique x Cloud Sovereignty Framework EU
REM ═══════════════════════════════════════════════════════════════════════════
REM
REM  Ce script installe les dependances minimales pour executer l'application.
REM  L'application Angular est deja compilee — aucun build n'est requis.
REM
REM  Prerequis : Node.js 18+ doit etre installe.
REM              Telechargement gratuit : https://nodejs.org
REM
REM  Usage : Double-cliquer sur install-windows.bat
REM           ou lancer depuis une invite de commandes
REM ═══════════════════════════════════════════════════════════════════════════

echo.
echo  ╔══════════════════════════════════════════════════════════════════╗
echo  ║      IBM IRN / CSF Analyzer — Installation Windows              ║
echo  ╚══════════════════════════════════════════════════════════════════╝
echo.

REM ── 1. Verifier Node.js ──────────────────────────────────────────────────
where node >nul 2>&1
if %ERRORLEVEL% neq 0 (
    echo  [ERREUR] Node.js n'est pas installe sur ce poste.
    echo.
    echo  Veuillez le telecharger et l'installer depuis :
    echo    https://nodejs.org
    echo  Version minimale requise : 18.x
    echo.
    pause
    exit /b 1
)

for /f "tokens=*" %%v in ('node -e "process.stdout.write(process.version)"') do set NODE_VER=%%v
echo  [OK] Node.js detecte : %NODE_VER%

REM ── 2. Verifier npm ──────────────────────────────────────────────────────
where npm >nul 2>&1
if %ERRORLEVEL% neq 0 (
    echo  [ERREUR] npm n'est pas disponible. Reinstallez Node.js.
    pause
    exit /b 1
)
for /f "tokens=*" %%v in ('npm --version') do set NPM_VER=%%v
echo  [OK] npm detecte : %NPM_VER%

REM ── 3. Installer le serveur HTTP leger ───────────────────────────────────
echo.
echo  Installation du serveur HTTP leger (serve)...

cd /d "%~dp0"
copy /y "server-package.json" "package.json" >nul
npm install --omit=dev --no-fund --no-audit
del /f /q "package.json" >nul 2>&1

if %ERRORLEVEL% neq 0 (
    echo  [ERREUR] L'installation a echoue. Verifiez votre connexion internet.
    pause
    exit /b 1
)

echo  [OK] Serveur HTTP installe.

REM ── 4. Fin ───────────────────────────────────────────────────────────────
echo.
echo  ╔══════════════════════════════════════════════════════════════════╗
echo  ║  [OK] Installation terminee avec succes !                       ║
echo  ║                                                                  ║
echo  ║  Pour demarrer l'application, double-cliquez sur :              ║
echo  ║    start-windows.bat                                             ║
echo  ╚══════════════════════════════════════════════════════════════════╝
echo.
pause
