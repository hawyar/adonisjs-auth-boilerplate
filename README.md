## AdonisJS Template - with Authentication  ⚔️  

> A minimal AdonisJS template that includes user authentication


Routes

### Auth Routes Info

| Action | Route      | req                       | auth                | redirect   |
|--------|------------|---------------------------|---------------------|------------|
| POST   | /register  | username, email, password |                     | /dashboard |
| POST   | /login     | email, password           | auth.login()        | /dashbaord |
| POST   | /logout    | in session user           | auth.logout()       | /          |
| POST   | /dashboard |                           | auth.authenticate() |            |

