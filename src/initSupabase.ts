import { supabaseAnonKey, supabaseUrl } from "@env";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";
import "react-native-url-polyfill/auto";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  localStorage: AsyncStorage as any,
  detectSessionInUrl: false,
  autoRefreshToken: true,
  persistSession: true,
});
