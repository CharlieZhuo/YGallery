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
      Comment: {
        Row: {
          id: number
          created_at: string | null
          post: number | null
        }
        Insert: {
          id?: number
          created_at?: string | null
          post?: number | null
        }
        Update: {
          id?: number
          created_at?: string | null
          post?: number | null
        }
      }
      Feedback: {
        Row: {
          id: number
          created_at: string | null
          email: string
          message: string
        }
        Insert: {
          id?: number
          created_at?: string | null
          email: string
          message: string
        }
        Update: {
          id?: number
          created_at?: string | null
          email?: string
          message?: string
        }
      }
      Image: {
        Row: {
          id: number
          created_at: string | null
          name: string | null
          width: number | null
          height: number | null
          format: string | null
          size_byte: number | null
        }
        Insert: {
          id?: number
          created_at?: string | null
          name?: string | null
          width?: number | null
          height?: number | null
          format?: string | null
          size_byte?: number | null
        }
        Update: {
          id?: number
          created_at?: string | null
          name?: string | null
          width?: number | null
          height?: number | null
          format?: string | null
          size_byte?: number | null
        }
      }
      Like: {
        Row: {
          id: number
          created_at: string | null
          post: number
        }
        Insert: {
          id?: number
          created_at?: string | null
          post: number
        }
        Update: {
          id?: number
          created_at?: string | null
          post?: number
        }
      }
      Post: {
        Row: {
          id: number
          created_at: string
          title: string
          description: string | null
          catagories: string[] | null
        }
        Insert: {
          id?: number
          created_at?: string
          title: string
          description?: string | null
          catagories?: string[] | null
        }
        Update: {
          id?: number
          created_at?: string
          title?: string
          description?: string | null
          catagories?: string[] | null
        }
      }
      Profiles: {
        Row: {
          id: string
          updated_at: string | null
          username: string
          website: string | null
          description: string | null
        }
        Insert: {
          id: string
          updated_at?: string | null
          username: string
          website?: string | null
          description?: string | null
        }
        Update: {
          id?: string
          updated_at?: string | null
          username?: string
          website?: string | null
          description?: string | null
        }
      }
      Topic: {
        Row: {
          id: number
          created_at: string | null
          name: string
          description: string | null
        }
        Insert: {
          id?: number
          created_at?: string | null
          name: string
          description?: string | null
        }
        Update: {
          id?: number
          created_at?: string | null
          name?: string
          description?: string | null
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
