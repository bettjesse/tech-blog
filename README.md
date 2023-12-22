Tech Blog App

This Tech Blog App is designed for tech enthusiasts, engineers, designers, and anyone in the tech community to collaborate and share tech-related blogs across various categories. Whether it's about front-end development, back-end architecture, UI/UX design, system design, interview tips, or anything related to the tech world, this platform fosters a space for learning and collaboration.

Features

Categories: Blogs are organized into different categories such as front-end, back-end, UI/UX, system design, interview preparation, and more.
Technologies Used:

Next.js: Utilized as the fundamental framework for building a React-based web application.

MongoDB: Database management for efficient data storage and retrieval.

Prisma: Facilitating the database interactions and management, ensuring smooth data operations.

Tailwind CSS: Employed for a utility-first CSS framework, enabling responsive and streamlined UI development.

Shadcn Component Library: Used for pre-built components, aiding in consistent and efficient UI development.

Upload Thing: Implemented for seamless image uploading functionalities.

Getting Started

To start developing:

Clone the Repository: git clone <repository-url>

Install Dependencies: npm install or yarn install

Run the Development Server: npm run dev or yarn dev

Open http://localhost:3000 in your browser to access the app.




Environment Variables
This application requires certain environment variables to be set up in a .env file in the project root directory. Below are the variables and their purposes:


Clerk Authentication
For Clerk authentication, you'll need the following variables related to Clerk's setup:

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: Clerk's public key for client-side authentication.

CLERK_SECRET_KEY: Clerk's secret key for server-side authentication.

NEXT_PUBLIC_CLERK_SIGN_IN_URL: URL for signing in using Clerk.

NEXT_PUBLIC_CLERK_SIGN_UP_URL: URL for signing up using Clerk.

NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL: URL to redirect users after signing in.

NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL: URL to redirect users after signing up.


Database Configuration

For the database connection, ensure the DATABASE_URL is set with the appropriate connection string:

DATABASE_URL: Connection string for MongoDB (or replace it with the appropriate string for your database).

UploadThing Configuration


For image uploads using UploadThing, provide the following variables:

UPLOADTHING_SECRET: UploadThing's secret key for secure file uploads.

UPLOADTHING_APP_ID: UploadThing's application ID for identification.




Contribution

Contributions are welcome! Whether it's bug fixes, feature enhancements, or additional categories for the blog, feel free to contribute by submitting pull requests. Please adhere to the existing code style and conventions.
  
