'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Home, 
  User, 
  BookOpen, 
  MessageCircle, 
  Bell, 
  Heart, 
  Star, 
  Calendar,
  Play,
  CheckCircle,
  Clock,
  Award,
  Sparkles,
  Bot
} from 'lucide-react';
import LuAI from '@/components/custom/LuAI';
import { mentorInfo } from '@/lib/data';

// Componente de Teste de Temperamento
function TemperamentTest({ onBack }: { onBack: () => void }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);

  const questions = [
    "Você prefere atividades em grupo ou sozinha?",
    "Como você lida com mudanças inesperadas?",
    "Qual sua reação em situações de conflito?",
    "Como você toma decisões importantes?",
    "Qual ambiente te deixa mais confortável?"
  ];

  const options = [
    ["Em grupo sempre", "Depende da situação", "Prefiro sozinha"],
    ["Me adapto facilmente", "Preciso de tempo", "Fico ansiosa"],
    ["Enfrento diretamente", "Busco mediação", "Evito conflitos"],
    ["Rapidamente", "Analiso bastante", "Peço conselhos"],
    ["Lugares movimentados", "Ambientes equilibrados", "Locais tranquilos"]
  ];

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...answers, answerIndex];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const getResult = () => {
    const sum = answers.reduce((a, b) => a + b, 0);
    if (sum <= 5) return { type: "Extrovertida", desc: "Você é energizada pelo contato social!" };
    if (sum <= 10) return { type: "Equilibrada", desc: "Você tem um bom equilíbrio entre social e introversão!" };
    return { type: "Introvertida", desc: "Você recarrega energias em momentos de tranquilidade!" };
  };

  if (showResult) {
    const result = getResult();
    return (
      <div className="max-w-2xl mx-auto p-6">
        <Card className="text-center">
          <CardHeader>
            <CardTitle className="text-2xl text-pink-600">Seu Resultado</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center mx-auto">
              <Award className="w-10 h-10 text-pink-600" />
            </div>
            <h3 className="text-xl font-bold">{result.type}</h3>
            <p className="text-gray-600">{result.desc}</p>
            <Button onClick={onBack} className="bg-pink-600 hover:bg-pink-700">
              Voltar ao Início
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <Card>
        <CardHeader>
          <CardTitle>Teste de Temperamento</CardTitle>
          <Progress value={(currentQuestion + 1) / questions.length * 100} className="w-full" />
        </CardHeader>
        <CardContent className="space-y-4">
          <h3 className="text-lg font-medium">{questions[currentQuestion]}</h3>
          <div className="space-y-2">
            {options[currentQuestion].map((option, index) => (
              <Button
                key={index}
                variant="outline"
                className="w-full text-left justify-start"
                onClick={() => handleAnswer(index)}
              >
                {option}
              </Button>
            ))}
          </div>
          <Button variant="ghost" onClick={onBack} className="mt-4">
            ← Voltar
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

// Componente de Teste de Jornada Emocional
function EmotionalJourneyTest({ onBack }: { onBack: () => void }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [responses, setResponses] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);

  const steps = [
    "Como você se sente hoje?",
    "Qual sua maior preocupação atual?",
    "O que te traz mais alegria?",
    "Como você cuida da sua saúde mental?",
    "Qual seu objetivo para os próximos meses?"
  ];

  const handleResponse = (response: string) => {
    const newResponses = [...responses, response];
    setResponses(newResponses);

    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResult(true);
    }
  };

  if (showResult) {
    return (
      <div className="max-w-2xl mx-auto p-6">
        <Card className="text-center">
          <CardHeader>
            <CardTitle className="text-2xl text-pink-600">Sua Jornada Mapeada</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center mx-auto">
              <Heart className="w-10 h-10 text-pink-600" />
            </div>
            <h3 className="text-xl font-bold">Jornada de Autoconhecimento</h3>
            <p className="text-gray-600">
              Suas respostas mostram uma mulher em busca de crescimento e equilíbrio. 
              Continue essa jornada de autodescoberta!
            </p>
            <div className="bg-pink-50 p-4 rounded-lg">
              <h4 className="font-medium text-pink-800 mb-2">Próximos Passos Recomendados:</h4>
              <ul className="text-sm text-pink-700 space-y-1">
                <li>• Pratique 10 minutos de reflexão diária</li>
                <li>• Mantenha um diário de gratidão</li>
                <li>• Busque momentos de autocuidado</li>
                <li>• Conecte-se com sua espiritualidade</li>
              </ul>
            </div>
            <Button onClick={onBack} className="bg-pink-600 hover:bg-pink-700">
              Voltar ao Início
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <Card>
        <CardHeader>
          <CardTitle>Jornada Emocional</CardTitle>
          <Progress value={(currentStep + 1) / steps.length * 100} className="w-full" />
        </CardHeader>
        <CardContent className="space-y-4">
          <h3 className="text-lg font-medium">{steps[currentStep]}</h3>
          <textarea
            className="w-full p-3 border rounded-lg resize-none h-32"
            placeholder="Compartilhe seus pensamentos..."
            onChange={(e) => setCurrentStep === steps.length - 1 ? null : null}
          />
          <div className="flex gap-2">
            <Button 
              onClick={() => handleResponse("Resposta registrada")}
              className="bg-pink-600 hover:bg-pink-700"
            >
              Próximo
            </Button>
            <Button variant="ghost" onClick={onBack}>
              ← Voltar
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default function MulheresRedefinidasApp() {
  const [activeTab, setActiveTab] = useState('home');
  const [notifications, setNotifications] = useState(3);
  const [activeTest, setActiveTest] = useState<string | null>(null);

  // Se um teste está ativo, renderizar apenas o teste
  if (activeTest === 'temperament') {
    return <TemperamentTest onBack={() => setActiveTest(null)} />;
  }

  if (activeTest === 'emotional') {
    return <EmotionalJourneyTest onBack={() => setActiveTest(null)} />;
  }

  // Se a aba LÙ IA está ativa, renderizar apenas a IA
  if (activeTab === 'lu-ai') {
    return <LuAI />;
  }

  const renderTabContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <div className="space-y-6">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white p-8 rounded-2xl">
              <h1 className="text-3xl font-bold mb-4">Mulheres Redefinidas</h1>
              <p className="text-lg opacity-90 mb-6">
                Descubra seu valor, propósito e identidade em Cristo. Uma jornada de transformação e crescimento espiritual.
              </p>
              <div className="flex gap-4">
                <Button 
                  onClick={() => setActiveTest('temperament')}
                  className="bg-white text-pink-600 hover:bg-gray-100"
                >
                  <Play className="w-4 h-4 mr-2" />
                  Teste de Temperamento
                </Button>
                <Button 
                  onClick={() => setActiveTest('emotional')}
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-pink-600"
                >
                  <Heart className="w-4 h-4 mr-2" />
                  Jornada Emocional
                </Button>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="w-6 h-6 text-pink-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">5,000+</h3>
                  <p className="text-gray-600">Mulheres Atendidas</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">15+</h3>
                  <p className="text-gray-600">Anos de Experiência</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">PhD</h3>
                  <p className="text-gray-600">Psicologia Clínica</p>
                </CardContent>
              </Card>
            </div>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-pink-600" />
                  Ações Rápidas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Button 
                    onClick={() => setActiveTest('temperament')}
                    variant="outline" 
                    className="h-auto p-4 justify-start"
                  >
                    <div className="text-left">
                      <div className="font-medium">Descobrir Temperamento</div>
                      <div className="text-sm text-gray-500">Entenda sua personalidade única</div>
                    </div>
                  </Button>
                  
                  <Button 
                    onClick={() => setActiveTest('emotional')}
                    variant="outline" 
                    className="h-auto p-4 justify-start"
                  >
                    <div className="text-left">
                      <div className="font-medium">Jornada Emocional</div>
                      <div className="text-sm text-gray-500">Mapeie seus sentimentos</div>
                    </div>
                  </Button>
                  
                  <Button 
                    onClick={() => setActiveTab('lu-ai')}
                    variant="outline" 
                    className="h-auto p-4 justify-start"
                  >
                    <div className="text-left">
                      <div className="font-medium">Conversar com LÙ</div>
                      <div className="text-sm text-gray-500">IA para apoio espiritual</div>
                    </div>
                  </Button>
                  
                  <Button 
                    onClick={() => setActiveTab('mentor')}
                    variant="outline" 
                    className="h-auto p-4 justify-start"
                  >
                    <div className="text-left">
                      <div className="font-medium">Conhecer Mentora</div>
                      <div className="text-sm text-gray-500">Saiba mais sobre sua guia</div>
                    </div>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case 'mentor':
        return (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-center">Sua Mentora</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-6">
                <div className="w-32 h-32 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full flex items-center justify-center mx-auto">
                  <User className="w-16 h-16 text-white" />
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">{mentorInfo.name}</h2>
                  <p className="text-lg text-pink-600 font-medium">{mentorInfo.title}</p>
                </div>
                
                <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
                  {mentorInfo.bio}
                </p>
                
                <div className="bg-pink-50 p-6 rounded-lg">
                  <h3 className="font-bold text-gray-800 mb-4">Credenciais</h3>
                  <div className="space-y-2">
                    {mentorInfo.credentials.map((credential, index) => (
                      <div key={index} className="flex items-center justify-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span className="text-gray-700 text-sm">{credential}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="font-bold text-gray-800 mb-4">Especialidades</h3>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {mentorInfo.specialties.map((specialty, index) => (
                      <Badge key={index} variant="secondary" className="bg-purple-100 text-purple-800">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h3 className="font-bold text-gray-800">Entre em Contato</h3>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Button 
                      className="bg-pink-600 hover:bg-pink-700"
                      onClick={() => window.open(mentorInfo.mentoringLinks.individual, '_blank')}
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Mentoria Individual
                    </Button>
                    <Button 
                      variant="outline"
                      onClick={() => window.open(mentorInfo.mentoringLinks.monthly, '_blank')}
                    >
                      <Calendar className="w-4 h-4 mr-2" />
                      Planos Mensais
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Depoimentos */}
            <Card>
              <CardHeader>
                <CardTitle className="text-center">Depoimentos</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {mentorInfo.testimonials.map((testimonial, index) => (
                    <div key={index} className="bg-pink-50 p-4 rounded-lg">
                      <div className="flex items-center mb-2">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <p className="text-sm text-gray-700 mb-2">"{testimonial.text}"</p>
                      <p className="text-xs font-medium text-pink-600">- {testimonial.name}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case 'resources':
        return (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Recursos Disponíveis</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 border rounded-lg">
                    <BookOpen className="w-8 h-8 text-pink-600 mb-3" />
                    <h3 className="font-bold mb-2">Estudos Bíblicos</h3>
                    <p className="text-gray-600 text-sm">Estudos profundos sobre identidade feminina na Bíblia</p>
                  </div>
                  
                  <div className="p-4 border rounded-lg">
                    <Heart className="w-8 h-8 text-pink-600 mb-3" />
                    <h3 className="font-bold mb-2">Autocuidado Cristão</h3>
                    <p className="text-gray-600 text-sm">Práticas de cuidado pessoal com base bíblica</p>
                  </div>
                  
                  <div className="p-4 border rounded-lg">
                    <Star className="w-8 h-8 text-pink-600 mb-3" />
                    <h3 className="font-bold mb-2">Propósito de Vida</h3>
                    <p className="text-gray-600 text-sm">Descubra seu chamado único em Cristo</p>
                  </div>
                  
                  <div className="p-4 border rounded-lg">
                    <Award className="w-8 h-8 text-pink-600 mb-3" />
                    <h3 className="font-bold mb-2">Crescimento Pessoal</h3>
                    <p className="text-gray-600 text-sm">Ferramentas para desenvolvimento contínuo</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-xl font-bold text-gray-800">Mulheres Redefinidas</h1>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="relative">
                <Bell className="w-6 h-6 text-gray-600" />
                {notifications > 0 && (
                  <Badge className="absolute -top-2 -right-2 bg-pink-600 text-white text-xs px-1.5">
                    {notifications}
                  </Badge>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        {renderTabContent()}
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-around py-2">
            {[
              { id: 'home', icon: Home, label: 'Início' },
              { id: 'mentor', icon: User, label: 'Mentora' },
              { id: 'resources', icon: BookOpen, label: 'Recursos' },
              { id: 'lu-ai', icon: Bot, label: 'LÙ IA' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex flex-col items-center py-2 px-4 rounded-lg transition-colors ${
                  activeTab === tab.id
                    ? 'text-pink-600 bg-pink-50'
                    : 'text-gray-600 hover:text-pink-600'
                }`}
              >
                <tab.icon className="w-5 h-5 mb-1" />
                <span className="text-xs font-medium">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Bottom Padding for Fixed Nav */}
      <div className="h-20"></div>
    </div>
  );
}