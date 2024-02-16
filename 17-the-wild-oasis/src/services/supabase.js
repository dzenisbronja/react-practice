import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://pseeyfnmescegtmaxaov.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBzZWV5Zm5tZXNjZWd0bWF4YW92Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDgwNzg5MjUsImV4cCI6MjAyMzY1NDkyNX0.hW98NkIV5jZ2OAD76jpkwI9WTu-MvX3w_gfWYPUkhgc";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
