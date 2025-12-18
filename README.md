# Endgame Website

Marketing site built with Next.js and MDX-based content management.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
├── content/
│   ├── blog/              # Blog posts (.mdx files)
│   └── case-studies/      # Case studies (.mdx files)
├── public/images/         # Static assets
├── src/
│   ├── app/               # Next.js pages
│   ├── components/
│   │   ├── ui/            # Reusable primitives (Button, Card, etc.)
│   │   ├── layout/        # Navbar, Footer
│   │   ├── sections/      # Page sections (Hero, CTA, etc.)
│   │   └── content/       # Blog/MDX components
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utilities
│   ├── data/              # Static site data
│   └── types/             # TypeScript types
```

## Adding a New Blog Post

1. Create a new `.mdx` file in `content/blog/`:

```bash
content/blog/your-post-slug.mdx
```

2. Add the frontmatter at the top of the file:

```mdx
---
title: Your Blog Post Title
description: A brief description that appears in previews
date: 2024-12-18
author: Your Name
tags: [Product-Led Sales, AI, Guide]
image: /images/blog/cards/your-image.png
---

Your blog content goes here...

## You can use markdown headings

And **bold text**, *italic text*, [links](https://example.com), etc.
```

3. Add your card image to `public/images/blog/cards/`

4. The post will automatically appear on the blog page, sorted by date (newest first)

### Frontmatter Fields

| Field | Required | Description |
|-------|----------|-------------|
| `title` | Yes | Post title |
| `description` | Yes | Short description for previews |
| `date` | Yes | Publication date (YYYY-MM-DD) |
| `author` | No | Author name |
| `tags` | No | Array of tags for filtering |
| `image` | No | Card image path |

## Adding a Case Study

1. Create `content/case-studies/company-name.mdx`:

```mdx
---
title: How Company achieved results with Endgame
description: Short description
company: COMPANY NAME
date: 2024-12-18
metrics:
  - label: AI Adoption
    value: 80%
  - label: Time Saved
    value: 10x
---

Case study content...
```

## Troubleshooting

If you see cache errors like `ENOENT: no such file or directory`:

```bash
rm -rf .next
npm run dev
```

## Tech Stack

- **Next.js 15** - React framework
- **Tailwind CSS 4** - Styling
- **MDX** - Content management
