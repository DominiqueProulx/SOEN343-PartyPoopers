# SOEN343-PartyPoopers
## Steps for setting up project:
### Install requirements:
1. Download:
   
    -PostgreSQL
   
    -Node.js

3. Install all the dependencies in command line in dependencies.txt (npm install)
### Create database:
You can do this step through pgAdmin4 or command line.
1. Create a database named appdb
2. Create tables according to schema:
   
[app table sql](app_tables.sql)
[some app data to populate the tables](app_data.sql)

3. Modify db.js file if needed, but current configuration:
   
    -Password: "password"

### Run backend
1. cd to /app_backend
2. ```npm run dev```
### Run frontend
1. Open new terminal
2. cd to /app_frontend/app
3. ``` npm run dev ```
