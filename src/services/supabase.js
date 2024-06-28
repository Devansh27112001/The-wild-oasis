import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ijiuwskcbszobelkcivz.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlqaXV3c2tjYnN6b2JlbGtjaXZ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTk1Nzk1MjEsImV4cCI6MjAzNTE1NTUyMX0.lUGH8iZBSV8FuhXNivY-WS_3tF_egfQbRkgnVRNCKoQ";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
