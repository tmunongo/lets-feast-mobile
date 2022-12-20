export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      meal_plans: {
        Row: {
          created_at: string | null
          name: string | null
          tag: string | null
          id: string
          chef_id: string | null
        }
        Insert: {
          created_at?: string | null
          name?: string | null
          tag?: string | null
          id?: string
          chef_id?: string | null
        }
        Update: {
          created_at?: string | null
          name?: string | null
          tag?: string | null
          id?: string
          chef_id?: string | null
        }
      }
      profiles: {
        Row: {
          id: string
          updated_at: string | null
          username: string | null
          avatar_url: string | null
          email: string | null
          full_name: string | null
        }
        Insert: {
          id?: string
          updated_at?: string | null
          username?: string | null
          avatar_url?: string | null
          email?: string | null
          full_name?: string | null
        }
        Update: {
          id?: string
          updated_at?: string | null
          username?: string | null
          avatar_url?: string | null
          email?: string | null
          full_name?: string | null
        }
      }
      rec_plan: {
        Row: {
          id: number
          created_at: string | null
          recipe_id: string | null
          plan_id: string | null
        }
        Insert: {
          id?: number
          created_at?: string | null
          recipe_id?: string | null
          plan_id?: string | null
        }
        Update: {
          id?: number
          created_at?: string | null
          recipe_id?: string | null
          plan_id?: string | null
        }
      }
      recipes: {
        Row: {
          id: string
          created_at: string | null
          name: string
          image_url: string | null
          ingredients: string[] | null
          description: string
          category: string | null
          prep_time: number | null
          chef_id: string | null
          favourited: boolean | null
        }
        Insert: {
          id?: string
          created_at?: string | null
          name?: string
          image_url?: string | null
          ingredients?: string[] | null
          description: string
          category?: string | null
          prep_time?: number | null
          chef_id?: string | null
          favourited?: boolean | null
        }
        Update: {
          id?: string
          created_at?: string | null
          name?: string
          image_url?: string | null
          ingredients?: string[] | null
          description?: string
          category?: string | null
          prep_time?: number | null
          chef_id?: string | null
          favourited?: boolean | null
        }
      }
      shopping_list: {
        Row: {
          id: string
          created_at: string | null
          name: string | null
          purpose: string | null
          completed: boolean | null
          items: string[] | null
        }
        Insert: {
          id?: string
          created_at?: string | null
          name?: string | null
          purpose?: string | null
          completed?: boolean | null
          items?: string[] | null
        }
        Update: {
          id?: string
          created_at?: string | null
          name?: string | null
          purpose?: string | null
          completed?: boolean | null
          items?: string[] | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}
