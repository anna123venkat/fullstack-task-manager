import axios from "axios";
import { AuthResponse, Task, TaskStats } from "../types";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

const api = axios.create({
  baseURL: API_URL,
});

// Add token to requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const authAPI = {
  register: (data: { name: string; email: string; password: string }) =>
    api.post<AuthResponse>("/auth/register", data),

  login: (data: { email: string; password: string }) =>
    api.post<AuthResponse>("/auth/login", data),

  getMe: () => api.get("/auth/me"),
};

export const taskAPI = {
  getTasks: () => api.get<{ tasks: Task[] }>("/tasks"),

  createTask: (data: Partial<Task>) => api.post<{ task: Task }>("/tasks", data),

  updateTask: (id: string, data: Partial<Task>) =>
    api.put<{ task: Task }>(`/tasks/${id}`, data),

  deleteTask: (id: string) => api.delete(`/tasks/${id}`),

  getStats: () => api.get<{ stats: TaskStats }>("/tasks/stats"),
};
