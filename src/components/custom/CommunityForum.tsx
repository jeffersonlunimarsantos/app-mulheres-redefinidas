'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Heart, Plus, MessageCircle, Search, Filter, Bookmark } from 'lucide-react';

interface ForumPost {
  id: number;
  title: string;
  author: string;
  content: string;
  category: string;
  replies: number;
  likes: number;
  timeAgo: string;
  isSticky?: boolean;
  tags: string[];
}

const forumPosts: ForumPost[] = [
  {
    id: 1,
    title: "Como encontrar propósito em meio às dificuldades da vida?",
    author: "Moderadora Ana",
    content: "Hoje quero conversar sobre algo que todas nós enfrentamos: encontrar nosso propósito quando a vida parece difícil. Como vocês têm lidado com isso?",
    category: "Propósito",
    replies: 34,
    likes: 67,
    timeAgo: "2h",
    isSticky: true,
    tags: ["propósito", "dificuldades", "fé"]
  },
  {
    id: 2,
    title: "Superando a ansiedade com fé - minha jornada",
    author: "Maria Silva",
    content: "Quero compartilhar como Deus tem me ajudado a superar crises de ansiedade. Talvez minha experiência possa ajudar alguém...",
    category: "Saúde Mental",
    replies: 28,
    likes: 45,
    timeAgo: "4h",
    tags: ["ansiedade", "fé", "testemunho"]
  },
  {
    id: 3,
    title: "Maternidade e carreira: como equilibrar?",
    author: "Juliana Santos",
    content: "Mães, como vocês conseguem equilibrar a maternidade com os sonhos profissionais? Às vezes me sinto dividida...",
    category: "Maternidade",
    replies: 52,
    likes: 38,
    timeAgo: "6h",
    tags: ["maternidade", "carreira", "equilíbrio"]
  },
  {
    id: 4,
    title: "Autoestima e identidade em Cristo",
    author: "Priscila Lima",
    content: "Como construir uma autoestima saudável baseada no que Deus diz sobre nós? Compartilhem suas reflexões!",
    category: "Autoestima",
    replies: 19,
    likes: 31,
    timeAgo: "8h",
    tags: ["autoestima", "identidade", "cristo"]
  },
  {
    id: 5,
    title: "Perdão: como perdoar quem nos machucou profundamente?",
    author: "Camila Rocha",
    content: "Estou lutando para perdoar alguém que me magoou muito. Como vocês lidam com o perdão nas situações mais difíceis?",
    category: "Perdão",
    replies: 41,
    likes: 29,
    timeAgo: "12h",
    tags: ["perdão", "cura", "relacionamentos"]
  }
];

const categories = [
  "Todos",
  "Propósito",
  "Saúde Mental", 
  "Maternidade",
  "Autoestima",
  "Relacionamentos",
  "Perdão",
  "Fé",
  "Carreira"
];

