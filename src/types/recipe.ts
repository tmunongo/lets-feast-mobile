export type Recipe = {
  category: string;
  chef_id: string;
  created_at: Date;
  description: string;
  favorited: boolean;
  id: string;
  image_url: string;
  ingredients: string[];
  name: string;
};
