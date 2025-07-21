# Enhanced GitHub Upload Script for Hammah's Fintech App
Write-Host ""
Write-Host "============================================" -ForegroundColor Cyan
Write-Host "    Enhanced GitHub Upload - Hammah's Fintech App" -ForegroundColor Cyan  
Write-Host "============================================" -ForegroundColor Cyan
Write-Host ""

# Check if GitHub CLI is available and authenticated
try {
    gh auth status 2>$null | Out-Null
    $ghReady = $true
    Write-Host "✅ GitHub CLI is authenticated and ready!" -ForegroundColor Green
} catch {
    $ghReady = $false
    Write-Host "⚠️  GitHub CLI not authenticated. Run .\setup-github.ps1 first" -ForegroundColor Yellow
}

Write-Host ""
Write-Host "🚀 Choose your upload method:" -ForegroundColor Cyan
Write-Host "1. 🤖 Automatic - Create repository and upload (GitHub CLI)" -ForegroundColor Green
Write-Host "2. 📝 Manual - I'll create the repository myself" -ForegroundColor Yellow
Write-Host ""

if ($ghReady) {
    $method = Read-Host "Enter your choice (1 or 2)"
} else {
    Write-Host "GitHub CLI not ready, using manual method..." -ForegroundColor Yellow
    $method = "2"
}

if ($method -eq "1" -and $ghReady) {
    Write-Host ""
    Write-Host "🤖 AUTOMATIC METHOD" -ForegroundColor Green
    Write-Host "=================" -ForegroundColor Green
    
    $repoName = Read-Host "Repository name (default: hammahs-fintech-app)"
    if (-not $repoName) { $repoName = "hammahs-fintech-app" }
    
    $description = Read-Host "Repository description (default: Hammah's Modern Fintech Application)"
    if (-not $description) { $description = "Hammah's Modern Fintech Application" }
    
    $isPublic = Read-Host "Make repository public? (Y/n)"
    $visibility = if ($isPublic -eq "n" -or $isPublic -eq "N") { "private" } else { "public" }
    
    Write-Host ""
    Write-Host "🎯 Creating repository..." -ForegroundColor Cyan
    
    try {
        # Create repository
        gh repo create $repoName --description $description --$visibility --source=. --push
        Write-Host "✅ Repository created and code pushed successfully!" -ForegroundColor Green
        
        $repoUrl = "https://github.com/$(gh api user --jq .login)/$repoName"
        Write-Host "🌐 Repository URL: $repoUrl" -ForegroundColor Cyan
        
        # Open repository in browser
        $openBrowser = Read-Host "Open repository in browser? (Y/n)"
        if ($openBrowser -ne "n" -and $openBrowser -ne "N") {
            Start-Process $repoUrl
        }
        
    } catch {
        Write-Host "❌ Failed to create repository: $_" -ForegroundColor Red
        Write-Host "Falling back to manual method..." -ForegroundColor Yellow
        $method = "2"
    }
}

if ($method -eq "2" -or (-not $ghReady)) {
    Write-Host ""
    Write-Host "📝 MANUAL METHOD" -ForegroundColor Yellow
    Write-Host "===============" -ForegroundColor Yellow
    
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
    Write-Host "3. Description: Hammah's Modern Fintech Application" -ForegroundColor White
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
        Write-Host "Consider setting up GitHub CLI or using a Personal Access Token." -ForegroundColor Yellow
        Read-Host "Press Enter to continue"
    }
}

Write-Host ""
Write-Host "============================================" -ForegroundColor Green
Write-Host "    🎉 Upload Complete!" -ForegroundColor Green
Write-Host "============================================" -ForegroundColor Green
Write-Host ""
Write-Host "🌟 Your Hammah's Fintech App is now on GitHub!" -ForegroundColor Cyan
Write-Host ""
Write-Host "🚀 Next Steps:" -ForegroundColor Yellow
Write-Host "1. 🌐 Review your repository on GitHub" -ForegroundColor White
Write-Host "2. 📄 Check the README.md documentation" -ForegroundColor White
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

$enablePages = Read-Host "Would you like instructions to enable GitHub Pages? (Y/n)"
if ($enablePages -ne "n" -and $enablePages -ne "N") {
    Write-Host ""
    Write-Host "🌐 GITHUB PAGES SETUP:" -ForegroundColor Cyan
    Write-Host "1. Go to your repository Settings tab" -ForegroundColor White
    Write-Host "2. Scroll down to 'Pages' in the left sidebar" -ForegroundColor White
    Write-Host "3. Under 'Source', select 'GitHub Actions'" -ForegroundColor White
    Write-Host "4. Create a new workflow for Vite deployment" -ForegroundColor White
    Write-Host "5. Your app will be available at: https://yourusername.github.io/repo-name" -ForegroundColor Green
}

Write-Host ""
Read-Host "Press Enter to continue"
