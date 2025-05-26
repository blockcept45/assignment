import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
 'https://xfbkwxyvcesrtjxuojbz.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhmYmt3eHl2Y2VzcnRqeHVvamJ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgyNjk4MDEsImV4cCI6MjA2Mzg0NTgwMX0.opR_eWF-Hpnk2efoDn7WCjpX-T7OpqBlAF9WltwhOd4'
);

export default supabase;
