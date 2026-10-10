/* =========================================================
   LIBRAX SMART LIBRARY
   ========================================================= */

const localBooks = [
{id:1,title:"Atomic Habits",author:"James Clear",category:"Self Development",isbn:"9780735211292",year:2018,status:"available",cover:"https://covers.openlibrary.org/b/isbn/9780735211292-L.jpg",location:"Floor 1 • Rack B2 • Shelf 3",description:"A practical guide to building good habits and breaking bad ones."},
{id:2,title:"The Alchemist",author:"Paulo Coelho",category:"Novel",isbn:"9780062315007",year:1988,status:"available",cover:"https://covers.openlibrary.org/b/isbn/9780062315007-L.jpg",location:"Floor 1 • Rack A2 • Shelf 2",description:"A philosophical novel about dreams, destiny and discovering one's purpose."},
{id:3,title:"Clean Code",author:"Robert C. Martin",category:"Computer Science",isbn:"9780132350884",year:2008,status:"borrowed",returnDate:"18 October 2026",cover:"https://covers.openlibrary.org/b/isbn/9780132350884-L.jpg",location:"Floor 2 • Rack C4 • Shelf 3",description:"A classic guide to writing readable, maintainable and professional software."},
{id:4,title:"1984",author:"George Orwell",category:"Literature",isbn:"9780451524935",year:1949,status:"reserved",cover:"https://covers.openlibrary.org/b/isbn/9780451524935-L.jpg",location:"Floor 1 • Rack A1 • Shelf 4",description:"A dystopian novel exploring surveillance, freedom and political control."},
{id:5,title:"The Hobbit",author:"J. R. R. Tolkien",category:"Fantasy",isbn:"9780547928227",year:1937,status:"soon",availableDate:"20 October 2026",cover:"https://covers.openlibrary.org/b/isbn/9780547928227-L.jpg",location:"Floor 1 • Rack A2 • Shelf 5",description:"Bilbo Baggins joins an unexpected adventure across Middle-earth."},
{id:6,title:"Pride and Prejudice",author:"Jane Austen",category:"Literature",isbn:"9780141439518",year:1813,status:"available",cover:"https://covers.openlibrary.org/b/isbn/9780141439518-L.jpg",location:"Floor 1 • Rack A1 • Shelf 2",description:"A celebrated novel about relationships, society and first impressions."},
{id:7,title:"The Pragmatic Programmer",author:"Andrew Hunt & David Thomas",category:"Computer Science",isbn:"9780135957059",year:2019,status:"available",cover:"https://covers.openlibrary.org/b/isbn/9780135957059-L.jpg",location:"Floor 2 • Rack C1 • Shelf 2",description:"Practical techniques and principles for becoming a better software developer."},
{id:8,title:"Introduction to Algorithms",author:"Thomas H. Cormen et al.",category:"Computer Science",isbn:"9780262046305",year:2022,status:"borrowed",returnDate:"21 October 2026",cover:"https://covers.openlibrary.org/b/isbn/9780262046305-L.jpg",location:"Floor 2 • Rack C2 • Shelf 1",description:"A comprehensive textbook covering algorithms and data structures."},
{id:9,title:"Computer Networks",author:"Andrew S. Tanenbaum",category:"Computer Science",isbn:"9780132126953",year:2010,status:"available",cover:"https://covers.openlibrary.org/b/isbn/9780132126953-L.jpg",location:"Floor 2 • Rack C3 • Shelf 2",description:"A comprehensive introduction to computer networking concepts."},
{id:10,title:"Database System Concepts",author:"Abraham Silberschatz",category:"Computer Science",isbn:"9780078022159",year:2019,status:"available",cover:"https://covers.openlibrary.org/b/isbn/9780078022159-L.jpg",location:"Floor 2 • Rack C4 • Shelf 1",description:"A detailed introduction to database management systems."},
{id:11,title:"Operating System Concepts",author:"Abraham Silberschatz",category:"Computer Science",isbn:"9781119800361",year:2021,status:"reserved",cover:"https://covers.openlibrary.org/b/isbn/9781119800361-L.jpg",location:"Floor 2 • Rack C5 • Shelf 2",description:"Fundamental concepts and principles of modern operating systems."},
{id:12,title:"Artificial Intelligence: A Modern Approach",author:"Stuart Russell & Peter Norvig",category:"Artificial Intelligence",isbn:"9780134610993",year:2021,status:"available",cover:"https://covers.openlibrary.org/b/isbn/9780134610993-L.jpg",location:"Floor 2 • Rack C6 • Shelf 1",description:"A comprehensive textbook covering artificial intelligence."},
{id:13,title:"Head First Java",author:"Kathy Sierra & Bert Bates",category:"Computer Science",isbn:"9780596009205",year:2005,status:"available",cover:"https://covers.openlibrary.org/b/isbn/9780596009205-L.jpg",location:"Floor 2 • Rack C2 • Shelf 4",description:"An accessible introduction to Java programming."},
{id:14,title:"Python Crash Course",author:"Eric Matthes",category:"Computer Science",isbn:"9781593279288",year:2019,status:"available",cover:"https://covers.openlibrary.org/b/isbn/9781593279288-L.jpg",location:"Floor 2 • Rack C1 • Shelf 4",description:"A hands-on introduction to Python programming."},
{id:15,title:"A Brief History of Time",author:"Stephen Hawking",category:"Science",isbn:"9780553380163",year:1998,status:"available",cover:"https://covers.openlibrary.org/b/isbn/9780553380163-L.jpg",location:"Floor 3 • Rack D1 • Shelf 2",description:"An accessible exploration of cosmology, time and the universe."},
{id:16,title:"Cosmos",author:"Carl Sagan",category:"Science",isbn:"9780345539434",year:2013,status:"available",cover:"https://covers.openlibrary.org/b/isbn/9780345539434-L.jpg",location:"Floor 3 • Rack D1 • Shelf 4",description:"A journey through science, history and humanity's place in the universe."},
{id:17,title:"The Selfish Gene",author:"Richard Dawkins",category:"Biology",isbn:"9780198788607",year:2016,status:"borrowed",returnDate:"25 October 2026",cover:"https://covers.openlibrary.org/b/isbn/9780198788607-L.jpg",location:"Floor 3 • Rack E2 • Shelf 2",description:"An influential exploration of evolution from the perspective of genes."},
{id:18,title:"Sapiens",author:"Yuval Noah Harari",category:"History",isbn:"9780062316097",year:2015,status:"available",cover:"https://covers.openlibrary.org/b/isbn/9780062316097-L.jpg",location:"Floor 1 • Rack A3 • Shelf 1",description:"A broad history of humankind from early humans to modern society."},
{id:19,title:"Calculus",author:"James Stewart",category:"Mathematics",isbn:"9781285740621",year:2015,status:"available",cover:"https://covers.openlibrary.org/b/isbn/9781285740621-L.jpg",location:"Floor 3 • Rack D3 • Shelf 1",description:"A widely used textbook covering differential and integral calculus."},
{id:20,title:"Discrete Mathematics and Its Applications",author:"Kenneth H. Rosen",category:"Mathematics",isbn:"9780073383095",year:2012,status:"available",cover:"https://covers.openlibrary.org/b/isbn/9780073383095-L.jpg",location:"Floor 3 • Rack D4 • Shelf 2",description:"A comprehensive introduction to discrete mathematics."},
{id:21,title:"Linear Algebra and Its Applications",author:"David C. Lay",category:"Mathematics",isbn:"9780321982384",year:2015,status:"reserved",cover:"https://covers.openlibrary.org/b/isbn/9780321982384-L.jpg",location:"Floor 3 • Rack D4 • Shelf 4",description:"A practical introduction to linear algebra and its applications."},
{id:22,title:"Chemistry: The Central Science",author:"Theodore L. Brown et al.",category:"Chemistry",isbn:"9780134414232",year:2017,status:"available",cover:"https://covers.openlibrary.org/b/isbn/9780134414232-L.jpg",location:"Floor 3 • Rack E1 • Shelf 1",description:"A comprehensive textbook introducing fundamental chemistry concepts."},
{id:23,title:"Organic Chemistry",author:"Paula Yurkanis Bruice",category:"Chemistry",isbn:"9780134042282",year:2016,status:"available",cover:"https://covers.openlibrary.org/b/isbn/9780134042282-L.jpg",location:"Floor 3 • Rack E1 • Shelf 3",description:"A detailed introduction to organic chemistry."},
{id:24,title:"Campbell Biology",author:"Jane B. Reece et al.",category:"Biology",isbn:"9780135188743",year:2019,status:"available",cover:"https://covers.openlibrary.org/b/isbn/9780135188743-L.jpg",location:"Floor 3 • Rack E2 • Shelf 1",description:"A major introductory biology textbook."},
{id:25,title:"Fundamentals of Physics",author:"Halliday, Resnick & Walker",category:"Physics",isbn:"9781118230718",year:2013,status:"available",cover:"https://covers.openlibrary.org/b/isbn/9781118230718-L.jpg",location:"Floor 3 • Rack E3 • Shelf 1",description:"A comprehensive introduction to physics."},
{id:26,title:"To Kill a Mockingbird",author:"Harper Lee",category:"Novel",isbn:"9780061120084",year:2006,status:"available",cover:"https://covers.openlibrary.org/b/isbn/9780061120084-L.jpg",location:"Floor 1 • Rack A2 • Shelf 1",description:"A classic novel exploring justice, prejudice and childhood."},
{id:27,title:"The Great Gatsby",author:"F. Scott Fitzgerald",category:"Novel",isbn:"9780743273565",year:2004,status:"available",cover:"https://covers.openlibrary.org/b/isbn/9780743273565-L.jpg",location:"Floor 1 • Rack A2 • Shelf 3",description:"A classic American novel set during the Jazz Age."},
{id:28,title:"Jane Eyre",author:"Charlotte Brontë",category:"Literature",isbn:"9780141441146",year:2008,status:"borrowed",returnDate:"23 October 2026",cover:"https://covers.openlibrary.org/b/isbn/9780141441146-L.jpg",location:"Floor 1 • Rack A1 • Shelf 5",description:"A classic coming-of-age novel about independence and love."},
{id:29,title:"Animal Farm",author:"George Orwell",category:"Literature",isbn:"9780451526342",year:2003,status:"available",cover:"https://covers.openlibrary.org/b/isbn/9780451526342-L.jpg",location:"Floor 1 • Rack A1 • Shelf 6",description:"A political allegorical novella about power and revolution."},
{id:30,title:"The Picture of Dorian Gray",author:"Oscar Wilde",category:"Literature",isbn:"9780141439570",year:2003,status:"available",cover:"https://covers.openlibrary.org/b/isbn/9780141439570-L.jpg",location:"Floor 1 • Rack A1 • Shelf 7",description:"A Gothic novel exploring beauty, morality and identity."},
{id:31,title:"Wuthering Heights",author:"Emily Brontë",category:"Literature",isbn:"9780141439556",year:2003,status:"available",cover:"https://covers.openlibrary.org/b/isbn/9780141439556-L.jpg",location:"Floor 1 • Rack A1 • Shelf 8",description:"A classic novel of passion, revenge and social class."},
{id:32,title:"Charlotte's Web",author:"E. B. White",category:"Kids",isbn:"9780064400558",year:2001,status:"available",cover:"https://covers.openlibrary.org/b/isbn/9780064400558-L.jpg",location:"Floor 5 • Rack K1 • Shelf 1",description:"A beloved children's story about friendship and loyalty."},
{id:33,title:"Matilda",author:"Roald Dahl",category:"Kids",isbn:"9780142410370",year:2007,status:"available",cover:"https://covers.openlibrary.org/b/isbn/9780142410370-L.jpg",location:"Floor 5 • Rack K1 • Shelf 2",description:"A clever young girl discovers her extraordinary abilities."},
{id:34,title:"Diary of a Wimpy Kid",author:"Jeff Kinney",category:"Kids",isbn:"9781419741854",year:2018,status:"borrowed",returnDate:"19 October 2026",cover:"https://covers.openlibrary.org/b/isbn/9781419741854-L.jpg",location:"Floor 5 • Rack K2 • Shelf 1",description:"The humorous diary of middle-school student Greg Heffley."},
{id:35,title:"Harry Potter and the Sorcerer's Stone",author:"J. K. Rowling",category:"Kids",isbn:"9780590353427",year:1998,status:"reserved",cover:"https://covers.openlibrary.org/b/isbn/9780590353427-L.jpg",location:"Floor 5 • Rack K2 • Shelf 4",description:"Harry Potter discovers the magical world and begins his journey."},
{id:36,title:"Watchmen",author:"Alan Moore & Dave Gibbons",category:"Comics",isbn:"9781779501127",year:2019,status:"available",cover:"https://covers.openlibrary.org/b/isbn/9781779501127-L.jpg",location:"Floor 5 • Rack K3 • Shelf 1",description:"A landmark graphic novel exploring superheroes, power and morality."},
{id:37,title:"Batman: Year One",author:"Frank Miller & David Mazzucchelli",category:"Comics",isbn:"9781401202360",year:2005,status:"available",cover:"https://covers.openlibrary.org/b/isbn/9781401202360-L.jpg",location:"Floor 5 • Rack K3 • Shelf 2",description:"A celebrated retelling of Batman's first year as a hero."},
{id:38,title:"Marvels",author:"Kurt Busiek & Alex Ross",category:"Comics",isbn:"9780785111703",year:2004,status:"available",cover:"https://covers.openlibrary.org/b/isbn/9780785111703-L.jpg",location:"Floor 5 • Rack K3 • Shelf 3",description:"The Marvel Universe viewed through the eyes of an ordinary photographer."},
{id:39,title:"Thinking, Fast and Slow",author:"Daniel Kahneman",category:"Psychology",isbn:"9780374533557",year:2011,status:"available",cover:"https://covers.openlibrary.org/b/isbn/9780374533557-L.jpg",location:"Floor 1 • Rack B2 • Shelf 5",description:"An exploration of two systems that influence human thinking."},
{id:40,title:"Deep Work",author:"Cal Newport",category:"Self Development",isbn:"9781455586691",year:2016,status:"available",cover:"https://covers.openlibrary.org/b/isbn/9781455586691-L.jpg",location:"Floor 1 • Rack B2 • Shelf 6",description:"Strategies for focused work in an increasingly distracted world."},
{id:41,title:"How to Win Friends and Influence People",author:"Dale Carnegie",category:"Self Development",isbn:"9780671027032",year:1998,status:"available",cover:"https://covers.openlibrary.org/b/isbn/9780671027032-L.jpg",location:"Floor 1 • Rack B2 • Shelf 7",description:"Classic principles for communication and relationships."},
{id:42,title:"The Power of Habit",author:"Charles Duhigg",category:"Self Development",isbn:"9780812981605",year:2012,status:"available",cover:"https://covers.openlibrary.org/b/isbn/9780812981605-L.jpg",location:"Floor 1 • Rack B2 • Shelf 8",description:"An exploration of how habits work and how they can be changed."},
{id:43,title:"Rich Dad Poor Dad",author:"Robert T. Kiyosaki",category:"Business",isbn:"9781612681139",year:2017,status:"available",cover:"https://covers.openlibrary.org/b/isbn/9781612681139-L.jpg",location:"Floor 1 • Rack B3 • Shelf 1",description:"A popular introduction to financial thinking and personal finance."},
{id:44,title:"The Intelligent Investor",author:"Benjamin Graham",category:"Business",isbn:"9780060555665",year:2006,status:"reserved",cover:"https://covers.openlibrary.org/b/isbn/9780060555665-L.jpg",location:"Floor 1 • Rack B3 • Shelf 2",description:"A classic guide to value investing and financial decision-making."},
{id:45,title:"Freakonomics",author:"Steven D. Levitt & Stephen J. Dubner",category:"Economics",isbn:"9780060731335",year:2005,status:"available",cover:"https://covers.openlibrary.org/b/isbn/9780060731335-L.jpg",location:"Floor 1 • Rack B3 • Shelf 3",description:"An unconventional exploration of economics and everyday questions."},
{id:46,title:"Prisoners of Geography",author:"Tim Marshall",category:"Geography",isbn:"9781501121470",year:2015,status:"available",cover:"https://covers.openlibrary.org/b/isbn/9781501121470-L.jpg",location:"Floor 1 • Rack A4 • Shelf 1",description:"An accessible look at how mountains, rivers, borders and geography shape the choices and political power of nations."}
];

