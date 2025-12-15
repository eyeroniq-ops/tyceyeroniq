import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Bot, Loader2 } from 'lucide-react';
import { ServiceTerms, ChatMessage } from '../types';
import { generateAnswer } from '../services/geminiService';

interface AIChatProps {
  service: ServiceTerms;
}

const AIChat: React.FC<AIChatProps> = ({ service }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: `Hola, soy el asistente virtual de Eyeroniq. ¿Tienes dudas sobre los términos de ${service.name}?` }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Reset chat when service changes
  useEffect(() => {
    setMessages([{ role: 'model', text: `Hola, soy el asistente virtual de Eyeroniq. ¿Tienes dudas sobre los términos de ${service.name}?` }]);
  }, [service]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    const answer = await generateAnswer(userMsg, service);

    setMessages(prev => [...prev, { role: 'model', text: answer }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-80 sm:w-96 bg-zinc-900 border border-zinc-700 rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-in slide-in-from-bottom-5 fade-in duration-300">
          {/* Header */}
          <div className="bg-gradient-to-r from-pink-900 to-purple-900 p-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Bot className="w-5 h-5 text-white" />
              <h3 className="text-white font-semibold text-sm">Asistente Eyeroniq</h3>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-white/70 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="h-80 overflow-y-auto p-4 space-y-3 bg-zinc-900/95">
            {messages.map((msg, idx) => (
              <div 
                key={idx} 
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-[85%] p-3 rounded-2xl text-sm ${
                    msg.role === 'user' 
                      ? 'bg-pink-600 text-white rounded-br-none' 
                      : 'bg-zinc-800 text-zinc-200 rounded-bl-none border border-zinc-700'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-zinc-800 p-3 rounded-2xl rounded-bl-none border border-zinc-700">
                  <Loader2 className="w-4 h-4 text-zinc-400 animate-spin" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 bg-zinc-950 border-t border-zinc-800 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Pregunta sobre los términos..."
              className="flex-1 bg-zinc-800 text-white text-sm rounded-lg px-3 py-2 outline-none focus:ring-1 focus:ring-pink-500 border border-zinc-700"
            />
            <button 
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="bg-pink-600 hover:bg-pink-500 disabled:opacity-50 disabled:cursor-not-allowed text-white p-2 rounded-lg transition-colors"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`shadow-lg shadow-pink-900/20 p-4 rounded-full transition-all duration-300 transform hover:scale-105 ${
          isOpen ? 'bg-zinc-800 text-zinc-400 rotate-90' : 'bg-pink-600 text-white hover:bg-pink-500'
        }`}
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
      </button>
    </div>
  );
};

export default AIChat;