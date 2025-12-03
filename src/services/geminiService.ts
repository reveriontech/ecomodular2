import { GoogleGenAI, Chat } from "@google/genai";
import { SYSTEM_INSTRUCTIONS } from '../constants/chat';

let ai: GoogleGenAI;

const getGenAIInstance = (): GoogleGenAI => {
  if (!ai) {
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("VITE_GEMINI_API_KEY environment variable not set");
    }
    ai = new GoogleGenAI({ apiKey });
  }
  return ai;
};

export const createChatSession = (): Chat => {
  const genAI = getGenAIInstance();
  return genAI.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: JSON.stringify(SYSTEM_INSTRUCTIONS),
    },
  });
};

