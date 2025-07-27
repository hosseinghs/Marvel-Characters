# Marvel Characters Nuxt App

A Nuxt 3/4 project for browsing Marvel characters, featuring a clean UI, pagination, and integration with the Marvel API.

---

## Features
- **Nuxt 4** with TypeScript
- **Marvel API** integration (server-side proxy for security)
- **Tailwind CSS** for styling
- **ESLint** and **Husky** for code quality
- **Responsive** and accessible UI
- **Pagination** and character detail pages

---

## Getting Started

### 1. Install dependencies
```bash
# yarn (recommended)
yarn install
# or npm
npm install
```

### 2. Environment Variables
Create a `.env` file in the project root with the following:
```env
NUXT_MARVEL_API_URL=https://gateway.marvel.com/v1/public
NUXT_MARVEL_PUBLIC_API_KEY=your_public_key
NUXT_MARVEL_PRIVATE_API_KEY=your_private_key
```
You can get your keys from [Marvel Developer Portal](https://developer.marvel.com/).

### 3. Development
```bash
yarn dev
```
App runs at [http://localhost:3000](http://localhost:3000)

### 4. Linting & Formatting
```bash
yarn lint      # Check code style
yarn lint:fix  # Auto-fix issues
```

### 5. Husky Pre-commit Hook
- On commit, `yarn lint:fix && yarn lint` runs automatically.
- If lint errors remain, the commit is blocked.

---

## Project Structure

```
Marvel-Characters/
├── app/
│   ├── app.vue                # App entry, uses default layout
│   ├── assets/                # Static assets (empty)
│   ├── components/
│   │   ├── characters/        # Character UI (Card.vue, Detail.vue)
│   │   ├── common/            # Shared UI (Pagination.vue, CharacterSection.vue)
│   │   └── layout/            # Layout components (Header.vue)
│   ├── layouts/               # Nuxt layouts (default.vue)
│   ├── pages/                 # Pages (index, character/[id].vue)
│   └── plugins/               # Nuxt plugins (empty)
├── public/                    # Public assets (favicon, robots.txt)
├── server/api/marvel/         # API proxy for Marvel API
├── nuxt.config.ts             # Nuxt config (API keys, modules)
├── package.json               # Scripts, dependencies
└── README.md                  # This file
```

---

## API Proxy
- All Marvel API requests go through `/api/marvel/*`.
- The server injects the required `ts`, `apikey`, and `hash` params for security.
- Example: `/api/marvel/characters?name=Thor`

---

## Main Components
- `Card.vue` – Displays a character card (name, image)
- `Detail.vue` – Character detail view with buttons
- `Pagination.vue` – Responsive, scrollable pagination bar
- `CharacterSection.vue` – Section wrapper for character lists
- `Header.vue` – App/site header

---

## Development Practices
- **TypeScript** for type safety
- **ESLint** for code style
- **Husky** for pre-commit linting
- **Tailwind CSS** for utility-first styling
- **Nuxt layouts** for consistent page structure
- **API keys** are never exposed to the client

---

## Contributing
1. Fork the repo
2. Create a feature branch
3. Commit (pre-commit hook will lint/fix code)
4. Open a pull request

---

## License
[MIT](LICENSE)
