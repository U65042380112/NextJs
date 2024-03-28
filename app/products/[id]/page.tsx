async function getDataFromAPI(id: number) {
    const res = await fetch(`http://localhost:3000/api/products/${id}`);
    if (!res.ok) {
      throw new Error("fetch error");
    }
    return res.json();
  }
  
  export default async function Page({ params }) {
    const product = await getDataFromAPI(params.id);
  
    return (
      <div>
        <table className="mx-auto w-1/4 divide-y divide-blue-500 text-center">
          <thead className="px-6 py-3 bg-indigo-300 text-center text-3xl font-medium text-red-500 uppercase tracking-wider">
            <tr>
              <td>ID</td>
              <td>Name</td>
              <td>Price</td>
            </tr>
          </thead>
          {product.product_id && (
            <tbody className="bg-white divide-y divide-gray-800 text-2xl text-center">
              <tr>
                <td>{product.product_id}</td>
                <td>{product.product_name}</td>
                <td>{product.product_price}</td>
              </tr>
            </tbody>
          )}
          {!product.product_id && (
            <tbody>
              <tr>
                <td colSpan="3" className="text-red-500 text-xl">
                  Data not found
                </td>
              </tr>
            </tbody>
          )}
        </table>
      </div>
    );
  }
  