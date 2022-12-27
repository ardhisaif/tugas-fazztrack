CREATE TABLE booking(
    booking_id SERIAL PRIMARY KEY,
    schedule_id SERIAL,
    username VARCHAR(50),
    seat VARCHAR(20)
    paid BOOLEAN NOT NULL DEFAULT FALSE,
    ticket_used BOOLEAN NOT NULL DEFAULT FALSE,
    qr_code VARCHAR(70),
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMP,
    CONSTRAINT fk_schedule
    	FOREIGN KEY(schedule_id)
            REFERENCES schedule(schedule_id)
);