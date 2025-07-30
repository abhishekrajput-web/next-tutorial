import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import "./globals.css";
import {Roboto, Work_Sans} from "next/font/google"; 

const roboto = Roboto({
  subsets:["latin"],
  variable:"--font-roboto"
})

const workSans = Work_Sans({
  subsets:["latin"],
  variable:"--font-work-sans"
})

function RootLayout ({children}){
  return (
    <html lang="en">
  <body className={`${roboto.variable} ${workSans.variable}`} >
    <Navigation/>
    {children}
    <Footer/>
  </body>
</html>
)
}

export default RootLayout;