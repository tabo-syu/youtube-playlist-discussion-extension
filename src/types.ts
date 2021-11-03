export type Playlist = {
  id: string;
  movies?: Movie[];
};

export type Movie = {
  id: string;
  favorite: number;
  comments: Comment[];
};

export type Comment = string;
