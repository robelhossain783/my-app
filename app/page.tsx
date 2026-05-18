"use client";
import "./globals.css";
import { useState } from "react";
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

type Product = {
  id: number;
  name: string;
  price: number;
  oldPrice: number;
  image: string;
  badge: string;
};

export default function Page() {

  const [cart,setCart] = useState(0);
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [cartOpen,setCartOpen] = useState(false);
  const [checkoutOpen,setCheckoutOpen] = useState(false);

return (
  <div>

    {/* TOPBAR */}
    <div className="topbar">
      <div>Free Delivery Over ৳999</div>
      <div>Call: 01303750286</div>
    </div>

    {/* NAVBAR */}
    <header className="navbar">
      <div className="logo">Avaa</div>

      <div className="search-box">
        <input placeholder="Search products..." />
      </div>

      <div className="cart" onClick={() => setCartOpen(true)}>
        Cart ({cart})
      </div>
    </header>

    {/* CATEGORY */}
    <section className="categories">
      <div className="category">Honey</div>
      <div className="category">Oil & Ghee</div>
      <div className="category">Dates</div>
      <div className="category">Spices</div>
      <div className="category">Rice</div>
      <div className="category">Organic</div>
    </section>

    {/* HERO */}
    <section className="hero">

      <div className="hero-left">
        <span className="offer">100% Organic Grocery</span>
        <h1>Pure Natural Food For Every Home</h1>
        <p>Healthy grocery products delivered to your doorstep.</p>
        <button>Shop Now</button>
      </div>

      <div className="hero-right">
        <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1200&auto=format&fit=crop" />
      </div>

    </section>

    {/* PRODUCTS */}
    <section className="section">

      <div className="section-header">
        <h2>Top Selling Products</h2>
        <Link href="/products">
  <button>View All</button>
</Link>
      </div>

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

        <button
          className="cart-btn"
          onClick={() => {
            setCartItems([...cartItems, product]);
            setCart(cart + 1);
            setCartOpen(true);
          }}
        >
          Add To Cart
        </button>

        <button
          className="buy-btn"
          onClick={() => setCheckoutOpen(true)}
        >
          Buy Now
        </button>

      </div>

    </div>

  </div>
))}

      </div>
    </section>

    {/* CART */}
    {cartOpen && (
      <div className="cart-overlay">
        <div className="cart-sidebar">

          <div className="cart-header">
            <h2>Shopping Cart</h2>
            <button className="close-cart" onClick={() => setCartOpen(false)}>✕</button>
          </div>

          {cartItems.length === 0 ? (
            <div className="empty-cart">Cart is empty</div>
          ) : (
            <>
              {cartItems.map((item, i) => (
                <div className="cart-item" key={i}>
                  <img src={item.image} />
                  <div>
                    <h4>{item.name}</h4>
                    <p>৳ {item.price}</p>
                  </div>
                </div>
              ))}

              <button
                className="checkout-btn"
                onClick={() => {
                  setCheckoutOpen(true);
                  setCartOpen(false);
                }}
              >
                Proceed To Checkout
              </button>
            </>
          )}

        </div>
      </div>
    )}

    {/* CHECKOUT */}
    {checkoutOpen && (
      <div className="checkout-overlay">

        <div className="checkout-modal">

          <button className="close-checkout" onClick={() => setCheckoutOpen(false)}>
            ✕
          </button>

          <h2>Checkout</h2>

          <form onSubmit={(e) => {
            e.preventDefault();
            alert("Order Placed!");
          }}>

            <input placeholder="Full Name" required />
            <input placeholder="Phone Number" required />
            <input placeholder="Address" required />

            <select required>
              <option>Select Payment</option>
              <option>bKash</option>
              <option>Nagad</option>
              <option>COD</option>
            </select>

            <div className="payment-box">
              <h3>Payment Info</h3>
              <p>bKash: 017XXXXXXXX</p>
              <p>Nagad: 018XXXXXXXX</p>
            </div>

            <input placeholder="Transaction ID" />

            <button type="submit">Confirm Order</button>

          </form>

        </div>

      </div>
    )}

    {/* 👇 FOOTER (RIGHT PLACE) */}
    <footer className="footer">

      <div className="footer-grid">

        <div>
          <h3>E MART</h3>
          <p>Trusted organic grocery platform in Bangladesh.</p>
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
);
}
