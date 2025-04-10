// css
import "../styles/globals.css";

// fonts
import { IBM_Plex_Mono, IBM_Plex_Sans_JP } from "next/font/google";

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

const ibmPlexSansJP = IBM_Plex_Sans_JP({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
  variable: "--font-ibm-plex-sans-jp",
  display: "swap",
});

export const metadata = {
  title: "Your App Title",
  description: "Description here",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ja"
      className={`${ibmPlexMono.variable} ${ibmPlexSansJP.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
