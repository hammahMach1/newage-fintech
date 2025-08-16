@echo off
echo ============================================
echo    GitHub Setup for Hammah's Fintech App
echo ============================================
echo.

echo Step 1: Refreshing environment variables...
call refreshenv

echo Step 2: Testing GitHub CLI...
gh --version
if errorlevel 1 (
    echo GitHub CLI not found in PATH. Please restart PowerShell and try again.
    pause
    exit /b 1
)

echo Step 3: Authenticating with GitHub...
gh auth login

echo.
echo ============================================
echo    GitHub Setup Complete!
echo ============================================
echo.
echo You can now run: .\upload-github-enhanced.ps1
echo.
pause
