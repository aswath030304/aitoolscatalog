# AI Tools Catalog

A modern, responsive, and SEO-optimized directory of AI tools built using **Next.js 16 (App Router)**, **React 19**, **TypeScript**, and **Tailwind CSS**.  
This project showcases clean UI/UX, strong frontend engineering, dynamic routing, and production-ready structure using a static JSON dataset.

---

## Features

### Search and Filtering
- Fuzzy search powered by Fuse.js
- Category-based filtering
- Pricing filter (Free / Freemium / Paid)
- Sorting by name and rating
- Real-time client-side updates

### Dynamic Tool Pages (SSG)
Each tool has a statically generated detail page:
- Logo, name, category
- Description
- Pricing
- Rating
- Tags
- External website link
- SEO metadata via `generateMetadata()`

### UI & Experience
- Fully responsive Tailwind CSS design
- Smooth hover and transition effects
- Reusable components (Header, Footer, ToolCard)
- Clean, modern layout optimized for readability

---

## Tech Stack

- **Next.js 16** (App Router, SSG, Metadata API)
- **React 19**
- **TypeScript**
- **Tailwind CSS**
- **Fuse.js** for fuzzy search
- **Node.js** for static JSON handling
- **Vercel** for deployment

---

## Folder Structure

## Folder Structure


ai-tools-catalog/
│
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── ToolCard.tsx
│   │
│   └── tools/
│       ├── page.tsx
│       ├── search-client.tsx
│       └── [id]/
│           └── page.tsx
│
├── data/
│   └── tools.json
│
├── lib/
│   ├── data.ts
│   └── types.ts
│
├── public/
│   └── images/   (Tool logos)
│
└── README.md

## Installation & Setup

### 1. Install dependencies
~~~bash
npm install
~~~

### 2. Start development server
~~~bash
npm run dev
~~~

### 3. Build for production
~~~bash
npm run build
~~~

### 4. Run production build
~~~bash
npm start
~~~

---

## Deployment on Vercel

1. Push your project to a GitHub repository.  
2. Visit: https://vercel.com  
3. Click **Add New Project → Import GitHub Repository**  
4. Select your AI Tools Catalog repository.  
5. Configure settings:  
   - **Framework Preset:** Next.js  
   - **Build Output:** Static (auto-detected)  
6. Click **Deploy**  

Your project will be deployed globally using Vercel’s CDN.

---

## Project Summary

The **AI Tools Catalog** is a modern, responsive, SEO-friendly web application featuring:

- Next.js 16 App Router with Static Site Generation  
- React 19 + TypeScript  
- Tailwind CSS responsive UI  
- Fuzzy search (Fuse.js) with sorting and filtering  
- Dynamic tool pages  
- Clean, scalable folder structure  

This project was created for the **RaftLabs Software Developer Intern Assessment**.

---

## Author

**Aswath**  
Email: **aswathn334@gmail.com**  
GitHub: **https://github.com/aswath-n**  
LinkedIn: **https://www.linkedin.com/in/aswath030304**
