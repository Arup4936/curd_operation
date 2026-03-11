"use client";

import { useEffect, useState } from "react";

export default function ReadPage() {

  const [bookmarks, setBookmarks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBookmarks() {

      const response = await fetch(
        "https://hnch82kbd1.execute-api.us-east-1.amazonaws.com/default/api_lambda"
      );

      const data = await response.json();
      console.log("Bookmarks:", data);

      setBookmarks(data.bookmarks);
      setLoading(false);
    }

    fetchBookmarks();
  }, []);

  if (loading) {
    return <h2 style={{textAlign:"center"}}>Loading bookmarks...</h2>;
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Bookmarks List</h1>

      {bookmarks.map((item, index) => (
        <div key={index} style={styles.card}>
          <h3>{item.title}</h3>

          <p>
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              {item.url}
            </a>
          </p>

          <p><b>Category:</b> {item.category}</p>
        </div>
      ))}

    </div>
  );
}

const styles = {

  container: {
    padding: "40px",
    background: "#f4f6f8",
    minHeight: "100vh"
  },

  title: {
    textAlign: "center",
    marginBottom: "30px"
  },

  card: {
    background: "white",
    padding: "20px",
    borderRadius: "10px",
    marginBottom: "15px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
  }

};