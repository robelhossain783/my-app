"use client";

import Link from "next/link";

const products = [
  {
    id:1,
    name:"Sundarban Honey",
    price:2200,
    oldPrice:2500,
    image:"https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=1200&auto=format&fit=crop",
    badge:"Best Selling"
  },
  {
    id:2,
    name:"Deshi Mustard Oil",
    price:1550,
    oldPrice:1700,
    image:"https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?q=80&w=1200&auto=format&fit=crop",
    badge:"Organic"
  },
  {
    id:3,
    name:"Premium Dates",
    price:1800,
    oldPrice:2000,
    image:"https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?q=80&w=1200&auto=format&fit=crop",
    badge:"New Arrival"
  },
  {
    id:4,
    name:"Organic Ghee",
    price:1300,
    oldPrice:1500,
    image:"https://images.unsplash.com/photo-1626200419199-391ae4be7a41?q=80&w=1200&auto=format&fit=crop",
    badge:"Top Selling"
  }
];

export default function ProductsPage(){

  return(
    <div>

      {/* NAVBAR */}
      <header className="navbar">

        <Link href="/" className="logo">
          Avaa
        </Link>

        <div className="search-box">
          <input placeholder="Search products..." />
        </div>

        <Link href="/" className="cart">
          Back Home
        </Link>

      </header>

      {/* PAGE HEADER */}
      <section className="section">

        <div className="section-header">
          <h2>All Products</h2>

          <Link href="/">
            <button>Home</button>
          </Link>
        </div>

        {/* PRODUCTS GRID */}
        <div className="product-grid">

          {products.map((product) => (
            <div className="product-card" key={product.id}>

              <span className="badge">
                {product.badge}
              </span>

              <Link href={`/product/${product.id}`}>
                <img
                  src={product.image}
                  alt={product.name}
                />
              </Link>

              <div className="content">

                <h3>{product.name}</h3>

                <div className="price">

                  <span className="new-price">
                    ৳ {product.price}
                  </span>

                  <span className="old-price">
                    ৳ {product.oldPrice}
                  </span>

                </div>

                <div className="btn-group">

                  <button className="cart-btn">
                    Add To Cart
                  </button>

                  <button className="buy-btn">
                    Buy Now
                  </button>

                </div>

              </div>

            </div>
          ))}

        </div>

      </section>

      {/* FOOTER */}
      <footer className="footer">

        <div className="footer-grid">

          <div>
            <h3>E MART</h3>
            <p>
              Trusted organic grocery platform in Bangladesh.
            </p>
          </div>

          <div>
            <h4>Categories</h4>
            <p>Honey</p>
            <p>Oil & Ghee</p>
            <p>Dates</p>
            <p>Spices</p>
          </div>

          <div>
            <h4>Support</h4>
            <p>Contact</p>
            <p>Shipping</p>
            <p>Privacy Policy</p>
          </div>

        </div>

        <div className="footer-bottom">
          © 2026 AVAA. All rights reserved.
        </div>

      </footer>

    </div>
  )
}