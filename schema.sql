-- =========================================================
-- LibraX Smart Library - Supabase schema
-- Run this in: Supabase Dashboard > SQL Editor > New query
-- =========================================================

create table if not exists public.books (
  id             bigint primary key,
  title          text not null,
  author         text not null,
  category       text not null,
  isbn           text,
  year           int,
  status         text not null default 'available'
                 check (status in ('available','borrowed','reserved','soon')),
  cover          text,
  location       text,
  description    text,
  return_date    text,
  available_date text,
  created_at     timestamptz not null default now()
);

create table if not exists public.saved_books (
  user_id    uuid   not null references auth.users(id) on delete cascade,
  book_id    bigint not null references public.books(id) on delete cascade,
  created_at timestamptz not null default now(),
  primary key (user_id, book_id)
);

-- Row Level Security
alter table public.books       enable row level security;
alter table public.saved_books enable row level security;

drop policy if exists "Anyone can read books" on public.books;
create policy "Anyone can read books"
  on public.books for select using (true);

drop policy if exists "Users read own saved books" on public.saved_books;
create policy "Users read own saved books"
  on public.saved_books for select using (auth.uid() = user_id);

drop policy if exists "Users save own books" on public.saved_books;
create policy "Users save own books"
  on public.saved_books for insert with check (auth.uid() = user_id);

drop policy if exists "Users remove own saved books" on public.saved_books;
create policy "Users remove own saved books"
  on public.saved_books for delete using (auth.uid() = user_id);

