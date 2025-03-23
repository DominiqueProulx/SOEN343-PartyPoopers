-- Insert sample users first (needed as organizers)
INSERT INTO app_user (uid, user_name, email, user_password, favorites, email_subscribed)
VALUES 
    (1, 'John Doe', 'john.doe@example.com', 'password123', ARRAY['Mathematics', 'Computer Science']::category[], TRUE),
    (2, 'Jane Smith', 'jane.smith@example.com', 'securepass', ARRAY['Physics', 'Artificial Intelligence']::category[], TRUE),
    (3, 'Alex Johnson', 'alex@example.com', 'alex2025', ARRAY['Biology', 'Data Science']::category[], FALSE),
    (4, 'Sarah Chen', 'sarah.chen@example.com', 'chen1234', ARRAY['Economics', 'Political Science']::category[], TRUE);

-- Now insert 10 different events
INSERT INTO app_event (organizer_id, event_category, title, description, event_date, location, max_attendees, type)
VALUES
    -- Mathematics events
    (1, 'Mathematics', 'Advanced Calculus Symposium', 'Join us for a deep dive into advanced calculus concepts and their applications in various fields.', '2025-05-15 09:00:00', 'University Math Building, Room 301', 50, 'Conference'),
    (2, 'Mathematics', 'Number Theory Workshop', 'A hands-on workshop exploring the fascinating world of number theory with top researchers.', '2025-04-20 13:00:00', 'Mathematics Research Center', 30, 'Workshop'),
    
    -- Computer Science events
    (1, 'Computer Science', 'Full-Stack Development Bootcamp', 'Intensive three-day bootcamp covering modern full-stack development techniques and frameworks.', '2025-05-10 08:30:00', 'Tech Hub Downtown', 25, 'Workshop'),
    (3, 'Computer Science', 'Algorithms and Data Structures Seminar', 'Deep dive into efficient algorithms and advanced data structures for complex problem-solving.', '2025-06-05 10:00:00', 'Computer Science Building, Room 204', 40, 'Seminar'),
    
    -- Physics event
    (2, 'Physics', 'Quantum Computing: Present and Future', 'Explore the current state and future potential of quantum computing with leading experts.', '2025-05-25 11:00:00', 'Physics Research Lab', 60, 'Lectures'),
    
    -- Biology event
    (3, 'Biology', 'Genomics and Personalized Medicine', 'Discover how advances in genomics are revolutionizing personalized medical treatments.', '2025-07-12 09:30:00', 'Life Sciences Building', 45, 'Conference'),
    
    -- Artificial Intelligence events
    (2, 'Artificial Intelligence', 'Neural Networks Master Class', 'Advanced techniques in designing, training, and optimizing neural networks for real-world applications.', '2025-04-30 14:00:00', 'AI Innovation Center', 35, 'Workshop'),
    (4, 'Artificial Intelligence', 'Ethical AI Development', 'Discussing ethical considerations and responsible practices in AI development and deployment.', '2025-06-15 15:30:00', 'Ethics in Technology Center', 70, 'Seminar'),
    
    -- Data Science event
    (3, 'Data Science', 'Big Data Analytics Hackathon', 'A 48-hour hackathon challenging teams to create innovative solutions using big data analytics.', '2025-05-20 09:00:00', 'Data Science Institute', 100, 'Hackaton'),
    
    -- Economics event
    (4, 'Economics', 'Sustainable Economics Forum', 'Exploring economic models that prioritize sustainability and environmental responsibility.', '2025-07-05 10:00:00', 'Economics Department Auditorium', 80, 'Conference');