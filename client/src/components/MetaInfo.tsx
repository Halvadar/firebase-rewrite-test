import { useEffect, useState } from "react";

interface MetaData {
  title: string;
  description: string;
  canonical: string;
  siteName: string;
}

const MetaInfo = () => {
  const [metaData, setMetaData] = useState<MetaData>({
    title: "",
    description: "",
    canonical: "",
    siteName: "",
  });

  useEffect(() => {
    // Read meta information from the document
    const title = document.title;
    const description =
      document
        .querySelector("meta[name='description']")
        ?.getAttribute("content") || "";
    const canonical =
      document.querySelector("link[rel='canonical']")?.getAttribute("href") ||
      "";
    const siteName =
      document
        .querySelector("meta[property='og:site_name']")
        ?.getAttribute("content") || "";

    setMetaData({
      title,
      description,
      canonical,
      siteName,
    });
  }, []);

  return (
    <div className="meta-data">
      <h3>Page Meta Information</h3>
      <p>
        <strong>Title:</strong> {metaData.title}
      </p>
      <p>
        <strong>Description:</strong> {metaData.description}
      </p>
      <p>
        <strong>Canonical Link:</strong> {metaData.canonical}
      </p>
      <p>
        <strong>Site Name:</strong> {metaData.siteName}
      </p>
    </div>
  );
};

export default MetaInfo;
