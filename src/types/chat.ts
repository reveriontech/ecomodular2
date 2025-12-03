export const MessageRole = {
  USER: 'user',
  MODEL: 'model',
  SYSTEM: 'system',
} as const;

export type MessageRole = typeof MessageRole[keyof typeof MessageRole];

export interface Message {
  id: string;
  role: MessageRole;
  content: string;
}

