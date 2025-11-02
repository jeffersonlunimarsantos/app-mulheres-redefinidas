export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  bio?: string;
  joinedAt: Date;
  temperament?: 'sanguineo' | 'colerico' | 'melancolico' | 'fleumatico';
  emotionalProfile?: 'abandono' | 'rejeicao' | 'traicao' | 'injustica' | 'humilhacao' | 'equilibrio';
  preferences: {
    notifications: {
      dailyWord: boolean;
      weeklyChallenge: boolean;
      communityPosts: boolean;
      forumReplies: boolean;
      privateMessages: boolean;
    };
    privacy: {
      profileVisible: boolean;
      showTestResults: boolean;
      allowDirectMessages: boolean;
    };
  };
}

export interface DailyWord {
  id: string;
  date: string;
  verse: string;
  reference: string;
  message: string;
  author?: string;
  category: 'encouragement' | 'strength' | 'peace' | 'love' | 'faith' | 'hope';
}

export interface Challenge {
  id: string;
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
  category: 'selfcare' | 'faith' | 'relationships' | 'purpose' | 'healing';
  tasks: ChallengeTask[];
  participants: number;
  isActive: boolean;
}

export interface ChallengeTask {
  id: string;
  task: string;
  description?: string;
  completed: boolean;
  completedAt?: Date;
}

export interface CommunityPost {
  id: string;
  authorId: string;
  author: {
    name: string;
    avatar?: string;
  };
  content: string;
  image?: string;
  createdAt: Date;
  likes: number;
  comments: Comment[];
  tags: string[];
  isLiked?: boolean;
}

export interface Comment {
  id: string;
  authorId: string;
  author: {
    name: string;
    avatar?: string;
  };
  content: string;
  createdAt: Date;
  likes: number;
  replies?: Comment[];
}

export interface ForumTopic {
  id: string;
  title: string;
  content: string;
  authorId: string;
  author: {
    name: string;
    avatar?: string;
  };
  category: 'purpose' | 'mental-health' | 'motherhood' | 'self-esteem' | 'relationships' | 'forgiveness' | 'faith' | 'career';
  tags: string[];
  replies: ForumReply[];
  likes: number;
  views: number;
  createdAt: Date;
  lastActivity: Date;
  isSticky?: boolean;
  isClosed?: boolean;
}

export interface ForumReply {
  id: string;
  topicId: string;
  authorId: string;
  author: {
    name: string;
    avatar?: string;
  };
  content: string;
  createdAt: Date;
  likes: number;
  parentReplyId?: string; // Para respostas aninhadas
}

export interface PrivateMessage {
  id: string;
  senderId: string;
  receiverId: string;
  content: string;
  createdAt: Date;
  readAt?: Date;
  isRead: boolean;
}

export interface Conversation {
  id: string;
  participants: User[];
  lastMessage: PrivateMessage;
  unreadCount: number;
  updatedAt: Date;
}

export interface TestResult {
  id: string;
  userId: string;
  testType: 'temperament' | 'emotional-journey';
  result: string;
  details: Record<string, any>;
  completedAt: Date;
  isShared: boolean;
}

export interface Notification {
  id: string;
  userId: string;
  type: 'daily-word' | 'challenge-reminder' | 'community-like' | 'community-comment' | 'forum-reply' | 'private-message' | 'new-follower';
  title: string;
  message: string;
  data?: Record<string, any>;
  isRead: boolean;
  createdAt: Date;
}

export interface UserProgress {
  userId: string;
  challengesCompleted: number;
  testsCompleted: number;
  communityPostsCount: number;
  forumTopicsCount: number;
  forumRepliesCount: number;
  consecutiveDaysActive: number;
  joinedChallenges: string[];
  achievements: Achievement[];
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlockedAt: Date;
  category: 'engagement' | 'growth' | 'community' | 'faith' | 'milestone';
}

// Tipos para moderação e segurança
export interface ModerationReport {
  id: string;
  reporterId: string;
  reportedUserId?: string;
  reportedContentId: string;
  contentType: 'post' | 'comment' | 'forum-topic' | 'forum-reply' | 'private-message';
  reason: 'inappropriate' | 'spam' | 'harassment' | 'false-information' | 'other';
  description: string;
  status: 'pending' | 'reviewed' | 'resolved' | 'dismissed';
  createdAt: Date;
  reviewedAt?: Date;
  reviewedBy?: string;
}

export interface ContentFilter {
  id: string;
  type: 'word' | 'phrase' | 'pattern';
  value: string;
  action: 'block' | 'flag' | 'moderate';
  isActive: boolean;
  createdAt: Date;
}

// Tipos para analytics e insights
export interface UserEngagement {
  userId: string;
  date: Date;
  dailyWordViewed: boolean;
  challengeInteraction: boolean;
  communityPostsViewed: number;
  communityPostsLiked: number;
  communityPostsCommented: number;
  forumTopicsViewed: number;
  forumRepliesPosted: number;
  timeSpentMinutes: number;
}

export interface CommunityStats {
  totalUsers: number;
  activeUsersToday: number;
  activeUsersWeek: number;
  totalPosts: number;
  totalForumTopics: number;
  totalChallengesCompleted: number;
  averageEngagementTime: number;
  topCategories: Array<{
    category: string;
    count: number;
  }>;
}