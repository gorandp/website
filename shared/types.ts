// Shared types for frontend and backend
export interface User {
  id: number;
  name: string;
  email: string;
  created_at: string;
}

export interface Post {
  id: number;
  title: string;
  content: string;
  user_id: number;
  created_at: string;
}