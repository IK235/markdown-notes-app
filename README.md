# Markdown Notes App

A clean, modern markdown notes app with AI-powered features using Gemini AI.

## Features

- **Split-pane editor** - Write markdown on the left, see live preview on the right
- **AI-powered tools** - Summarize and rewrite your notes with Gemini
- **Auto-save** - Notes are automatically saved to localStorage and Supabase
- **Clean UI** - Modern design with Tailwind CSS

## Setup

### 1. Install dependencies

```bash
npm install
```

### 2. Set up Supabase

1. Create a new project at [supabase.com](https://supabase.com)
2. Go to the SQL Editor and run the SQL from `supabase-setup.sql`
3. Copy your project URL and anon key from Settings > API

### 3. Configure environment variables

Copy `.env.example` to `.env` and fill in your credentials:

```
VITE_SUPABASE_URL=your-supabase-url
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
VITE_GEMINI_API_KEY=AIzaSyAt1DtjexBEYW7AVNDfT77zV_A9q8uO9tc
```

### 4. Run the app

```bash
npm run dev
```

## Tech Stack

- **React** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Supabase** - Backend & database
- **Gemini AI** - AI features
- **react-markdown** - Markdown rendering

## Usage

1. Start typing in the editor pane
2. See live markdown preview on the right
3. Click "Summarize" to get an AI summary
4. Click "Rewrite" to improve your text with AI
5. Notes auto-save to localStorage and Supabase
