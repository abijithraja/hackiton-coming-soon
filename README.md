# HackITon'26 — Coming Soon

> **"Wait bro, we're cooking!"**
>
> A premium coming-soon landing page for [hackiton.in](https://hackiton.in) by **InvaderZ**.

---

## File Structure

```
hackiton-coming-soon/
├── index.html          ← Main page
├── style.css           ← All styles
├── script.js           ← Animations & JS
├── vercel.json         ← Vercel deployment config
├── README.md
└── assets/
    ├── invaderz-logo.png
    └── chad-cat.png
```

---

## Deploy to Vercel

### Option A — Vercel CLI

```bash
npm i -g vercel
vercel
```

### Option B — GitHub + Vercel Dashboard

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → **Add New Project**
3. Import the GitHub repo
4. Framework: **Other** (static)
5. Click **Deploy**

---

## Custom Domain — hackiton.in (BigRock)

After deploying on Vercel:

1. **Vercel** → Project → Settings → Domains → Add `hackiton.in` and `www.hackiton.in`
2. Vercel will show the required DNS values (A record / CNAME)
3. **BigRock** → Domain Manager → hackiton.in → DNS Management
4. Add the DNS records exactly as Vercel instructs
5. Wait 15–60 minutes for propagation
6. Verify at `https://hackiton.in`

> Do NOT delete existing BigRock DNS records unless Vercel specifically requires it.

---

##  Checklist

- [x] InvaderZ logo in circular frame at top
- [x] Chad cat centered with gold glow
- [x] "Wait bro, we're **cooking!**" heading (cooking! = gold)
- [x] Supporting message
- [x] Cooking-pot divider
- [x] Status card (glassmorphism)
- [x] HackITon'26 brand signature
- [x] Rocket bottom message
- [x] Premium dark design
- [x] Staggered entrance animations
- [x] Responsive: desktop, tablet, mobile, small mobile
- [x] No horizontal scroll
- [x] SEO meta tags
- [x] Open Graph / Twitter Card metadata
- [x] Favicon from InvaderZ logo
- [x] Vercel-ready
- [x] `hackiton.in` domain-connectable

---

## Design System

| Token | Value |
|---|---|
| Background | `#080808` |
| Gold accent | `#E8B84B` |
| White | `#F0EEE9` |
| Font | Space Grotesk, Inter |
| Card blur | 18px |

---

© 2026 InvaderZ • HackITon