let libraryBooks = localBooks;           // replaced by Supabase data when connected
let saved = JSON.parse(localStorage.getItem("libraxSaved") || "[]");
let currentUser = null;

function navigateTo(page){
  document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"));
  const target=document.getElementById(page);
  if(target) target.classList.add("active");
  window.scrollTo({top:0,behavior:"smooth"});
  if(page==="books") renderBooks();
  if(page==="library") renderSaved();
  if(page==="shelf") showFloor(1,document.querySelector(".floor-tabs button"));
}

document.querySelectorAll("[data-page]").forEach(a=>{
  a.addEventListener("click",e=>{e.preventDefault();navigateTo(a.dataset.page);});
});

function card(book){
  return `<article class="book-card" onclick="showBook(${book.id})">
    <div class="cover"><img src="${book.cover}" alt="${book.title}" onerror="this.style.display='none';this.parentElement.innerHTML='📚'"></div>
    <div class="book-info">
      <h3>${book.title}</h3><p>${book.author}</p>
      <span class="status ${book.status}">${book.status==="soon"?"Coming Soon":book.status}</span>
    </div>
  </article>`;
}

function renderFeatured(){
  document.getElementById("featuredBooks").innerHTML=libraryBooks.slice(0,8).map(card).join("");
}

function setupFilters(){
  const select=document.getElementById("categoryFilter");
  [...new Set(libraryBooks.map(b=>b.category))].sort().forEach(c=>{
    select.insertAdjacentHTML("beforeend",`<option>${c}</option>`);
  });
}

