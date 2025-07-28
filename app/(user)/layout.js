import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import "../globals.css";

function RootLayout ({children}){
  return (
    <html>
  <body>
    <Navigation/>
    {children}
    <Footer/>
  </body>
</html>
)
}

export default RootLayout;