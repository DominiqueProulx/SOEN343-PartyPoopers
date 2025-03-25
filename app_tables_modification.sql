CREATE SEQUENCE IF NOT EXISTS app_user_uid_seq;

ALTER TABLE public.app_user
    ALTER COLUMN uid SET DEFAULT nextval('app_user_uid_seq');

-- If you've already run the table data population, uncomment next line
-- ALTER SEQUENCE app_user_uid_seq RESTART WITH 5;