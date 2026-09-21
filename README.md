# Developer Portfolio Website

Three files, no build step and no dependencies:

- index.html : page structure (HTML)
- style.css  : design, colours, layout, dark/light theme, responsive rules (CSS)
- script.js  : behaviour and all your content (JavaScript)

Keep the three files in the same folder, then open index.html in a browser.

## 1. Add your details
Open script.js and edit the `const P = { ... }` object at the top.
Name, roles, skills, projects, timeline, education, certifications, resume text and
social links are all defined there. The whole page is built from that object.

## 2. Add your photo
Put your picture in this folder (for example profile.jpg) and in script.js set:

    photo: "profile.jpg",

Leave it empty to show your initials instead.

## 3. Change colours or fonts
Open style.css. The colour tokens are at the top (`:root { --bg, --ink, --accent ... }`).

## 4. Deploy on Vercel
- Drag and drop this folder at https://vercel.com/new, or
- Run `npx vercel` inside this folder.

## Notes
- Links that are `#` are placeholders. Replace them with your own.
- The contact form opens the visitor's email app (mailto). For a real form backend,
  use a service such as Formspree or Web3Forms.
- Fonts (Bricolage Grotesque, Figtree) load from Google Fonts.
