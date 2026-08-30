# Maan Mandir Devotee Mobile App & Portal (PWA)

Radhe Radhe! 🙏

Official Mobile App & Progressive Web App (PWA) for **Maan Mandir Seva Sansthan Trust**, Barsana Dham. 

Designed with a clean **White & Royal Blue** theme, this mobile portal provides 1-tap access to Live Webcasts, SoundCloud Audio, Books, Monthly Magazines, Maanini Portal, Social Media, and Gauseva updates.

---

## 🌟 Key Features

* 🔴 **Live YouTube Webcast Alert**: Dynamic top banner and pulse indicator when live broadcasting.
* 🎵 **SoundCloud & Audio Player**: Background audio player for Kirtan, Katha, and Bhajans with "NEW" release badges.
* 📚 **Books & Monthly Magazine Catalog**: In-app PDF viewer and direct download links for *Braj Ras Magazine* and Braj Yatra guides.
* 🌸 **Maanini.app Portal Link**: Direct launcher and integrated preview.
* 📲 **Social Media Hub**: Official Facebook, Instagram, and WhatsApp Channel links.
* 🐄 **Gauseva & Darshan Info**: Mataji Gaushala details, temple timings, and Google Maps directions.
* 🔔 **Devotee Updates Drawer**: Slide-over panel summarizing recent webcasts, audio releases, and publications.

---

## 🚀 Quick Local Server Run

To run the mobile app locally:

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080` in your web browser.

---

## 🌐 Deploy to Server (`sbraj@app4`)

### Option A: Direct Sync via SSH
From your terminal, run:

```bash
rsync -avz --exclude '.git' ./ sbraj@app4:/var/www/maanmandir-app/
```

### Option B: Clone via GitHub on Server
Once pushed to your GitHub repository:

```bash
# On your server (sbraj@app4):
cd /var/www/
git clone https://github.com/<YOUR_GITHUB_USERNAME>/maanmandir-app.git
```
