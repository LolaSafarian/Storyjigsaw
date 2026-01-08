# Story Jigsaw

A calm, daily puzzle game where users reconstruct a short story by reordering shuffled story fragments.

## Features

- **One puzzle per day** — Same puzzle for everyone, resets at local midnight
- **No timer, no leaderboards** — Just meaning
- **Calm, minimal design** — Large readable text, warm neutral colors
- **Spoiler-free sharing** — Share your result grid without revealing the story
- **Accessibility first** — Text size options, reduce motion, high contrast mode
- **PWA ready** — Install on your home screen

## Running Locally

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open http://localhost:5173 in your browser

## Building for Production

```bash
npm run build
```

The built files will be in the `dist` folder.

## Deploying as a PWA

1. Build the project: `npm run build`
2. Deploy the `dist` folder to any static hosting service (Vercel, Netlify, GitHub Pages)
3. Ensure HTTPS is enabled (required for PWA)
4. The service worker will be automatically registered

## Wrapping for iOS (Capacitor)

To create a native iOS app:

1. Install Capacitor:
   ```bash
   npm install @capacitor/core @capacitor/ios
   npx cap init
   ```

2. Build the web app:
   ```bash
   npm run build
   ```

3. Add iOS platform:
   ```bash
   npx cap add ios
   ```

4. Sync and open in Xcode:
   ```bash
   npx cap sync
   npx cap open ios
   ```

5. Configure your app in Xcode and submit to the App Store

## Adding New Puzzles

Puzzles are stored in `src/data/puzzles.json`. To add new puzzles:

1. Open `src/data/puzzles.json`
2. Add a new puzzle object to the `puzzles` array:

```json
{
  "id": "day-31",
  "dayNumber": 31,
  "dateISO": "2025-02-14",
  "fragmentCount": 5,
  "genreTag": "mystery",
  "fragmentsOrdered": [
    "First fragment in correct order.",
    "Second fragment in correct order.",
    "Third fragment in correct order.",
    "Fourth fragment in correct order.",
    "Fifth fragment in correct order."
  ],
  "fragmentsShuffled": [
    "Third fragment in correct order.",
    "First fragment in correct order.",
    "Fifth fragment in correct order.",
    "Second fragment in correct order.",
    "Fourth fragment in correct order."
  ]
}
```

**Important:**
- `dayNumber` should be sequential
- `fragmentsShuffled` must be a different order than `fragmentsOrdered`
- Each fragment should be 10-14 words with one concrete detail
- Keep the tone adult, restrained, and emotionally suggestive

## Project Structure

```
src/
├── components/         # React components
│   ├── icons/         # Icon components
│   ├── AboutScreen.tsx
│   ├── FragmentCard.tsx
│   ├── Onboarding.tsx
│   ├── PuzzleScreen.tsx
│   ├── ResultsScreen.tsx
│   ├── SettingsScreen.tsx
│   └── SortableList.tsx
├── data/
│   └── puzzles.json   # All puzzle data
├── utils/
│   ├── puzzle.ts      # Puzzle logic
│   └── storage.ts     # Local storage
├── App.tsx            # Main app component
├── index.css          # Global styles
├── main.tsx           # Entry point
└── types.ts           # TypeScript types

public/
├── landing.html       # Static landing page
├── manifest.json      # PWA manifest
└── icon-*.svg         # App icons
```

## Landing Page

A static landing page is available at `/landing.html` for marketing purposes. It includes:
- Hero section with value proposition
- Email waitlist signup (stores locally in MVP)
- Clean, minimal design matching the app

## License

MIT
