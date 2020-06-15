# JOB SEARCH SITE

## Database Details

**Mysql is used as a local database and postgres database is used for deployment & all the database details are confidential**


## Project Structure

```
├───public
│   ├───css
│   ├───img
│   └───js
├───src
│   ├───controllers
│   ├───db
│   └───routes
└───views
    └───layouts
```
## Frontend Structure

1. **Public**

```
public
├───css
├───img
└───js
```
all the static files are present in a separate file named as **Public**  which contains images, css and javascript.

2. **views**

```
views
└───layouts
```
Views layer contains all the handlebars files that is being rendered as the request of the user as per their desire


## Backend Structure

```
src
├───controllers
├───db
└───routes
```
1. **Controllers**
Controllers layer contains all the functionality of the model of the database like creating a job profile or finding all the jobs.



2. **Routes**
Routes layer of the backend contains all the request handling procedures like GET or POST request.

- create a job profile  `POST /gigs/add` 
- find all jobs `GET /gigs`

3. **Db**
Db layer is used to define all the attributes of the job profile like.
- title
- technologies
- description
- budget
- email

### SERVER
 Server layer contains mainly all the basic npm packages that are required to run the project like express, express-handlerbars and where the server is hosted and works like the brain of the project.



