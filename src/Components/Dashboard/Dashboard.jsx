"use client"
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "../Navbar/Navbar";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const userInfo = JSON.parse(sessionStorage.getItem("userInfo"));
    if (userInfo) {
      setUser(userInfo);
    }
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-slate-100 min-h-screen">
      <Navbar />
      <div className="p-2 text-right">
        <p className="text-xl md:text-4xl font-bold italic text-black">
          {user.firstName} {user.lastName}
        </p>
        <p className="mt-2 text-sm md:text-2xl italic text-black">
          {user.email}
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
