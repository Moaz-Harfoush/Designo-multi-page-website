# 🎨 Designo - Multi-Page Creative Agency Website

Designo is a fully responsive, pixel-perfect multi-page website built with modern web development technologies to deliver a fast user experience and highly optimized search engine indexing (SEO).

---

## 🛠️ Tech Stack

- **Framework:** Next.js 16+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4

---

## 🚀 Applied Technical Skills & Solutions

The project was engineered following professional clean-code practices and scalable software architecture:

### 1. Dynamic Routing Management

- Utilized the dynamic folder structure `[category]/page.tsx` to handle multiple service pages (Web, App, Branding) through a single, reusable page component that reads route parameters (`params`) dynamically.

### 2. Advanced SEO Architecture

- Implemented **Dynamic Metadata** through the `generateMetadata` function to automatically compile unique titles and descriptions for each service category based on the URL parameter.
- Configured tailored **Static Metadata** for independent routes (`About`, `Contact`, `Locations`) to eliminate duplicate metadata issues and boost Google search engine rankings.

### 3. Absolute Path Aliases (`@/*`)

- Configured and enforced absolute imports using the `@/*` alias inside `tsconfig.json` and the development environment to streamline component imports and prevent deeply nested relative path complexities (`../../`).

### 4. Strict Type Safety

- Authored custom Type definitions and Interfaces to secure local data schemas, ensuring full type safety and prop-validation across components during compilation/build time.

### 5. Array Destructuring & UI Optimization

- Applied safe array destructuring methods to extract data objects smoothly, ensuring the application remains robust and completely free of unexpected front-end runtime crashes.

---

## 📂 Project Architecture

The organizational structure utilized for managing files and components throughout the project:

```text
├── app/
│   ├── about/                # About Us page route
│   ├── contact/              # Contact Us page route
│   ├── locations/            # Office locations and maps route
│   ├── [category]/           # Dynamic service category routes (Web, App, Branding)
│   │   └── pageData.ts       # Local data dictionary for category contents
│   ├── _components/          # Modular UI components
│   │   ├── categories/       # Category-specific layout components
│   │   └── shared/           # Shared global components across pages
│   ├── _types/               # TypeScript type definitions and interfaces
│   ├── layout.tsx            # Global root layout with metadata fallbacks
│   └── globals.css           # Global stylesheet containing Tailwind v4 directives
├── public/                   # Static assets, media files, and branding icons
├── tsconfig.json             # TypeScript compiler settings and Path Aliases
└── package.json              # Package manager manifest and script commands
```
