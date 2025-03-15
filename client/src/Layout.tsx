import { Outlet, Link, useLocation } from "react-router-dom";
import MetaInfo from "./components/MetaInfo";

const Layout = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        maxWidth: "800px",
        margin: "0 auto",
        padding: "20px",
      }}
    >
      <MetaInfo />
      {isHomePage && (
        <header
          style={{
            marginBottom: "20px",
            padding: "10px",
            borderBottom: "1px solid #eee",
          }}
        >
          <nav>
            <Link to="/" style={{ marginRight: "10px", fontWeight: "bold" }}>
              Home
            </Link>{" "}
            |
            <a
              href="/e/john-smith"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                margin: "0 10px",
                color: "#0066cc",
                textDecoration: "none",
              }}
            >
              John Smith Event
            </a>{" "}
            |
            <a
              href="/e/sarah-johnson"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                margin: "0 10px",
                color: "#0066cc",
                textDecoration: "none",
              }}
            >
              Sarah Johnson Event
            </a>{" "}
            |
            <a
              href="/e/michael-chen"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                margin: "0 10px",
                color: "#0066cc",
                textDecoration: "none",
              }}
            >
              Michael Chen Event
            </a>{" "}
            |
            <a
              href="/e/not-found-event"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                margin: "0 10px",
                color: "#0066cc",
                textDecoration: "none",
              }}
            >
              Not Found Event
            </a>{" "}
            |
            <a
              href="/self-route"
              target="_self"
              style={{
                marginLeft: "10px",
                color: "#0066cc",
                textDecoration: "none",
              }}
            >
              Self Route
            </a>
          </nav>
        </header>
      )}

      <main style={{ minHeight: "300px" }}>
        <Outlet />
      </main>

      <footer
        style={{
          marginTop: "20px",
          padding: "10px",
          borderTop: "1px solid #eee",
          textAlign: "center",
          color: "#666",
        }}
      >
        <p>Booking Scheduler</p>
      </footer>
    </div>
  );
};

export default Layout;
