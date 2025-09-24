export default function Home() {
  return (
    <div style={{ padding: "50px", textAlign: "center" }}>
      <h1>Task Manager</h1>
      <p>Welcome to Task Manager!</p>
      <div style={{ marginTop: "30px" }}>
        <a
          href="/login"
          style={{
            padding: "10px 20px",
            backgroundColor: "#3B82F6",
            color: "white",
            textDecoration: "none",
            borderRadius: "5px",
            marginRight: "10px",
          }}
        >
          Sign In
        </a>
        <a
          href="/register"
          style={{
            padding: "10px 20px",
            backgroundColor: "#6B7280",
            color: "white",
            textDecoration: "none",
            borderRadius: "5px",
          }}
        >
          Sign Up
        </a>
      </div>
    </div>
  );
}
