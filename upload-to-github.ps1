# NewAge Fintech - GitHub Upload Script
Write-Host ""
Write-Host "============================================" -ForegroundColor Cyan
Write-Host "    NewAge Fintech - GitHub Upload Script" -ForegroundColor Cyan  
Write-Host "============================================" -ForegroundColor Cyan
Write-Host ""

# Instructions for the user
Write-Host "Please replace YOUR_GITHUB_USERNAME and YOUR_REPO_NAME with your actual values" -ForegroundColor Yellow
Write-Host "Example: https://github.com/johndoe/newage-fintech.git" -ForegroundColor Yellow
Write-Host ""

$repoUrl = Read-Host "Enter your GitHub repository URL"

Write-Host ""
Write-Host "Adding GitHub remote..." -ForegroundColor Green
git remote add origin $repoUrl

Write-Host ""
Write-Host "Pushing to GitHub..." -ForegroundColor Green
git push -u origin main

Write-Host ""
Write-Host "============================================" -ForegroundColor Green
Write-Host "    Upload Complete! " -ForegroundColor Green
Write-Host "============================================" -ForegroundColor Green
Write-Host ""
Write-Host "Your fintech application is now available at:" -ForegroundColor Cyan
Write-Host $repoUrl -ForegroundColor White
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Yellow
Write-Host "1. Visit your repository on GitHub" -ForegroundColor White
Write-Host "2. Enable GitHub Pages if you want to deploy" -ForegroundColor White
Write-Host "3. Add collaborators if working in a team" -ForegroundColor White
Write-Host "4. Set up branch protection rules" -ForegroundColor White
Write-Host ""
Read-Host "Press Enter to continue"
