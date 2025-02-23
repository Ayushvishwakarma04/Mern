import React from 'react';

function UserCard({ name, email }) {
  return (
    <div className="flex items-center justify-center">
      <div className="max-w-sm w-full bg-white rounded-lg border border-gray-200 shadow-xl overflow-hidden transform transition-all hover:scale-105">
        <div className="px-8 py-6">
          <h3 className="text-2xl font-bold text-gray-800 text-center mb-3 tracking-tight">
            {name || 'Anonymous User'}
          </h3>
          <p className="text-gray-600 text-lg text-center font-medium italic">
            {email || 'No email provided'}
          </p>
        </div>
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 h-2"></div>
      </div>
    </div>
  );
}

export default UserCard;