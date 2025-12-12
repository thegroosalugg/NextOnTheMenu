# NextOnTheMenu
NextJs Development Projects (App Router)

## 01 Essentials
- fundamentals of NextJs

## 02 Routing
- @parallel, [...catch-all], [[...optional-catch-all]], [dynamic], (group), (.)Hidden
- page.tsx, default.tsx, layout.tsx, loading.tsx, error.tsx, not-found.tsx

## 03 Optimisation
- Cloudinary API integration
- Caching
  - request de-duplication with React cache
  - response caching with Next unstable_cache

## 04 Authentication
- authentication with Lucia Auth stored as cookies

## 05 Deployed Project
#### [Shopify](https://shopify-nu-six.vercel.app)
##### Rebuild of Vercel's [Prodidy Demo](https://prodigy-nextjs-commerce.vercel.app/)
- Rebuild of Vercel's demo - project looks and functions alike, but using own code interpretation
- Next 15, Tailwind 4 and native MongoDB driver
- STRIPE payments integration
  - no webhooks, but checkout success page protected in-house with cookie based ID system
- cached request de-duplication and response data (unstable_cache)
- all products/categories is fetched from DB
- cart data stored in DB and referenced on device via cookies
- route based product sorting
