// ✅ Supabase settings (for CDN use)
const SUPABASE_URL = 'https://cbqgprqineohsxnytobr.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNicWdwcnFpbmVvaHN4bnl0b2JyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMzMTc3NjksImV4cCI6MjA2ODg5Mzc2OX0.sv-ee3begd-6Bx2DlMJ2-F46dRd-EQyLa_vu1QXFrN4';

// ✅ Create the Supabase client
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// ✅ Save or update user data
async function saveUserData(username, data) {
  const { error } = await supabase
    .from('userdata')
    .upsert({ username, data });

  if (error) {
    console.error('❌ Failed to save user data:', error.message);
  } else {
    console.log('✅ User data saved');
  }
}

// ✅ Load user data
async function loadUserData(username) {
  const { data, error } = await supabase
    .from('userdata')
    .select('data')
    .eq('username', username)
    .single();

  if (error) {
    console.error('❌ Failed to load user data:', error.message);
    return null;
  }

  console.log('📦 Loaded data:', data);
  return data;
}
