#!/bin/bash
# Maan Mandir Devotee Mobile Portal - Safe Deployment Script (Preserves Nginx & SSL)

APP_DIR="/home/sbraj/maanmandir-app"

echo "================================================="
echo "🌸 MAAN MANDIR DEVOTEE APP: SAFE DEPLOY 🌸"
echo "================================================="

cd "$APP_DIR" || exit 1

echo "1. Pulling latest code from GitHub main branch..."
git reset --hard origin/main
git pull origin main

echo "2. Reloading Nginx Service..."
if command -v systemctl &> /dev/null; then
    sudo systemctl reload nginx 2>/dev/null || true
fi

echo "3. Reloading PM2 Processes (if active)..."
if command -v pm2 &> /dev/null; then
    pm2 reload all 2>/dev/null || pm2 restart all 2>/dev/null || true
fi

echo "================================================="
echo "✅ SUCCESS! Maan Mandir App code updated!"
echo "================================================="
