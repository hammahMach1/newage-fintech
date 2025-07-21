@echo off
echo.
echo ============================================
echo    NewAge Fintech - GitHub Upload Script
echo ============================================
echo.

REM Instructions for the user
echo Please replace YOUR_GITHUB_USERNAME and YOUR_REPO_NAME with your actual values
echo Example: https://github.com/johndoe/newage-fintech.git
echo.

set /p REPO_URL="Enter your GitHub repository URL: "

echo.
echo Adding GitHub remote...
git remote add origin %REPO_URL%

echo.
echo Pushing to GitHub...
git push -u origin main

echo.
echo ============================================
echo    Upload Complete! 
echo ============================================
echo.
echo Your fintech application is now available at:
echo %REPO_URL%
echo.
echo Next steps:
echo 1. Visit your repository on GitHub
echo 2. Enable GitHub Pages if you want to deploy
echo 3. Add collaborators if working in a team
echo 4. Set up branch protection rules
echo.
pause
