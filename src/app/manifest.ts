import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "MaxDigital CR",
    short_name: "MaxDigital CR",
    description:
      "Agencia de diseño y desarrollo web en La Fortuna, Costa Rica. Landing pages, sitios catálogo y tiendas en línea.",
    start_url: "/",
    display: "standalone",
    theme_color: "#0D1117",
    background_color: "#0D1117",
    icons: [
      { src: "/brand/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/brand/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
