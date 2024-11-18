import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://gcryanvvytkjtkujxfds.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdjcnlhbnZ2eXRranRrdWp4ZmRzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE4ODMyMjksImV4cCI6MjA0NzQ1OTIyOX0.RCPq8ko3X4xMXFOd-mzyK76y5dBitwvpjk08jmDRtdg"
const supabase = createClient(supabaseUrl, supabaseKey)



export default supabase