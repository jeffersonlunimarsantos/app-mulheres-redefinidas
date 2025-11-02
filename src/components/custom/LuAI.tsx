'use client';

import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Bot, Send, Heart, Sparkles, MessageCircle, User, Lightbulb, BookOpen, Shield } from 'lucide-react';

interface Message {
  id: string;
  type: 'user' | 'lu';
  content: string;
  timestamp: Date;
  category?: 'encouragement' | 'guidance' | 'prayer' | 'practical' | 'biblical';
}

const luPersonality = {
  name: "LÙ",
  fullName: "Luz Divina",
  description: "Sua companheira de jornada espiritual e emocional",
  traits: [
    "Empática e acolhedora",
    "Sábia com base bíblica",
    "Encorajadora natural",
    "Orientada à cura emocional"
  ]
};

const quickSuggestions = [
  { text: "Como posso me sentir mais confiante?", category: "encouragement" },
  { text: "Preciso de uma oração hoje", category: "prayer" },
  { text: "Como lidar com ansiedade?", category: "guidance" },
  { text: "Versículo para hoje", category: "biblical" },
  { text: "Dicas de autocuidado", category: "practical" }
];

const luResponses = {
  greeting: [
    "Olá, querida! Sou a LÙ, sua companheira nesta jornada de crescimento. Como posso te ajudar hoje? 💕",
    "Que alegria ter você aqui! Sou a LÙ e estou aqui para caminhar ao seu lado. O que está em seu coração hoje? ✨",
    "Bem-vinda! Eu sou LÙ, e meu propósito é te acompanhar com amor e sabedoria. Como posso te apoiar? 🌸"
  ],
  encouragement: [
    "Você é mais forte do que imagina, querida. Deus plantou em você sementes de coragem que podem florescer em qualquer circunstância. Lembre-se: 'Posso todas as coisas naquele que me fortalece' - Filipenses 4:13 💪✨",
    "Sua jornada é única e preciosa aos olhos de Deus. Cada desafio que você enfrenta está moldando uma mulher mais sábia e resiliente. Você não está sozinha nesta caminhada! 🌟",
    "Filha amada, você carrega dentro de si a força do Criador. Quando se sentir pequena, lembre-se de que você é 'geração eleita, sacerdócio real' - 1 Pedro 2:9. Sua identidade está segura Nele! 👑"
  ],
  anxiety: [
    "Entendo sua ansiedade, querida. Respire fundo comigo. Lembre-se de que Deus cuida até dos pássaros do céu, quanto mais de você! 'Não andeis ansiosos por coisa alguma' - Filipenses 4:6. Que tal começarmos com uma oração de entrega? 🕊️",
    "A ansiedade pode parecer uma tempestade, mas você tem um porto seguro em Deus. Pratique: respire fundo, ore, e lembre-se de que 'Ele tem cuidado de vós' - 1 Pedro 5:7. Você quer conversar sobre o que está te preocupando? 💙",
    "Sua ansiedade é válida, mas não define você. Deus conhece suas preocupações antes mesmo de você falar. Que tal criarmos juntas uma rotina de paz? Oração, respiração e confiança são seus aliados! 🌿"
  ],
  prayer: [
    "Vamos orar juntas, querida: 'Pai amado, obrigada por esta filha preciosa. Derrama Tua paz sobre ela hoje. Que ela sinta Teu amor, Tua proteção e Tua direção. Fortalece seu coração e renova sua esperança. Em nome de Jesus, amém.' 🙏✨",
    "Que linda sua busca por oração! 'Senhor, esta Tua filha precisa de Ti hoje. Envolve-a com Teu amor, guia seus passos e dá-lhe sabedoria. Que ela sinta Tua presença real em sua vida. Obrigada por cuidar dela. Amém.' 💕",
    "Oremos: 'Deus de amor, obrigada por esta mulher corajosa que busca Tua face. Abençoa sua jornada, cura suas feridas e enche seu coração de alegria. Que ela seja instrumento de Tua paz no mundo. Em Jesus, amém.' 🌟"
  ],
  biblical: [
    "Aqui está uma palavra especial para você hoje: 'Ela é vestida de força e dignidade; sorri diante do futuro.' - Provérbios 31:25. Você é uma mulher de valor inestimável! 💎",
    "Deus tem uma mensagem linda para você: 'Porque eu bem sei os pensamentos que tenho a vosso respeito, pensamentos de paz e não de mal, para vos dar o fim que esperais.' - Jeremias 29:11 🌈",
    "Sua palavra de hoje: 'O Senhor, teu Deus, está no meio de ti, poderoso para te salvar; ele se deleitará em ti com alegria.' - Sofonias 3:17. Deus se alegra em você! 🎉"
  ],
  selfcare: [
    "Autocuidado é um ato de amor próprio e responsabilidade! Aqui estão algumas dicas: 1) Reserve 15min diários para oração/meditação 2) Faça uma caminhada na natureza 3) Pratique gratidão 4) Durma bem 5) Cerque-se de pessoas que te edificam. Qual dessas ressoa mais com você? 🌸",
    "Cuidar de si mesma não é egoísmo, é sabedoria! Seu corpo é templo do Espírito Santo. Que tal: banho relaxante, chá especial, música que eleva sua alma, tempo com Deus, e uma boa conversa com uma amiga querida? 🛁✨",
    "Autocuidado cristão inclui: nutrir sua alma (oração, louvor), seu corpo (exercício, alimentação saudável), sua mente (leitura edificante) e seus relacionamentos (comunhão saudável). Comece pequeno, seja consistente! 💪🌿"
  ]
};

