# AffiliateBot

AI copilot for Pinterest-first affiliate marketers.

## Product vision

Turn product links into ready-to-post Pinterest affiliate drafts.

## MVP goal

Given a product URL or manually entered product data, generate multiple Pinterest-ready affiliate post drafts that a human can review, edit, and publish.

## MVP scope

### In scope
- product input form
- manual product metadata editing
- affiliate link field
- AI generation of Pinterest titles, descriptions, CTAs, and keywords
- draft library
- review and approval workflow

### Out of scope for v1
- multi-platform publishing
- full autoposting
- analytics
- billing
- team collaboration
- video generation

## Suggested stack
- Next.js
- TypeScript
- Tailwind CSS
- PostgreSQL
- Prisma
- OpenRouter for AI generation

## Initial app structure

- `docs/` product and architecture notes
- `app/` web app routes
- `components/` UI components
- `lib/` shared server/client code
- `prisma/` schema and migrations

## First milestone

Build a vertical slice:
1. enter product data
2. generate Pinterest drafts
3. review drafts in UI
4. store drafts in database

## Core entities

### Product
- id
- sourceUrl
- title
- description
- imageUrl
- priceText
- category
- affiliateUrl
- createdAt

### DraftSet
- id
- productId
- status
- createdAt

### Draft
- id
- draftSetId
- title
- description
- cta
- keywords
- status
- createdAt

## Notes

Start with Pinterest only. Keep a human approval step before publish.
