'use client';

import { useState, useEffect } from 'react';
import { Heart, Users, BookOpen, MessageCircle, Calendar, User, Home, Search, Plus, Bell, Settings, UserCheck, Bot } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import MentorPage from '@/components/custom/MentorPage';
import TrialPopup from '@/components/custom/TrialPopup';
import InstallPopup from '@/components/custom/InstallPopup';
import TemperamentTest from '@/components/custom/TemperamentTest';
import EmotionalJourneyTest from '@/components/custom/EmotionalJourneyTest';
import LuAI from '@/components/custom/LuAI';

export default function MulheresRedefinidasApp() {
  const [activeTab, setActiveTab] = useState('home');
  const [notifications, setNotifications] = useState(3);
  const [showTrialPopup, setShowTrialPopup] = useState(false);
  const [showInstallPopup, setShowInstallPopup] = useState(false);
  const [activeTest, setActiveTest] = useState<string | null>(null);

  // Mostrar popup de trial após 3 segundos quando o app carrega
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTrialPopup(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // Mostrar popup de instalação após 10 segundos (depois do trial)
  useEffect(() => {
    const installTimer = setTimeout(() => {
      // Verificar se já foi mostrado antes
      const hasSeenInstallPopup = localStorage.getItem('hasSeenInstallPopup');
      if (!hasSeenInstallPopup) {
        setShowInstallPopup(true);
        localStorage.setItem('hasSeenInstallPopup', 'true');
      }
    }, 10000);

    return () => clearTimeout(installTimer);
  }, []);

  const dailyWord = {
    verse: "Ela é vestida de força e dignidade; sorri diante do futuro.",
    reference: "Provérbios 31:25",
    message: "Hoje, lembre-se de que você é uma mulher redefinida por Deus. Sua força vem Dele, e seu futuro está seguro em Suas mãos. Sorria, pois você é amada e escolhida!"
  };

  const weeklyChallenge = {
    title: "Semana do Autocuidado",
    description: "Dedique tempo para cuidar de si mesma esta semana",
    tasks: [
      { id: 1, task: "Ore por 15 minutos", completed: true },
      { id: 2, task: "Faça uma caminhada", completed: true },
      { id: 3, task: "Leia um capítulo da Bíblia", completed: false },
      { id: 4, task: "Pratique gratidão", completed: false },
      { id: 5, task: "Conecte-se com uma amiga", completed: false }
    ]
  };

  const communityPosts = [
    {
      id: 1,
      author: "Ana Silva",
      time: "2h",
      content: "Hoje acordei com o coração cheio de gratidão! Deus tem sido tão fiel em minha vida. 🙏✨",
      likes: 24,
      comments: 8,
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      author: "Maria Santos",
      time: "4h",
      content: "Compartilhando meu versículo favorito hoje: 'Tudo posso naquele que me fortalece' - Filipenses 4:13 💪❤️",
      likes: 31,
      comments: 12
    }
  ];

  const forumTopics = [
    { id: 1, title: "Superando a ansiedade com fé", replies: 23, lastActivity: "1h" },
    { id: 2, title: "Maternidade e propósito de vida", replies: 45, lastActivity: "3h" },
    { id: 3, title: "Autoestima e identidade em Cristo", replies: 18, lastActivity: "5h" }
  ];

  // Se um teste está ativo, renderizar apenas o teste
  if (activeTest === 'temperament') {
    return <TemperamentTest onBack={() => setActiveTest(null)} />;
  }

  if (activeTest === 'emotional') {
    return <EmotionalJourneyTest onBack={() => setActiveTest(null)} />;
  }

  const renderHomeContent = () => (
    <div className="space-y-6">
      {/* Palavra do Dia */}
      <Card className="bg-gradient-to-r from-pink-50 to-purple-50 border-pink-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-pink-800">
            <Heart className="w-5 h-5" />
            Palavra do Dia
          </CardTitle>
        </CardHeader>
        <CardContent>
          <blockquote className="text-lg font-medium text-gray-800 mb-2">
            "{dailyWord.verse}"
          </blockquote>
          <p className="text-sm text-pink-600 mb-3">{dailyWord.reference}</p>
          <p className="text-gray-700">{dailyWord.message}</p>
        </CardContent>
      </Card>

      {/* Desafio Semanal */}
      <Card className="border-purple-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-purple-800">
            <Calendar className="w-5 h-5" />
            {weeklyChallenge.title}
          </CardTitle>
          <p className="text-gray-600">{weeklyChallenge.description}</p>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {weeklyChallenge.tasks.map((task) => (
              <div key={task.id} className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={task.completed}
                  className="w-4 h-4 text-purple-600 rounded"
                  readOnly
                />
                <span className={task.completed ? 'line-through text-gray-500' : 'text-gray-800'}>
                  {task.task}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-4">
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-purple-600 h-2 rounded-full" style={{ width: '40%' }}></div>
            </div>
            <p className="text-sm text-gray-600 mt-1">2 de 5 concluídas</p>
          </div>
        </CardContent>
      </Card>

      {/* Testes Rápidos */}
      <Card className="border-blue-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-blue-800">
            <BookOpen className="w-5 h-5" />
            Autoconhecimento
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Button 
              variant="outline" 
              className="h-auto p-4 flex flex-col items-start hover:bg-blue-50"
              onClick={() => setActiveTest('temperament')}
            >
              <span className="font-medium">Teste de Temperamento</span>
              <span className="text-sm text-gray-600">Descubra seu perfil</span>
            </Button>
            <Button 
              variant="outline" 
              className="h-auto p-4 flex flex-col items-start hover:bg-green-50"
              onClick={() => setActiveTest('emotional')}
            >
              <span className="font-medium">Jornada Emocional</span>
              <span className="text-sm text-gray-600">Autoconhecimento</span>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Feed da Comunidade Preview */}
      <Card className="border-green-200">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span className="flex items-center gap-2 text-green-800">
              <Users className="w-5 h-5" />
              Comunidade
            </span>
            <Button variant="ghost" size="sm" onClick={() => setActiveTab('community')}>
              Ver tudo
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {communityPosts.slice(0, 2).map((post) => (
              <div key={post.id} className="border-b pb-4 last:border-b-0">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 bg-pink-200 rounded-full flex items-center justify-center">
                    <User className="w-4 h-4 text-pink-600" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">{post.author}</p>
                    <p className="text-xs text-gray-500">{post.time}</p>
                  </div>
                </div>
                <p className="text-gray-800 mb-2">{post.content}</p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <Heart className="w-4 h-4" />
                    {post.likes}
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle className="w-4 h-4" />
                    {post.comments}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderCommunityContent = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-800">Comunidade</h2>
        <Button className="bg-pink-600 hover:bg-pink-700">
          <Plus className="w-4 h-4 mr-2" />
          Nova Postagem
        </Button>
      </div>

      <div className="space-y-6">
        {communityPosts.map((post) => (
          <Card key={post.id} className="border-pink-100">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-pink-200 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-pink-600" />
                </div>
                <div>
                  <p className="font-medium">{post.author}</p>
                  <p className="text-sm text-gray-500">{post.time}</p>
                </div>
              </div>
              
              <p className="text-gray-800 mb-4">{post.content}</p>
              
              {post.image && (
                <img 
                  src={post.image} 
                  alt="Post" 
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
              )}
              
              <div className="flex items-center justify-between pt-4 border-t">
                <div className="flex items-center gap-6">
                  <button className="flex items-center gap-2 text-pink-600 hover:text-pink-700">
                    <Heart className="w-5 h-5" />
                    <span>{post.likes}</span>
                  </button>
                  <button className="flex items-center gap-2 text-gray-600 hover:text-gray-700">
                    <MessageCircle className="w-5 h-5" />
                    <span>{post.comments}</span>
                  </button>
                </div>
                <Button variant="ghost" size="sm">
                  Compartilhar
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderForumContent = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-800">Fórum do Dia</h2>
        <Button className="bg-purple-600 hover:bg-purple-700">
          <Plus className="w-4 h-4 mr-2" />
          Novo Tópico
        </Button>
      </div>

      <Card className="bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200">
        <CardContent className="p-6">
          <h3 className="font-bold text-purple-800 mb-2">Tópico do Dia</h3>
          <p className="text-gray-700 mb-4">
            "Como encontrar propósito em meio às dificuldades da vida?"
          </p>
          <p className="text-sm text-purple-600">
            Compartilhe sua experiência e inspire outras mulheres!
          </p>
        </CardContent>
      </Card>

      <div className="space-y-4">
        {forumTopics.map((topic) => (
          <Card key={topic.id} className="hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="font-medium text-gray-800 mb-1">{topic.title}</h3>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span>{topic.replies} respostas</span>
                    <span>Última atividade: {topic.lastActivity}</span>
                  </div>
                </div>
                <Badge variant="secondary">{topic.replies}</Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderTestsContent = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Testes de Autoconhecimento</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="border-blue-200 hover:shadow-lg transition-shadow cursor-pointer">
          <CardHeader>
            <CardTitle className="text-blue-800">Teste de Temperamentos</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              Descubra se você é Melancólica, Sanguínea, Colérica ou Fleumática
            </p>
            <div className="space-y-2 mb-4">
              <div className="flex items-center justify-between text-sm">
                <span>Progresso</span>
                <span>0/5</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '0%' }}></div>
              </div>
            </div>
            <Button 
              className="w-full bg-blue-600 hover:bg-blue-700"
              onClick={() => setActiveTest('temperament')}
            >
              Iniciar Teste
            </Button>
          </CardContent>
        </Card>

        <Card className="border-green-200 hover:shadow-lg transition-shadow cursor-pointer">
          <CardHeader>
            <CardTitle className="text-green-800">Jornada Emocional</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">
              Identifique padrões emocionais e encontre caminhos para a cura
            </p>
            <div className="space-y-2 mb-4">
              <div className="flex items-center justify-between text-sm">
                <span>Progresso</span>
                <span>0/5</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-600 h-2 rounded-full" style={{ width: '0%' }}></div>
              </div>
            </div>
            <Button 
              className="w-full bg-green-600 hover:bg-green-700"
              onClick={() => setActiveTest('emotional')}
            >
              Iniciar Jornada
            </Button>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-gradient-to-r from-pink-50 to-purple-50 border-pink-200">
        <CardContent className="p-6">
          <h3 className="font-bold text-pink-800 mb-2">💡 Sobre os Testes</h3>
          <p className="text-gray-700 mb-4">
            Nossos testes foram desenvolvidos com base em princípios cristãos e psicologia positiva. 
            Eles são ferramentas de autoconhecimento que ajudam você a entender melhor como Deus a criou.
          </p>
          <p className="text-sm text-pink-600">
            ✨ Todos os resultados incluem orientações bíblicas e mensagens de encorajamento
          </p>
        </CardContent>
      </Card>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return renderHomeContent();
      case 'community':
        return renderCommunityContent();
      case 'forum':
        return renderForumContent();
      case 'tests':
        return renderTestsContent();
      case 'mentor':
        return <MentorPage />;
      case 'lu-ai':
        return <LuAI />;
      default:
        return renderHomeContent();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-pink-100 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-800">Mulheres Redefinidas</h1>
                <p className="text-sm text-gray-600">por Deus</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="relative">
                <Bell className="w-6 h-6 text-gray-600" />
                {notifications > 0 && (
                  <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {notifications}
                  </span>
                )}
              </div>
              <div className="w-8 h-8 bg-pink-200 rounded-full flex items-center justify-center">
                <User className="w-5 h-5 text-pink-600" />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-6 pb-20">
        {renderContent()}
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-pink-100 shadow-lg">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center justify-around py-2">
            <button
              onClick={() => setActiveTab('home')}
              className={`flex flex-col items-center gap-1 p-2 rounded-lg transition-colors ${
                activeTab === 'home' 
                  ? 'text-pink-600 bg-pink-50' 
                  : 'text-gray-600 hover:text-pink-600'
              }`}
            >
              <Home className="w-5 h-5" />
              <span className="text-xs">Início</span>
            </button>
            
            <button
              onClick={() => setActiveTab('tests')}
              className={`flex flex-col items-center gap-1 p-2 rounded-lg transition-colors ${
                activeTab === 'tests' 
                  ? 'text-pink-600 bg-pink-50' 
                  : 'text-gray-600 hover:text-pink-600'
              }`}
            >
              <BookOpen className="w-5 h-5" />
              <span className="text-xs">Testes</span>
            </button>
            
            <button
              onClick={() => setActiveTab('lu-ai')}
              className={`flex flex-col items-center gap-1 p-2 rounded-lg transition-colors ${
                activeTab === 'lu-ai' 
                  ? 'text-pink-600 bg-pink-50' 
                  : 'text-gray-600 hover:text-pink-600'
              }`}
            >
              <Bot className="w-5 h-5" />
              <span className="text-xs">LÙ IA</span>
            </button>
            
            <button
              onClick={() => setActiveTab('community')}
              className={`flex flex-col items-center gap-1 p-2 rounded-lg transition-colors ${
                activeTab === 'community' 
                  ? 'text-pink-600 bg-pink-50' 
                  : 'text-gray-600 hover:text-pink-600'
              }`}
            >
              <Users className="w-5 h-5" />
              <span className="text-xs">Comunidade</span>
            </button>
            
            <button
              onClick={() => setActiveTab('mentor')}
              className={`flex flex-col items-center gap-1 p-2 rounded-lg transition-colors ${
                activeTab === 'mentor' 
                  ? 'text-pink-600 bg-pink-50' 
                  : 'text-gray-600 hover:text-pink-600'
              }`}
            >
              <UserCheck className="w-5 h-5" />
              <span className="text-xs">Mentora</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Trial Popup */}
      <TrialPopup 
        isOpen={showTrialPopup} 
        onClose={() => setShowTrialPopup(false)} 
      />

      {/* Install Popup */}
      <InstallPopup 
        isOpen={showInstallPopup} 
        onClose={() => setShowInstallPopup(false)} 
      />
    </div>
  );
}