
CREATE TABLE IF NOT EXISTS movies (
  id INTEGER PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description VARCHAR(255) NOT NULL,
  released_year INTEGER NOT NULL,
  popularity INTEGER NOT NULL ,
  poster_url TEXT,

  rating REAL DEFAULT  0 ,
  votes_count INTEGER DEFAULT 0 ,
  vote_average REAL DEFAULT  0 ,


  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);