function renderBooks(){
  const q=(document.getElementById("bookSearch")?.value||"").toLowerCase();
  const cat=document.getElementById("categoryFilter")?.value||"";
  const status=document.getElementById("statusFilter")?.value||"";
  const results=libraryBooks.filter(b=>
    (!q || [b.title,b.author,b.category,b.isbn].join(" ").toLowerCase().includes(q)) &&
    (!cat || b.category===cat) && (!status || b.status===status)
  );
  const box=document.getElementById("bookResults");
  if(!box)return;
  box.innerHTML=results.length?results.map(card).join(""):`<div class="empty">No books found. Try another search.</div>`;
}

function showBook(id){
  const b=libraryBooks.find(x=>x.id===id);
  if(!b)return;
  navigateTo("details");
  document.getElementById("bookDetails").innerHTML=`
    <div class="book-detail">
      <div class="detail-cover"><img src="${b.cover}" alt="${b.title}" onerror="this.style.display='none'"></div>
      <div class="detail-content">
        <span class="eyebrow">${b.category}</span>
        <h1>${b.title}</h1><strong>by ${b.author}</strong>
        <p>${b.description}</p>
        <div class="meta">
          <div><b>ISBN</b><br>${b.isbn}</div><div><b>Published</b><br>${b.year}</div>
          <div><b>Status</b><br>${b.status}</div><div><b>Location</b><br>${b.location}</div>
        </div>
        ${b.returnDate?`<p>Expected return: <b>${b.returnDate}</b></p>`:""}
        ${b.availableDate?`<p>Available from: <b>${b.availableDate}</b></p>`:""}
        <div class="action-row">
          <button class="primary" onclick="saveBook(${b.id})">${saved.includes(b.id)?"✓ Saved":"＋ Save to My Library"}</button>
          <button class="secondary" onclick="navigateTo('shelf');setTimeout(()=>highlightShelf(${b.id}),100)">📍 Find shelf</button>
        </div>
      </div>
    </div>`;
}

