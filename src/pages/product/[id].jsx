import { useRouter } from "next/router";
import { products } from "../../assets/constant/product_data";

export default function UserDetails() {
  const router = useRouter();
  const { id } = router.query;

  // Find the user by id
  const user = products.find((u) => u.id === parseInt(id));

  if (!user) {
    return <h1>User not found</h1>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <div className="flex justify-between">
        <div className="w-full">
          <img
            className="object-cover w-52 m-auto"
            src={user.images}
            alt="product image"
          />
        </div>
        <div className="w-full">
          <p className="text-xl tracking-tight text-slate-900">{user.name}</p>
          <p className="mt-2 mb-5 flex items-center justify-between">
            {user.price}
          </p>
          <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">
            {user.rating}
          </span>

          <div className="my-5">
            <h2>Features</h2>
            {user.features.map((feature, index) => (
              <li key={index} className="text-sm text-gray-500">
                {feature}
              </li>
            ))}
          </div>

          <div>
            <h2>Description</h2>
            <p className="text-sm text-gray-500">{user.description}</p>
          </div>
          
        </div>
      </div>
    </div>
  );
}
