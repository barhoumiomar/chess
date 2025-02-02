import React, { useState } from "react";
import axios from "axios";

const Profile = ({ user }) => {
  const [profilePicture, setProfilePicture] = useState(user?.profilePicture || null);
  const [wallpaper, setWallpaper] = useState(user?.wallpaper || null);
  const [newUsername, setNewUsername] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Upload Profile Picture
  const handleProfilePictureUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("profilePicture", file);

    try {
      const response = await axios.put(
        "http://localhost:5000/api/user/update-profile-picture",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      setProfilePicture(`http://localhost:5000/uploads/${response.data.profilePicture}`);
      setSuccess("Profile picture updated successfully!");
      setError("");
    } catch (err) {
      console.error(err);
      setError("Failed to update profile picture.");
    }
  };

  // Upload Wallpaper
  const handleWallpaperChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("wallpaper", file);

    try {
      const response = await axios.put(
        "http://localhost:5000/api/user/update-wallpaper",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      setWallpaper(`http://localhost:5000/uploads/${response.data.wallpaper}`);
      setSuccess("Wallpaper updated successfully!");
      setError("");
    } catch (err) {
      console.error(err);
      setError("Failed to update wallpaper.");
    }
  };

  // Update Username
  const handleUsernameChange = async () => {
    try {
      await axios.put(
        "http://localhost:5000/api/user/update-username",
        { newUsername },
        { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
      );

      setSuccess("Username updated successfully!");
      setError("");
    } catch (err) {
      console.error(err);
      setError("Failed to update username.");
    }
  };

  // Update Password
  const handlePasswordChange = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    try {
      await axios.put(
        "http://localhost:5000/api/user/update-password",
        { oldPassword, newPassword },
        { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
      );

      setSuccess("Password updated successfully!");
      setError("");
      setOldPassword("");
      setNewPassword("");
      setConfirmPassword("");
    } catch (err) {
      console.error(err);
      setError("Failed to update password.");
    }
  };

  return (
    <div style={styles.container}>
      <h2>Profile Settings</h2>
      {error && <p style={styles.error}>{error}</p>}
      {success && <p style={styles.success}>{success}</p>}

      {/* Profile Picture */}
      <div>
        <h4>Change Profile Picture</h4>
        <input type="file" onChange={handleProfilePictureUpload} />
        {profilePicture && (
          <img src={profilePicture} alt="Profile" style={styles.image} />
        )}
      </div>

      {/* Wallpaper */}
      <div>
        <h4>Change Wallpaper</h4>
        <input type="file" onChange={handleWallpaperChange} />
        {wallpaper && (
          <img src={wallpaper} alt="Wallpaper" style={styles.wallpaper} />
        )}
      </div>

      {/* Username */}
      <div>
        <h4>Change Username</h4>
        <input
          type="text"
          placeholder="New Username"
          value={newUsername}
          onChange={(e) => setNewUsername(e.target.value)}
        />
        <button onClick={handleUsernameChange}>Update Username</button>
      </div>

      {/* Password */}
      <div>
        <h4>Change Password</h4>
        <input
          type="password"
          placeholder="Old Password"
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirm New Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button onClick={handlePasswordChange}>Update Password</button>
      </div>
    </div>
  );
};
//Styles
const styles = {
  container: {
    padding: "40px",
    maxWidth: "800px",
    margin: "auto",
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
    fontFamily: "'Inter', sans-serif",
    textAlign: "center",
  },
  header: {
    color: "#333",
    fontSize: "28px",
    fontWeight: "700",
    marginBottom: "30px",
    letterSpacing: "-0.5px",
  },
  section: {
    marginBottom: "30px",
  },
  sectionTitle: {
    color: "#555",
    fontSize: "18px",
    marginBottom: "15px",
    fontWeight: "500",
  },
  input: {
    width: "100%",
    padding: "12px",
    marginBottom: "15px",
    borderRadius: "8px",
    border: "1px solid #ddd",
    fontSize: "16px",
    outline: "none",
    boxSizing: "border-box",
    transition: "all 0.3s ease",
  },
  fileInput: {
    marginBottom: "15px",
  },
  button: {
    padding: "12px 30px",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "#4CAF50",
    color: "white",
    fontSize: "16px",
    fontWeight: "500",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
  buttonHover: {
    backgroundColor: "#45a049",
  },
  error: {
    color: "#ff4d4d",
    fontSize: "14px",
    marginTop: "10px",
  },
  success: {
    color: "#4CAF50",
    fontSize: "14px",
    marginTop: "10px",
  },
  profileImage: {
    width: "120px",
    height: "120px",
    borderRadius: "50%",
    marginTop: "15px",
    objectFit: "cover",
    border: "4px solid #4CAF50",
  },
  wallpaperImage: {
    width: "100%",
    height: "200px",
    borderRadius: "12px",
    objectFit: "cover",
    marginTop: "15px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  },
};

export default Profile;