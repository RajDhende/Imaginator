# Imaginator

**Imaginator** is an AI-powered image generation platform where users can generate images using creative prompts and share them with the community. The platform leverages OpenAI's API for image generation and uses a MongoDB database for storing generated images. It also integrates Cloudinary for media management.

## Features

- Generate AI-powered images by submitting creative prompts.
- Share generated images with a community of users.
- Explore other users' creations and engage with the community.

## Prerequisites

Before cloning and running the project, make sure you have the following installed:

- Node.js (v14 or higher)
- MongoDB Atlas or a MongoDB instance
- Cloudinary account for media storage

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/RajDhende/Imaginator.git
```

### 2. Backend (Server) Setup

1. Navigate to the `server` folder.

   ```bash
   cd Imaginator/server
   ```

2. Create a `.env` file in the `server` folder with the following content:

   ```bash
   OPENAI_API_KEY= <your_openAI_API_Key>
   MONGODB_URL= <your_MONGO_DB_URL>
   PORT_NO= <your_PORT_NO>
   
   CLOUDINARY_CLOUD_NAME= <your_CLOUDINARY_CLOUD_NAME>
   CLOUDINARY_API_KEY= <your_CLOUDINARY_API_KEY>
   CLOUDINARY_API_SECRET= <your_CLOUDINARY_API_SECRET>
   ```

3. Install server dependencies.

   ```bash
   npm install
   ```

4. Start the server.

   ```bash
   npm start
   ```

The backend should now be running at:

```
http://localhost:<your_PORT_NO>
```

### 3. Frontend (Client) Setup

1. Open a new terminal window and navigate to the `client` folder.

   ```bash
   cd Imaginator/client
   ```

2. Install client dependencies.

   ```bash
   npm install
   ```

3. Start the client.

   ```bash
   npm start
   ```

The frontend will be running at:

```
http://localhost:3000
```

### 4. Access the Application

Once both the server and client are running, you can access the application in your browser at:

```
http://localhost:3000
```

## Technologies Used

- **Backend**: Node.js, Express.js
- **Frontend**: React.js
- **Database**: MongoDB
- **Cloud Storage**: Cloudinary
- **AI Image Generation**: OpenAI API

