# Markdown Notes App

A clean, modern markdown notes app with AI-powered features powered by Groq API.

## 🎯 Live Demo

**👉 [Try it online here!](https://markdown-notes-app.vercel.app)** ← Click to test the app

![React](https://img.shields.io/badge/React-19.2.0-blue?style=flat-square)
![Vite](https://img.shields.io/badge/Vite-5.4-purple?style=flat-square)
![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue?style=flat-square)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3-blue?style=flat-square)

---

## ✨ Features

- **Split-pane editor** - Write markdown on the left, see live preview on the right
- **AI-powered Summarize** - Get concise summaries of your notes using Groq AI
- **AI-powered Rewrite** - Improve and rephrase your text with AI assistance
- **Auto-save** - Notes are automatically saved to localStorage
- **Live markdown preview** - See formatted output in real-time
- **Clean, modern UI** - Minimalistic design with Tailwind CSS

## Setup

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment variables

Copy `.env.example` to `.env` and add your Groq API key:

```
VITE_GROQ_API_KEY=your-groq-api-key-here
```

Get a free API key at [console.groq.com](https://console.groq.com)

### 3. Run the app

```bash
npm run dev
```

## Tech Stack

- **React** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Groq** - Fast AI inference
- **react-markdown** - Markdown rendering

## Usage

1. Start typing in the editor pane
2. See live markdown preview on the right
3. Click "Summarize" to get a concise summary
4. Click "Rewrite" to improve your text
5. Notes auto-save to localStorage
