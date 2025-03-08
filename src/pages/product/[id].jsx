import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import CallbackForm from "@/components/CallbackForm";

export default function UserDetails() {
    const router = useRouter();
  const { id } = router.query; // Get ID from the URL
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [model, setModel] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({
    name: "",
    price: 0,
  }); // State to store the selected product name


  const closeModel = () => {
    setModel(false);
    console.log("close model");
  };

  const handleProductSelect = (productName, productPrice, productOption) => {
    setSelectedProduct({
      name: productName,
      price: productPrice,
      option: productOption,
    }); // Set the selected product name
    setModel(true); // Open the modal
  };
  useEffect(() => {
    if (!id) return; // Prevent fetching if ID is not available

    fetch("http://medtrade.in/api.php")
      .then((response) => response.json())
      .then((result) => {
        if (result.success) {
          const foundUser = result.users.find((u) => u.id === id);
          if (foundUser) {
            setUser(foundUser);
          } else {
            setError("User not found ");
          }
        } else {
          setError("Failed to fetch data ");
        }
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!user) return <p>No user found</p>;

  return (
    <div style={{ padding: "20px" }}>
   
      <div className="lg:flex lg:justify-between">
        <div className="w-full">
          <img
            className="object-cover w-52 m-auto"
            src={user.images} alt={user.name}
          />
        </div>
        <div className="w-full">
          <p className="text-xl tracking-tight text-slate-900">{user.name}</p>
          <p className="mt-2 mb-5 flex items-center justify-between">
            <p className="text-xl lg:text-3xl font-bold text-slate-900 flex items-end">
              <span> ₹{user.price} </span>
              <p className="text-sm text-gray-500 line-through mx-1 pb-1">
                ₹{user.dis_price}
              </p>
            </p>
            <p className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">
              {user.rating}
            </p>
          </p>

          <div className="my-5">
            <h2>Features</h2>
            {JSON.parse(user.features).map((feature, index) => (
          <li key={index} className="text-sm text-gray-500" >{feature}</li>
        ))}
          </div>

          <div>
            <h2>Description</h2>
            {user.description.length > 0 ? (
              <p className="text-sm text-gray-500">{user.description || "Not Available"}</p>
            ) : (
              <p className="text-sm text-gray-500">Not Available</p>
            )}
          </div>

          <div>
            <button
              onClick={() => handleProductSelect(user.name, user.price)}
              className="w-full lg:w-fit flex items-center justify-center rounded-md bg-[--btncolor] px-8 py-2.5 text-center text-sm font-medium text-white hover:text-slate-900 border hover:bg-white focus:outline-none focus:ring-4 focus:ring-blue-300 mt-5"
            >
              {/* <IoCallOutline className="mr-2 h-6 w-6" /> */}
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
      {model && (
        <CallbackForm
          closeModel={closeModel}
          productName={selectedProduct.name}
          productPrice={selectedProduct.price}
        />
      )}
    </div>
  );
}
