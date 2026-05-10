import { createClient } from "@supabase/supabase-js";

const supabaseUrl =
  "https://ihorydenwhwgcsoevori.supabase.co";

const supabaseAnonKey =
   "sb_publishable_o7_uzK2XYm9uQFmsO1cynA_TtYdQRPC";

export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey
);