export default function CommunityForum() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [searchTerm, setSearchTerm] = useState("");
  const [showNewPostForm, setShowNewPostForm] = useState(false);
  const [newPost, setNewPost] = useState({
    title: "",
    content: "",
    category: "Propósito",
    tags: ""
  });

  const filteredPosts = forumPosts.filter(post => {
    const matchesCategory = selectedCategory === "Todos" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const handleNewPost = () => {
    // Aqui seria implementada a lógica para criar um novo post
    console.log("Novo post:", newPost);
    setShowNewPostForm(false);
    setNewPost({ title: "", content: "", category: "Propósito", tags: "" });
  };

  if (showNewPostForm) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50 p-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold text-gray-800">Criar Nova Discussão</h1>
            <Button 
              variant="outline" 
              onClick={() => setShowNewPostForm(false)}
            >
              Cancelar
            </Button>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Compartilhe sua reflexão com a comunidade</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Título da discussão
                </label>
                <Input
                  value={newPost.title}
                  onChange={(e) => setNewPost({...newPost, title: e.target.value})}
                  placeholder="Ex: Como encontrar paz em tempos difíceis?"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Categoria
                </label>
                <select 
                  className="w-full p-2 border border-gray-300 rounded-md"
                  value={newPost.category}
                  onChange={(e) => setNewPost({...newPost, category: e.target.value})}
                >
                  {categories.slice(1).map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Sua mensagem
                </label>
                <Textarea
                  value={newPost.content}
                  onChange={(e) => setNewPost({...newPost, content: e.target.value})}
                  placeholder="Compartilhe sua experiência, dúvida ou reflexão..."
                  rows={6}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tags (separadas por vírgula)
                </label>
                <Input
                  value={newPost.tags}
                  onChange={(e) => setNewPost({...newPost, tags: e.target.value})}
                  placeholder="Ex: fé, esperança, testemunho"
                />
              </div>

              <div className="bg-gradient-to-r from-pink-50 to-purple-50 border border-pink-200 rounded-lg p-4">
                <h4 className="font-medium text-pink-800 mb-2">💝 Diretrizes da Comunidade</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Seja respeitosa e acolhedora com todas as participantes</li>
                  <li>• Compartilhe experiências que possam edificar outras mulheres</li>
                  <li>• Mantenha o foco em crescimento espiritual e emocional</li>
                  <li>• Evite julgamentos e ofereça apoio genuíno</li>
                </ul>
              </div>

              <div className="flex gap-4">
                <Button 
                  onClick={handleNewPost}
                  className="flex-1 bg-pink-600 hover:bg-pink-700"
                >
                  Publicar Discussão
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => setShowNewPostForm(false)}
                  className="flex-1"
                >
                  Salvar Rascunho
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Fórum da Comunidade</h1>
            <p className="text-gray-600">Espaço seguro para compartilhar e crescer juntas</p>
          </div>
          <Button 
            onClick={() => setShowNewPostForm(true)}
            className="bg-pink-600 hover:bg-pink-700"
          >
            <Plus className="w-4 h-4 mr-2" />
            Nova Discussão
          </Button>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Buscar discussões..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-gray-500" />
            <select 
              className="p-2 border border-gray-300 rounded-md bg-white"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Featured Topic */}
        <Card className="bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200 mb-6">
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-3">
              <Heart className="w-5 h-5 text-purple-600" />
              <Badge className="bg-purple-100 text-purple-800">Tópico em Destaque</Badge>
            </div>
            <h3 className="font-bold text-purple-800 mb-2">
              "Redefinindo nossa identidade através do amor de Deus"
            </h3>
            <p className="text-gray-700 mb-4">
              Esta semana, vamos refletir sobre como Deus nos vê e como isso transforma nossa 
              autoimagem. Compartilhe como você tem descoberto sua verdadeira identidade Nele!
            </p>
            <Button variant="outline" className="border-purple-300 text-purple-700 hover:bg-purple-50">
              Participar da Discussão
            </Button>
          </CardContent>
        </Card>

        {/* Forum Posts */}
        <div className="space-y-4">
          {filteredPosts.map((post) => (
            <Card key={post.id} className="hover:shadow-md transition-shadow cursor-pointer">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      {post.isSticky && (
                        <Badge className="bg-pink-100 text-pink-800 text-xs">Fixado</Badge>
                      )}
                      <Badge variant="secondary" className="text-xs">{post.category}</Badge>
                    </div>
                    <h3 className="font-semibold text-gray-800 mb-2 hover:text-pink-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                      {post.content}
                    </p>
                  </div>
                  <Bookmark className="w-4 h-4 text-gray-400 hover:text-pink-600 cursor-pointer ml-4" />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span>Por {post.author}</span>
                    <span>{post.timeAgo}</span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <Heart className="w-4 h-4" />
                      {post.likes}
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageCircle className="w-4 h-4" />
                      {post.replies}
                    </span>
                  </div>
                </div>

                {post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-3">
                    {post.tags.map((tag, index) => (
                      <span 
                        key={index}
                        className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <Card>
            <CardContent className="p-8 text-center">
              <MessageCircle className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="font-medium text-gray-800 mb-2">Nenhuma discussão encontrada</h3>
              <p className="text-gray-600 mb-4">
                Não encontramos discussões que correspondam aos seus critérios de busca.
              </p>
              <Button 
                onClick={() => setShowNewPostForm(true)}
                className="bg-pink-600 hover:bg-pink-700"
              >
                Iniciar Nova Discussão
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Community Guidelines */}
        <Card className="mt-8 bg-gradient-to-r from-pink-50 to-purple-50 border-pink-200">
          <CardContent className="p-6">
            <h3 className="font-bold text-pink-800 mb-3">🌸 Nossa Comunidade</h3>
            <p className="text-gray-700 mb-4">
              Este é um espaço sagrado onde mulheres se apoiam mutuamente em sua jornada de fé e crescimento. 
              Aqui você encontrará acolhimento, sabedoria e amor incondicional.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="text-center">
                <Heart className="w-6 h-6 text-pink-600 mx-auto mb-2" />
                <p className="font-medium">Amor</p>
                <p className="text-gray-600">Tratamos todas com amor e respeito</p>
              </div>
              <div className="text-center">
                <MessageCircle className="w-6 h-6 text-purple-600 mx-auto mb-2" />
                <p className="font-medium">Diálogo</p>
                <p className="text-gray-600">Conversas construtivas e edificantes</p>
              </div>
              <div className="text-center">
                <Bookmark className="w-6 h-6 text-pink-600 mx-auto mb-2" />
                <p className="font-medium">Crescimento</p>
                <p className="text-gray-600">Juntas em nossa jornada espiritual</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}