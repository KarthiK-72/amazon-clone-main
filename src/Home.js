import React from "react";
import "./Home.css";
import Product from "./Product";
import Carousels from "./Carousels";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <Carousels className="home__image" />
        <div className="home__row">
          <Product
            id="987456"
            title="OnePlus Nord CE 5G (Blue Void, 8GB RAM, 128GB Storage)"
            price={349}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/61iy2Ru9KdS._SL1500_.jpg"
          />
          <Product
            id="495380"
            title="Dell XPS 13 (9310), 13.4- inch FHD+ Touch Laptop - Intel Core i7-1185G7, 16GB 4267MHz LPDDR4x RAM, 512GB SSD,  Windows 10 Pro"
            price={1570}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/91MXLpouhoL._AC_SL1500_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="12345678"
            title="Game Of Thrones"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/81q1AybR-ZL.jpg"
            rating={5}
          />
          <Product
            id="4903850"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3.5}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="12345678"
            title="New Balance TC 360+ Cricket Premium Kashmiri Willow Cricket bat, Men's Size"
            price={78.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/61jOqRb3z5L._AC_SL1500_.jpg"
          />
          <Product
            id="12345679"
            title="Oculus Quest 2 — Advanced All-In-One Virtual Reality Headset — 64 GB"
            price={299.0}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/519XvHWeb9S._SL1500_.jpg"
          />
          <Product
            id="12345670"
            title="RUNMUS Gaming Headset Xbox One Headset  "
            price={53.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/61lnzTv2a0L._AC_SL1000_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
          />
          <Product
            id="49538094"
            title="Gaming Desk Chair, Reclining Ergonomic Leather Computer Chair, Racing Style Gaming Chair"
            price={109}
            rating={3.5}
            image="https://images-na.ssl-images-amazon.com/images/I/71qjaRWYl1L._AC_SL1500_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="49638094"
            title="BESTOPE Makeup Brushes 16PCs Makeup Brushes Set with 4PCs Makeup Sponge and 1 Brush Cleaner Premium Synthetic Foundation Brushes Blending Face Powder Eye Shadows Make Up Brushes Tool(Rose Gold)"
            price={10}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/71%2BazWrlU3L._SL1500_.jpg"
          />
          <Product
            id="496398976094"
            title="Laura Ashley Home - Charlotte Collection - Luxury Ultra Soft Comforter, All Season Premium Bedding Set"
            price={172}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/A1kFVCaVUOL._AC_SL1500_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="495638094"
            title="TP-Link Archer C6 Gigabit MU-MIMO Wireless Router with Access Point Mode, Qualcomm Chipset"
            price={40}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/51ax8peHlPL._SL1000_.jpg"
          />
          <Product
            id="4963916842094"
            title="JONES THUNDER PRO (750 Watt) Mixer Grinder With 4 Jars (3 Stainless Steel Jars & 1 Poly Jar (Blue))- 1 Year Warranty"
            price={25}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/71-HPMpTbnL._SL1500_.jpg"
          />
          <Product
            id="49639161842094"
            title="Apple AirPods Pro"
            price={280}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/71zny7BTRlL._SL1500_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
