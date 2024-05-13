import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://bapoczohbbpkkmftrhrt.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJhcG9jem9oYmJwa2ttZnRyaHJ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTUyMzQxMTUsImV4cCI6MjAzMDgxMDExNX0.9CQbIW-YyYGW_xNujsplpzx0wKIv3VPrfSoEYfpxt3g';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
