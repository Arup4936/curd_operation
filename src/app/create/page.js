"use client";

import { setAbortedLogsStyle } from "next/dist/server/node-environment-extensions/console-dim.external";
import { Tagesschrift } from "next/font/google";
import { useState } from "react";

export default function CreatePage() {
  const [usedId, setusedId] = useState("");
  const [bookmarkId, setbookmarkId] = useState("");
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [category, setCategory] = useState("");

  const [tags, setTags] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(
      "https://hnch82kbd1.execute-api.us-east-1.amazonaws.com/default/api_lambda",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          usedId,
          bookmarkId,
          title,
          url,
          category,
          tags
        })
      }
    );

    const data = await response.json();
    console.log(data);

    if (response.ok) {
      alert("Bookmark Created Successfully");
      setusedId("");
      setbookmarkId("");
      setTitle("");
      setUrl("");
      setCategory("");
      setTags("");
    }
  };

  return (
    <div style={styles.container}>
      <h1>Create Bookmark</h1>

      <form onSubmit={handleSubmit} style={styles.form}>

         <input
          type="text"
          placeholder="usedid"
          value={usedId}
          onChange={(e) => setusedId(e.target.value)}
          required
        />
           <input
          type="text"
          placeholder="bookmarkid"
          value={bookmarkId}
          onChange={(e) => setbookmarkId(e.target.value)}
          required
        />    
        
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Tags"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          required
        />

        <button type="submit">Create</button>

      </form>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "100px"
  },

  form: {
    display: "flex",
    flexDirection: "column",
    width: "300px",
    gap: "10px"
  }
};