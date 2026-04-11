import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Script from "next/script";
const poppins=Poppins({
  weight:"400",
  subset:["latin"],
})
export const metadata = {
  title: "Quertech - Tired Of Exploring Blog Websites And Getting Poor Results Which Matter The Most.",
  description: "Quertech is a blogging website in which u can find numerous number of blogs on ai, motivation, life, tech solutions, courses and so on / The Only Blog Website U Need",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
    <meta name="monetag" content="818a149133551c7c42aaf1e1294321aa"/>
        <meta name="google-adsense-account" content="ca-pub-4804171023580782"/>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4804171023580782"
     crossorigin="anonymous"></script>
       <script src="https://quge5.com/88/tag.min.js" data-zone="228625" async data-cfasync="false"></script>
    <link rel="canonical" href="https://articlesstack.pages.dev" />
       <meta name="google-site-verification" content="7GU0yZN31fEJZ6ejGBoKIWqkDuVLHyuFJHA485bWWE4" />
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4804171023580782"
     crossorigin="anonymous"></script>
       <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4804171023580782"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body
        className={`${poppins.className} noscrollbar`}
      >
        <Navbar/>
        {children}
      </body>
      
    </html>
  );
}
