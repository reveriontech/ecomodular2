import React from 'react';
import { User, Bot, Send, X } from 'lucide-react';

export const UserIcon: React.FC<{ className?: string }> = ({ className }) => (
  <User className={className} size={20} strokeWidth={2} />
);

export const BotIcon: React.FC<{ className?: string }> = ({ className }) => (
  <Bot className={className} size={20} strokeWidth={2} />
);

export const SendIcon: React.FC<{ className?: string }> = ({ className }) => (
  <Send className={className} size={24} strokeWidth={2} />
);

export const CloseIcon: React.FC<{ className?: string }> = ({ className }) => (
  <X className={className} size={24} strokeWidth={2} />
);

