"use client";

import { useState } from "react";

export default function UpdatePage() {
  const [usedId, setusedId] = useState("");
  const [bookmarkId, setBookmarkId] = useState("");
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [category, setCategory] = useState("");
  const [tags, setTags] = useState("");

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {

const response = await fetch(
  "https://hnch82kbd1.execute-api.us-east-1.amazonaws.com/default/api_lambda",
  {
    method: "PUT",
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

      if (response.ok) {
        alert("Bookmark Updated Successfully");
        console.log(data);
      } else {
        alert("Update Failed");
      }

    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div style={{padding:"40px"}}>

      <h2>Update Bookmark</h2>

      <form onSubmit={handleUpdate} style={{display:"flex",flexDirection:"column",gap:"10px",width:"300px"}}>

        
        
        <input
          type="text"
          placeholder="UsedID"
          value={usedId}
          onChange={(e)=>setusedId(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Bookmark ID"
          value={bookmarkId}
          onChange={(e)=>setBookmarkId(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e)=>setTitle(e.target.value)}
        />

        <input
          type="text"
          placeholder="URL"
          value={url}
          onChange={(e)=>setUrl(e.target.value)}
        />

        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e)=>setCategory(e.target.value)}
        />

        <input
          type="text"
          placeholder="Tags"
          value={tags}
          onChange={(e)=>setTags(e.target.value)}
        />

        <button type="submit">Update Bookmark</button>

      </form>

    </div>
  );
}