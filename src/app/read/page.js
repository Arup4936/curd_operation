"use client";

import { useEffect, useState } from "react";

export default function ReadPage() {

  const [bookmarks, setBookmarks] = useState([]);
  const [loading, setLoading] = useState(true);

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

  // Delete function
  const handleDelete = async (usedId, bookmarkId) => {
  try {
    await fetch(
      `https://hnch82kbd1.execute-api.us-east-1.amazonaws.com/default/api_lambda?usedId=${usedId}&bookmarkId=${bookmarkId}`,
      {
        method: "DELETE",
      }
    );

    setBookmarks(
      bookmarks.filter(
        (item) =>
          item.usedId !== usedId || item.bookmarkId !== bookmarkId
      )
    );

  } catch (error) {
    console.error("Delete failed", error);
  }
};

  // Loading state
  if (loading) {
    return <h2 style={{textAlign:"center"}}>Loading bookmarks...</h2>;
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Bookmarks</h1>

    {bookmarks.map((item) => (
  <div key={item.bookmarkId + item.usedId} style={styles.card}>

    <p><b>Title:</b> {item.title}</p>
    <p><b>Url:</b> {item.url}</p>
    <p><b>Tags:</b> {item.tags}</p>
    <p><b>Category:</b> {item.category}</p>

    <button
      onClick={() => handleDelete(item.usedId, item.bookmarkId)}
      style={{ marginTop: "10px" }}
    >
      Delete
    </button>

  </div>
))}
    </div>
  );
}