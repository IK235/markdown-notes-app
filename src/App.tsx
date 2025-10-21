import { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { summarizeText, rewriteText } from './lib/groq'

function App() {
  const [content, setContent] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const savedContent = localStorage.getItem('note-content')
    if (savedContent) {
      setContent(savedContent)
    }
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      localStorage.setItem('note-content', content)
    }, 1000)
    return () => clearTimeout(timer)
  }, [content])

  const handleAIAction = async (action: 'summarize' | 'rewrite') => {
    if (!content.trim()) return

    setLoading(true)
    try {
      const result = action === 'summarize'
        ? await summarizeText(content)
        : await rewriteText(content)
      setContent(result)
    } catch (error) {
      console.error('AI action failed:', error)
      alert('Failed to process. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex h-screen">
      <div className="flex flex-col flex-1 border-r border-gray-200">
        <div className="border-b border-gray-200 p-4 flex items-center justify-between bg-white">
          <h2 className="font-semibold text-gray-900">Editor</h2>
          <div className="flex gap-2">
            <button
              onClick={() => handleAIAction('summarize')}
              disabled={loading || !content.trim()}
              className="px-4 py-2 text-sm border border-gray-300 rounded-md hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Processing...' : 'Summarize'}
            </button>
            <button
              onClick={() => handleAIAction('rewrite')}
              disabled={loading || !content.trim()}
              className="px-4 py-2 text-sm border border-gray-300 rounded-md hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Processing...' : 'Rewrite'}
            </button>
          </div>
        </div>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Start writing in markdown..."
          className="flex-1 resize-none p-4 font-mono focus:outline-none"
        />
      </div>

      <div className="flex flex-col flex-1">
        <div className="border-b border-gray-200 p-4 bg-white">
          <h2 className="font-semibold text-gray-900">Preview</h2>
        </div>
        <div className="flex-1 overflow-auto p-6 prose prose-slate max-w-none">
          {content ? (
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {content}
            </ReactMarkdown>
          ) : (
            <p className="text-gray-400">Preview will appear here...</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default App
