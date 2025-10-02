const API_URL = '/api';

export interface Profile {
  username: string;
  bio: string;
  image: string;
  following: boolean;
}

export interface Author {
  username: string;
  image: string;
}

export interface Article {
  slug: string;
  title: string;
  description: string;
  body: string;
  createdAt: string;
  author: Author;
  favorited: boolean;
  favoritesCount: number;
}

class ApiService {
  private baseURL: string;

  constructor() {
    this.baseURL = API_URL;
  }

  async get<T>(resource: string, slug: string = ''): Promise<T> {
    const url = slug ? `${this.baseURL}/${resource}/${slug}` : `${this.baseURL}/${resource}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`API Error: ${response.statusText}`);
    }
    return response.json();
  }

  async fetchProfile(username: string): Promise<{ profile: Profile }> {
    return this.get<{ profile: Profile }>('profiles', username);
  }
}

export default new ApiService();
