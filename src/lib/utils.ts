import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Função para formatar tempo relativo (ex: "2h atrás", "3 dias atrás")
export function formatTimeAgo(date: Date): string {
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);
  
  if (diffInSeconds < 60) return 'agora';
  if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}min`;
  if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}h`;
  if (diffInSeconds < 604800) return `${Math.floor(diffInSeconds / 86400)}d`;
  
  return date.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });
}

// Função para truncar texto
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + '...';
}

// Função para validar email
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Função para gerar ID único simples
export function generateId(): string {
  return Math.random().toString(36).substr(2, 9);
}

// Função para capitalizar primeira letra
export function capitalize(text: string): string {
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}

// Função para formatar nome (primeira letra de cada palavra maiúscula)
export function formatName(name: string): string {
  return name
    .split(' ')
    .map(word => capitalize(word))
    .join(' ');
}

// Função para remover acentos
export function removeAccents(text: string): string {
  return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

// Função para criar slug a partir de texto
export function createSlug(text: string): string {
  return removeAccents(text)
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

// Função para validar força da senha
export function validatePasswordStrength(password: string): {
  isValid: boolean;
  score: number;
  feedback: string[];
} {
  const feedback: string[] = [];
  let score = 0;

  if (password.length >= 8) {
    score += 1;
  } else {
    feedback.push('Use pelo menos 8 caracteres');
  }

  if (/[A-Z]/.test(password)) {
    score += 1;
  } else {
    feedback.push('Inclua pelo menos uma letra maiúscula');
  }

  if (/[a-z]/.test(password)) {
    score += 1;
  } else {
    feedback.push('Inclua pelo menos uma letra minúscula');
  }

  if (/\d/.test(password)) {
    score += 1;
  } else {
    feedback.push('Inclua pelo menos um número');
  }

  if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    score += 1;
  } else {
    feedback.push('Inclua pelo menos um caractere especial');
  }

  return {
    isValid: score >= 4,
    score,
    feedback
  };
}

// Função para detectar conteúdo inadequado (básico)
export function detectInappropriateContent(text: string): boolean {
  const inappropriateWords = [
    // Adicione palavras inadequadas conforme necessário
    'spam', 'scam', 'fake'
  ];
  
  const lowerText = text.toLowerCase();
  return inappropriateWords.some(word => lowerText.includes(word));
}

// Função para sanitizar texto (remover HTML, scripts, etc.)
export function sanitizeText(text: string): string {
  return text
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/<[^>]*>/g, '')
    .trim();
}

// Função para formatar número de curtidas/comentários
export function formatCount(count: number): string {
  if (count < 1000) return count.toString();
  if (count < 1000000) return (count / 1000).toFixed(1).replace('.0', '') + 'k';
  return (count / 1000000).toFixed(1).replace('.0', '') + 'M';
}

// Função para calcular progresso em porcentagem
export function calculateProgress(completed: number, total: number): number {
  if (total === 0) return 0;
  return Math.round((completed / total) * 100);
}

// Função para obter cor baseada na categoria
export function getCategoryColor(category: string): string {
  const colors: Record<string, string> = {
    'purpose': 'bg-purple-100 text-purple-800 border-purple-200',
    'mental-health': 'bg-green-100 text-green-800 border-green-200',
    'motherhood': 'bg-pink-100 text-pink-800 border-pink-200',
    'self-esteem': 'bg-blue-100 text-blue-800 border-blue-200',
    'relationships': 'bg-yellow-100 text-yellow-800 border-yellow-200',
    'forgiveness': 'bg-indigo-100 text-indigo-800 border-indigo-200',
    'faith': 'bg-orange-100 text-orange-800 border-orange-200',
    'career': 'bg-teal-100 text-teal-800 border-teal-200',
    'selfcare': 'bg-rose-100 text-rose-800 border-rose-200',
    'healing': 'bg-emerald-100 text-emerald-800 border-emerald-200'
  };
  
  return colors[category] || 'bg-gray-100 text-gray-800 border-gray-200';
}

// Função para obter gradiente baseado no temperamento
export function getTemperamentGradient(temperament: string): string {
  const gradients: Record<string, string> = {
    'sanguineo': 'from-yellow-400 to-orange-500',
    'colerico': 'from-red-400 to-pink-500',
    'melancolico': 'from-blue-400 to-purple-500',
    'fleumatico': 'from-green-400 to-teal-500'
  };
  
  return gradients[temperament] || 'from-gray-400 to-gray-500';
}

// Função para debounce (útil para busca)
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

// Função para throttle (útil para scroll events)
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;
  
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

// Função para copiar texto para clipboard
export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (err) {
    // Fallback para navegadores mais antigos
    const textArea = document.createElement('textarea');
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
      document.execCommand('copy');
      document.body.removeChild(textArea);
      return true;
    } catch (err) {
      document.body.removeChild(textArea);
      return false;
    }
  }
}

// Função para detectar dispositivo móvel
export function isMobile(): boolean {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
}

// Função para formatar data brasileira
export function formatDateBR(date: Date): string {
  return date.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });
}

// Função para formatar data e hora brasileira
export function formatDateTimeBR(date: Date): string {
  return date.toLocaleString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
}

// Função para obter saudação baseada no horário
export function getGreeting(): string {
  const hour = new Date().getHours();
  
  if (hour < 12) return 'Bom dia';
  if (hour < 18) return 'Boa tarde';
  return 'Boa noite';
}

// Função para randomizar array
export function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Função para obter item aleatório de array
export function getRandomItem<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}