function saveBook(id){
  const removing=saved.includes(id);
  if(removing) saved.splice(saved.indexOf(id),1); else saved.push(id);
  localStorage.setItem("libraxSaved",JSON.stringify(saved));
  if(currentUser && LibraXDB.enabled){
    (removing?LibraXDB.unsaveBook(currentUser.id,id):LibraXDB.saveBook(currentUser.id,id))
      .then(r=>{if(r?.error)console.error("Supabase save:",r.error.message);});
  }
  showBook(id); updateSavedCount();
}

function renderSaved(){
  const box=document.getElementById("savedBooks");
  const books=libraryBooks.filter(b=>saved.includes(b.id));
  box.innerHTML=books.length?books.map(card).join(""):`<div class="empty">No saved books yet. Open a book and choose “Save to My Library”.</div>`;
  updateSavedCount();
}

function updateSavedCount(){document.getElementById("savedCount").textContent=saved.length;}

function searchFromHome(){
  const value=document.getElementById("homeSearch").value;
  document.getElementById("bookSearch").value=value;
  navigateTo("books");renderBooks();
}

function quickSearch(value){
  document.getElementById("bookSearch").value=value;
  navigateTo("books");renderBooks();
}

function renderCategories(){
  const counts={};
  libraryBooks.forEach(b=>counts[b.category]=(counts[b.category]||0)+1);
  document.getElementById("categories").innerHTML=Object.entries(counts).sort((a,b)=>b[1]-a[1]).slice(0,12).map(([c,n])=>
    `<div class="category" onclick="quickSearch('${c.replace(/'/g,"\\'")}')"><strong>${c}</strong><small>${n} books</small></div>`
  ).join("");
}

