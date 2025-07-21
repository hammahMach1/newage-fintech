# GitHub Setup Script for Hammah's Fintech App
Write-Host ""
Write-Host "============================================" -ForegroundColor Cyan
Write-Host "    GitHub Setup for Hammah's Fintech App" -ForegroundColor Cyan  
Write-Host "============================================" -ForegroundColor Cyan
Write-Host ""

# Check if git is configured
Write-Host "📋 Checking Git Configuration..." -ForegroundColor Cyan

$gitUser = git config --global user.name 2>$null
$gitEmail = git config --global user.email 2>$null

if (-not $gitUser -or -not $gitEmail) {
    Write-Host "⚠️  Git not fully configured. Let's set it up..." -ForegroundColor Yellow
    
    if (-not $gitUser) {
        $userName = Read-Host "Enter your full name for Git"
        git config --global user.name $userName
    }
    
    if (-not $gitEmail) {
        $userEmail = Read-Host "Enter your email for Git"
        git config --global user.email $userEmail
    }
    
    Write-Host "✅ Git configured successfully!" -ForegroundColor Green
} else {
    Write-Host "✅ Git already configured:" -ForegroundColor Green
    Write-Host "   Name: $gitUser" -ForegroundColor White
    Write-Host "   Email: $gitEmail" -ForegroundColor White
}

Write-Host ""
Write-Host "🔧 Setting up GitHub authentication..." -ForegroundColor Cyan
Write-Host ""

# Check if GitHub CLI is installed
try {
    gh --version | Out-Null
    Write-Host "✅ GitHub CLI is already installed!" -ForegroundColor Green
    
    # Check if user is authenticated
    try {
        gh auth status 2>$null
        Write-Host "✅ You're already authenticated with GitHub!" -ForegroundColor Green
    } catch {
        Write-Host "🔐 Let's authenticate with GitHub..." -ForegroundColor Yellow
        gh auth login
    }
} catch {
    Write-Host "📦 GitHub CLI not found. Let's install it..." -ForegroundColor Yellow
    Write-Host ""
    Write-Host "Option 1: Install via winget (recommended)" -ForegroundColor Green
    Write-Host "   winget install --id GitHub.cli" -ForegroundColor White
    Write-Host ""
    Write-Host "Option 2: Download manually" -ForegroundColor Green
    Write-Host "   Visit: https://cli.github.com/" -ForegroundColor White
    Write-Host ""
    
    $choice = Read-Host "Try installing with winget? (y/N)"
    
    if ($choice -eq "y" -or $choice -eq "Y") {
        try {
            winget install --id GitHub.cli
            Write-Host "✅ GitHub CLI installed! Please restart this script." -ForegroundColor Green
        } catch {
            Write-Host "❌ Failed to install via winget. Please install manually from https://cli.github.com/" -ForegroundColor Red
        }
    } else {
        Write-Host "Please install GitHub CLI manually from https://cli.github.com/" -ForegroundColor Yellow
        Write-Host "Then run this script again." -ForegroundColor Yellow
    }
    
    Read-Host "Press Enter to continue"
    exit
}

Write-Host ""
Write-Host "============================================" -ForegroundColor Green
Write-Host "    🎉 GitHub Setup Complete!" -ForegroundColor Green
Write-Host "============================================" -ForegroundColor Green
Write-Host ""

Write-Host "🚀 Next Steps:" -ForegroundColor Yellow
Write-Host "1. Your Git is configured and GitHub CLI is ready" -ForegroundColor White
Write-Host "2. You can now create repositories directly from command line" -ForegroundColor White
Write-Host "3. Run the enhanced upload script: .\upload-github-enhanced.ps1" -ForegroundColor White
Write-Host ""

Read-Host "Press Enter to continue"
