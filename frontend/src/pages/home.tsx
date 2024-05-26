import { Link } from "react-router-dom"
import ProductCard from "../components/product-card"

const Home = () => {
  const addToCartHandler = () => {};


  return (
    <div className="home">
      <section>
        {/* background poster section */}
      </section>

      <h1>
        Latest Products
        <Link to="/search" className="findmore" >More</Link>
      </h1>

      <main>
        <ProductCard productId="12345" name="Macbook" price={400000} stock={15} photo="https://m.media-amazon.com/images/I/710TJuHTMhL._SX522_.jpg" handler={addToCartHandler} />
      </main>

    </div>
  )
}

export default Home