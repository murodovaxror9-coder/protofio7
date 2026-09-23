import type { IncomingMessage, ServerResponse } from 'node:http'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv, type Plugin } from 'vite'
import sendTelegramHandler from './api/send-telegram.js'

interface DevResponse extends ServerResponse {
  status(code: number): DevResponse
  json(data: unknown): void
}

/**
 * Dev-only shim for api/send-telegram.js so `npm run dev` can exercise the
 * contact form without needing `vercel dev` / a Vercel login locally.
 * On Vercel itself this file is ignored — the real serverless runtime is used.
 */
function devApiPlugin(env: Record<string, string>): Plugin {
  return {
    name: 'dev-api-send-telegram',
    apply: 'serve',
    configureServer(server) {
      server.middlewares.use('/api/send-telegram', (req: IncomingMessage, res: ServerResponse) => {
        const devRes = res as DevResponse
        devRes.status = (code: number) => {
          devRes.statusCode = code
          return devRes
        }
        devRes.json = (data: unknown) => {
          devRes.setHeader('Content-Type', 'application/json')
          devRes.end(JSON.stringify(data))
        }

        let raw = ''
        req.on('data', (chunk) => {
          raw += chunk
        })
        req.on('end', () => {
          try {
            ;(req as IncomingMessage & { body?: unknown }).body = raw ? JSON.parse(raw) : {}
          } catch {
            ;(req as IncomingMessage & { body?: unknown }).body = {}
          }
          process.env.TELEGRAM_BOT_TOKEN = env.TELEGRAM_BOT_TOKEN
          process.env.TELEGRAM_CHAT_ID = env.TELEGRAM_CHAT_ID
          void sendTelegramHandler(req as never, devRes as never)
        })
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    plugins: [react(), tailwindcss(), devApiPlugin(env)],
  }
})
