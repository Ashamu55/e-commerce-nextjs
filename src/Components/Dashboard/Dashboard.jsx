"use client"
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    // Get the stored user info from sessionStorage
    const userInfo = JSON.parse(sessionStorage.getItem("userInfo"));
    if (userInfo) {
      setUser(userInfo);
    }
  }, []);

  const handleSignOut = () => {
    // Clear user info from both sessionStorage and localStorage
    sessionStorage.removeItem("userInfo");
    localStorage.removeItem("User");
    router.push("/login"); // Redirect user to the login page
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-xl font-semibold">Welcome to Your Dashboard</h1>
      <p className="mt-4">Email: {user.email}</p>
      <p className="mt-2">First Name: {user.firstName}</p>
      <p className="mt-2">Last Name: {user.lastName}</p>

      {/* Sign Out Button */}
      <button
        onClick={handleSignOut}
        className="mt-4 w-full bg-red-500 py-2 rounded-md hover:bg-red-600 transition duration-300"
      >
        Sign Out
      </button>
    </div>
  );
};

export default Dashboard;
