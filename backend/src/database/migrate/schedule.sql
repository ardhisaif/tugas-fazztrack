CREATE TABLE schedule (
	schedule_id SERIAL PRIMARY KEY,
	movie_id INT,
    price NUMERIC(7,2),
    premiere VARCHAR(30),
    location VARCHAR(100),
    date_start TIMESTAMP,
    date_end TIMESTAMP,
    time TEXT,
	created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMP,
    CONSTRAINT fk_movie
    	FOREIGN KEY(movie_id)
            REFERENCES movie(movie_id)
);