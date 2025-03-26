CREATE SEQUENCE IF NOT EXISTS app_user_uid_seq;

ALTER TABLE public.app_user
    ALTER COLUMN uid SET DEFAULT nextval('app_user_uid_seq');

-- If you've already run the table data population, uncomment next line
-- ALTER SEQUENCE app_user_uid_seq RESTART WITH 5;


--attendee_event
CREATE TABLE attendee_event (
    uid INT NOT NULL,
    eid INT NOT NULL,
    PRIMARY KEY (uid, eid),
    FOREIGN KEY (uid) REFERENCES app_user(uid) ON DELETE CASCADE,
    FOREIGN KEY (eid) REFERENCES app_event(eid) ON DELETE CASCADE
);
