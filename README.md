# mod-fe-backend
This is the backend NestJS project for ModuleFederation using MicroFrontends POC. This projects holds the endpoints for login, register, get user info and update favorites

## Run the project
1. Clone the repository.
2. Do `npm install`
3. Go to [neon.tech](https://neon.tech), login/register and create a project. Choose prisma to be ORM. Copy the `.env` value from the dashboard and update it in code.
4. Initialize prisma using `npx prisma migrate dev --name create-schema`. This will create a migrations folder in prisma folder.
5. Run locally using `npm run start`
6. Test the endpoints via postman (baseURL: http://localhost:3000/)