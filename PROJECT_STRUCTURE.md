# Project Structure

```
markdown-notes-app/
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   ├── button.tsx           # Reusable button component
│   │   │   └── textarea.tsx         # Reusable textarea component
│   │   └── MarkdownEditor.tsx       # Main editor with split view
│   ├── lib/
│   │   ├── gemini.ts               # Gemini AI integration
│   │   ├── supabase.ts             # Supabase client setup
│   │   └── utils.ts                # Utility functions
│   ├── App.tsx                     # Main app component
│   ├── App.css                     # App styles
│   ├── index.css                   # Global styles with Tailwind
│   └── main.tsx                    # App entry point
├── supabase-setup.sql              # Database schema
├── .env.example                    # Environment template
├── .env                            # Your environment variables
├── tailwind.config.js              # Tailwind configuration
├── tsconfig.json                   # TypeScript config
└── vite.config.ts                  # Vite configuration

```

## Key Files

### `src/components/MarkdownEditor.tsx`
The heart of the app - split-pane editor with AI buttons

### `src/lib/gemini.ts`
Contains `summarizeText()` and `rewriteText()` functions

### `src/App.tsx`
Main component handling:
- Auto-save to localStorage
- Optional Supabase sync
- AI action handling

### `supabase-setup.sql`
Run this in your Supabase SQL editor to create the notes table
