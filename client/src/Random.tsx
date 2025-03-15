import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

interface RandomFact {
  id: string;
  text: string;
}

const Random = () => {
  const [fact, setFact] = useState<RandomFact | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRandomFact = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://uselessfacts.jsph.pl/api/v2/facts/random",
        );
        const data = await response.json();
        setFact(data);
      } catch (error) {
        console.error("Error fetching random fact:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRandomFact();
  }, []);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1 style={{ color: "#333" }}>Self Route Page</h1>
      <div
        style={{
          margin: "20px 0",
          padding: "15px",
          border: "1px solid #eee",
          borderRadius: "5px",
          minHeight: "100px",
        }}
      >
        {loading ? (
          <p>Loading...</p>
        ) : fact ? (
          <p style={{ fontStyle: "italic" }}>{fact.text}</p>
        ) : (
          <p>Failed to load fact</p>
        )}
      </div>
      <button
        onClick={() => window.location.reload()}
        style={{
          padding: "8px 16px",
          backgroundColor: "#0066cc",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          marginBottom: "15px",
        }}
      >
        Get Another Fact
      </button>
      <div>
        <Link to="/" style={{ color: "#0066cc", textDecoration: "none" }}>
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Random;
