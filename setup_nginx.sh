#!/bin/bash
# Nginx Automated Setup Script for Maan Mandir Devotee Mobile App & Portal

DOMAIN="app.maanmandir.org"
APP_DIR="/home/sbraj/maanmandir-app"
NGINX_CONF="/etc/nginx/sites-available/maanmandir-app"
NGINX_LINK="/etc/nginx/sites-enabled/maanmandir-app"

echo "================================================"
echo "Configuring Nginx for $DOMAIN..."
echo "================================================"

# Write Nginx Server Configuration Block
cat << 'EOF' > /tmp/maanmandir-app.conf
server {
    listen 80;
    server_name app.maanmandir.org;

    root /home/sbraj/maanmandir-app;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
        add_header Cache-Control "no-cache, no-store, must-revalidate";
        add_header Pragma "no-cache";
        add_header Expires 0;
    }

    # Enable Gzip compression for fast loading
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
}
EOF

# Move to Nginx directory
sudo mv /tmp/maanmandir-app.conf $NGINX_CONF

# Symlink to sites-enabled if directory exists
if [ -d "/etc/nginx/sites-enabled" ]; then
    sudo ln -sf $NGINX_CONF $NGINX_LINK
fi

# Test Nginx syntax and reload
echo "Testing Nginx Configuration..."
sudo nginx -t

if [ $? -eq 0 ]; then
    echo "Reloading Nginx..."
    sudo systemctl reload nginx
    echo "SUCCESS! Nginx configured for $DOMAIN."
else
    echo "ERROR: Nginx syntax test failed."
fi
