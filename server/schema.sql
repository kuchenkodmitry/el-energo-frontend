CREATE TABLE IF NOT EXISTS posts (
  id SERIAL PRIMARY KEY,
  category VARCHAR(50) NOT NULL,
  title TEXT NOT NULL,
  description TEXT,
  image TEXT,
  url TEXT,
  details JSONB
);

