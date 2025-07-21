# Hammah's Fintech App - GitHub Upload Script
Write-Host ""
Write-Host "============================================" -ForegroundColor Cyan
Write-Host "    Hammah's Fintech App - GitHub Upload Script" -ForegroundColor Cyan  
Write-Host "============================================" -ForegroundColor Cyan
Write-Host ""

# Check if git is available
try {
    git --version | Out-Null
} catch {
    Write-Host "❌ Git is not installed or not in PATH" -ForegroundColor Red
    Write-Host "Please install Git from https://git-scm.com/download/win" -ForegroundColor Yellow
    Read-Host "Press Enter to exit"
    exit 1
}

# Check git status
Write-Host "📋 Checking project status..." -ForegroundColor Cyan
$gitStatus = git status --porcelain
if ($gitStatus) {
    Write-Host "⚠️  You have uncommitted changes. Let me commit them first..." -ForegroundColor Yellow
    git add .
    git commit -m "final: Prepare for GitHub upload"
}

# Instructions for the user
Write-Host ""
Write-Host "📝 GitHub Repository Setup:" -ForegroundColor Yellow
Write-Host "1. Go to https://github.com/new" -ForegroundColor White
Write-Host "2. Repository name: hammahs-fintech-app (or your choice)" -ForegroundColor White
Write-Host "3. Description: Modern Financial Services Platform" -ForegroundColor White
Write-Host "4. Make it Public (recommended)" -ForegroundColor White
Write-Host "5. DON'T initialize with README/gitignore (we have them)" -ForegroundColor Red
Write-Host "6. Click 'Create repository'" -ForegroundColor White
Write-Host ""
Write-Host "Example URL: https://github.com/yourusername/hammahs-fintech-app.git" -ForegroundColor Green
Write-Host ""

$repoUrl = Read-Host "Enter your GitHub repository URL"

# Validate URL format
if (-not ($repoUrl -match "^https://github\.com/.+/.+\.git$")) {
    Write-Host "❌ Invalid GitHub URL format. Expected: https://github.com/username/repo.git" -ForegroundColor Red
    Read-Host "Press Enter to exit"
    exit 1
}

# Check if remote already exists
$existingRemote = git remote get-url origin 2>$null
if ($existingRemote) {
    Write-Host "⚠️  Remote 'origin' already exists: $existingRemote" -ForegroundColor Yellow
    $overwrite = Read-Host "Do you want to overwrite it? (y/N)"
    if ($overwrite -eq "y" -or $overwrite -eq "Y") {
        git remote remove origin
        Write-Host "✅ Removed existing remote" -ForegroundColor Green
    } else {
        Write-Host "❌ Upload cancelled" -ForegroundColor Red
        Read-Host "Press Enter to exit"
        exit 1
    }
}

Write-Host ""
Write-Host "🔗 Adding GitHub remote..." -ForegroundColor Green
try {
    git remote add origin $repoUrl
    Write-Host "✅ Remote added successfully" -ForegroundColor Green
} catch {
    Write-Host "❌ Failed to add remote: $_" -ForegroundColor Red
    Read-Host "Press Enter to exit"
    exit 1
}

Write-Host ""
Write-Host "🚀 Pushing to GitHub..." -ForegroundColor Green
Write-Host "This may take a moment for the first push..." -ForegroundColor Yellow
try {
    git push -u origin main
    Write-Host "✅ Successfully pushed to GitHub!" -ForegroundColor Green
} catch {
    Write-Host "❌ Failed to push: $_" -ForegroundColor Red
    Write-Host "This might be due to authentication issues." -ForegroundColor Yellow
    Write-Host "Please check your GitHub credentials or use GitHub CLI/token." -ForegroundColor Yellow
    Read-Host "Press Enter to continue"
}

Write-Host ""
Write-Host "============================================" -ForegroundColor Green
Write-Host "    🎉 Upload Successful! " -ForegroundColor Green
Write-Host "============================================" -ForegroundColor Green
Write-Host ""
Write-Host "🌟 Your Hammah's Fintech App is now on GitHub!" -ForegroundColor Cyan
Write-Host "📍 Repository URL: $repoUrl" -ForegroundColor White
Write-Host ""
Write-Host "🚀 Next Steps:" -ForegroundColor Yellow
Write-Host "1. 🌐 Visit your repository: $($repoUrl -replace '\.git$', '')" -ForegroundColor White
Write-Host "2. 📄 Review the README.md for documentation" -ForegroundColor White
Write-Host "3. 🚀 Enable GitHub Pages for deployment" -ForegroundColor White
Write-Host "4. 👥 Add collaborators if working in a team" -ForegroundColor White
Write-Host "5. 🔒 Set up branch protection rules" -ForegroundColor White
Write-Host "6. 🏷️  Add topics/tags to improve discoverability" -ForegroundColor White
Write-Host ""
Write-Host "💡 Pro Tips:" -ForegroundColor Cyan
Write-Host "• Your app includes 30+ components and real fintech features" -ForegroundColor White
Write-Host "• Perfect for portfolio demonstrations" -ForegroundColor White
Write-Host "• Ready for production deployment" -ForegroundColor White
Write-Host "• Showcases modern React/TypeScript skills" -ForegroundColor White
Write-Host ""
Read-Host "Press Enter to continue"
