# Bloggy - Nuxt x Sanity Template

A modern blogging platform built with **Nuxt 4**, **Sanity CMS**, and **TypeScript**. Features a headless architecture with a powerful content management studio and a performant web application.

## 📋 Requirements

- **Node.js** v26+ ([Download](https://nodejs.org/))
- **Pnpm** v12+ ([Install guide](https://pnpm.io/installation))
- **Sanity project** with API credentials ([Create one](https://sanity.io/))

## 🚀 Quick Start

### 1. Clone & Install

```bash
# Install dependencies
pnpm install
```

### 2. Configure Environment

Create a `.env.local` file at the root with your credentials:

```env
# Sanity Configuration
SANITY_STUDIO_PROJECT_ID=your_project_id
SANITY_STUDIO_DATASET=production
SANITY_API_VERSION=2026-10-15

# Altcha (SPAM protection)
ALTCHA_HMAC_SECRET=your_secret
ALTCHA_HMAC_KEY_SECRET=your_key_secret
```

> **Note:** `.env.local` is git-ignored. See `.env.example` for all available options.

### 3. Run Development Servers

```bash
# Start both Studio (port 3333) and Web (port 3000) in parallel
pnpm -r --parallel dev

# Or run individually:
pnpm --dir studio dev      # Sanity Studio
pnpm --dir web dev         # Nuxt App
```

## 📁 Project Structure

```
bloggy-nuxt-sanity/
├── studio/                    # Sanity Studio (Content Management)
│   ├── schemaTypes/           # Content type definitions
│   ├── sanity.config.ts
│   └── package.json
│
├── web/                       # Nuxt.js Web Application
│   ├── app/
│   │   ├── components/        # Vue components (atoms, molecules, blocks)
│   │   ├── pages/             # Routes
│   │   ├── composables/       # Vue composables
│   │   ├── queries/           # Sanity GROQ queries
│   │   └── middleware/        # Route middleware
│   ├── server/
│   │   ├── api/               # API routes
│   │   ├── middleware/        # Server middleware
│   │   └── utils/             # Server utilities
│   ├── nuxt.config.ts
│   └── package.json
│
├── pnpm-workspace.yaml        # Monorepo configuration
├── .env.example               # Environment variables template
└── README.md
```

## 🔧 Available Scripts

```bash
# Development
pnpm -r --parallel dev         # Start all dev servers
pnpm --dir web dev             # Start Nuxt dev server
pnpm --dir studio dev          # Start Sanity Studio

# Build
pnpm --dir web build           # Build Nuxt app
pnpm --dir studio build        # Build Sanity Studio

# Type checking
pnpm --dir web typecheck       # Run Nuxt type checking

# Linting
pnpm --dir web lint            # Lint Nuxt project
pnpm --dir studio lint         # Lint Studio project
```

## 🗂️ Key Features

- ✅ **Headless CMS** - Sanity Studio for content management
- ✅ **Type-safe** - Full TypeScript support with Sanity typegen
- ✅ **SEO-optimized** - Server-side rendering with Nuxt
- ✅ **Responsive design** - Tailwind CSS
- ✅ **Monorepo structure** - Pnpm workspaces

## 🗺️ Roadmap

- [ ] Pagination
- [ ] Main navigation
- [ ] Protected pages (middleware)
- [ ] Altcha verification
- [ ] Storybook integration
- [ ] GitHub Actions CI/CD
- [ ] Analytics integration

## 📚 Documentation

- [Nuxt Docs](https://nuxt.com/)
- [Sanity Docs](https://www.sanity.io/docs/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Altcha](https://altcha.com/)
