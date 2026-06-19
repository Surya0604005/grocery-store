import Navbar from "../components/Navbar";

import { useState } from "react";

import Footer from "../components/Footer";

function ManageProducts() {
  const [products, setProducts] = useState([
    {
      id: 1,

      name: "Milk",

      category: "Dairy",

      price: 60,

      quantity: 20,
    },

    {
      id: 2,

      name: "Bread",

      category: "Bakery",

      price: 40,

      quantity: 15,
    },
  ]);

  const [selectedProduct, setSelectedProduct] = useState(null);

  const updateProduct = () => {
    const updatedProducts = products.map((product) =>
      product.id === selectedProduct.id ? selectedProduct : product,
    );

    setProducts(updatedProducts);
  };

  const [newProduct, setNewProduct] = useState({
    name: "",

    category: "",

    price: "",

    quantity: "",
  });

  const deleteProduct = (id) => {
    const filteredProducts = products.filter((product) => product.id !== id);

    setProducts(filteredProducts);

    if (selectedProduct?.id === id) {
      setSelectedProduct(null);
    }
  };

  const addProduct = () => {
    const product = {
      id: Date.now(),

      ...newProduct,
    };

    setProducts([...products, product]);

    setNewProduct({
      name: "",

      category: "",

      price: "",

      quantity: "",
    });
  };

  const [showAddForm, setShowAddForm] = useState(false);

  return (
    <>
      <Navbar />

      <section className="manage-products">
        <div className="manage-top">
          <h1>Manage Products</h1>

          <button onClick={() => setShowAddForm(!showAddForm)}>
            + Add Product
          </button>
        </div>

        <p>Edit, update and remove grocery products.</p>

        <div className="manage-grid">
          {products.map((product) => (
            <div className="manage-card" key={product.id}>
              <h2>{product.name}</h2>

              <p>{product.category}</p>

              <h3>₹{product.price}</h3>

              <h4>Stock: {product.quantity}</h4>

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
              type="number"
              value={selectedProduct.quantity}
              onChange={(e) =>
                setSelectedProduct({
                  ...selectedProduct,

                  quantity: e.target.value,
                })
              }
            />

            <button onClick={updateProduct}>Update Product</button>
          </div>
        )}

        {showAddForm && (
          <div className="add-panel">
            <h2>Add Product</h2>

            <input
              type="text"
              placeholder="Product Name"
              value={newProduct.name}
              onChange={(e) =>
                setNewProduct({
                  ...newProduct,

                  name: e.target.value,
                })
              }
            />

            <input
              type="text"
              placeholder="Category"
              value={newProduct.category}
              onChange={(e) =>
                setNewProduct({
                  ...newProduct,

                  category: e.target.value,
                })
              }
            />

            <input
              type="number"
              placeholder="Price"
              value={newProduct.price}
              onChange={(e) =>
                setNewProduct({
                  ...newProduct,

                  price: e.target.value,
                })
              }
            />

            <input
              type="number"
              placeholder="Quantity"
              value={newProduct.quantity}
              onChange={(e) =>
                setNewProduct({
                  ...newProduct,

                  quantity: e.target.value,
                })
              }
            />

            <button onClick={addProduct}>Add Product</button>
          </div>
        )}
      </section>
      <Footer />
    </>
  );
}

export default ManageProducts;
