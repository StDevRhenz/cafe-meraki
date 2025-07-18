This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

# Folder Structure Idea

my-ordering-system/
├── public/                  # Public assets (images, icons, etc.)
├── src/                     # All source code lives here
│   ├── app/                 # Pages and routing (Next.js App Router)
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── menu/            # Menu pages
│   │   ├── orders/          # Orders pages
│   │   └── admin/           # Admin pages
│   ├── components/          # Reusable UI components
│   │   ├── Button.tsx
│   │   └── Navbar.tsx
│   ├── features/            # Business domains/modules
│   │   ├── cart/            # Cart logic (state, utils, etc.)
│   │   ├── menu/            # Menu-related logic
│   │   └── orders/          # Order state/logic
│   ├── lib/                 # Helpers, API clients, or utilities
│   │   ├── supabaseClient.ts
│   │   └── formatDate.ts
│   ├── styles/              # Global styles (e.g., Tailwind, CSS modules)
│   ├── hooks/               # Custom React hooks
│   ├── context/             # React contexts (e.g., auth, cart state)
│   ├── middleware.ts        # For auth/route protection
│   └── types/               # TypeScript types/interfaces
├── .env.local               # Environment variables
├── next.config.js           # Next.js config
├── tailwind.config.js       # Tailwind CSS config
└── package.json