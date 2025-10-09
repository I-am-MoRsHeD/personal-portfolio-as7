# 🌐 Personal Portfolio 

This is the **frontend** for my personal portfolio project — built using **Next.js**, **TypeScript**, and **Tailwind CSS**.  
It showcases my blogs, projects, and personal details, with a private dashboard for managing content.  
The app uses **ISR (Incremental Static Regeneration)** for optimal performance and SEO.

---

## 🚀 Live Demo

🔗 **Frontend URL:** [https://personal-portfolio-as7.vercel.app](https://personal-portfolio-as7.vercel.app)  
🔗 **Backend API:** [https://personal-portfolio-server-as7.vercel.app](https://personal-portfolio-server-as7.vercel.app)

---

## 🧩 Features

### 👥 Public Pages
- **Home / About Me:** Displays personal details, skills, and work experience (SSG).
- **Projects Showcase:** Lists personal projects with thumbnails, descriptions, and links (ISR).
- **Blogs:** Displays all blogs and supports viewing individual blog pages (ISR + `generateStaticParams`).

### 🔐 Private Pages
- **Authentication:** Secure JWT-based login (Owner only).
- **Dashboard:** Private owner dashboard to manage blogs and projects (CRUD).

---

## ⚙️ Tech Stack

| Category | Technologies |
|-----------|---------------|
| Framework | [Next.js](https://nextjs.org/) |
| Language | [TypeScript](https://www.typescriptlang.org/) |
| Styling | [Tailwind CSS](https://tailwindcss.com/) |
| Notifications | [shadcn-sonner] |
| Deployment | [Vercel](https://vercel.com/) |

---

## 📡 Data Fetching Strategy

- **About Page:** Static Site Generation (SSG)
- **Projects Page:** ISR (revalidate data periodically)
- **Blogs Page:** ISR for all blogs, ISR + `getStaticPaths` for single blog pages
- **Dashboard:** ISR (private routes only)

---

## 🧠 Authentication & State Management

- JWT token stored securely via cookies
- Auth check using `fetch('/auth/me')`
- `react-hot-toast` for user feedback (success/error messages)
- Protected routes for dashboard (Owner only)

---

## 🧯 Error Handling & Validation

- Client-side form validation (empty fields, invalid formats)
- `try/catch` for network/API errors
- Toast notifications for success/error feedback
- Graceful fallback UI for failed fetches

---

## 🧰 Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/I-am-MoRsHeD/personal-portfolio-as7.git
cd personal-portfolio-as7
```

### 2️⃣ Install dependencies
```bash
bun install
# or
npm install
```

### 3️⃣ Add environment variables
```bash
NEXT_PUBLIC_BASE_URL=https://your-backend-api-url.com/api
```
### 4️⃣ Run the development server
```bash
bun run dev
# or
npm run dev
```
### 4️⃣ Build for production
```bash
bun run build
bun start
# or
npm run build
npm start
```

