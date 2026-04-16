# MVP Spec

## User
Solo affiliate marketer who wants to turn product links into Pinterest-ready promotional drafts quickly.

## Main workflow
1. User pastes product URL or enters product details manually.
2. User edits normalized product fields if needed.
3. User clicks generate.
4. System produces 5 to 10 Pinterest drafts.
5. User reviews, edits, approves, and copies drafts for posting.

## MVP screens

### 1. Dashboard
- recent products
- recent draft sets
- generate new button

### 2. New Product
- source URL
- title
- description
- image URL
- price text
- category
- affiliate URL
- submit button

### 3. Draft Results
- product summary card
- list of generated drafts
- approve or reject per draft
- edit title and description
- copy draft button

### 4. Draft Library
- filter by status
- open previous draft set

## Functional requirements
- store products in database
- store draft sets and drafts
- call LLM with reusable prompt template
- support regeneration
- support manual edits after generation

## Non-functional requirements
- simple deploy path
- low cost per generation
- fast iteration over prompts
- easy extension to publishing later
