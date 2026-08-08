'use client';

import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Feather, Sparkles, MessageCircle, ArrowRight } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/metadata';

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'assistant',
      content:
        'Bonjour ! Je suis l\'assistant de l\'Atelier PrêtePlume. Quel est votre projet d\'écriture (Roman, Essai, Livre enfant, Ebook, Biographie, KDP) ?',
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = async (textToSend?: string) => {
    const query = textToSend || input;
    if (!query.trim()) return;

    const newMessages: ChatMessage[] = [...messages, { role: 'user', content: query }];
    setMessages(newMessages);
    if (!textToSend) setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newMessages }),
      });

      const data = await res.json();
      if (data.reply) {
        setMessages([...newMessages, { role: 'assistant', content: data.reply }]);
      }
    } catch (err) {
      setMessages([
        ...newMessages,
        {
          role: 'assistant',
          content: 'Désolé, une erreur de connexion est survenue. N\'hésitez pas à nous contacter sur WhatsApp !',
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const quickPrompts = [
    'Écrire un Roman',
    'Publication KDP Amazon',
    'Livre pour Enfants',
    'Tarifs & Devis gratuit',
  ];

  return (
    <div className="fixed bottom-6 left-6 z-50">
      {/* Trigger Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="glass-panel hover:bg-white/20 text-white rounded-full p-4 shadow-glass border border-white/20 flex items-center gap-2.5 group transition-all duration-300 hover:scale-105"
          aria-label="Ouvrir le chatbot PrêtePlume"
        >
          <div className="w-8 h-8 rounded-full bg-[#F6A028] text-[#2A1B12] flex items-center justify-center font-bold">
            <Sparkles className="w-4 h-4" />
          </div>
          <span className="text-xs font-semibold pr-2 hidden sm:inline">
            Besoin d'un conseil d'écriture ?
          </span>
        </button>
      )}

      {/* Chat Drawer Window in Warm Glassmorphism */}
      {isOpen && (
        <div className="w-[340px] sm:w-[380px] h-[480px] glass-panel-darker rounded-[2rem] border border-white/20 shadow-glass flex flex-col justify-between overflow-hidden animate-fade-in relative">
          {/* Header */}
          <div className="p-4 bg-white/10 border-b border-white/10 backdrop-blur-md flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#F6A028] text-[#2A1B12] flex items-center justify-center">
                <Feather className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-editorial text-base font-bold text-white leading-tight">
                  Assistant PrêtePlume
                </h4>
                <span className="text-[10px] text-white/70 block">
                  Atelier de 5 Plumes • En ligne
                </span>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="text-white/70 hover:text-white p-1 rounded-full hover:bg-white/10"
              aria-label="Fermer le chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 text-xs">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${
                  msg.role === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                <div
                  className={`max-w-[85%] p-3.5 rounded-2xl leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-white text-[#2A1B12] font-medium rounded-br-none shadow-pill'
                      : 'bg-white/10 text-white border border-white/15 rounded-bl-none backdrop-blur-md font-editorial text-sm'
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white/10 text-white/80 p-3 rounded-2xl text-xs italic animate-pulse">
                  Rédaction de la réponse...
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompts */}
          <div className="px-4 pb-2 flex flex-wrap gap-1.5">
            {quickPrompts.map((prompt) => (
              <button
                key={prompt}
                onClick={() => handleSend(prompt)}
                className="text-[10px] bg-white/10 hover:bg-white/20 text-white/90 px-2.5 py-1 rounded-full border border-white/15 transition-all"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Input Area */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-3 border-t border-white/10 bg-black/20 flex items-center gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Posez votre question sur un projet..."
              className="flex-1 bg-white/10 text-white placeholder-white/50 text-xs px-3.5 py-2.5 rounded-full border border-white/15 focus:outline-none focus:border-[#F6A028]"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="w-9 h-9 rounded-full bg-[#F6A028] text-[#2A1B12] flex items-center justify-center disabled:opacity-50 transition-all hover:scale-105 shrink-0"
              aria-label="Envoyer le message"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
