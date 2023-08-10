import React, { useState } from "react";
import Product from "./Product";
import CartModal from "./CartModal";

function ShoppingProduct() {
  const [product, setProduct] = useState([
    {
      id: 1,
      title: "Cola",
      price: 6,
      image:
        "https://ayb.akinoncdn.com/products/2019/01/18/3544/5aa1ee14-1c83-4213-a62b-773c4785e187_size780x780_quality60_cropCenter.jpg",
    },
  
    {
      id: 3,
      title: "Sprite",
      price: 5,
      image: "https://images.ofix.com/product-image/s99509_2.jpg",
    },
    {
      id: 4,
      title: "Ayran",
      price: 3,
      image:
        "https://konyamevlana.com/florya/wp-content/uploads/2020/12/sutas-ayran-285ml.jpg",
    },
    {
      id: 5,
      title: "Salgam",
      price: 4,
      image: "http://esenlik.com.tr//images/prod/5704.jpg",
    },
    {
      id: 6,
      title: "Cay",
      price: 3,
      image:
        "https://evidea.akinoncdn.com/products/2021/08/05/62421/e5bda9ce-91bf-453a-96e1-acea983efb2a.jpg",
    },
    {
      id: 7,
      title: "Kahve",
      price: 10,
      image:
        "https://media.istockphoto.com/photos/turkish-coffee-foamy-picture-id510413268?k=20&m=510413268&s=612x612&w=0&h=llBhDOUbNHaQXc-ch7UQ_OIWkmJAJUzaf6oZavKUrmQ=",
    },
    {
      id: 8,
      title: "Soda",
      price: 4,
      image: "http://esenlik.com.tr//images/prod/2928.jpg",
    },
    {
      id: 9,
      title: "Bisiklet",
      price: 1000,
      image:
        "https://productimages.hepsiburada.net/s/37/375/10567819821106.jpg",
    },
    {
      id: 11,
      title: "Bugatti Chiron",
      price: 2500000,
      image:
        "https://productimages.hepsiburada.net/s/34/375/10460429320242.jpg",
    },
    {
      id: 12,
      title: "Iskender",
      price: 50,
      image:
        "https://img3.aksam.com.tr/imgsdisk/2020/10/31/t25_en-kolay-iskender-sosu-ta-744.jpg",
    },
    {
      id: 13,
      title: "Lahmacun",
      price: 12,
      image:
        "https://cdn.yemek.com/mnresize/940/940/uploads/2020/04/lahmacun-yeni-one-cikan.jpg",
    },
    {
      id: 14,
      title: "Malikane",
      price: 2500000000,
      image:
        "https://foto.haberler.com/haber/2020/12/07/israil-de-4-odali-malikane-250-milyon-dolarda-13784975_amp.jpg",
    },
    {
      id: 15,
      title: "Helicopter",
      price: 28750000,
      image:
        "https://image.elitema.com.tr/db_images/224/4/11/arimg1138-8---bell-429-exter%C4%B1or.jpg",
    },
    {
      id: 16,
      title: "Luxury Yatch",
      price: 17500000,
      image: "https://d.neoldu.com/news/57966.jpg",
    },
    {
      id: 17,
      title: "Limosine",
      price: 1000000,
      image:
        "https://img.paratic.com/dosya/2015/03/dunyanin-en-pahali-limuzinleri-1024x683.jpg",
    },
    {
      id: 18,
      title: "Ada",
      price: 125000000,
      image: "https://icdn.ensonhaber.com/resimler/galeri/1_11195.jpg",
    },
    {
      id: 22,
      title: "Stadium",
      price: 2500000,
      image:
        "https://cdnuploads.aa.com.tr/uploads/Contents/2020/06/01/thumbs_b_c_dc24a18cc233bd960f410911f5d39bf2.jpg",
    },
  ]);

  // khai bao state chua cac san pham
  const [cartProduct, setCartProduct] = useState([]);
  const addToCart = (product) => {
    const existingProduct = cartProduct.find((item) => item.id === product.id);
    if (existingProduct) {
      existingProduct.quantity += 1;
      setCartProduct([...cartProduct]);
    } else {
      setCartProduct([...cartProduct, { ...product, quantity: 1 }]);
    }
  };
  //viet ham updateQuantity de truyen xuong cho con
  const updateQuantity = (itemId, newQuantity) => {
    if (newQuantity >= 1) {
      const editQuantity = cartProduct.map((e) =>
        e.id === itemId ? { ...e, quantity: newQuantity } : e
      );
      setCartProduct(editQuantity);
    }
  };

  // hàm tính tổng số tiền cần thanh toán
  let totalMoney = 0;
  for (let i = 0; i < cartProduct.length; i++) {
    totalMoney += cartProduct[i].quantity * cartProduct[i].price;
  }

  //DELETE
  const handleDeleteCart = (id) => {
    const newData = cartProduct.filter((e, i) => e.id !== id);
    setCartProduct(newData);
  };

  return (
    <>
      <main className="main">
        <section className="box-1">
          <div className="container">
            <nav className="nav-menu">
              <p>ACADEMY_SHOP</p>

              <ul className="menu-icon">
                <li>
                  <i className="fa-solid fa-user" />
                </li>
                <li>
                  <i className="fa-solid fa-magnifying-glass" />
                </li>
                <li>
                  <i className="fa-solid fa-cart-shopping" />
                </li>
              </ul>
            </nav>
          </div>
        </section>
        <section className="box-3">
          <div className="container">
            <div className="product-hunt">
              {product.map((item, index) => (
                <Product key={index} productItem={item} addToCart={addToCart} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <CartModal
        cartProduct={cartProduct}
        updateQuantity={updateQuantity}
        handleDeleteCart={handleDeleteCart}
        totalMoney={totalMoney}
      />
    </>
  );
}

export default ShoppingProduct;
