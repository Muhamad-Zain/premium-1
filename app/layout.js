import localFont from "next/font/local";
import "./globals.css";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Weddings-app",
  description: "Undangan Digital",
  // openGraph: {
  //   title: "Weddings-app",
  //   description: "Undangan Digital untuk acara pernikahan.",
  //   url: "https://i-vee-new.vercel.app/3134123434/",
  //   images: [
  //     {
  //       url: "https://i-vee-new.vercel.app/img/wedding.png",
  //       width: 600,
  //       height: 315,
  //       alt: "Banner Undangan Pernikahan",
  //     },
  //   ],
  //   type: "website",
  // }
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icons.ico" type="image/x-icon" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap" rel="stylesheet" />
      </head>
      <body 
        className={`${geistSans.variable} ${geistMono.variable} antialiased max-w-[1400px] m-auto `}
      >
        {children}
      </body>
    </html>
  );
}
