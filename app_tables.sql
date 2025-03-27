-- Application Database Schema
-- This SQL file creates all necessary tables for the application
-- Usage: psql -U postgres -d appdb -f schema.sql

-- First, create the enum types (these must be created before tables that use them)
CREATE TYPE category AS ENUM (
    'Mathematics',
    'Computer Science',
    'Physics',
    'Biology',
    'Chemistry',
    'Engineering',
    'Artificial Intelligence',
    'Machine Learning',
    'Cybersecurity',
    'Data Science',
    'Economics',
    'Philosophy',
    'Linguistics',
    'Psychology',
    'History',
    'Literature',
    'Political Science',
    'Sociology',
    'Environmental Science',
    'Education'
);

CREATE TYPE event_type AS ENUM (
    'Conference',
    'Workshop',
    'Seminar',
    'Hackaton',
    'NetworkingEvent',
    'CareerFair',
    'Lectures'
);

-- Create User table
CREATE TABLE IF NOT EXISTS app_user (
    uid Integer PRIMARY KEY,
    user_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    user_password VARCHAR(100) NOT NULL,
    favorites category[],
    email_subscribed BOOLEAN
);

-- Add constraint for favorites array length
ALTER TABLE app_user
ADD CONSTRAINT max_four_favorites 
CHECK (array_length(favorites, 1) <= 4);

-- Create Event table
CREATE TABLE IF NOT EXISTS app_event (
    eid SERIAL PRIMARY KEY,
    organizer_id INTEGER REFERENCES app_user(uid),
    event_category category NOT NULL,
    title VARCHAR(200) NOT NULL,
    description TEXT,
    event_date TIMESTAMP NOT NULL,
    location VARCHAR(200),
    max_attendees INTEGER,
    type event_type
);

-- Create Payment table
CREATE TABLE IF NOT EXISTS payment (
    pid SERIAL PRIMARY KEY,
    eid INTEGER REFERENCES app_event(eid),
    attendee INTEGER REFERENCES app_user(uid),
    amount DECIMAL(10,2) NOT NULL,
    purchase_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create Ticket table
CREATE TABLE IF NOT EXISTS ticket (
    tid SERIAL PRIMARY KEY,
    event_id INTEGER REFERENCES app_event(eid),
    attendee_id INTEGER REFERENCES app_user(uid),
    payment_id INTEGER REFERENCES payment(pid)
);

-- Add indices for better performance
CREATE INDEX IF NOT EXISTS idx_event_organizer ON app_event(organizer_id);
CREATE INDEX IF NOT EXISTS idx_ticket_event ON ticket(event_id);
CREATE INDEX IF NOT EXISTS idx_ticket_attendee ON ticket(attendee_id);


-------------------------------------------------------------------


CREATE TABLE IF NOT EXISTS event_detail (
    eid INTEGER PRIMARY KEY REFERENCES app_event(eid),
    sponsor_infos TEXT,
    speaker_infos TEXT
);

CREATE TABLE IF NOT EXISTS event_agenda (
    agenda_id SERIAL PRIMARY KEY,
    eid INTEGER REFERENCES app_event(eid),
    time_slot TIME NOT NULL,
    topic TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS promotional_content (
    id SERIAL PRIMARY KEY,
    file_path TEXT NOT NULL,
    uploaded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
