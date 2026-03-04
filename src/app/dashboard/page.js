"use client";
import { useState, useEffect } from "react";

// dashboard
export default function DashboardPage() {
  
  const[bookmark_data, setbookmark_Data] = useState(null);
  useEffect(() => {
    async function fetchbbookmark_Data() {
      const response = await fetch("https://67vnpt4hh3.execute-api.us-east-1.amazonaws.com/default/api_lambda");
      if (response.ok) {
        const data = await response.json();
        console.log("User data:", data);
        setbookmark_Data(data.bookmark.bookmarks);
      }
    }
    fetchbbookmark_Data();
  }, []);  
  
  
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome to the Dashboard</h1>
      <p style={styles.text}>This is a protected page that only authenticated users can access.</p>
      {bookmark_data && bookmark_data.map((item, index) => (
        <div key={index} style={{ marginBottom: "15px" }}>
          <h3>{item.title}</h3>
          <p>
            <a href={item.url} target="_blank">
              {item.url}
            </a>
          </p>
          <p>Category: {item.category}</p>
        </div>
      ))}      
    </div>


  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#f0f4f8",
    padding: "20px",
  },
  title: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "20px",
  },
  text: {
    fontSize: "1.2rem",
    color: "#555",
  },
};    