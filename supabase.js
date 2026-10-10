/* =========================================================
   LIBRAX - SUPABASE CONNECTION
   1. Create a project at https://supabase.com
   2. Project Settings > API > copy "Project URL" and "anon public" key
   3. Paste them below (the anon key is safe to use in the browser
      because Row Level Security protects the data - see supabase/schema.sql)
   ========================================================= */

const SUPABASE_URL = "https://quznunqmslvbvadayqbf.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_XyEfBDMyLUif3EBGM99y1g_3tX0B_8b";

const supabaseReady =
  typeof window.supabase !== "undefined" &&
  SUPABASE_URL.startsWith("https://") &&
  !SUPABASE_ANON_KEY.startsWith("YOUR_");

const sb = supabaseReady ? window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY) : null;

// Convert a database row to the shape the UI already uses
function rowToBook(r) {
  return {
    id: r.id, title: r.title, author: r.author, category: r.category,
    isbn: r.isbn, year: r.year, status: r.status, cover: r.cover,
    location: r.location, description: r.description,
    returnDate: r.return_date || undefined,
    availableDate: r.available_date || undefined
  };
}

const LibraXDB = {
  enabled: supabaseReady,

  async getBooks() {
    if (!sb) return null;
    const { data, error } = await sb.from("books").select("*").order("id");
    if (error) { console.error("Supabase getBooks:", error.message); return null; }
    return data.map(rowToBook);
  },

  async getUser() {
    if (!sb) return null;
    const { data } = await sb.auth.getUser();
    return data?.user || null;
  },

  onAuthChange(cb) {
    if (sb) sb.auth.onAuthStateChange((_event, session) => cb(session?.user || null));
  },

  signUp: (email, password) => sb.auth.signUp({ email, password }),
  signIn: (email, password) => sb.auth.signInWithPassword({ email, password }),
  signOut: () => sb.auth.signOut(),

  async getSavedIds() {
    if (!sb) return [];
    const { data, error } = await sb.from("saved_books").select("book_id");
    if (error) { console.error("Supabase getSavedIds:", error.message); return []; }
    return data.map(r => r.book_id);
  },

  async saveBook(userId, bookId) {
    return sb.from("saved_books").upsert({ user_id: userId, book_id: bookId }, { onConflict: "user_id,book_id", ignoreDuplicates: true });
  },

  async unsaveBook(userId, bookId) {
    return sb.from("saved_books").delete().eq("user_id", userId).eq("book_id", bookId);
  }
};
