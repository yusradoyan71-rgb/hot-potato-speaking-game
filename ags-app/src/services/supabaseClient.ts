import { createClient, SupabaseClient } from '@supabase/supabase-js';

// Environment variables or localStorage override for dynamic configuration
const DEFAULT_SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || 'https://xyzcompany.supabase.co';
const DEFAULT_SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.dummy_key_ags_placeholder';

const storedUrl = localStorage.getItem('ags_supabase_url');
const storedKey = localStorage.getItem('ags_supabase_anon_key');

export const SUPABASE_URL = storedUrl || DEFAULT_SUPABASE_URL;
export const SUPABASE_ANON_KEY = storedKey || DEFAULT_SUPABASE_ANON_KEY;

export const isLiveSupabaseConfigured = (): boolean => {
  const url = localStorage.getItem('ags_supabase_url') || import.meta.env.VITE_SUPABASE_URL;
  const key = localStorage.getItem('ags_supabase_anon_key') || import.meta.env.VITE_SUPABASE_ANON_KEY;
  return Boolean(url && key && !url.includes('xyzcompany') && !key.includes('dummy_key'));
};

export const createSupabaseInstance = (url?: string, key?: string): SupabaseClient => {
  const targetUrl = url || localStorage.getItem('ags_supabase_url') || DEFAULT_SUPABASE_URL;
  const targetKey = key || localStorage.getItem('ags_supabase_anon_key') || DEFAULT_SUPABASE_ANON_KEY;
  return createClient(targetUrl, targetKey, {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
      detectSessionInUrl: true,
    },
  });
};

export let supabase = createSupabaseInstance();

export const updateSupabaseCredentials = (url: string, key: string) => {
  localStorage.setItem('ags_supabase_url', url.trim());
  localStorage.setItem('ags_supabase_anon_key', key.trim());
  supabase = createSupabaseInstance(url.trim(), key.trim());
};

export const clearSupabaseCredentials = () => {
  localStorage.removeItem('ags_supabase_url');
  localStorage.removeItem('ags_supabase_anon_key');
  supabase = createSupabaseInstance();
};
