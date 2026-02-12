import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
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
        <meta name="google-adsense-account" content="ca-pub-6836466532865002"></meta>
        <meta name="google-site-verification" content="MIDLOYFbs4SS5EOC6oQcQd2CU6R4U0gxy70ESi1oLew" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6836466532865002"
     crossorigin="anonymous"></script>
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
