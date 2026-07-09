# Setup Instructions for shadcn, Tailwind, and TypeScript

This document provides step-by-step instructions on setting up a project using **shadcn CLI**, **Tailwind CSS**, and **TypeScript** from scratch, or introducing them into an existing codebase.

---

## 1. Setting Up shadcn CLI

shadcn CLI installs beautiful, reusable components in your codebase.

### Initialization
To initialize shadcn in your project:
```bash
npx shadcn@latest init
```

### Configuration Questions
During initialization, the CLI will ask several configuration questions:
1. **Style**: Select either `Default` or `New York` (New York style uses slightly different fonts/padding).
2. **Base Color**: Select a default color system (e.g., `Slate`, `Gray`, `Zinc`, `Neutral`).
3. **CSS Variables**: Yes (recommended) or No. CSS variables make it easy to configure dark/light modes.
4. **Tailwind Config Location**: Specify the location of your `tailwind.config.js` (usually root `./tailwind.config.js`).
5. **Global CSS File**: Location of your global CSS file (e.g., `src/index.css` or `src/app/globals.css`).
6. **Alias Configuration**: Setup `@/components` and `@/lib/utils` mappings so that component imports remain clean.

Once run, it will generate a `components.json` configuration file at the root.

---

## 2. Installing & Configuring Tailwind CSS

If Tailwind CSS is not already set up:

### Step 1: Install Dependencies
```bash
yarn add -D tailwindcss postcss autoprefixer
# or using npm:
# npm install -D tailwindcss postcss autoprefixer
```

### Step 2: Initialize Configuration Files
Create the configuration files:
```bash
npx tailwindcss init -p
```
This generates `tailwind.config.js` and `postcss.config.js`.

### Step 3: Configure Template Paths
In your `tailwind.config.js`, add path mappings to search for styles:
```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### Step 4: Add Tailwind Directives to your Global CSS
Add the following lines to your global CSS file (e.g., `src/index.css`):
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

## 3. Adding TypeScript Support

If the project is currently in JavaScript (like the current `tech-agency` workspace):

### Step 1: Install TypeScript Packages
Install TypeScript, react types, node types, and loader utilities:
```bash
yarn add -D typescript @types/react @types/react-dom @types/node
# or using npm:
# npm install --save-dev typescript @types/react @types/react-dom @types/node
```

### Step 2: Create a TypeScript Config File
Create a `tsconfig.json` in the root:
```json
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noFallthroughCasesInSwitch": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  },
  "include": ["src"]
}
```

### Step 3: Update `components.json` for TypeScript
Change `"tsx": false` to `"tsx": true` in `components.json` so shadcn CLI adds `.tsx` extensions rather than `.jsx` extensions when installing components:
```json
{
  "tsx": true
}
```

---

## 4. The Importance of the `/components/ui` Folder

In a shadcn/Tailwind codebase, the default path for components is configure via `components.json`. Keeping primitive UI components organized in the `/components/ui` folder is highly critical for the following reasons:

1. **Separation of Concerns**:
   - `/components/ui` stores generic, reusable visual primitives (like buttons, dialogs, dropdowns, input elements) that carry no application-specific business logic.
   - Other folders (e.g., `/components/layout`, `/components/admin`, `/components/home`) store rich layouts or complex page features composed of these ui primitives.
2. **Automated CLI Integrations**:
   - The shadcn CLI depends on the `ui` alias mapped in `components.json` (e.g., `"ui": "@/components/ui"`). When you run:
     ```bash
     npx shadcn@latest add button
     ```
     The CLI automatically places the component inside your configured UI path. If you do not have this structure, it can lead to path mismatches, broken imports, or duplicate components.
3. **Consistent Path Mappings**:
   - It allows developers to import core components using predictable, absolute import paths like `import { Button } from "@/components/ui/button"` instead of deeply nested, fragile relative paths (`../../ui/button`).
