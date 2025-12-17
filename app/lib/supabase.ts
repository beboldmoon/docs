import { createClient } from '@supabase/supabase-js';

// NOTE: Replace these with your actual Supabase Project URL and Anon Key
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'YOUR_SUPABASE_URL_HERE';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'YOUR_SUPABASE_ANON_KEY_HERE';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Types for our Database
export type Database = {
    public: {
        Tables: {
            expertise: {
                Row: {
                    id: string;
                    icon: string;
                    title: string;
                    desc: string;
                    created_at: string;
                };
                Insert: {
                    id?: string;
                    icon: string;
                    title: string;
                    desc: string;
                    created_at?: string;
                };
                Update: {
                    id?: string;
                    icon?: string;
                    title?: string;
                    desc?: string;
                    created_at?: string;
                };
            };
            portfolio: {
                Row: {
                    id: string;
                    category: string;
                    name: string;
                    detail: string;
                    count: string;
                    year: string;
                    month: string;
                    created_at: string;
                };
                Insert: {
                    id?: string;
                    category: string;
                    name: string;
                    detail: string;
                    count: string;
                    year: string;
                    month: string;
                    created_at?: string;
                };
                Update: {
                    id?: string;
                    category?: string;
                    name?: string;
                    detail?: string;
                    count?: string;
                    year?: string;
                    month?: string;
                    created_at?: string;
                };
            };
            inquiries: {
                Row: {
                    id: string;
                    name: string;
                    email: string;
                    type: string;
                    message: string;
                    read: boolean;
                    created_at: string;
                };
                Insert: {
                    id?: string;
                    name: string;
                    email: string;
                    type: string;
                    message: string;
                    read?: boolean;
                    created_at?: string;
                };
                Update: {
                    id?: string;
                    name?: string;
                    email?: string;
                    type?: string;
                    message?: string;
                    read?: boolean;
                    created_at?: string;
                };
            };
        };
    };
};