function showFloor(floor,button){
  document.querySelectorAll(".floor-tabs button").forEach(b=>b.classList.remove("active"));
  if(button)button.classList.add("active");
  const books=libraryBooks.filter(b=>b.location.startsWith(`Floor ${floor}`));
  const racks={};
  books.forEach(b=>{const rack=b.location.match(/Rack ([^•]+)/)?.[1]?.trim()||"Unknown";if(!racks[rack])racks[rack]=[];racks[rack].push(b);});
  const map=document.getElementById("shelfMap");
  map.innerHTML=Object.entries(racks).map(([rack,items])=>`
    <div class="rack"><strong>Rack ${rack}</strong><p>${items.map(b=>`${b.title} • ${b.location.split("•").pop().trim()}`).join("<br>")}</p></div>
  `).join("") || `<div class="rack"><strong>Floor ${floor}</strong><p>No catalogue items assigned yet.</p></div>`;
}

function highlightShelf(id){
  const b=libraryBooks.find(x=>x.id===id);
  if(b)alert(`📍 ${b.title}\n\n${b.location}`);
}

function openGuide(){document.getElementById("guide").classList.add("open");document.getElementById("guideInput").focus();}
function closeGuide(){document.getElementById("guide").classList.remove("open");}

function addMessage(text,type="bot"){
  const box=document.getElementById("guideMessages");
  box.insertAdjacentHTML("beforeend",`<div class="${type==="user"?"user-message":"bot-message"}">${text}</div>`);
  box.scrollTop=box.scrollHeight;
}

