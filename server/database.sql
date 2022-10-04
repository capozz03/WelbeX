create TABLE rating (
  id SERIAL PRIMARY KEY,
  date DATE NOT NULL,
  name VARCHAR(255),
  count NUMERIC,
  distance NUMERIC
);

create TABLE options (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255),
  value VARCHAR(255)
);