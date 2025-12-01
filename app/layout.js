import "./globals.css";

export const metadata = {
  title: "Fathir Hendri",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* FONT AWESOME */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
          referrerPolicy="no-referrer"
        />

        {/* DEVICON */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
        />
      </head>

      <body className="antialiased transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}
