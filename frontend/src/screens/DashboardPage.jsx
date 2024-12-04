import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const DashboardPage = () => {
  const [activeTab, setActiveTab] = useState("whiteboards");
  const [whiteboards, setWhiteboards] = useState([]);
  const [collaborativeWhiteboards, setCollaborativeWhiteboards] = useState([]);
  const [user, setUser] = useState(null);
  const [newWhiteboardName, setNewWhiteboardName] = useState("");

  useEffect(() => {
    fetchWhiteboards();
    fetchCollaborativeWhiteboards();
    fetchUserProfile();
  }, []);

  const fetchWhiteboards = async () => {
    try {
      const { data } = await axios.get("/api/whiteboards");
      setWhiteboards(data);
    } catch (error) {
      console.error("Error fetching whiteboards:", error);
    }
  };

  const fetchCollaborativeWhiteboards = async () => {
    try {
      const { data } = await axios.get("/api/whiteboards/collaborative");
      setCollaborativeWhiteboards(data);
    } catch (error) {
      console.error("Error fetching collaborative whiteboards:", error);
    }
  };

  const fetchUserProfile = async () => {
    try {
      const { data } = await axios.get("/api/users/profile");
      setUser(data);
    } catch (error) {
      console.error("Error fetching user profile:", error);
    }
  };

  const createWhiteboard = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/whiteboards", { name: newWhiteboardName });
      setNewWhiteboardName("");
      fetchWhiteboards();
    } catch (error) {
      console.error("Error creating whiteboard:", error);
    }
  };

  const deleteWhiteboard = async (id) => {
    try {
      await axios.delete(`/api/whiteboards/${id}`);
      fetchWhiteboards();
    } catch (error) {
      console.error("Error deleting whiteboard:", error);
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error("Error data:", error.response.data);
        console.error("Error status:", error.response.status);
        console.error("Error headers:", error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        console.error("Error request:", error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error("Error message:", error.message);
      }
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <div className="mb-4">
        <button
          className={`mr-2 ${
            activeTab === "whiteboards"
              ? "bg-blue-500 text-white"
              : "bg-gray-200"
          } px-4 py-2 rounded`}
          onClick={() => setActiveTab("whiteboards")}
        >
          My Whiteboards
        </button>
        <button
          className={`mr-2 ${
            activeTab === "collaborative"
              ? "bg-blue-500 text-white"
              : "bg-gray-200"
          } px-4 py-2 rounded`}
          onClick={() => setActiveTab("collaborative")}
        >
          Collaborative Whiteboards
        </button>
        <button
          className={`${
            activeTab === "profile" ? "bg-blue-500 text-white" : "bg-gray-200"
          } px-4 py-2 rounded`}
          onClick={() => setActiveTab("profile")}
        >
          Profile
        </button>
      </div>

      {activeTab === "whiteboards" && (
        <div>
          <h2 className="text-2xl font-bold mb-2">My Whiteboards</h2>
          <form onSubmit={createWhiteboard} className="mb-4">
            <input
              type="text"
              value={newWhiteboardName}
              onChange={(e) => setNewWhiteboardName(e.target.value)}
              placeholder="New whiteboard name"
              className="border p-2 mr-2"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Create Whiteboard
            </button>
          </form>
          <ul>
            {whiteboards.map((whiteboard) => (
              <li key={whiteboard._id} className="mb-2 flex items-center">
                <Link
                  to={`/whiteboard/${whiteboard._id}`}
                  className="text-blue-500 hover:underline mr-2"
                >
                  {whiteboard.name}
                </Link>
                <button
                  onClick={() => deleteWhiteboard(whiteboard._id)}
                  className="bg-red-500 text-white px-2 py-1 rounded text-sm"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {activeTab === "collaborative" && (
        <div>
          <h2 className="text-2xl font-bold mb-2">Collaborative Whiteboards</h2>
          <ul>
            {collaborativeWhiteboards.map((whiteboard) => (
              <li key={whiteboard._id} className="mb-2">
                <Link
                  to={`/whiteboard/${whiteboard._id}`}
                  className="text-blue-500 hover:underline"
                >
                  {whiteboard.name}
                </Link>
                <span className="ml-2 text-gray-500">
                  (Owner: {whiteboard.owner.name})
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {activeTab === "profile" && user && (
        <div>
          <h2 className="text-2xl font-bold mb-2">Profile Information</h2>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          {/* Add more user information as needed */}
        </div>
      )}
    </div>
  );
};

export default DashboardPage;
