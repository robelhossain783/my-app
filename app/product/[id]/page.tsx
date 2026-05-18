"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Sundarban Honey",
    price: 2200,
    oldPrice: 2500,
    image:
      "https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=1200&auto=format&fit=crop",
    description:
      "Pure natural Sundarban honey collected from mangrove forest.",
  },
  {
    id: 2,
    name: "Deshi Mustard Oil",
    price: 1550,
    oldPrice: 1700,
    image:
      "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?q=80&w=1200&auto=format&fit=crop",
    description: "Cold pressed mustard oil for healthy cooking.",
  },
  {
    id: 3,
    name: "Premium Dates",
    price: 1800,
    oldPrice: 2000,
    image:
      "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?q=80&w=1200&auto=format&fit=crop",
    description: "Fresh premium quality dates imported from Middle East.",
  },
  {
    id: 4,
    name: "Organic Ghee",
    price: 1300,
    oldPrice: 1500,
    image:
      "https://images.unsplash.com/photo-1626200419199-391ae4be7a41?q=80&w=1200&auto=format&fit=crop",
    description: "Pure organic cow ghee for healthy lifestyle.",
  },
];

type Product = {
  id: number;
  name: string;
  price: number;
  oldPrice: number;
  image: string;
  description: string;
};

export default function ProductPage() {
  const router = useRouter();
  const [checkoutOpen,setCheckoutOpen] = useState(false);
  const [cart,setCart] = useState(0);
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [cartOpen,setCartOpen] = useState(false);

  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  const [qty, setQty] = useState(1);

  if (!product)
    return <h2 style={{ padding: "50px" }}>Product Not Found</h2>;

  // ✅ ADD TO CART (LOCAL STORAGE - BEST PRACTICE)
  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");

    const updatedCart = [...cart, { ...product, qty }];

    localStorage.setItem("cart", JSON.stringify(updatedCart));

    alert(`${product.name} added to cart`);
  };

  return (
    <div>

      {/* NAVBAR */}
      <header className="navbar">
        <Link href="/" className="logo">
          Avaa
        </Link>

        <div className="search-box">
          <input placeholder="Search products..." />
        </div>

        <div className="cart" onClick={() => setCartOpen(true)}>
        Cart ({cart})
      </div>
      </header>

      {/* PRODUCT PAGE */}
      <div className="product-page">

        {/* LEFT IMAGE */}
        <div className="product-left">
          <img src={product.image} alt={product.name} />
        </div>

        {/* RIGHT CONTENT */}
        <div className="product-right">

          <h1>{product.name}</h1>

          <div className="price">
            <span className="new-price">৳ {product.price}</span>
            <span className="old-price">৳ {product.oldPrice}</span>
          </div>

          <p className="desc">{product.description}</p>

          {/* QTY CONTROL */}
          <div className="qty-box">
            <button onClick={() => setQty(qty > 1 ? qty - 1 : 1)}>-</button>
            <span>{qty}</span>
            <button onClick={() => setQty(qty + 1)}>+</button>
          </div>

          {/* BUTTONS */}
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
              onClick={() => {
  if (!product) return;

  setCartItems((prev) => [...prev, product]);
  setCart((prev) => prev + 1);
  setCartOpen(true);
}}
            >
              Buy Now
            </button>

          </div>

        </div>
      </div>
      

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


      {/* FOOTER */}
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