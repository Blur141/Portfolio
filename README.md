# Mohammed Niyas NF — Portfolio

Personal portfolio website built with **Next.js 14**, **Tailwind CSS**, and a **FastAPI** backend for the contact form. Template inspired by [athifa.me](https://www.athifa.me) (with permission).

---

## Project Structure

```
niyas-portfolio/
├── app/                        # Next.js App Router
│   ├── about/page.tsx          # About page (bio, skills, education, certs)
│   ├── animation/Slide.tsx     # Framer Motion slide animation
│   ├── components/
│   │   ├── global/             # Navbar, Footer, Theme, MobileMenu
│   │   ├── pages/              # Job, Projects, Contact, Skills, Education, Certifications
│   │   └── shared/             # Social links
│   ├── data/portfolio.ts       # ← ALL YOUR CONTENT LIVES HERE
│   ├── font/                   # Local fonts (Incognito + GitLab Mono)
│   ├── icons/                  # HeroSvg, SunIcon, MoonIcon
│   ├── styles/globals.css
│   ├── layout.tsx
│   ├── page.tsx                # Home page
│   └── providers.tsx           # next-themes provider
├── public/
│   ├── noise.png               # Background texture
│   └── profile.png             # ← ADD YOUR PHOTO HERE
├── backend/
│   ├── main.py                 # FastAPI app (contact form endpoint)
│   ├── requirements.txt
│   └── .env.example
├── package.json
├── tailwind.config.js
└── .env.local.example
```

---

## Quick Start

### 1. Frontend (Next.js)

```bash
# Install dependencies
npm install

# Copy env file
cp .env.local.example .env.local
# Edit .env.local and set NEXT_PUBLIC_API_URL

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### 2. Backend (FastAPI)

```bash
cd backend

# Create virtual environment
python3 -m venv venv
source venv/bin/activate   # Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Copy env file
cp .env.example .env
# Edit .env with your settings

# Run the API server
uvicorn main:app --reload --port 8000
```

API docs available at [http://localhost:8000/docs](http://localhost:8000/docs).

---

## Adding Your Photo

1. Place your photo at `public/profile.png`
2. Open `app/about/page.tsx`
3. Find the comment that says `{/* Replace the placeholder below with: */}`
4. Replace the placeholder `<div>` with:

```tsx
import Image from "next/image";

<Image
  src="/profile.png"
  width={320}
  height={380}
  quality={100}
  alt="Mohammed Niyas NF"
  className="rounded-2xl object-cover w-full h-full"
  priority
/>
```

---

## Updating Your Content

All portfolio content is in one file: **`app/data/portfolio.ts`**

- **Profile info** → `profile` object
- **Social links** → `socialLinks` array
- **Work experience** → `jobs` array
- **Projects** → `projects` array
- **Skills** → `skills` array
- **Certifications** → `certifications` array
- **Education** → `education` array
- **Areas of Interest** → `areasOfInterest` array

---

## Deployment

### Frontend → Vercel
```bash
npm run build
# Deploy via Vercel CLI or connect GitHub repo on vercel.com
```

Set `NEXT_PUBLIC_API_URL` in Vercel environment variables to your deployed backend URL.

### Backend → Railway / Render / Fly.io
```bash
# Example: Render
# Set start command to: uvicorn main:app --host 0.0.0.0 --port $PORT
```

Set `FRONTEND_URL` in your backend environment variables to your Vercel deployment URL.

---

## Contact Form (FastAPI Endpoints)

| Method | Path        | Description                           |
|--------|-------------|---------------------------------------|
| GET    | `/`         | Health check                          |
| GET    | `/health`   | Health check with timestamp           |
| POST   | `/contact`  | Submit contact form                   |
| GET    | `/messages` | View messages (requires `?secret=...`)|

### Optional Email Notifications

Set these env vars in `backend/.env` to receive email notifications on form submissions:

```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password    # Gmail App Password (not your regular password)
NOTIFY_EMAIL=mohammedniyas654@gmail.com
```

---

## Template Credit

This project is based on the open-source template by [Athifa Sultana](https://www.athifa.me) — used with permission.
