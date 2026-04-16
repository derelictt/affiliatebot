# Architecture Notes

## MVP architecture

### Frontend
- Next.js App Router
- server actions or API routes for product creation and generation
- Tailwind for basic UI

### Backend
- Next.js server layer for MVP
- generation service wraps OpenRouter
- prompt builder creates Pinterest-focused prompt from product metadata

### Data
- PostgreSQL with Prisma

## Main modules
- `lib/ai/generatePinterestDrafts.ts`
- `lib/products/normalizeProduct.ts`
- `lib/prompts/pinterestDraftPrompt.ts`
- `app/products/new/page.tsx`
- `app/drafts/[id]/page.tsx`

## v2 extensions
- browser automation / integrations for publishing
- analytics and performance tracking
- niche templates
- ranking and scoring offers

## Key product decision
Keep the human in the loop for approval. Do not start with autoposting.
