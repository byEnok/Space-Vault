import { createClient } from '@supabase/supabase-js'

// const supabaseUrl = process.env.DATABASE_URL
const supabaseUrl = 'https://tdlofrukosaahtlufrzb.supabase.co'
// const supabaseAnonKey = process.env.SUPABASE_ANON_KEY
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY

const supabase = createClient(supabaseUrl, supabaseAnonKey)

export default supabase
