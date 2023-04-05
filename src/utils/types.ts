export interface Message {
  role: "user" | "system" | "assistant";
  content: string;
}

export interface Template {
  id: number;
  title: string;
  description: string;
  messages: Message[];
}
