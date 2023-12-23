# Tech Blog App

This Tech Blog App is designed for tech enthusiasts, engineers, designers, and anyone in the tech community to collaborate and share tech-related blogs across various categories. Whether it's about front-end development, back-end architecture, UI/UX design, system design, interview tips, or anything related to the tech world, this platform fosters a space for learning and collaboration.

## Features

Categories: Blogs are organized into different categories such as front-end, back-end, UI/UX, system design, interview preparation, and more.


1. Browse and Filter Blogs
2. Create New Blog
3. Like and Comment on Blogs
4. Upload Images Using Upload Thing
5. Blog Content Text Editor
6. Authentication Using Clerk
7. Next.js: Utilized as the fundamental framework for building a React-based web application.
8. MongoDB: Database management for efficient data storage and retrieval.
9. Prisma: Facilitating the database interactions and management, ensuring smooth data operations.
10. Tailwind CSS: Employed for a utility-first CSS framework, enabling responsive and streamlined UI development.
11. [Shadcn](https://ui.shadcn.com/) Component Library: Used for pre-built components, aiding in consistent and efficient UI development.
12. Upload Thing: Implemented for seamless image uploading functionalities.




## Getting Started

To start developing:

### Clone the Repository:
```shell
git clone https://github.com/bettjesse/tech-blog.git
 ```

### Install Dependencies:
```shell
 npm install 
```






## Environment Variables
This application requires certain environment variables to be set up in a .env file in the project root directory. Below are the variables and their purposes:




```js
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=

CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=

NEXT_PUBLIC_CLERK_SIGN_UP_URL=

NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=

NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=
UPLOADTHING_SECRET=

UPLOADTHING_APP_ID=

DATABASE_URL=
```

## Set up prisma

Add MongoDB Database

```shell
npx prisma generate
npx prisma db push

```
### Start the app

```shell
npm run dev
```

## Available commands

Running commands with npm `npm run [command]`

| command         | description                              |
| :-------------- | :--------------------------------------- |
| `dev`           | Starts a development instance of the app |









## Contribution

Contributions are welcome! Whether it's bug fixes, feature enhancements, or additional categories for the blog, feel free to contribute by submitting pull requests. Please adhere to the existing code style and conventions.
  
