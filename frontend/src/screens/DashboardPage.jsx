import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const DashboardPage = () => {
  const [whiteboards, setWhiteboards] = useState([]);

  useEffect(() => {
    const fetchWhiteboards = async () => {
      try {
        const { data } = await axios.get("/api/whiteboards");
        setWhiteboards(data);
      } catch (error) {
        console.error("Error fetching whiteboards:", error);
      }
    };

    fetchWhiteboards();
  }, []);

  const createNewWhiteboard = async () => {
    try {
      const { data } = await axios.post("/api/whiteboards", {
        name: "New Whiteboard",
      });
      setWhiteboards([...whiteboards, data]);
    } catch (error) {
      console.error("Error creating whiteboard:", error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <button
        onClick={createNewWhiteboard}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
      >
        Create New Whiteboard
      </button>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {whiteboards.map((whiteboard) => (
          <Link
            key={whiteboard._id}
            to={`/whiteboard/${whiteboard._id}`}
            className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-200"
          >
            <h2 className="text-xl font-semibold mb-2">{whiteboard.name}</h2>
            <p className="text-gray-600">
              Created: {new Date(whiteboard.createdAt).toLocaleDateString()}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;
