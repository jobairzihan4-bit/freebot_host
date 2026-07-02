/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Bot, Activity } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 flex flex-col items-center justify-center text-neutral-100 p-4">
      <div className="max-w-md w-full bg-neutral-900 border border-neutral-800 rounded-2xl p-8 shadow-2xl text-center space-y-6">
        <div className="w-16 h-16 bg-blue-500/20 text-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
          <Bot size={32} />
        </div>
        <h1 className="text-2xl font-bold tracking-tight text-white">Telegram Bot Active</h1>
        <p className="text-neutral-400 text-sm">
          Your full-stack application is running. Express server, Vite React frontend, and Telegraf bot are initialized and ready.
        </p>
        <div className="pt-4 border-t border-neutral-800">
          <div className="inline-flex items-center space-x-2 text-xs font-mono text-emerald-400 bg-emerald-400/10 px-3 py-1.5 rounded-full">
            <Activity size={14} className="animate-pulse" />
            <span>System Online</span>
          </div>
        </div>
      </div>
    </div>
  );
}
