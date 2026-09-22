@echo off
REM ═══════════════════════════════════════════════════════════════════════════
REM  IBM IRN / CSF Analyzer — Demarrage Windows
REM  Indice de Resilience Numerique x Cloud Sovereignty Framework EU
REM ═══════════════════════════════════════════════════════════════════════════
REM
REM  Lance l'application sur http://localhost:8080 et ouvre le navigateur.
REM
REM  Usage : Double-cliquer sur start-windows.bat
REM ═══════════════════════════════════════════════════════════════════════════

setlocal enabledelayedexpansion

set PORT=8080
set SCRIPT_DIR=%~dp0

echo.
echo  ╔══════════════════════════════════════════════════════════════════╗
echo  ║        IBM IRN / CSF Analyzer — IBM Technology 2026             ║
echo  ║   Indice de Resilience Numerique x Cloud Sovereignty EU         ║
echo  ╚══════════════════════════════════════════════════════════════════╝
echo.

REM ── Verifier que l'installation a ete faite ──────────────────────────────
if not exist "%SCRIPT_DIR%node_modules\.bin\serve.cmd" (
    echo  Les dependances ne sont pas installees.
    echo  Lancement de l'installation automatique...
    echo.
    call "%SCRIPT_DIR%install-windows.bat"
)

if not exist "%SCRIPT_DIR%node_modules\.bin\serve.cmd" (
    echo  [ERREUR] Serveur introuvable apres installation. Relancez install-windows.bat
    pause
    exit /b 1
)

REM ── Determiner le dossier de l'application ───────────────────────────────
if exist "%SCRIPT_DIR%app\browser\index.html" (
    set APP_DIR=%SCRIPT_DIR%app\browser
) else (
    set APP_DIR=%SCRIPT_DIR%app
)

echo  Demarrage de l'application...
echo    URL  : http://localhost:%PORT%
echo    App  : %APP_DIR%
echo.
echo    Fermez cette fenetre pour arreter le serveur.
echo.

REM ── Ouvrir le navigateur apres un court delai ────────────────────────────
start "" /b cmd /c "timeout /t 2 /nobreak >nul && start http://localhost:%PORT%"

REM ── Demarrer le serveur ──────────────────────────────────────────────────
"%SCRIPT_DIR%node_modules\.bin\serve.cmd" "%APP_DIR%" --listen %PORT% --single --no-clipboard

endlocal
