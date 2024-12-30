import React, { useState } from "react";
import { useUserContext } from "../Context/UserContext";

function Editprofile() {
  const { username, setUsername, setPassword, password } = useUserContext();
  const [isEditing, setIsediting] = useState(false);

  function handleEditUsername(e) {
    setUsername(e.target.value);
  }
  function handleEditPassword(e) {
    setPassword(e.target.value);
  }

  function handleEdit() {
    if (isEditing) {
      setIsediting(false);
    } else {
      setIsediting(true);
    }
  }
  return (
    <>
      <div
        id="editwrapper"
        className="w-full mt-6 flex justify-center items-center"
      >
        <div className="border-2 dark:border-gray-400  border-gray-700 px-8 py-2">
          <div className="flex items-center gap-x-3 mb-2">
            <h1 className="text-xl font-extrabold">Username : </h1>
            {isEditing ? (
              <input
                type="text"
                autoFocus
                value={username}
                onChange={handleEditUsername}
                className="bg-transparent text-blue-500 pl-2 py-1 pr-2 text-xl font-bold"
              />
            ) : (
              <h1 className="text-xl font-bold">{username}</h1>
            )}
          </div>
          <div className="flex items-center gap-x-3">
            <h1 className="text-xl font-extrabold">Password : </h1>
            {isEditing ? (
              <input
                type="text"
                onChange={handleEditPassword}
                value={password}
                className="bg-transparent  text-blue-500 pl-2 py-1 pr-2 text-xl font-bold"
              />
            ) : (
              <h1 className="text-xl font-bold">{password}</h1>
            )}
          </div>
        </div>
      </div>
      <div className="w-full text-center ">
        <button
          onClick={handleEdit}
          className="bg-blue-600 mt-3 duration-150 active:bg-blue-700 px-2 py-1 rounded-sm"
        >
          {isEditing ? "Save" : "Edit"}
        </button>
      </div>
    </>
  );
}

export default Editprofile;
