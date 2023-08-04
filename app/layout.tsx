/* eslint-disable @next/next/no-page-custom-font */
import "./styles/globals.scss";
import "./styles/markdown.scss";
import "./styles/highlight.scss";
import { getClientConfig } from "./config/client";
import { type Metadata } from 'next';

export const metadata: Metadata = {
  title: "Use ChatGPT Online Free - Using the OpenAI Chat API",
  description: "ChatGPT-Free.cc is a chatbot powered by the ChatGPT API. It offers free access to all users for their projects, eliminating the need for paid services or support.",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#151515" },
  ],
  appleWebApp: {
    title: "Use ChatGPT Online Free - Using the OpenAI Chat API",
    statusBarStyle: "default",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="config" content={JSON.stringify(getClientConfig())} />
        <link rel="manifest" href="/site.webmanifest"></link>
        <script src="/serviceWorkerRegister.js" defer></script>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id='G-4R749CZ0MY'`}
        ></script>
        <script
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-4R749CZ0MY', {
                page_path: window.location.pathname,
              });
            `,
          }}
        ></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
