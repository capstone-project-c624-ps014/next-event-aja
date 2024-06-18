<H1 align ="center" >Event Aja</h1>
<h3  align ="center"> 
Increasing Quality Human Resources</h3>

![01](https://github.com/capstone-project-c624-ps014/.github/assets/111676859/38f18b46-e498-443d-8fb0-fde29d4694bd)

## Project Description

Event Aja is a platform that provides integrated solutions to facilitate collaboration between event owners, Event Organizers (EO), and sponsors in order to make various types of events a success. This platform helps event owners to find EOs and sponsors that suit their needs, while EOs and sponsors get the opportunity to gain income, branding and exposure through the selected event.

- [Configuration and Setup](#configuration-and-setup)
- [Technologies used](#technologies-used)
- [Database Sturucture](#database-structure)
- [Meet Our Team](#meet-our-team)
- [License](#license)

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

# Supabase Configuration
SUPABASE_URL="<YOUR_SUPABASE_URL>"
SUPABASE_KEY="<YOUR_SUPABASE_KEY>"

```

## Technologies used

This project was created using the following technologies.

- [Next JS](https://nextjs.org/) - A React framework for building fast and scalable server-rendered applications.
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - A versatile programming language used for web development.
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework for rapid UI development.
- [Daisy UI](https://daisyui.com/) - A set of customizable UI components built on top of Tailwind CSS.
- [React Apexcharts](https://www.npmjs.com/package/react-apexcharts) -  A charting library for React based on ApexCharts.js.
- [Html React Parser](https://www.npmjs.com/package/html-react-parser) - A utility to parse HTML strings into React components.
- [Eslint](https://eslint.org/) - A tool for identifying and fixing problems in JavaScript code.
- [Node JS](https://nodejs.org/) - A JavaScript runtime built on Chrome's V8 JavaScript engine for server-side development.
- [Supabase](https://supabase.com/) -An open-source Firebase alternative for building backends.


## Database Structure

![Untitled](https://github.com/capstone-project-c624-ps014/next-event-aja/assets/111676859/0e036b7d-3b17-4a88-b395-4a6eb9364477)

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
