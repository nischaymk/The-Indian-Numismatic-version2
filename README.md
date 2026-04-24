# The Indian Numismatic — Website Setup Guide

## File Structure

```
numismatic/
├── index.html          ← Home page
├── collection.html     ← Full collection with search & filters
├── eras.html           ← Browse coins by historical era
├── about.html          ← About the collection & numismatic history
├── contact.html        ← Contact form & FAQ
├── style.css           ← Global stylesheet (shared by all pages)
├── script.js           ← Global JavaScript (shared by all pages)
└── images/             ← YOUR coin images go here
    ├── IN-001.jpg
    ├── IN-002.jpg
    ├── ...
    └── placeholder.jpg ← Fallback image (optional, auto-generated)
```

---

## How to Add Your Coins

### Step 1 — Name your image files
Use the catalog ID format: `IN-001.jpg`, `IN-002.jpg`, etc.
Place all images inside the `images/` folder.

For coins with multiple photos (obverse + reverse):
`IN-001-obv.jpg`, `IN-001-rev.jpg` etc.

### Step 2 — Add coin data in script.js

Open `script.js` and edit the `COINS_DB` array. Each coin is one object:

```javascript
{
  id: "IN-013",                        // Unique ID
  name: "Rupee",                       // Short name
  ruler: "Akbar",                      // Ruler/issuer
  kingdom: "Mughal Empire",            // Kingdom/state
  era: "Mughal & Sultanate",           // Must match era categories:
                                       //   "Ancient India"
                                       //   "South Indian Kingdoms"
                                       //   "Mughal & Sultanate"
                                       //   "Princely States"
                                       //   "Colonial Era"
  period: "1556–1605 A.D.",            // Date range
  mint: "Agra Mint",                   // Mint name
  grade: "Very Fine",                  // Coin grade
  denomination: "1 Rupee",            // Face value
  metal: "Silver",                     // Gold / Silver / Copper / Bronze
  rarity: "Scarce",                    // Common / Uncommon / Scarce / Rare / Very Rare / Extremely Rare
  country: "India",
  description: "Your description...", // Shown on card and modal
  obverse: "Obverse description",      // What's on the front
  reverse: "Reverse description",      // What's on the back
  weight: "11.4g",
  diameter: "24mm",
  tags: ["Mughal", "Silver", "Rupee"], // For search
  image: "images/IN-013.jpg",          // Main image path
  images: [                            // All images (for lightbox)
    "images/IN-013-obv.jpg",
    "images/IN-013-rev.jpg"
  ],
  featured: false                      // true = shows on home page
}
```

### Step 3 — Update the stats (optional)

In `index.html`, the stats bar auto-calculates from your COINS_DB data.
The JavaScript counts kingdoms, metals, and eras automatically.

---

## Customisation

### Change your name / handle
Search for `@TheIndianNumismatic` and replace with yours across all files.

### Change contact details
Edit `contact.html` — look for the Contact Information card section.

### Change social links
Search for `href="#"` in the footer and replace with your actual links.

### Add a new era category
1. Add the era name to a coin's `era` field in `script.js`
2. Add a filter pill in `collection.html`
3. Add an era block in `eras.html`

---

## Hosting

Upload ALL files (HTML, CSS, JS, and images folder) to any web host:
- **Free**: GitHub Pages, Netlify, Vercel
- **Paid**: Any shared hosting (HostGator, SiteGround, etc.)

For GitHub Pages:
1. Create a repository
2. Upload all files
3. Go to Settings → Pages → Deploy from branch: main
4. Your site will be live at `username.github.io/repo-name`

---

## Image Tips

- Use JPG format, 800×800px minimum (square crops work best)
- Photograph both sides of each coin separately
- Use raking/angled light to bring out surface texture
- Name files consistently: `IN-001.jpg`, `IN-001-rev.jpg`

---

Built with: HTML5 · CSS3 · Vanilla JavaScript
Fonts: Cinzel Decorative, Cinzel, EB Garamond (Google Fonts)
No frameworks, no dependencies — works offline once loaded.
