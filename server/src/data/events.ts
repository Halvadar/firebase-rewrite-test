// Define the event meta information structure
export interface EventMeta {
  title: string;
  description: string;
  hostName: string;
  duration: number;
  metaTitle: string;
}

// Create a map of event slugs to their meta information
export const eventsMeta: Record<string, EventMeta> = {
  "john-smith": {
    title: "Book with John Smith",
    description:
      "Schedule a one-on-one consultation with John Smith to discuss product strategy, roadmap planning, and market analysis.",
    hostName: "John Smith",
    duration: 30, // 30 minutes meeting
    metaTitle: "Book a 30-minute Product Strategy Session with John Smith",
  },
  "sarah-johnson": {
    title: "Book with Sarah Johnson",
    description:
      "Connect with Sarah Johnson for a personalized UX review session to improve your product's user experience and interface design.",
    hostName: "Sarah Johnson",
    duration: 45, // 45 minutes meeting
    metaTitle: "Schedule a UX Review Session with Sarah Johnson",
  },
  "michael-chen": {
    title: "Book with Michael Chen",
    description:
      "Get technical advice and code review from Michael Chen, an experienced software engineer specializing in web development and cloud architecture.",
    hostName: "Michael Chen",
    duration: 60, // 60 minutes meeting
    metaTitle: "Book a Technical Consultation with Michael Chen",
  },
  // Default for any other event slug
  default: {
    title: "Book a Meeting",
    description:
      "Schedule a meeting with one of our experts to get personalized advice.",
    hostName: "Team Member",
    duration: 30, // 30 minutes by default
    metaTitle: "Book a meeting with our team",
  },
};

// Function to get event meta information by slug
export const getEventMetaBySlug = (slug: string): EventMeta | null => {
  // Special case for not-found-event to demonstrate error handling
  if (slug === "not-found-event") {
    return null;
  }
  return eventsMeta[slug] || eventsMeta.default;
};
