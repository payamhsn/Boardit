# Boardit - Interactive Whiteboard Collaboration Platform

Boardit is a powerful, real-time collaboration platform that enables teams to work together on interactive whiteboards, regardless of their physical location. It's designed to foster creativity, enhance productivity, and streamline the brainstorming and planning processes for remote and distributed teams.

## Features

- Real-time collaborative whiteboarding
- User authentication and authorization
- Persistent whiteboard saving
- Multiple whiteboard support per user
- Responsive design for desktop and mobile use

## Tech Stack

- **Frontend**: React.js with Vite, Tailwind CSS
- **Backend**: Node.js with Express.js
- **Database**: MongoDB
- **Real-time Communication**: Socket.io
- **Authentication**: JSON Web Tokens (JWT)

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v14 or later)
- npm (v6 or later)
- MongoDB (v4 or later)

## Installation and Setup

1. Clone the repository:
   git clone https://github.com/yourusername/boardit.git
   cd boardit

2. Install dependencies for both frontend and backend:
   cd frontend
   npm install
   cd ../backend
   npm install

3. Set up environment variables:
   Create a `.env` file in the `backend` directory with the following content:
   NODE_ENV=development
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret

   Replace `your_mongodb_connection_string` and `your_jwt_secret` with your actual MongoDB connection string and a secure random string for JWT encryption.

4. Start the backend server:
   cd backend
   npm run server

5. In a new terminal, start the frontend development server:
   cd frontend
   npm run dev

6. Open your browser and navigate to `http://localhost:3000` to view the application.

## Usage

1. Register for a new account or log in if you already have one.
2. Once logged in, you'll be directed to your dashboard where you can create a new whiteboard or access existing ones.
3. In the whiteboard view, you can draw, add text, and collaborate in real-time with other users.
4. Your work is automatically saved, so you can always come back to it later.

## 2nd Phase Features

In the next phase of development, we plan to enhance Boardit with the following features:

1. **Advanced Drawing Tools**: Implement more sophisticated drawing tools such as shape recognition, brush styles, and layering.

2. **Template Library**: Create a library of pre-designed templates for common use cases like brainstorming, project planning, and mind mapping.

3. **File Integration**: Allow users to upload and embed various file types (images, PDFs, documents) directly into the whiteboard.

4. **Video Conferencing**: Integrate video and audio calling capabilities within the app for seamless communication during collaboration.

5. **Version History**: Implement a version control system that allows users to view and revert to previous versions of their whiteboards.

6. **AI-Assisted Ideation**: Incorporate AI tools to suggest ideas, organize information, or provide relevant resources based on whiteboard content.

7. **Export and Sharing Options**: Enable users to export whiteboards in various formats (PNG, PDF, etc.) and improve sharing capabilities with non-users.

8. **Customizable Workspaces**: Allow users to create and customize different workspaces for various projects or teams.

9. **Analytics Dashboard**: Provide insights on whiteboard usage, collaboration patterns, and productivity metrics.

10. **Mobile App**: Develop native mobile applications for iOS and Android to enable on-the-go collaboration.

These features aim to make Boardit an even more powerful and versatile tool for remote collaboration and creative work.

## Contributing

We welcome contributions to Boardit! Please read our contributing guidelines before submitting pull requests.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## Contact

If you have any questions or feedback, please reach out to us at support@boardit.com.

Thank you for using Boardit!
