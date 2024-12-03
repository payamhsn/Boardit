import React, { useEffect, useRef, useState } from "react";
import io from "socket.io-client";

const Whiteboard = ({ id }) => {
  const canvasRef = useRef(null);
  const [socket, setSocket] = useState(null);
  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    const newSocket = io("http://localhost:5000");
    setSocket(newSocket);

    newSocket.emit("join-room", id);

    return () => newSocket.close();
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

    const handleMouseDown = (e) => {
      setIsDrawing(true);
      draw(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    };

    const handleMouseMove = (e) => {
      if (!isDrawing) return;
      draw(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
      socket.emit("draw", {
        x: e.nativeEvent.offsetX,
        y: e.nativeEvent.offsetY,
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

    return () => {
      canvas.removeEventListener("mousedown", handleMouseDown);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDrawing, socket, id]);

  useEffect(() => {
    if (!socket) return;

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
    };
  }, [socket]);

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
    </div>
  );
};

export default Whiteboard;
