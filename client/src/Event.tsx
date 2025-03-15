import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

// Define the event data structure
interface EventData {
  title: string;
  hostName: string;
  duration: number;
}

const Event = () => {
  const { slug } = useParams<{ slug: string }>();
  const [eventData, setEventData] = useState<EventData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // In a real app, you would fetch this data from your API
    // For now, we'll simulate it with a timeout
    setLoading(true);
    setError(null);

    // Simulate API call
    setTimeout(() => {
      // This would normally come from an API
      const mockEventData: Record<string, EventData> = {
        "john-smith": {
          title: "Book with John Smith",
          hostName: "John Smith",
          duration: 30,
        },
        "sarah-johnson": {
          title: "Book with Sarah Johnson",
          hostName: "Sarah Johnson",
          duration: 45,
        },
        "michael-chen": {
          title: "Book with Michael Chen",
          hostName: "Michael Chen",
          duration: 60,
        },
        default: {
          title: "Book a Meeting",
          hostName: "Team Member",
          duration: 30,
        },
      };

      // Special case for not-found-event
      if (slug === "not-found-event") {
        setError("This event could not be found in our database.");
        setLoading(false);
        return;
      }

      setEventData(mockEventData[slug!] || mockEventData.default);
      setLoading(false);
    }, 500);
  }, [slug]);

  if (loading) {
    return (
      <div style={{ textAlign: "center", padding: "20px" }}>Loading...</div>
    );
  }

  if (error) {
    return (
      <div style={{ textAlign: "center", padding: "20px" }}>
        <h1 style={{ color: "#d32f2f" }}>Event Not Found</h1>
        <p style={{ color: "#666" }}>{error}</p>
        <Link to="/" style={{ color: "#0066cc", textDecoration: "none" }}>
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1 style={{ color: "#333" }}>{eventData?.title}</h1>
      <div
        style={{
          margin: "20px 0",
          padding: "15px",
          border: "1px solid #eee",
          borderRadius: "5px",
        }}
      >
        <p>
          <strong>Host:</strong> {eventData?.hostName}
        </p>
        <p>
          <strong>Duration:</strong> {eventData?.duration} minutes
        </p>
      </div>
      <Link to="/" style={{ color: "#0066cc", textDecoration: "none" }}>
        Back to Home
      </Link>
    </div>
  );
};

export default Event;
