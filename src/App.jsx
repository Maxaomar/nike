import CustomersReviews from "./sections/CustomersReviews";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import PopularProducts from "./sections/PopularProducts";
import Services from "./sections/Services";
import SpecialOffer from "./sections/SpecialOffer";
import Subscribe from "./sections/Subscribe";
import SuperQuality from "./sections/SuperQuality";
import Nav from "./components/Nav";

export default function App() {
  return (
         <main>
          <Nav />
          <CustomersReviews />
          <Footer />
          <Hero />
          <PopularProducts />
          <Services />
          <SpecialOffer />
          <Subscribe />
          <SuperQuality />
         </main>
  )
}