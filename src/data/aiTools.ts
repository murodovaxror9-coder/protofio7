export interface AiTool {
  id: string
  name: string
  descriptionKey: string
}

export const aiTools: AiTool[] = [
  { id: 'claude', name: 'Claude', descriptionKey: 'aiTools.claude' },
  { id: 'chatgpt', name: 'ChatGPT', descriptionKey: 'aiTools.chatgpt' },
  { id: 'cursor', name: 'Cursor', descriptionKey: 'aiTools.cursor' },
  { id: 'copilot', name: 'GitHub Copilot', descriptionKey: 'aiTools.copilot' },
]
