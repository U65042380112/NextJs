"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
async function getDataFromAPI() {
  const res = await fetch("/api/products");
  if (!res.ok) {
    throw new Error("fetch error");
  }
  return res.json();
}

interface ProductItem {
  product_id: number;
  product_name: string;
  product_price: number;
}

export default function Page() {
  const [productState, setProductState] = useState<ProductItem[]>([]);
  const router = useRouter();
  const initProduct = async () => {
    try {
      const data = await getDataFromAPI();
      setProductState(data);
    } catch (err) {
      console.log("err:", err);
    }
  };
  useEffect(() => {
    initProduct();
  }, []);

  const handleDelete = async (id: number) => {
    try {
      await fetch(`/api/products/${id}`, {
        method: "delete",
      });
      initProduct();
    } catch (err) {
      console.log("error ===>", err);
    }
  };

  console.log(productState);

  return (
    <div>
      <table className="mx-auto w-1/3 divide-y divide-blue-500 text-center">
        <thead className="px-6 py-3 bg-indigo-300	 text-center text-3xl font-medium text-red-500 uppercase tracking-wider">
          <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Price</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-800 text-2xl text-center">
          {productState.map((d, i) => (
            <tr key={i} className={i % 2 === 0 ? "bg-slate-100" : "bg-white"}>
              <td>{d.product_id}</td>
              <td>{d.product_name}</td>
              <td>{d.product_price}</td>
              <td>
                <button
                  className="rounded-md bg-green-600 text-white px-2"
                  onClick={() => router.push(`/products/${d.product_id}`)}
                >
                  Show Info
                </button>
                <button
                  className="rounded-md bg-red-600 text-white px-2"
                  onClick={() => handleDelete(d.product_id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
