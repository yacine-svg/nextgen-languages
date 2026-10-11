# Next Gen Languages & IELTS preparation

Frontend for the Constantine language school. Next.js 14 (App Router), Lenis, GSAP ScrollTrigger, ShaderGradient.

```bash
npm install
npm run dev
```

Deploy: push to GitHub, import in Vercel.

- Content (courses, bands, steps, phones, links): `lib/data.js`
- Hero gradient values: `components/HeroGradient.jsx` (tune at shadergradient.co and copy the values)
- Colors, type, layout: `app/globals.css`

## Photos
The photos are free Unsplash License stand-ins, loaded from images.unsplash.com (`photos` in `lib/data.js`).
To use the center's own photos: put them in `public/photos/` and change each `src` to `/photos/your-file.jpg`.

## Speaking club sign-up ("Spill the tea")
Until the entry ids are filled in, the section shows a button to the Google Form.
To make the on-site form send answers straight into the Google Form:
1. Open the form in edit mode, menu (⋮) → "Get pre-filled link".
2. Type any answer in every question, click "Get link", copy it.
3. The link contains `entry.123456789=...` for each question. Paste each `entry.NNN` into `club.entries` in `lib/data.js`.
Email is sent as `emailAddress` (the form's built-in email field).
