import { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Textarea } from './ui/textarea'
import { Button } from './ui/button'
import { Sparkles, RefreshCw } from 'lucide-react'

interface MarkdownEditorProps {
  value: string
  onChange: (value: string) => void
  onAIAction: (action: 'summarize' | 'rewrite', content: string) => Promise<string>
}

export function MarkdownEditor({ value, onChange, onAIAction }: MarkdownEditorProps) {
  const [loading, setLoading] = useState(false)

  const handleAIAction = async (action: 'summarize' | 'rewrite') => {
    if (!value.trim()) return

    setLoading(true)
    try {
      const result = await onAIAction(action, value)
      onChange(result)
    } catch (error) {
      console.error('AI action failed:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex h-screen">
      <div className="flex-1 flex flex-col border-r border-gray-200">
        <div className="border-b border-gray-200 p-4 flex items-center justify-between bg-white">
          <h2 className="font-semibold text-gray-900">Editor</h2>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleAIAction('summarize')}
              disabled={loading || !value.trim()}
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Summarize
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleAIAction('rewrite')}
              disabled={loading || !value.trim()}
            >
              <RefreshCw className="w-4 h-4 mr-2" />
              Rewrite
            </Button>
          </div>
        </div>
        <Textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Start writing in markdown..."
          className="flex-1 resize-none border-0 rounded-none focus-visible:ring-0 font-mono"
        />
      </div>

      <div className="flex-1 flex flex-col">
        <div className="border-b border-gray-200 p-4 bg-white">
          <h2 className="font-semibold text-gray-900">Preview</h2>
        </div>
        <div className="flex-1 overflow-auto p-6 prose prose-slate max-w-none">
          {value ? (
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {value}
            </ReactMarkdown>
          ) : (
            <p className="text-gray-400">Preview will appear here...</p>
          )}
        </div>
      </div>
    </div>
  )
}
