# 🚀 Prept - AI-Powered Interview Platform

Prept is a modern, full-stack Web Application that connects job seekers (Interviewees) with senior engineers (Interviewers) for 1:1 mock interviews. Designed with a premium aesthetic, the platform features HD video calls, real-time AI question generation, persistent chat, and automated post-interview feedback reports.

## ✨ Key Features

- **🎯 Dual Roles (Interviewee & Interviewer):** Distinct dashboards, workflows, and permissions for practicing engineering candidates vs. expert interviewers.
- **🤖 AI Co-Pilot & Question Generator:** Live, role-specific questions (DSA, System Design, Behavioral, Frontend, etc.) generated seamlessly during the interview using the Gemini AI.
- **📊 AI Feedback Reports:** Detailed post-interview analysis and actionable insights automatically compiled and presented to the interviewee.
- **📹 HD Video Calling & Recording:** High-quality video sessions directly in the browser with screen sharing and playback links powered by Stream SDK.
- **💬 Persistent Chat Threads:** Message your interviewer before or after the call for notes, follow-ups, and resource sharing.
- **🗓️ Slot-based Scheduling:** Frictionless booking system. Interviewers set their availability once, and interviewees book open slots—no tedious back-and-forth.
- **💳 Credit System & Subscriptions:** Seamless monthly credits and billing managed via Stripe & Clerk Checkout. Unused credits roll over!
- **🔒 Built-in Security:** Robust bot protection, rate limiting, and API abuse prevention powered by Arcjet.

## 🛠️ Technology Stack

**Frontend & Core:**
- **Framework:** [Next.js](https://nextjs.org/) (App Router, React 19)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) + [Shadcn UI](https://ui.shadcn.com/)
- **Animations:** [Motion (Framer Motion)](https://motion.dev/)

**Backend & Services:**
- **Database:** PostgreSQL (Hosted on [Supabase](https://supabase.com/))
- **ORM:** [Prisma](https://www.prisma.io/)
- **Authentication & Subscription Billing:** [Clerk](https://clerk.com/)
- **Video & Chat Infrastructure:** [Stream API](https://getstream.io/)
- **AI Intelligence:** [Google Generative AI (Gemini)](https://ai.google.dev/)
- **Security Middleware:** [Arcjet](https://arcjet.com/)
- **Transactional Emails:** [Resend](https://resend.com/) & React Email

## ⚙️ Local Development Setup

### 1. Clone the repository
```bash
git clone <your-repo-url>
cd ai-interview-platform-main
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Setup Environment Variables
Create a `.env` (or `.env.local`) file in the root of the project. You will need to obtain API keys for the following services:

```env
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

# Database (Supabase + Prisma)
DATABASE_URL=your_transactional_pooler_url
DIRECT_URL=your_direct_session_url

# Security
ARCJET_KEY=your_arcjet_key
ARCJET_ENV=development

# Stream Video & Chat
NEXT_PUBLIC_STREAM_API_KEY=your_stream_key
STREAM_SECRET_KEY=your_stream_secret

# AI
GEMINI_API_KEY=your_google_gemini_key

# Email
RESEND_API_KEY=your_resend_key

NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### 4. Setup Database
Sync your Prisma schema with the Postgres database:
```bash
npx prisma generate
npx prisma db push
```

### 5. Run the Local Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

> **⚠️ Warning:** Avoid using `npm start` during active development, as it will run the cached `next build` which won't reflect real-time changes. Always use `npm run dev`.

## 💳 Configuring Stripe / Clerk Subscriptions
If you are testing the **Pricing Checkout Modal**, you must set up your Stripe connection in the Clerk dashboard.
1. Go to **Clerk Dashboard -> Billing -> Subscriptions**.
2. Create your two premium plans: **Starter** ($29/m) and **Pro** ($69/m).
3. Copy their respective `cplan_XXXXXXX` IDs.
4. Paste these new ID strings into the `PLANS` array inside the `lib/data.js` file.
