import Navbar from "../components/Navbar";

import { useState, useEffect } from "react";

import Footer from "../components/Footer";

import api from "../services/api";

function ManageProducts() {
  const [name, setName] = useState("");

  const [category, setCategory] = useState("");

  const [price, setPrice] = useState("");

  const [image, setImage] = useState("");

  const [products, setProducts] = useState([]);

  const fetchProducts = () => {
    api

      .get("/products")

      .then((response) => {
        setProducts(response.data);
      })

      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleSubmit = async () => {
    try {
      await api.post("/products", {
        name,

        category,

        price: Number(price),

        image,
      });

      alert("Product added successfully");

      fetchProducts();

      setName("");

      setCategory("");

      setPrice("");

      setImage("");
    } catch (error) {
      console.log(error);
    }
  };

  const [selectedProduct, setSelectedProduct] = useState(null);

  const updateProduct = async () => {
    try {
      await api.put(
        `/products/${selectedProduct.id}`,

        {
          name: selectedProduct.name,

          category: selectedProduct.category,

          price: Number(selectedProduct.price),

          image: selectedProduct.image,
        },
      );

      fetchProducts();

      setSelectedProduct(null);

      alert("Updated successfully");
    } catch (error) {
      console.log(error);
    }
  };

  const deleteProduct = async (id) => {
    try {
      await api.delete(`/products/${id}`);

      fetchProducts();

      if (selectedProduct?.id === id) {
        setSelectedProduct(null);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />

      <section className="manage-products">
        <div className="manage-top">
          <h1>Manage Products</h1>
        </div>

        <p>Edit, update and remove grocery products.</p>

        <div className="add-panel">
          <input
            type="text"
            placeholder="Product Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="text"
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />

          <input
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />

          <input
            type="text"
            placeholder="Image Path"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />

          <button onClick={handleSubmit}>➕ Add Product</button>
        </div>

        <div className="manage-grid">
          {products.map((product) => (
            <div className="manage-card" key={product.id}>
              <h2>{product.name}</h2>

              <p>{product.category}</p>

              <h3>₹{product.price}</h3>

              <div className="manage-buttons">
                <button
                  className="edit-btn"
                  onClick={() => setSelectedProduct(product)}
                >
                  ✏️ Edit
                </button>

                <button
                  className="delete-btn"
                  onClick={() => deleteProduct(product.id)}
                >
                  🗑️ Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        {selectedProduct && (
          <div className="edit-panel">
            <h2>Edit Product</h2>

            <input
              type="text"
              value={selectedProduct.name}
              onChange={(e) =>
                setSelectedProduct({
                  ...selectedProduct,

                  name: e.target.value,
                })
              }
            />

            <input
              type="text"
              value={selectedProduct.category}
              onChange={(e) =>
                setSelectedProduct({
                  ...selectedProduct,

                  category: e.target.value,
                })
              }
            />

            <input
              type="number"
              value={selectedProduct.price}
              onChange={(e) =>
                setSelectedProduct({
                  ...selectedProduct,

                  price: e.target.value,
                })
              }
            />

            <input
              type="text"
              placeholder="Image Path"
              value={selectedProduct.image || ""}
              onChange={(e) =>
                setSelectedProduct({
                  ...selectedProduct,

                  image: e.target.value,
                })
              }
            />

            <button onClick={updateProduct}>Update Product</button>
          </div>
        )}
      </section>
      <Footer />
    </>
  );
}

export default ManageProducts;
