# MAAN MANDIR APP - STRICT WORKSPACE & DEPLOYMENT SAFETY RULES

## 🚨 CRITICAL DIRECTORY & DEPLOYMENT GUARDRAILS

1. **ISOLATED WORKSPACE ROOT**:
   - This workspace (`maanmandir-app`) is strictly associated with `/home/sbraj/maanmandir-app` on the server and `https://app.maanmandir.org`.
   - **NEVER** copy files, build artifacts (`dist/`), or static assets from other projects (such as `maanini-platform`) into `/home/sbraj/maanmandir-app`.
   - **NEVER** overwrite files in `/home/sbraj/maanmandir-app` with content from another repository.

2. **SEPARATE NGINX VIRTUAL HOSTS**:
   - `app.maanmandir.org` MUST be served exclusively from `/home/sbraj/maanmandir-app`.
   - `maanini.app` MUST be served exclusively from `/home/sbraj/maanini-platform/apps/app/dist`.
   - Never merge, swap, or overwrite Nginx site configs or SSL certificates between domains.

3. **SAFE GIT DEPLOYMENT ON SERVER**:
   - To update `maanmandir-app` on the server, ALWAYS use standard Git commands inside `/home/sbraj/maanmandir-app`:
     ```bash
     cd /home/sbraj/maanmandir-app && git reset --hard origin/main && git pull origin main
     ```
   - Do NOT use `cp -r` from other project directories.

4. **BILINGUAL & INTEGRITY PRESERVATION**:
   - Maintain full bilingual English & Hindi dictionary keys in `app.js`.
   - Preserve offline PWA capabilities and Service Worker cache busting.
