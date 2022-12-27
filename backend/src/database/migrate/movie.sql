CREATE TABLE movie (
	movie_id SERIAL PRIMARY KEY,
	name VARCHAR(100) NOT NULL,
	directed_by VARCHAR(50),
	casts TEXT,
	genres TEXT,
	release_date TIMESTAMP, 
	duration TIME,
	synopsis TEXT,
	image VARCHAR,
	created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMP
);