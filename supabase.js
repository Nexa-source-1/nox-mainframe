import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const supabaseUrl = 'https://gtgspuewynrsopxrhfuj.supabase.co'
const supabasePublishableKey = "sb_publishable_N_r9-qdu0XMVzPw2TCHPiw_nSVJYDr-";

export const supabase = createClient(
  supabaseUrl,
  supabasePublishableKey,) 