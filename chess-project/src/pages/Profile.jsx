import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [fullName, setFullName] = useState("");
  const [bio, setBio] = useState("");
  const [profilePicture, setProfilePicture] = useState(null);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("fullName", fullName);
    formData.append("bio", bio);
    if (profilePicture) {
      formData.append("profilePicture", profilePicture);
    }

    try {
      const token = localStorage.getItem("token");
      
      // If there's no token, show an error
      if (!token) {
        setError("No token found, please log in again.");
        return;
      }

      const res = await axios.post("http://localhost:5000/api/profile", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setSuccessMessage("Profile created successfully! Redirecting...");
      setTimeout(() => {
        navigate("/home"); // Redirect to home page after profile creation
      }, 3000);
    } catch (err) {
      setError(err.response?.data?.message || err.message || "Something went wrong");
    }
  };

  return (
    <div style={styles.container}>
      <h1>Create Your Profile</h1>

      {/* Display success message if present */}
      {successMessage && <p style={styles.success}>{successMessage}</p>}

      {/* Display error message if present */}
      {error && <p style={styles.error}>{error}</p>}

      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          style={styles.input}
          required
        />
        <textarea
          placeholder="Bio"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          style={styles.textarea}
        />
        <input
          type="file"
          onChange={(e) => setProfilePicture(e.target.files[0])}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>
          Save Profile
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#f9f9f9",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    width: "300px",
  },
  input: {
    padding: "10px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  textarea: {
    padding: "10px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    height: "100px",
  },
  button: {
    padding: "10px",
    fontSize: "16px",
    backgroundColor: "#333",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  error: {
    color: "red",
    fontSize: "14px",
  },
  success: {
    color: "green",
    fontSize: "16px",
    marginBottom: "10px",
  },
};

export default Profile;
