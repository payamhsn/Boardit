import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Whiteboard from "../components/Whiteboard";

const WhiteboardPage = () => {
  const [whiteboard, setWhiteboard] = useState(null);
  const [collaboratorEmail, setCollaboratorEmail] = useState("");
  const { id } = useParams();

  useEffect(() => {
    const fetchWhiteboard = async () => {
      try {
        const { data } = await axios.get(`/api/whiteboards/${id}`);
        setWhiteboard(data);
      } catch (error) {
        console.error("Error fetching whiteboard:", error);
      }
    };

    fetchWhiteboard();
  }, [id]);

  const inviteCollaborator = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`/api/whiteboards/${id}/invite`, {
        email: collaboratorEmail,
      });
      alert("Collaborator invited successfully!");
      setCollaboratorEmail("");
    } catch (error) {
      console.error("Error inviting collaborator:", error);
      alert("Failed to invite collaborator");
    }
  };

  if (!whiteboard) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{whiteboard.name}</h1>
      <Whiteboard id={whiteboard._id} />
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-2">Invite Collaborator</h2>
        <form onSubmit={inviteCollaborator} className="flex">
          <input
            type="email"
            value={collaboratorEmail}
            onChange={(e) => setCollaboratorEmail(e.target.value)}
            placeholder="Collaborator's email"
            className="flex-grow mr-2 p-2 border border-gray-300 rounded"
            required
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Invite
          </button>
        </form>
      </div>
    </div>
  );
};

export default WhiteboardPage;
