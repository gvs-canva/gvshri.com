import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type ContactFormSubmission = {
  id?: string
  full_name: string
  email: string
  company_name?: string
  industry?: string
  biggest_challenge: string
  timeline?: string
  status?: string
  created_at?: string