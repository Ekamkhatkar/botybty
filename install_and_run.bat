@echo off
SETLOCAL

REM Check if Git is installed
git --version >nul 2>&1
IF %ERRORLEVEL% NEQ 0 (
    echo Git is not installed. Installing Git...
    REM Download and install Git
    start /wait "" "https://github.com/git-for-windows/git/releases/latest/download/Git-2.39.1-64-bit.exe" /VERYSILENT /NORESTART
) ELSE (
    echo Git is already installed.
)

REM Check if Node.js is installed
node -v >nul 2>&1
IF %ERRORLEVEL% NEQ 0 (
    echo Node.js is not installed. Please install Node.js v18 or v20.
    exit /b 1
)

REM Check Node.js version
FOR /F "tokens=2 delims=." %%i IN ('node -v') DO (
    SET "NODE_MAJOR=%%i"
)

IF NOT "%NODE_MAJOR%"=="18" IF NOT "%NODE_MAJOR%"=="20" (
    echo Node.js version is not v18 or v20. Please install the correct version.
    exit /b 1
) ELSE (
    echo Node.js v%NODE_MAJOR% is installed.
)

REM Navigate to the current directory (where the script is located)
cd /d "%~dp0"

REM Install npm packages
echo Installing npm packages...
npm install

REM Start the bot
echo Starting the bot...
node index.js

ENDLOCAL