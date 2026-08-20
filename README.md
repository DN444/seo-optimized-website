# XYZ Public School website

A fast, responsive static website for a local school. It uses plain HTML, CSS, and JavaScript, so it is easy to host on Netlify and needs no build step.

## Run locally

1. Open the `xyz-school` folder in VS Code.
2. Start a local static server. For example, with Node.js installed:
   ```powershell
   npx serve .
   ```
   Or install the VS Code **Live Server** extension and choose **Open with Live Server** on `index.html`.
3. Visit the address shown in the terminal (usually `http://localhost:3000`).

## Before publishing

- Replace `https://www.xyzpublicschool.edu.in` in every HTML file, `sitemap.xml`, `robots.txt`, and `netlify.toml` with the real domain.
- Replace the placeholder phone, email, address, and social URLs.
- Add real, compressed school photos to `assets/images/` and update their alt text. Prefer WebP/AVIF, dimensions close to their display size, and files under 200 KB where practical.
- Connect the contact form in Netlify (instructions below) or to your preferred form provider.

## Deploy to Netlify

1. Create a GitHub repository and upload the **contents of this `xyz-school` folder**.
2. In Netlify, choose **Add new site → Import an existing project**, then select that repository.
3. Leave the build command blank and set the publish directory to `.` (a dot), because this is a static site.
4. Deploy the site, then add your custom domain under **Domain management**.
5. Update all placeholder URLs with that domain, commit, and deploy again.
6. In Netlify, open **Forms** after the first deployment to activate the `Enquiry` form. Email notifications can be configured there.
7. Submit `https://your-domain/sitemap.xml` to Google Search Console and Bing Webmaster Tools.

## Project structure

```text
xyz-school/
├── index.html            # Home
├── about.html            # School story and leadership
├── academics.html        # Curriculum and learning approach
├── admissions.html       # Admission process and CTA
├── contact.html          # Contact details and Netlify form
├── robots.txt            # Search-crawler rules
├── sitemap.xml           # Crawlable page list
├── netlify.toml          # Security and cache headers
├── SEO-STRATEGY.md       # Off-page SEO plan and launch checklist
└── assets/
    ├── css/style.css
    ├── js/main.js
    └── images/
        ├── campus.svg
        └── learning.svg
```
