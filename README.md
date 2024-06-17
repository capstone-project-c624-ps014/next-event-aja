<H1 align ="center" >Event Aja</h1>
<h5  align ="center"> 
Increasing Quality Human Resources</h5>

![01](https://github.com/capstone-project-c624-ps014/.github/assets/111676859/38f18b46-e498-443d-8fb0-fde29d4694bd)

## Project Description
Event Aja is a platform that provides integrated solutions to facilitate collaboration between event owners, Event Organizers (EO), and sponsors in order to make various types of events a success. This platform helps event owners to find EOs and sponsors that suit their needs, while EOs and sponsors get the opportunity to gain income, branding and exposure through the selected event.

  * [Configuration and Setup](#configuration-and-setup)
  * [Technologies used](#technologies-used)
  * [Project Structure](#project-structure)
  * [Database Sturucture](#database-structure)
  * [Meet Our Team](#meet-our-team)
  * [License](#license)

## Configuration and Setup
In order to run this project locally, simply fork and clone the repository main or download main as zip and unzip on your machine.

- Open the project in your prefered code editor.
- Go to terminal -> New terminal (If you are using VS code)

In the terminal

```
$ cd next-event-aja
$ npm install
$ npm run dev
```

In the second terminal

- Create your supabase database, which you will use as your database
- Supply the following credentials

```
#  --- .env  ---

# Auth Configuration
AUTH_SECRET="<YOUR_AUTH_SECRET>"

# Token Configuration
NEXTAUTH_SECRET="<YOUR_NEXTAUTH_SECRET>"

```

## Technologies used

This project was created using the following technologies.

- [Node JS](https://nodejs.org/en/) -A runtime environment to help build fast server applications using JS
- [Express JS](https://www.npmjs.com/package/express) -The server for handling and routing HTTP requests
- [Cors](https://www.npmjs.com/package/cors) - Provides a Connect/Express middleware
- [Nodemailer](https://www.npmjs.com/package/nodemailer) - To send an email from a Node.js application.

## Project Structure
```bash
├── eslintrc.json
├── package.json
├── README.md
├── SECURITY.md
├── src
│   ├── config
│       └── Database.js
│   ├── controllers
│       ├── auth
│           └── GenerateOTPTelephoneControllers.js
│       ├── AddressControllers.js
│       ├── OrderControllers.js
│       ├── ProductControllers.js
│       ├── ShopControllers.js
│       ├── UserControllers.js
│       ├── others file ...
│   ├── db
│       └── db_afiliya.sql
│   ├── middlewares
│       └── AuthMiddleware.js
│   ├── models
│       ├── AddressesModel.js
│       ├── GenerateOTPTelephoneModel.js
│       ├── OrdersModel.js
│       ├── ProductsModel.js
│       ├── ShopsModel.js
│       ├── UsersModel.js
│       ├── others file ...
│   ├── routes
│       ├── AddressRoute.js
│       ├── OrderRoute.js
│       ├── ProductRoute.js
│       ├── ProductsModel.js
│       ├── ShopRoute.js
│       ├── UserRoute.js
│       ├── others file ...
│   ├── utils
│       ├── CreateToken.js
│       ├── GenerateOTP.js
│       ├── HashData.js
│       ├── MachineLearning.js
│       ├── SendMessageEmail.js
│       ├── SendMessageTelephone.js
│       ├── others file ...
│   └── server.js
```

##  Database Structure

![img-database-structure](https://github.com/Capstone-Project-CH2-PS070/Afiliya-Backend/assets/111676859/ee51a1ef-8a71-47c0-b3d1-591606d6e3e6)

## Meet Our Team

![02](https://github.com/capstone-project-c624-ps014/.github/assets/111676859/fb669229-b5ae-459c-b161-3623d7f94144)

## License

MIT License

Copyright (c) 2024 eventaja

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.