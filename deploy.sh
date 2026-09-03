#!/bin/bash
# Maan Mandir Devotee Mobile Portal - 1-Tap Deployment & Server Synchronization Script

APP_DIR="/home/sbraj/maanmandir-app"

echo "================================================="
echo "🌸 MAAN MANDIR DEVOTEE APP: DEPLOY & SYNC 🌸"
echo "================================================="

cd "$APP_DIR" || exit 1

echo "1. Pulling latest code from GitHub main branch..."
git reset --hard origin/main
git pull origin main

echo "2. Applying Nginx Configuration..."
if [ -f "$APP_DIR/setup_nginx.sh" ]; then
    bash "$APP_DIR/setup_nginx.sh"
fi

echo "3. Reloading Nginx Service..."
if command -v systemctl &> /dev/null; then
    sudo systemctl reload nginx
fi

echo "4. Reloading PM2 Processes (if active)..."
if command -v pm2 &> /dev/null; then
    pm2 reload all 2>/dev/null || pm2 restart all 2>/dev/null
fi

echo "================================================="
echo "✅ SUCCESS! Maan Mandir App updated and synced!"
echo "================================================="
