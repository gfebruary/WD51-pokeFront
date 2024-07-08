import React from "react";

const NotLogged = ({ isOpen, message, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="bg-red-500 bg-opacity-80 rounded-lg p-6 text-center">
        <p className="text-3xl font-bold text-red-800 mb-4">{message}</p>
        <button
          onClick={onClose}
          className="mt-4 bg-red-700 text-white px-4 py-2 rounded">
          Close
        </button>
      </div>
    </div>
  );
};

export default NotLogged;