-- Seed catalogue (46 books)
insert into public.books (id,title,author,category,isbn,year,status,cover,location,description,return_date,available_date) values
(1,'Atomic Habits','James Clear','Self Development','9780735211292',2018,'available','https://covers.openlibrary.org/b/isbn/9780735211292-L.jpg','Floor 1 • Rack B2 • Shelf 3','A practical guide to building good habits and breaking bad ones.',null,null),
(2,'The Alchemist','Paulo Coelho','Novel','9780062315007',1988,'available','https://covers.openlibrary.org/b/isbn/9780062315007-L.jpg','Floor 1 • Rack A2 • Shelf 2','A philosophical novel about dreams, destiny and discovering one''s purpose.',null,null),
(3,'Clean Code','Robert C. Martin','Computer Science','9780132350884',2008,'borrowed','https://covers.openlibrary.org/b/isbn/9780132350884-L.jpg','Floor 2 • Rack C4 • Shelf 3','A classic guide to writing readable, maintainable and professional software.','18 October 2026',null),
(4,'1984','George Orwell','Literature','9780451524935',1949,'reserved','https://covers.openlibrary.org/b/isbn/9780451524935-L.jpg','Floor 1 • Rack A1 • Shelf 4','A dystopian novel exploring surveillance, freedom and political control.',null,null),
(5,'The Hobbit','J. R. R. Tolkien','Fantasy','9780547928227',1937,'soon','https://covers.openlibrary.org/b/isbn/9780547928227-L.jpg','Floor 1 • Rack A2 • Shelf 5','Bilbo Baggins joins an unexpected adventure across Middle-earth.',null,'20 October 2026'),
(6,'Pride and Prejudice','Jane Austen','Literature','9780141439518',1813,'available','https://covers.openlibrary.org/b/isbn/9780141439518-L.jpg','Floor 1 • Rack A1 • Shelf 2','A celebrated novel about relationships, society and first impressions.',null,null),
(7,'The Pragmatic Programmer','Andrew Hunt & David Thomas','Computer Science','9780135957059',2019,'available','https://covers.openlibrary.org/b/isbn/9780135957059-L.jpg','Floor 2 • Rack C1 • Shelf 2','Practical techniques and principles for becoming a better software developer.',null,null),
(8,'Introduction to Algorithms','Thomas H. Cormen et al.','Computer Science','9780262046305',2022,'borrowed','https://covers.openlibrary.org/b/isbn/9780262046305-L.jpg','Floor 2 • Rack C2 • Shelf 1','A comprehensive textbook covering algorithms and data structures.','21 October 2026',null),
(9,'Computer Networks','Andrew S. Tanenbaum','Computer Science','9780132126953',2010,'available','https://covers.openlibrary.org/b/isbn/9780132126953-L.jpg','Floor 2 • Rack C3 • Shelf 2','A comprehensive introduction to computer networking concepts.',null,null),
(10,'Database System Concepts','Abraham Silberschatz','Computer Science','9780078022159',2019,'available','https://covers.openlibrary.org/b/isbn/9780078022159-L.jpg','Floor 2 • Rack C4 • Shelf 1','A detailed introduction to database management systems.',null,null),
(11,'Operating System Concepts','Abraham Silberschatz','Computer Science','9781119800361',2021,'reserved','https://covers.openlibrary.org/b/isbn/9781119800361-L.jpg','Floor 2 • Rack C5 • Shelf 2','Fundamental concepts and principles of modern operating systems.',null,null),
(12,'Artificial Intelligence: A Modern Approach','Stuart Russell & Peter Norvig','Artificial Intelligence','9780134610993',2021,'available','https://covers.openlibrary.org/b/isbn/9780134610993-L.jpg','Floor 2 • Rack C6 • Shelf 1','A comprehensive textbook covering artificial intelligence.',null,null),
(13,'Head First Java','Kathy Sierra & Bert Bates','Computer Science','9780596009205',2005,'available','https://covers.openlibrary.org/b/isbn/9780596009205-L.jpg','Floor 2 • Rack C2 • Shelf 4','An accessible introduction to Java programming.',null,null),
(14,'Python Crash Course','Eric Matthes','Computer Science','9781593279288',2019,'available','https://covers.openlibrary.org/b/isbn/9781593279288-L.jpg','Floor 2 • Rack C1 • Shelf 4','A hands-on introduction to Python programming.',null,null),
(15,'A Brief History of Time','Stephen Hawking','Science','9780553380163',1998,'available','https://covers.openlibrary.org/b/isbn/9780553380163-L.jpg','Floor 3 • Rack D1 • Shelf 2','An accessible exploration of cosmology, time and the universe.',null,null),
(16,'Cosmos','Carl Sagan','Science','9780345539434',2013,'available','https://covers.openlibrary.org/b/isbn/9780345539434-L.jpg','Floor 3 • Rack D1 • Shelf 4','A journey through science, history and humanity''s place in the universe.',null,null),
(17,'The Selfish Gene','Richard Dawkins','Biology','9780198788607',2016,'borrowed','https://covers.openlibrary.org/b/isbn/9780198788607-L.jpg','Floor 3 • Rack E2 • Shelf 2','An influential exploration of evolution from the perspective of genes.','25 October 2026',null),
(18,'Sapiens','Yuval Noah Harari','History','9780062316097',2015,'available','https://covers.openlibrary.org/b/isbn/9780062316097-L.jpg','Floor 1 • Rack A3 • Shelf 1','A broad history of humankind from early humans to modern society.',null,null),
(19,'Calculus','James Stewart','Mathematics','9781285740621',2015,'available','https://covers.openlibrary.org/b/isbn/9781285740621-L.jpg','Floor 3 • Rack D3 • Shelf 1','A widely used textbook covering differential and integral calculus.',null,null),
(20,'Discrete Mathematics and Its Applications','Kenneth H. Rosen','Mathematics','9780073383095',2012,'available','https://covers.openlibrary.org/b/isbn/9780073383095-L.jpg','Floor 3 • Rack D4 • Shelf 2','A comprehensive introduction to discrete mathematics.',null,null),
(21,'Linear Algebra and Its Applications','David C. Lay','Mathematics','9780321982384',2015,'reserved','https://covers.openlibrary.org/b/isbn/9780321982384-L.jpg','Floor 3 • Rack D4 • Shelf 4','A practical introduction to linear algebra and its applications.',null,null),
(22,'Chemistry: The Central Science','Theodore L. Brown et al.','Chemistry','9780134414232',2017,'available','https://covers.openlibrary.org/b/isbn/9780134414232-L.jpg','Floor 3 • Rack E1 • Shelf 1','A comprehensive textbook introducing fundamental chemistry concepts.',null,null),
(23,'Organic Chemistry','Paula Yurkanis Bruice','Chemistry','9780134042282',2016,'available','https://covers.openlibrary.org/b/isbn/9780134042282-L.jpg','Floor 3 • Rack E1 • Shelf 3','A detailed introduction to organic chemistry.',null,null),
(24,'Campbell Biology','Jane B. Reece et al.','Biology','9780135188743',2019,'available','https://covers.openlibrary.org/b/isbn/9780135188743-L.jpg','Floor 3 • Rack E2 • Shelf 1','A major introductory biology textbook.',null,null),
(25,'Fundamentals of Physics','Halliday, Resnick & Walker','Physics','9781118230718',2013,'available','https://covers.openlibrary.org/b/isbn/9781118230718-L.jpg','Floor 3 • Rack E3 • Shelf 1','A comprehensive introduction to physics.',null,null),
(26,'To Kill a Mockingbird','Harper Lee','Novel','9780061120084',2006,'available','https://covers.openlibrary.org/b/isbn/9780061120084-L.jpg','Floor 1 • Rack A2 • Shelf 1','A classic novel exploring justice, prejudice and childhood.',null,null),
(27,'The Great Gatsby','F. Scott Fitzgerald','Novel','9780743273565',2004,'available','https://covers.openlibrary.org/b/isbn/9780743273565-L.jpg','Floor 1 • Rack A2 • Shelf 3','A classic American novel set during the Jazz Age.',null,null),
(28,'Jane Eyre','Charlotte Brontë','Literature','9780141441146',2008,'borrowed','https://covers.openlibrary.org/b/isbn/9780141441146-L.jpg','Floor 1 • Rack A1 • Shelf 5','A classic coming-of-age novel about independence and love.','23 October 2026',null),
(29,'Animal Farm','George Orwell','Literature','9780451526342',2003,'available','https://covers.openlibrary.org/b/isbn/9780451526342-L.jpg','Floor 1 • Rack A1 • Shelf 6','A political allegorical novella about power and revolution.',null,null),
(30,'The Picture of Dorian Gray','Oscar Wilde','Literature','9780141439570',2003,'available','https://covers.openlibrary.org/b/isbn/9780141439570-L.jpg','Floor 1 • Rack A1 • Shelf 7','A Gothic novel exploring beauty, morality and identity.',null,null),
(31,'Wuthering Heights','Emily Brontë','Literature','9780141439556',2003,'available','https://covers.openlibrary.org/b/isbn/9780141439556-L.jpg','Floor 1 • Rack A1 • Shelf 8','A classic novel of passion, revenge and social class.',null,null),
(32,'Charlotte''s Web','E. B. White','Kids','9780064400558',2001,'available','https://covers.openlibrary.org/b/isbn/9780064400558-L.jpg','Floor 5 • Rack K1 • Shelf 1','A beloved children''s story about friendship and loyalty.',null,null),
(33,'Matilda','Roald Dahl','Kids','9780142410370',2007,'available','https://covers.openlibrary.org/b/isbn/9780142410370-L.jpg','Floor 5 • Rack K1 • Shelf 2','A clever young girl discovers her extraordinary abilities.',null,null),
(34,'Diary of a Wimpy Kid','Jeff Kinney','Kids','9781419741854',2018,'borrowed','https://covers.openlibrary.org/b/isbn/9781419741854-L.jpg','Floor 5 • Rack K2 • Shelf 1','The humorous diary of middle-school student Greg Heffley.','19 October 2026',null),
(35,'Harry Potter and the Sorcerer''s Stone','J. K. Rowling','Kids','9780590353427',1998,'reserved','https://covers.openlibrary.org/b/isbn/9780590353427-L.jpg','Floor 5 • Rack K2 • Shelf 4','Harry Potter discovers the magical world and begins his journey.',null,null),
(36,'Watchmen','Alan Moore & Dave Gibbons','Comics','9781779501127',2019,'available','https://covers.openlibrary.org/b/isbn/9781779501127-L.jpg','Floor 5 • Rack K3 • Shelf 1','A landmark graphic novel exploring superheroes, power and morality.',null,null),
(37,'Batman: Year One','Frank Miller & David Mazzucchelli','Comics','9781401202360',2005,'available','https://covers.openlibrary.org/b/isbn/9781401202360-L.jpg','Floor 5 • Rack K3 • Shelf 2','A celebrated retelling of Batman''s first year as a hero.',null,null),
(38,'Marvels','Kurt Busiek & Alex Ross','Comics','9780785111703',2004,'available','https://covers.openlibrary.org/b/isbn/9780785111703-L.jpg','Floor 5 • Rack K3 • Shelf 3','The Marvel Universe viewed through the eyes of an ordinary photographer.',null,null),
(39,'Thinking, Fast and Slow','Daniel Kahneman','Psychology','9780374533557',2011,'available','https://covers.openlibrary.org/b/isbn/9780374533557-L.jpg','Floor 1 • Rack B2 • Shelf 5','An exploration of two systems that influence human thinking.',null,null),
(40,'Deep Work','Cal Newport','Self Development','9781455586691',2016,'available','https://covers.openlibrary.org/b/isbn/9781455586691-L.jpg','Floor 1 • Rack B2 • Shelf 6','Strategies for focused work in an increasingly distracted world.',null,null),
(41,'How to Win Friends and Influence People','Dale Carnegie','Self Development','9780671027032',1998,'available','https://covers.openlibrary.org/b/isbn/9780671027032-L.jpg','Floor 1 • Rack B2 • Shelf 7','Classic principles for communication and relationships.',null,null),
(42,'The Power of Habit','Charles Duhigg','Self Development','9780812981605',2012,'available','https://covers.openlibrary.org/b/isbn/9780812981605-L.jpg','Floor 1 • Rack B2 • Shelf 8','An exploration of how habits work and how they can be changed.',null,null),
(43,'Rich Dad Poor Dad','Robert T. Kiyosaki','Business','9781612681139',2017,'available','https://covers.openlibrary.org/b/isbn/9781612681139-L.jpg','Floor 1 • Rack B3 • Shelf 1','A popular introduction to financial thinking and personal finance.',null,null),
(44,'The Intelligent Investor','Benjamin Graham','Business','9780060555665',2006,'reserved','https://covers.openlibrary.org/b/isbn/9780060555665-L.jpg','Floor 1 • Rack B3 • Shelf 2','A classic guide to value investing and financial decision-making.',null,null),
(45,'Freakonomics','Steven D. Levitt & Stephen J. Dubner','Economics','9780060731335',2005,'available','https://covers.openlibrary.org/b/isbn/9780060731335-L.jpg','Floor 1 • Rack B3 • Shelf 3','An unconventional exploration of economics and everyday questions.',null,null),
(46,'Prisoners of Geography','Tim Marshall','Geography','9781501121470',2015,'available','https://covers.openlibrary.org/b/isbn/9781501121470-L.jpg','Floor 1 • Rack A4 • Shelf 1','An accessible look at how mountains, rivers, borders and geography shape the choices and political power of nations.',null,null)
on conflict (id) do update set
  title=excluded.title, author=excluded.author, category=excluded.category,
  isbn=excluded.isbn, year=excluded.year, status=excluded.status, cover=excluded.cover,
  location=excluded.location, description=excluded.description,
  return_date=excluded.return_date, available_date=excluded.available_date;
