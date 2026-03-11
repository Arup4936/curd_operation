"use client";

import { useRouter } from "next/navigation";

export default function DashboardPage() {

  const router = useRouter();

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>CRUD Operations</h1>

      <div style={styles.grid}>

        <button
          style={styles.button}
          onClick={() => router.push("/create")}
        >
          Create
        </button>

        <button
          style={styles.button}
          onClick={() => router.push("/read")}
        >
          Read
        </button>

        <button
          style={styles.button}
          onClick={() => router.push("/update")}
        >
          Update
        </button>

        <button
          style={styles.button}
          onClick={() => router.push("/delete")}
        >
          Delete
        </button>

      </div>
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
  },

  title: {
    fontSize: "2rem",
    marginBottom: "30px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "20px",
  },

  button: {
    padding: "20px",
    fontSize: "18px",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "#0070f3",
    color: "white",
    cursor: "pointer",
  },
};