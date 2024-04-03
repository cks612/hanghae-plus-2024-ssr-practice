import React from "react";
import { Helmet } from "react-helmet-async";

const MetaTag = ({ title, metaTitle, url, description, image }) => {
  return (
    <Helmet>
      <title>{title ?? "title"}</title>

      {/* Open graph Meta Tags */}
      <meta property="og:url" content={url || "https://www.google.com"} />
      <meta property="og:title" content={metaTitle ?? "title"} />
      <meta property="og:description" content={description ?? "description"} />
      <meta property="og:image" content={image ?? "image"} />
      <meta property="og:type" content="website" />

      {/* <!-- Twitter Meta Tags --> */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metaTitle ?? "title"} />
      <meta name="twitter:description" content={description ?? "description"} />
      <meta name="twitter:image" content={image ?? ""} />
    </Helmet>
  );
};

export default MetaTag;
