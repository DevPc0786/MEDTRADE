import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import CallbackForm from "@/components/CallbackForm";

export default function ProductDetails() {
  const router = useRouter();
  const { id } = router.query; 
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [modal, setModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({
    name: "",
    price: 0,
    option: "",
  });

  const closeModal = () => setModal(false);

  const handleProductSelect = (name, price, option) => {
    setSelectedProduct({ name, price, option });
    setModal(true);
  };

  useEffect(() => {
    if (!id) return;

    fetch("http://medtrade.in/api.php")
      .then((res) => res.json())
      .then((result) => {
        console.log("API Response:", result); // Debugging

        if (!result || typeof result !== "object") {
          setError("Invalid API response format");
          return;
        }

        if (result.success === false) {
          setError(result.message || "Failed to fetch products");
          return;
        }

        // Ensure `products` exists and is an array
        const products = Array.isArray(result.products) ? result.products : [];
        
        if (products.length === 0) {
          setError("No products found");
          return;
        }

        // Find the product by ID
        const foundProduct = products.find((p) => String(p.id) === String(id));

        if (foundProduct) {
          setProduct(foundProduct);
        } else {
          setError("Product not found");
        }
      })
      .catch((err) => {
        console.error("Fetch Error:", err);
        setError("Failed to fetch data");
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!product) return <p>No product found!</p>;

  return (
    <div style={{ padding: "20px" }}>
      <div className="lg:flex lg:justify-between">
        <div className="w-full">
          <img className="object-cover w-52 m-auto" src={product.images} alt={product.name} />
        </div>
        <div className="w-full">
          <p className="text-xl tracking-tight text-slate-900">{product.name}</p>
          <p className="mt-2 mb-5 flex items-center justify-between">
            <span className="text-xl lg:text-3xl font-bold text-slate-900 flex items-end">
              ₹{product.price}
              {product.dis_price && (
                <span className="text-sm text-gray-500 line-through mx-1 pb-1">₹{product.dis_price}</span>
              )}
            </span>
            <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">
              {product.rating}
            </span>
          </p>

          <div className="my-5">
            <h2>Features</h2>
            {product.features ? (
              (() => {
                try {
                  // Parse JSON string into an array
                  const featuresArray = JSON.parse(product.features);

                  // Check if it's an array, then display as a list
                  return Array.isArray(featuresArray) ? (
                    <ul className="list-disc list-inside text-gray-500">
                      {featuresArray.map((feature, index) => (
                        <li key={index} className="text-sm">{feature}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-sm text-gray-500">{product.features}</p>
                  );
                } catch (error) {
                  console.error("JSON Parsing Error:", error);
                  return <p className="text-sm text-gray-500">{product.features}</p>;
                }
              })()
            ) : (
              <p className="text-sm text-gray-500">No features available</p>
            )}
          </div>

          <div>
            <h2>Description</h2>
            <p className="text-sm text-gray-500">{product.description || "Not Available"}</p>
          </div>

          <div>
            <button
              onClick={() => handleProductSelect(product.name, product.price, product.option)}
              className="w-full lg:w-fit flex items-center justify-center rounded-md bg-[--btncolor] px-8 py-2.5 text-center text-sm font-medium text-white hover:text-slate-900 border hover:bg-white focus:outline-none focus:ring-4 focus:ring-blue-300 mt-5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              RENT / BUY
            </button>
          </div>
        </div>
      </div>
      {modal && (
        <CallbackForm closeModel={closeModal} productName={selectedProduct.name} productPrice={selectedProduct.price} />
      )}
    </div>
  );
}
