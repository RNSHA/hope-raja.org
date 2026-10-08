HOPE WEBSITE — READY-TO-UPLOAD STATIC PACKAGE

Purpose
This folder contains the public-facing HOPE website as a static site. It is suitable for standard cPanel, Apache, Nginx, or similar hosting when uploaded to the domain root.

Before replacing the current website
1. Download a full backup of the existing website files and database.
2. Confirm whether hope-raja.org currently uses WordPress or another CMS.
3. If it uses WordPress, this static package will replace the public front end. Existing WordPress pages, plugins, forms, search, and dashboard-managed content will not automatically appear in this design.
4. Keep the backup until the new website has been fully tested.

Standard cPanel deployment
1. Open cPanel > File Manager.
2. Open the document root, usually public_html.
3. Back up the existing contents.
4. Upload the CONTENTS of this folder—not the enclosing folder itself—to public_html.
5. Confirm that index.html is directly inside public_html.
6. Clear any server/CDN cache and visit the domain in a private browser window.

Files that must remain together
- index.html
- _next directory
- All JPG image files

Contact form behaviour
The website currently opens the visitor's email application and addresses messages to grantfocalpoint@gmail.com. A server-side form can be added later if required.

Recommended production checks
- Test English and Arabic switching.
- Test the menu on a mobile phone.
- Test all anchor links and the grants email button.
- Confirm SSL/HTTPS is active.
- Keep the old website backup for rollback.

