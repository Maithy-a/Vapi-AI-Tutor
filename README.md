# Mentra AI Companion

Mentra AI is an application that allows users to **create, customize, and interact with AI companions for personalized tutoring**. Users can select a **topic, voice, and subject** to facilitate an engaging and effective learning experience.

## 🛠️ Tech Stack

This project is built using the following core technologies:

- **Next.js**
- **TypeScript**
- **Tailwind CSS**
- **Shadcn/ui**
- **Supabase** (Database)
- **Clerk** (Authentication & Billing)
- **Vapi** (AI Voice Agents)
- **Zod** (Schema Validation)

## ✨ Features

- **AI Voice Agents:** Offers voiced AI tutors specializing in various subjects and topics.
- **Custom Tutor Creation:** Users can create personalized AI tutors by defining the subject, topic, and conversational style.
- **Authentication:** Secure sign-up and sign-in using **Clerk**, supporting Google and other authentication methods.
- **Database Integration:** Uses **Supabase** for robust real-time data handling.
- **Learning Management:** Features for **bookmarking tutors** and reviewing **session history**.
- **Billing & Subscriptions:** Functionality to manage user plans, upgrades, and payments.
- **Search Functionality:** Efficiently find tutors using a search bar and robust filters.
- **Responsive Design:** Clean and modern UI built with Tailwind CSS and shadcn/ui.

## 🚀 Quick Start

Follow these steps to set up and run the Mentra AI Companion locally.

### 1. Clone the repository

```bash
git clone https://github.com/Maithy-a/mentra-ai-tutor.git
cd mentra-ai-tutor
```

### 2\. Install dependencies

```bash
npm install
```

### 3\. Configure Environment Variables

Create a `.env.local` file in the root directory and add your API keys (replace placeholders with your actual keys):

```bash
# CLERK
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_public_key
CLERK_SECRET_KEY=your_clerk_secrect_key
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=/
NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=/

# SUPABASE
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key

# VAPI
NEXT_PUBLIC_VAPI_WEB_TOKEN=your_vapi_api_key
```

### 4\. Run the application

```bash
npm run dev
```

### 5\. Access the application

Open your browser and navigate to `http://localhost:3000`.

## 💾 Database Schema

The application uses **Supabase (PostgreSQL)**. Create a project in Supabase and run the following SQL commands to set up the necessary tables.

### `companions` Table

```sql
create table public.companions (
  id uuid not null default gen_random_uuid (),
  created_at timestamp with time zone not null default now(),
  name character varying null,
  subject character varying null,
  topic character varying null,
  style character varying null,
  voice character varying null,
  duration bigint null,
  author character varying null,
  constraint companions_pkey primary key (id)
) TABLESPACE pg_default;
```

### `session_history` Table

This table includes a foreign key constraint linking session records to the `companions` table.

```sql
create table public.session_history (
  id uuid not null default gen_random_uuid (),
  created_at timestamp with time zone not null default now(),
  user_id character varying null,
  companion_id uuid null,
  constraint session_history_pkey primary key (id),
  constraint session_history_companion_id_fkey foreign key (companion_id) references public.companions (id) on update cascade on delete cascade
) TABLESPACE pg_default;
```

## Demo


<image src="public/readme/home.png" alt="Mentra Screenshot" fill />
<image src="public/readme/session.png" alt="Mentra Screenshot" fill />
<p align="center">