export default function LuAI() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'lu',
      content: luResponses.greeting[Math.floor(Math.random() * luResponses.greeting.length)],
      timestamp: new Date(),
      category: 'encouragement'
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateLuResponse = (userMessage: string): { content: string; category: string } => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('ansiosa') || message.includes('ansiedade') || message.includes('preocup')) {
      return {
        content: luResponses.anxiety[Math.floor(Math.random() * luResponses.anxiety.length)],
        category: 'guidance'
      };
    }
    
    if (message.includes('oração') || message.includes('ore') || message.includes('orar')) {
      return {
        content: luResponses.prayer[Math.floor(Math.random() * luResponses.prayer.length)],
        category: 'prayer'
      };
    }
    
    if (message.includes('versículo') || message.includes('bíblia') || message.includes('palavra')) {
      return {
        content: luResponses.biblical[Math.floor(Math.random() * luResponses.biblical.length)],
        category: 'biblical'
      };
    }
    
    if (message.includes('autocuidado') || message.includes('cuidar') || message.includes('dicas')) {
      return {
        content: luResponses.selfcare[Math.floor(Math.random() * luResponses.selfcare.length)],
        category: 'practical'
      };
    }
    
    // Resposta padrão encorajadora
    return {
      content: luResponses.encouragement[Math.floor(Math.random() * luResponses.encouragement.length)],
      category: 'encouragement'
    };
  };

  const handleSendMessage = async (messageText?: string) => {
    const text = messageText || inputMessage.trim();
    if (!text) return;

    // Adicionar mensagem do usuário
    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: text,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simular tempo de resposta da LÙ
    setTimeout(() => {
      const response = generateLuResponse(text);
      const luMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'lu',
        content: response.content,
        timestamp: new Date(),
        category: response.category as any
      };

      setMessages(prev => [...prev, luMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const getCategoryIcon = (category?: string) => {
    switch (category) {
      case 'encouragement': return <Heart className="w-4 h-4" />;
      case 'guidance': return <Lightbulb className="w-4 h-4" />;
      case 'prayer': return <Shield className="w-4 h-4" />;
      case 'biblical': return <BookOpen className="w-4 h-4" />;
      case 'practical': return <Sparkles className="w-4 h-4" />;
      default: return <MessageCircle className="w-4 h-4" />;
    }
  };

  const getCategoryColor = (category?: string) => {
    switch (category) {
      case 'encouragement': return 'text-pink-600 bg-pink-50';
      case 'guidance': return 'text-blue-600 bg-blue-50';
      case 'prayer': return 'text-purple-600 bg-purple-50';
      case 'biblical': return 'text-green-600 bg-green-50';
      case 'practical': return 'text-orange-600 bg-orange-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-pink-100 p-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
              <Bot className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">{luPersonality.name}</h1>
              <p className="text-sm text-gray-600">{luPersonality.description}</p>
            </div>
            <div className="ml-auto">
              <Badge className="bg-green-100 text-green-800">Online</Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="max-w-4xl mx-auto p-4 pb-32">
        <div className="space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex gap-3 ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {message.type === 'lu' && (
                <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Bot className="w-4 h-4 text-white" />
                </div>
              )}
              
              <div className={`max-w-xs lg:max-w-md ${message.type === 'user' ? 'order-1' : ''}`}>
                <Card className={`${
                  message.type === 'user' 
                    ? 'bg-pink-600 text-white' 
                    : 'bg-white border-pink-100'
                }`}>
                  <CardContent className="p-3">
                    <p className="text-sm leading-relaxed">{message.content}</p>
                    <div className="flex items-center justify-between mt-2">
                      <span className={`text-xs ${
                        message.type === 'user' ? 'text-pink-100' : 'text-gray-500'
                      }`}>
                        {message.timestamp.toLocaleTimeString('pt-BR', { 
                          hour: '2-digit', 
                          minute: '2-digit' 
                        })}
                      </span>
                      {message.type === 'lu' && message.category && (
                        <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs ${getCategoryColor(message.category)}`}>
                          {getCategoryIcon(message.category)}
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {message.type === 'user' && (
                <div className="w-8 h-8 bg-pink-200 rounded-full flex items-center justify-center flex-shrink-0">
                  <User className="w-4 h-4 text-pink-600" />
                </div>
              )}
            </div>
          ))}

          {isTyping && (
            <div className="flex gap-3 justify-start">
              <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
                <Bot className="w-4 h-4 text-white" />
              </div>
              <Card className="bg-white border-pink-100">
                <CardContent className="p-3">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        {/* Quick Suggestions */}
        {messages.length === 1 && (
          <div className="mt-6">
            <h3 className="text-sm font-medium text-gray-700 mb-3">Sugestões para começar:</h3>
            <div className="flex flex-wrap gap-2">
              {quickSuggestions.map((suggestion, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  className="text-xs hover:bg-pink-50 hover:border-pink-300"
                  onClick={() => handleSendMessage(suggestion.text)}
                >
                  {suggestion.text}
                </Button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Input Area */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-pink-100 p-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex gap-3">
            <Input
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Digite sua mensagem para LÙ..."
              className="flex-1 border-pink-200 focus:border-pink-400"
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              disabled={isTyping}
            />
            <Button
              onClick={() => handleSendMessage()}
              disabled={!inputMessage.trim() || isTyping}
              className="bg-pink-600 hover:bg-pink-700"
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
          
          <div className="flex items-center justify-center mt-2">
            <p className="text-xs text-gray-500 text-center">
              LÙ é uma IA criada para apoiar sua jornada espiritual e emocional com amor e sabedoria bíblica 💕
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}