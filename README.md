Description
An ecommerce store built with MERN stack, and utilizes third party API's. This ecommerce store enable three main different flows or implementations:

Buyers browse the store categories, products and brands
Sellers or Merchants manage their own brand component
Admins manage and control the entire store components
features:
Node provides the backend environment for this application
Express middleware is used to handle requests, routes
Mongoose schemas to model the application data
React for displaying UI components
Redux to manage application's state
Redux Thunk middleware to handle asynchronous redux actions
Quickstart Guide


Clone the repository

$ git clone https://github.com/Ganeshkumarg024/MERN-ECOM.git
Edit the dockercompose.yml file and update the the values for MONGO_URI and JWT_SECRET

Then simply start the docker compose:

$ docker compose -f dockercompose.yml up
Database Seed
The seed command will create an admin user in the database
The email and password are passed with the command as arguments
Like below command, replace brackets with email and password.
For more information, see code here
npm run seed:db [email-***@****.com] [password-******] // This is just an example.
Demo
This application is deployed on Vercel Please check it out 😄 here.

See admin dashboard demo

Install
Some basic Git commands are:

$ git clone https://github.com/Ganeshkumarg024/MERN-ECOM.git
$ cd project
$ npm install
Start development
$ npm run dev
Simple build for production
$ npm run build
Run build for production
$ npm start
Languages & tools
Node

Express

Mongoose

React

Admin Pannel
![Screenshot (204)](https://github.com/Ganeshkumarg024/MERN-ECOM/assets/126844190/2fd35b9a-cd62-484d-a654-39b82a48b8af)

![Screenshot (205)](https://github.com/Ganeshkumarg024/MERN-ECOM/assets/126844190/dc5134b9-9c82-49b7-be59-6947f5b1fc15)

E Commerse Pages
![Screenshot (209)](https://github.com/Ganeshkumarg024/MERN-ECOM/assets/126844190/28f72652-9f57-40e1-8e87-cbfa18e8da0b)
![Screenshot (206)](https://github.com/Ganeshkumarg024/MERN-ECOM/assets/126844190/d0cf93a8-30e2-4386-8773-52404a36b6cb)
![Screenshot (207)](https://github.com/Ganeshkumarg024/MERN-ECOM/assets/126844190/692e0b7a-6ed1-4e32-91fd-1e3a62074670)
![Screenshot (208)](https://github.com/Ganeshkumarg024/MERN-ECOM/assets/126844190/5ea2b3c6-0e0f-4ab8-82d5-81012124ee0e)![Screenshot (213)](https://github.com/Ganeshkumarg024/MERN-ECOM/assets/126844190/b3225f05-8190-4fbb-9572-b37f5c4ac719)
![Screenshot (214)](https://github.com/Ganeshkumarg024/MERN-ECOM/assets/126844190/1b33c9e3-994a-46f3-808b-5d952263fde5)
![Screenshot (210)](https://github.com/Ganeshkumarg024/MERN-ECOM/assets/126844190/430f79d6-23ae-470c-bc48-35e519468a8f)
![Screenshot (211)](https://github.com/Ganeshkumarg024/MERN-ECOM/assets/126844190/3c030b48-7d8e-4e88-bb66-7b84083ff980)

![Screenshot (212)](https://github.com/Ganeshkumarg024/MERN-ECOM/assets/126844190/ecb7b412-4539-4726-a038-2a317492fed3)
