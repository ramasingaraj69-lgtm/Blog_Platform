function BottomNav() {
  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        width: "100%",
        background: "#fff",
        padding: "15px",
        display: "flex",
        justifyContent: "space-around",
        boxShadow: "0 -2px 10px rgba(0,0,0,0.05)",
      }}
    >
      <span>Home</span>
      <span>Search</span>
      <span>Profile</span>
    </div>
  );
}

export default BottomNav;