function askGuide(text){openGuide();document.getElementById("guideInput").value=text;sendGuide();}

function sendGuide(){
  const input=document.getElementById("guideInput");
  const q=input.value.trim(); if(!q)return;
  addMessage(q,"user");input.value="";
  const lower=q.toLowerCase();
  let reply="I can help you search books, find shelves, check availability, or suggest something to read.";
  const found=libraryBooks.find(b=>lower.includes(b.title.toLowerCase()) || lower.includes(b.author.toLowerCase()));
  if(found){
    reply=`📚 <b>${found.title}</b><br>${found.description}<br><br>📍 ${found.location}<br>Availability: <b>${found.status}</b>`;
  }else if(lower.includes("computer")||lower.includes("program")||lower.includes("coding")||lower.includes("cs")){
    const b=libraryBooks.filter(x=>x.category==="Computer Science"&&x.status==="available").slice(0,4);
    reply=`💻 Try these Computer Science books:<br>${b.map(x=>`• <b>${x.title}</b>`).join("<br>")}`;
  }else if(lower.includes("habit")||lower.includes("self")||lower.includes("productivity")||lower.includes("growth")){
    const b=libraryBooks.filter(x=>x.category==="Self Development");
    reply=`🌱 For self-development, I recommend:<br>${b.map(x=>`• <b>${x.title}</b>`).join("<br>")}`;
  }else if(lower.includes("science")||lower.includes("space")||lower.includes("universe")){
    const b=libraryBooks.filter(x=>x.category==="Science");
    reply=`🔭 For science and the universe:<br>${b.map(x=>`• <b>${x.title}</b>`).join("<br>")}`;
  }else if(lower.includes("available")){
    const b=libraryBooks.filter(x=>x.status==="available").slice(0,6);
    reply=`✅ Here are some currently available books:<br>${b.map(x=>`• ${x.title}`).join("<br>")}`;
  }else if(lower.includes("novel")||lower.includes("fiction")||lower.includes("story")){
    const b=libraryBooks.filter(x=>["Novel","Literature","Fantasy"].includes(x.category)).slice(0,6);
    reply=`📖 If you want fiction, try:<br>${b.map(x=>`• <b>${x.title}</b>`).join("<br>")}`;
  }else if(lower.includes("hello")||lower.includes("hi")||lower.includes("hey")){
    reply="Hi Boss! 👋 What are we exploring today?";
  }
  setTimeout(()=>addMessage(reply),250);
}

