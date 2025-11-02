'use client';

import { useState, useEffect } from 'react';
import { X, Clock, Crown, Star, Check, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface TrialPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TrialPopup({ isOpen, onClose }: TrialPopupProps) {
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutos em segundos
  const [showPlans, setShowPlans] = useState(false);
  const [isClient, setIsClient] = useState(false);

  // Garantir que só renderize no cliente após hidratação
  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isOpen || !isClient) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setShowPlans(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isOpen, isClient]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const plans = [
    {
      name: 'Mensal',
      price: 'R$ 97',
      period: '/mês',
      description: 'Acesso completo por 30 dias',
      features: [
        'Todos os testes de autoconhecimento',
        'Acesso à comunidade exclusiva',
        'Palavra do dia personalizada',
        'Desafios semanais',
        'Fórum de discussões',
        'Suporte via chat'
      ],
      link: 'https://pay.kiwify.com.br/vJLMIS9',
      badge: null,
      color: 'pink'
    },
    {
      name: 'Semestral',
      price: 'R$ 497',
      period: '/6 meses',
      description: 'Economia de 15% • Mais popular',
      features: [
        'Tudo do plano mensal',
        'Sessão de mentoria em grupo',
        'E-book exclusivo',
        'Acesso a lives mensais',
        'Material de apoio extra',
        'Desconto em produtos'
      ],
      link: 'https://pay.kiwify.com.br/RBc9URa',
      badge: 'Mais Popular',
      color: 'purple'
    },
    {
      name: 'Anual',
      price: 'R$ 897',
      period: '/ano',
      description: 'Economia de 25% • Melhor custo-benefício',
      features: [
        'Tudo do plano semestral',
        '2 sessões de mentoria individual',
        'Acesso vitalício ao material',
        'Certificado de conclusão',
        'Grupo VIP no WhatsApp',
        'Bônus especiais'
      ],
      link: 'https://pay.kiwify.com.br/4SqbpPK',
      badge: 'Melhor Valor',
      color: 'blue'
    },
    {
      name: 'Premium Vitalício',
      price: 'R$ 1.997',
      period: 'pagamento único',
      description: 'Acesso para toda a vida',
      features: [
        'Tudo dos planos anteriores',
        'Acesso vitalício garantido',
        '4 sessões de mentoria individual',
        'Conteúdo exclusivo mensal',
        'Prioridade no suporte',
        'Acesso a novos cursos',
        'Comunidade VIP exclusiva'
      ],
      link: 'https://pay.kiwify.com.br/1GbiFej',
      badge: 'Exclusivo',
      color: 'gold'
    }
  ];

  // Não renderizar até que o cliente esteja hidratado
  if (!isClient || !isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
        {!showPlans ? (
          // Trial Screen
          <div className="p-8 text-center">
            <div className="flex justify-between items-start mb-6">
              <div></div>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-2xl p-8 mb-8">
              <h2 className="text-3xl font-bold mb-4">🎉 Bem-vinda à Comunidade!</h2>
              <p className="text-xl mb-6 text-pink-100">
                Você tem acesso GRATUITO por 10 minutos para explorar tudo!
              </p>
              
              <div className="bg-white/20 rounded-xl p-6 mb-6">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Clock className="w-8 h-8 text-white" />
                  <span className="text-4xl font-bold">{formatTime(timeLeft)}</span>
                </div>
                <p className="text-pink-100">Tempo restante do seu trial gratuito</p>
              </div>

              <div className="grid md:grid-cols-3 gap-4 text-left">
                <div className="bg-white/10 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">✨ Explore Livremente</h3>
                  <p className="text-sm text-pink-100">Acesse todos os testes, comunidade e conteúdos</p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">🤝 Conecte-se</h3>
                  <p className="text-sm text-pink-100">Interaja com outras mulheres da comunidade</p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">📚 Aprenda</h3>
                  <p className="text-sm text-pink-100">Faça os testes de autoconhecimento</p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
              <p className="text-yellow-800 font-medium">
                💡 <strong>Dica:</strong> Quando o tempo acabar, você verá nossos planos especiais com descontos exclusivos!
              </p>
            </div>

            <Button
              onClick={onClose}
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-3 text-lg"
            >
              Começar Minha Experiência Gratuita
            </Button>
          </div>
        ) : (
          // Plans Screen
          <div className="p-8">
            <div className="flex justify-between items-start mb-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-2">Escolha Seu Plano</h2>
                <p className="text-gray-600">Continue sua jornada de transformação conosco</p>
              </div>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="bg-gradient-to-r from-pink-50 to-purple-50 border border-pink-200 rounded-lg p-6 mb-8 text-center">
              <h3 className="text-xl font-bold text-pink-800 mb-2">🎯 Seu Trial Gratuito Terminou!</h3>
              <p className="text-gray-700 mb-4">
                Esperamos que tenha gostado da experiência. Agora é hora de continuar sua transformação com um de nossos planos:
              </p>
              <div className="flex justify-center items-center gap-2 text-pink-600">
                <Star className="w-5 h-5 fill-current" />
                <span className="font-medium">Oferta especial válida apenas hoje!</span>
                <Star className="w-5 h-5 fill-current" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {plans.map((plan, index) => (
                <Card 
                  key={plan.name} 
                  className={`relative border-2 transition-all hover:shadow-lg ${
                    plan.badge === 'Mais Popular' 
                      ? 'border-purple-300 shadow-lg scale-105' 
                      : plan.badge === 'Melhor Valor'
                      ? 'border-blue-300'
                      : plan.badge === 'Exclusivo'
                      ? 'border-yellow-300'
                      : 'border-pink-200'
                  }`}
                >
                  {plan.badge && (
                    <div className={`absolute -top-3 left-1/2 transform -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold text-white ${
                      plan.badge === 'Mais Popular' 
                        ? 'bg-purple-500' 
                        : plan.badge === 'Melhor Valor'
                        ? 'bg-blue-500'
                        : 'bg-yellow-500'
                    }`}>
                      {plan.badge}
                    </div>
                  )}
                  
                  <CardHeader className="text-center pb-4">
                    <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 ${
                      plan.color === 'pink' ? 'bg-pink-100' :
                      plan.color === 'purple' ? 'bg-purple-100' :
                      plan.color === 'blue' ? 'bg-blue-100' :
                      'bg-yellow-100'
                    }`}>
                      <Crown className={`w-8 h-8 ${
                        plan.color === 'pink' ? 'text-pink-600' :
                        plan.color === 'purple' ? 'text-purple-600' :
                        plan.color === 'blue' ? 'text-blue-600' :
                        'text-yellow-600'
                      }`} />
                    </div>
                    <CardTitle className="text-xl mb-2">{plan.name}</CardTitle>
                    <div className="mb-2">
                      <span className="text-3xl font-bold text-gray-800">{plan.price}</span>
                      <span className="text-gray-600">{plan.period}</span>
                    </div>
                    <p className="text-sm text-gray-600">{plan.description}</p>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button
                      className={`w-full font-semibold ${
                        plan.color === 'pink' ? 'bg-pink-600 hover:bg-pink-700' :
                        plan.color === 'purple' ? 'bg-purple-600 hover:bg-purple-700' :
                        plan.color === 'blue' ? 'bg-blue-600 hover:bg-blue-700' :
                        'bg-yellow-600 hover:bg-yellow-700'
                      }`}
                      onClick={() => window.open(plan.link, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Escolher {plan.name}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 text-center">
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="font-bold text-green-800 mb-2">🔒 Garantia de 7 Dias</h3>
                <p className="text-green-700 mb-4">
                  Se não ficar 100% satisfeita, devolvemos seu dinheiro sem perguntas!
                </p>
                <div className="flex justify-center items-center gap-6 text-sm text-green-600">
                  <span>✅ Pagamento Seguro</span>
                  <span>✅ Acesso Imediato</span>
                  <span>✅ Suporte 24/7</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}