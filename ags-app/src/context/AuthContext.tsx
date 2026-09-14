import React, { createContext, useContext, useState, useEffect } from 'react';
import { supabase, isLiveSupabaseConfigured } from '../services/supabaseClient';
import { UserProfile, UserRole } from '../types/database';

interface AuthContextType {
  user: UserProfile | null;
  session: any | null;
  isLoading: boolean;
  isLiveSupabase: boolean;
  signIn: (email: string, pass: string) => Promise<{ error?: string }>;
  signUp: (email: string, pass: string, fullName: string, role?: UserRole) => Promise<{ error?: string }>;
  signOut: () => Promise<void>;
  resetPassword: (email: string) => Promise<{ error?: string; success?: boolean }>;
  updateTargetScore: (score: number) => Promise<void>;
  switchDemoRole: (role: UserRole) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const LOCAL_USER_KEY = 'ags_auth_user';

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [session, setSession] = useState<any | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isLiveSupabase, setIsLiveSupabase] = useState<boolean>(isLiveSupabaseConfigured());

  useEffect(() => {
    const initAuth = async () => {
      setIsLoading(true);
      const isConfigured = isLiveSupabaseConfigured();
      setIsLiveSupabase(isConfigured);

      if (isConfigured) {
        try {
          const { data } = await supabase.auth.getSession();
          if (data.session) {
            setSession(data.session);
            const { data: profile } = await supabase
              .from('profiles')
              .select('*')
              .eq('id', data.session.user.id)
              .single();

            if (profile) {
              setUser(profile as UserProfile);
            } else {
              setUser({
                id: data.session.user.id,
                email: data.session.user.email || '',
                full_name: data.session.user.user_metadata?.full_name || 'AGS Öğrencisi',
                role: (data.session.user.user_metadata?.role as UserRole) || 'student',
                target_score: 85,
              });
            }
          }
        } catch (e) {
          console.error('Supabase getSession error:', e);
        }
      } else {
        // Retrieve local simulated authenticated session
        const stored = localStorage.getItem(LOCAL_USER_KEY);
        if (stored) {
          try {
            setUser(JSON.parse(stored));
          } catch {
            setUser(null);
          }
        } else {
          // Default initial demo student user
          const defaultDemoUser: UserProfile = {
            id: 'demo-student-uuid-101',
            email: 'ogrenci@ags.meb.gov.tr',
            full_name: 'Ahmet Yılmaz',
            role: 'student',
            target_score: 85,
          };
          localStorage.setItem(LOCAL_USER_KEY, JSON.stringify(defaultDemoUser));
          setUser(defaultDemoUser);
        }
      }
      setIsLoading(false);
    };

    initAuth();

    // Listen to Supabase auth state changes if configured
    if (isLiveSupabaseConfigured()) {
      const { data: authListener } = supabase.auth.onAuthStateChange(
        async (_event, newSession) => {
          setSession(newSession);
          if (newSession?.user) {
            const { data: profile } = await supabase
              .from('profiles')
              .select('*')
              .eq('id', newSession.user.id)
              .single();
            if (profile) {
              setUser(profile as UserProfile);
            } else {
              setUser({
                id: newSession.user.id,
                email: newSession.user.email || '',
                full_name: newSession.user.user_metadata?.full_name || 'AGS Öğrencisi',
                role: (newSession.user.user_metadata?.role as UserRole) || 'student',
                target_score: 85,
              });
            }
          } else if (!isLiveSupabaseConfigured()) {
            // Keep local user
          } else {
            setUser(null);
          }
        }
      );
      return () => {
        authListener.subscription.unsubscribe();
      };
    }
  }, []);

  const signIn = async (email: string, pass: string): Promise<{ error?: string }> => {
    if (isLiveSupabaseConfigured()) {
      try {
        const { data, error } = await supabase.auth.signInWithPassword({
          email,
          password: pass,
        });
        if (error) return { error: error.message };
        if (data.user) {
          const { data: profile } = await supabase
            .from('profiles')
            .select('*')
            .eq('id', data.user.id)
            .single();
          if (profile) setUser(profile as UserProfile);
        }
        return {};
      } catch (err: any) {
        return { error: err.message || 'Giriş yapılamadı.' };
      }
    } else {
      // Local authenticated session
      const existingUserStr = localStorage.getItem(`ags_registered_${email.toLowerCase()}`);
      let userObj: UserProfile;
      if (existingUserStr) {
        userObj = JSON.parse(existingUserStr);
      } else {
        const role: UserRole = email.includes('admin') ? 'admin' : 'student';
        userObj = {
          id: 'usr_' + Math.random().toString(36).substring(2, 9),
          email,
          full_name: email.split('@')[0].toUpperCase(),
          role,
          target_score: 85,
        };
      }
      localStorage.setItem(LOCAL_USER_KEY, JSON.stringify(userObj));
      setUser(userObj);
      return {};
    }
  };

  const signUp = async (
    email: string,
    pass: string,
    fullName: string,
    role: UserRole = 'student'
  ): Promise<{ error?: string }> => {
    if (isLiveSupabaseConfigured()) {
      try {
        const { data, error } = await supabase.auth.signUp({
          email,
          password: pass,
          options: {
            data: {
              full_name: fullName,
              role,
            },
          },
        });
        if (error) return { error: error.message };
        if (data.user) {
          const newUser: UserProfile = {
            id: data.user.id,
            email,
            full_name: fullName,
            role,
            target_score: 85,
          };
          setUser(newUser);
        }
        return {};
      } catch (err: any) {
        return { error: err.message || 'Kayıt başarısız.' };
      }
    } else {
      const newUser: UserProfile = {
        id: 'usr_' + Math.random().toString(36).substring(2, 9),
        email,
        full_name: fullName,
        role,
        target_score: 85,
      };
      localStorage.setItem(`ags_registered_${email.toLowerCase()}`, JSON.stringify(newUser));
      localStorage.setItem(LOCAL_USER_KEY, JSON.stringify(newUser));
      setUser(newUser);
      return {};
    }
  };

  const signOut = async () => {
    if (isLiveSupabaseConfigured()) {
      try {
        await supabase.auth.signOut();
      } catch (e) {
        console.error('Signout error:', e);
      }
    }
    localStorage.removeItem(LOCAL_USER_KEY);
    setUser(null);
    setSession(null);
  };

  const resetPassword = async (email: string): Promise<{ error?: string; success?: boolean }> => {
    if (isLiveSupabaseConfigured()) {
      try {
        const { error } = await supabase.auth.resetPasswordForEmail(email, {
          redirectTo: window.location.origin + '/reset-password',
        });
        if (error) return { error: error.message };
        return { success: true };
      } catch (err: any) {
        return { error: err.message || 'Şifre sıfırlama e-postası gönderilemedi.' };
      }
    } else {
      return { success: true };
    }
  };

  const updateTargetScore = async (score: number) => {
    if (!user) return;
    const updated = { ...user, target_score: score };
    setUser(updated);
    if (isLiveSupabaseConfigured()) {
      await supabase.from('profiles').update({ target_score: score }).eq('id', user.id);
    } else {
      localStorage.setItem(LOCAL_USER_KEY, JSON.stringify(updated));
    }
  };

  const switchDemoRole = (role: UserRole) => {
    if (!user) return;
    const updated = { ...user, role };
    setUser(updated);
    localStorage.setItem(LOCAL_USER_KEY, JSON.stringify(updated));
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        session,
        isLoading,
        isLiveSupabase,
        signIn,
        signUp,
        signOut,
        resetPassword,
        updateTargetScore,
        switchDemoRole,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