function guideArticle(topic){
  openGuide();
  const texts={algorithms:"Algorithms are step-by-step methods for solving problems efficiently. Start with Introduction to Algorithms or The Pragmatic Programmer.",habits:"Atomic Habits and The Power of Habit are great starting points for understanding habits and behaviour.",science:"Try A Brief History of Time or Cosmos for a broad introduction to the universe and scientific thinking.",history:"Sapiens is a strong starting point for a big-picture look at human history."};
  addMessage(texts[topic]||"I can recommend a related book.");
}

/* ---------- Supabase auth ---------- */
function showLogin(){
  if(!LibraXDB.enabled){alert("Supabase isn't configured yet.\n\nAdd your project URL and anon key in supabase.js.");return;}
  if(currentUser){
    if(confirm(`Signed in as ${currentUser.email}\n\nSign out?`)) LibraXDB.signOut();
    return;
  }
  setAuthMsg("Sign in to sync your saved books.");
  document.getElementById("authModal").classList.add("open");
  document.getElementById("authEmail").focus();
}
function closeAuth(){document.getElementById("authModal").classList.remove("open");}
function setAuthMsg(t,isError){const m=document.getElementById("authMsg");m.textContent=t;m.classList.toggle("error",!!isError);}
function authFields(){
  const email=document.getElementById("authEmail").value.trim();
  const password=document.getElementById("authPassword").value;
  if(!email||password.length<6){setAuthMsg("Enter an email and a password of at least 6 characters.",true);return null;}
  return {email,password};
}
async function authSignIn(){
  const f=authFields();if(!f)return;
  const {error}=await LibraXDB.signIn(f.email,f.password);
  if(error)setAuthMsg(error.message,true);else closeAuth();
}
async function authSignUp(){
  const f=authFields();if(!f)return;
  const {data,error}=await LibraXDB.signUp(f.email,f.password);
  if(error){setAuthMsg(error.message,true);return;}
  if(data.session)closeAuth();
  else setAuthMsg("Account created! Check your email to confirm, then sign in.");
}

// Merge local saves into the account on login, then use the account's list
async function handleAuthChange(user){
  const prevUser=currentUser;
  currentUser=user;
  const btn=document.getElementById("loginBtn");
  btn.textContent=user?"Logout":"Student Login";
  if(user){
    const remote=await LibraXDB.getSavedIds();
    const local=JSON.parse(localStorage.getItem("libraxSaved")||"[]");
    const missing=local.filter(id=>!remote.includes(id)&&libraryBooks.some(b=>b.id===id));
    for(const id of missing) await LibraXDB.saveBook(user.id,id);
    saved=[...new Set([...remote,...missing])];
    localStorage.setItem("libraxSaved",JSON.stringify(saved));
  }else if(prevUser){
    saved=[];localStorage.setItem("libraxSaved","[]");   // logged out: don't leave the last student's saves on a shared PC
  }
  renderSaved();updateSavedCount();
}

async function initSupabase(){
  if(!LibraXDB.enabled)return;           // no config -> keep using the built-in catalogue
  const books=await LibraXDB.getBooks();
  if(books&&books.length){
    libraryBooks=books;
    document.getElementById("bookCount").textContent=libraryBooks.length;
    document.getElementById("categoryFilter").innerHTML='<option value="">All categories</option>';
    renderFeatured();setupFilters();renderBooks();renderCategories();renderSaved();
    showFloor(1,document.querySelector(".floor-tabs button"));
  }
  LibraXDB.onAuthChange(handleAuthChange);
  handleAuthChange(await LibraXDB.getUser());
}

document.getElementById("bookCount").textContent=libraryBooks.length;
renderFeatured();setupFilters();renderBooks();renderCategories();renderSaved();updateSavedCount();showFloor(1,document.querySelector(".floor-tabs button"));
initSupabase();
