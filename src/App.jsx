import React, { useState } from "react";

// ProfileCard Component
function ProfileCard({ name, role }) {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p>Role: {role}</p>
    </div>
  );
}

// Edit Form Component
function EditProfile({ profile, updateProfile }) {
  return (
    <div className="card">
      <h3>Edit Profile</h3>

      <input
        type="text"
        placeholder="Enter Name"
        value={profile.name}
        onChange={(e) =>
          updateProfile({ ...profile, name: e.target.value })
        }
      /><br /><br />

      <input
        type="text"
        placeholder="Enter Role"
        value={profile.role}
        onChange={(e) =>
          updateProfile({ ...profile, role: e.target.value })
        }
      />
    </div>
  );
}

// StatusPanel Component
function StatusPanel({ status, toggleStatus }) {
  return (
    <div className="card">
      <p>Status: {status}</p>
      <button onClick={toggleStatus}>Toggle Status</button>
    </div>
  );
}

// Parent Component
export default function ProfileDashboard() {
  const [profile, setProfile] = useState({
    name: "V.Aravind",
    role: "Frontend Developer",
    status: "Active"
  });

  const toggleStatus = () => {
    setProfile(prev => ({
      ...prev,
      status: prev.status === "Active" ? "Offline" : "Active"
    }));
  };

  return (
    <div>
      <h1>Profile Dashboard</h1>

      <ProfileCard name={profile.name} role={profile.role} />

      <EditProfile profile={profile} updateProfile={setProfile} />

      <StatusPanel status={profile.status} toggleStatus={toggleStatus} />
    </div>
  );
}
