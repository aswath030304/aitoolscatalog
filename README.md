# AI Tools Catalog

A modern, responsive, and SEO-optimized directory of AI tools built using **Next.js 14 (App Router)**, **React 18**, **TypeScript**, and **Tailwind CSS**.  
This project demonstrates clean UI/UX, structured frontend engineering, dynamic routing, and static generation using a JSON dataset.

---

## Features

### Search and Filtering
- Fuzzy search powered by Fuse.js  
- Category-based filtering  
- Pricing filters (Free, Freemium, Paid)  
- Sorting options for name and rating  
- Real-time client-side updates  

### Dynamic Tool Pages (Static Site Generation)
Each tool detail page includes:
- Logo, name, category  
- Full description  
- Pricing information  
- Rating  
- Tags  
- External website link  
- SEO metadata via `generateMetadata()`  

### User Interface and Experience
- Fully responsive Tailwind CSS design  
- Clean layout inspired by modern directory-style UI  
- Reusable components (Header, Footer, ToolCard)  
- Smooth transitions and hover effects  

---

## Tech Stack

- **Next.js 14** (App Router, SSG, Metadata API)  
- **React 18**  
- **TypeScript**  
- **Tailwind CSS**  
- **Fuse.js** for fuzzy search  
- **Static JSON dataset**  
- **Netlify** for production deployment  

---

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


---

## Installation and Setup

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
## Deployment (Netlify)

1. Push the project to a GitHub repository.  
2. Go to **https://netlify.com**  
3. Click **Add New Site → Import from GitHub**  
4. Choose your repository.  
5. Netlify automatically detects **Next.js** and configures the build.  
6. Click **Deploy**.  

Your project is now live on a global CDN.

---

## Dataset: How It Was Created

The dataset (`tools.json`) was prepared using publicly available information from:

- Product Hunt  
- There’s an AI For That  
- Official tool websites  

**Process followed:**

1. Identified a list of popular AI tools  
2. Collected details such as name, category, description, pricing, and logo  
3. Cleaned, formatted, and standardized the data  
4. Converted everything into a consistent JSON structure  
5. Used TypeScript types to ensure accuracy and stability  

No backend database was required — the entire site uses static JSON with SSG.

---

## Use of AI Tools in This Project

AI tools were used **only for repetitive or time-saving tasks**, such as:

- Formatting the dataset into JSON  
- Auto-generating boilerplate TypeScript types  
- Speeding up Tailwind CSS utility class suggestions  
- Generating component scaffolding (e.g., basic layout or card structure)  

All core logic, routing, filtering, and UI decisions were implemented manually.

---

## Project Summary

The **AI Tools Catalog** is a responsive and clean application featuring:

- Static Site Generation (SSG) with dynamic routing  
- Search, filtering, and sorting capabilities  
- Tailwind CSS responsive UI  
- Metadata API for SEO optimization  
- Organized folder structure with reusable components  

Built as part of the **RaftLabs Software Developer Intern Assessment**.

---

## Author

**Aswath**  
Email: **aswathn334@gmail.com**  
GitHub: **https://github.com/aswath-n**  
LinkedIn: **https://www.linkedin.com/in/aswath030304**
