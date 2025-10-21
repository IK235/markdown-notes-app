# Quick Start Guide

## Get Running in 2 Minutes

### 1. Install and run locally (works without Supabase)

```bash
npm install
npm run dev
```

The app will auto-save to localStorage, so you can start using it immediately!

### 2. Optional: Add Supabase for cloud sync

If you want your notes synced to the cloud:

1. Go to [supabase.com](https://supabase.com) and create a free account
2. Create a new project
3. In the SQL Editor, paste and run the SQL from `supabase-setup.sql`
4. Go to Settings > API and copy:
   - Project URL
   - Anon/public key
5. Update `.env` file with your credentials

That's it! Your notes will now sync to Supabase.

## Using the AI Features

The Gemini API key is already in `.env` - just click the buttons:
- **Summarize** - Get a quick summary of your notes
- **Rewrite** - Improve and polish your text

## Tips

- The editor supports full markdown syntax
- Notes auto-save every second
- Use the split-pane view to write and preview simultaneously
- All standard markdown features work (tables, code blocks, etc.)
