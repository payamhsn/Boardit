import React, { useEffect, useRef, useState } from "react";
import io from "socket.io-client";
import axios from "axios";
import PropTypes from "prop-types";

const Whiteboard = ({ id }) => {
  const canvasRef = useRef(null);
  const [socket, setSocket] = useState(null);
  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    const newSocket = io("http://localhost:5000", {
      withCredentials: true,
    });
    setSocket(newSocket);

    newSocket.emit("join-room", id);

    return () => newSocket.close();
  }, [id]);

  useEffect(() => {
    const loadWhiteboard = async () => {
      try {
        const response = await axios.get(`/api/whiteboards/${id}`);
        const imageData = response.data.data;
        if (imageData) {
          const canvas = canvasRef.current;
          const context = canvas.getContext("2d");
          const image = new Image();
          image.onload = () => {
            context.drawImage(image, 0, 0);
          };
          image.src = imageData;
        }
      } catch (error) {
        console.error("Error loading whiteboard:", error);
      }
    };

    loadWhiteboard();
  }, [id]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    const draw = (x, y) => {
      if (!isDrawing) return;
      context.lineWidth = 2;
      context.lineCap = "round";
      context.strokeStyle = "black";

      context.lineTo(x, y);
      context.stroke();
      context.beginPath();
      context.moveTo(x, y);
    };

    const getMousePos = (canvas, evt) => {
      const rect = canvas.getBoundingClientRect();
      return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top,
      };
    };

    const handleMouseDown = (e) => {
      setIsDrawing(true);
      const pos = getMousePos(canvas, e);
      draw(pos.x, pos.y);
    };

    const handleMouseMove = (e) => {
      if (!isDrawing) return;
      const pos = getMousePos(canvas, e);
      draw(pos.x, pos.y);
      socket.emit("draw", {
        x: pos.x,
        y: pos.y,
        roomId: id,
      });
    };

    const handleMouseUp = () => {
      setIsDrawing(false);
      context.beginPath();
    };

    canvas.addEventListener("mousedown", handleMouseDown);
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseup", handleMouseUp);
    canvas.addEventListener("mouseout", handleMouseUp);

    return () => {
      canvas.removeEventListener("mousedown", handleMouseDown);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseup", handleMouseUp);
      canvas.removeEventListener("mouseout", handleMouseUp);
    };
  }, [isDrawing, socket, id]);

  useEffect(() => {
    if (!socket) return;

    socket.emit("request-initial-state", id);

    socket.on("initial-state", (imageData) => {
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");
      const image = new Image();
      image.onload = () => {
        context.drawImage(image, 0, 0);
      };
      image.src = imageData;
    });

    socket.on("request-initial-state", () => {
      const canvas = canvasRef.current;
      const imageData = canvas.toDataURL();
      socket.emit("initial-state", { roomId: id, imageData });
    });

    // Existing socket event listeners...
    const handleDraw = (data) => {
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");

      context.lineWidth = 2;
      context.lineCap = "round";
      context.strokeStyle = "black";

      context.lineTo(data.x, data.y);
      context.stroke();
      context.beginPath();
      context.moveTo(data.x, data.y);
    };

    socket.on("draw", handleDraw);

    return () => {
      socket.off("draw", handleDraw);
      socket.off("initial-state");
      socket.off("request-initial-state");
    };
  }, [socket, id]);

  const shareWhiteboard = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
      alert("Whiteboard URL copied to clipboard!");
    });
  };

  const saveWhiteboard = async () => {
    const canvas = canvasRef.current;
    const imageData = canvas.toDataURL();
    try {
      await axios.put(`/api/whiteboards/${id}`, { data: imageData });
      alert("Whiteboard saved successfully!");
    } catch (error) {
      console.error("Error saving whiteboard:", error);
      alert("Failed to save whiteboard");
    }
  };

  return (
    <div>
      <canvas
        ref={canvasRef}
        width={800}
        height={600}
        className="border border-gray-300"
      />
      <button
        onClick={saveWhiteboard}
        className="mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
      >
        Save Whiteboard
      </button>
      <button
        onClick={shareWhiteboard}
        className="mt-4 ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Share Whiteboard
      </button>
    </div>
  );
};

Whiteboard.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Whiteboard;
