export const getMetaData = ({
  title: _title = "",
  description = "Buscamos encender una chispa de cambio y crecimiento en las mujeres por la tecnologia, específicamente en videojuegos.",
  url = "https://sparkcode-site.vercel.app/",
  overwriteTitle = false,
}) => {
  const title = overwriteTitle
    ? _title
    : _title
    ? `${_title} | Spark Code - WTM Chile`
    : "Spark Code - WTM Chile";
  const images = ["/images/og-image.png"];

  return {
    metadataBase: new URL(url),
    title,
    description,

    keywords: [
      "Spark",
      "Spark Code",
      "WTM Chile",
      "Chile",
      "Videojuegos",
      "Mujeres en videojuegos",
    ],
    authors: [{ name: "WTM Chile", url }],

    // OpenGraph
    openGraph: {
      type: "website",
      url,
      title,
      description,
      images,
    },

    // Twitter
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images,
    },
  };
};

export const getViewports = () => {
  return {
    themeColor: [
      { media: "(prefers-color-scheme: light)", color: "#6e0584" },
      { media: "(prefers-color-scheme: dark)", color: "#6e0584" },
    ],
    viewport: {
      width: "device-width",
      initialScale: 1,
      maximumScale: 1,
    },
  };
};
