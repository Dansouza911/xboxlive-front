export interface Games {
  id?: string;
  title: string;
  description: string;
  price: number;
  image: string;
  year: number;
  imdbScore: number;
  trailerYoutubeUrl: string;
  gameplayYoutubeUrl: string;
  categoryId: string,
  createdAt?: Date;
  updatedAt?: Date;
}

export interface Gener {
  id?: string;
  name: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface User {
  id?: string;
  name: string;
  email: string;
  password?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface Favorite {
  id?: string;
  userId: string;
  gameTitle: string;
  favoritedAt?: Date;
}