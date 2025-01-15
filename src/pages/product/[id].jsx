import { useRouter } from "next/router";
import { healthCare } from "../../assets/constant/product_data";

export default function UserDetails() {
  const router = useRouter();
  const { id } = router.query;

  // Find the user by id
  const user = healthCare.find((u) => u.id === parseInt(id));

  if (!user) {
    return <h1>User not found</h1>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <div className="flex justify-around">
        <div>
          <img
            className="object-cover w-52 m-auto"
            src={user.images}
            alt="product image"
          />
        </div>
        <div>
          <p className="text-xl tracking-tight text-slate-900">{user.name}</p>
          <p className="mt-2 mb-5 flex items-center justify-between">
            {user.price}
          </p>
          <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">
            {user.rating}
          </span>
        </div>
      </div>
    </div>
  );
}
