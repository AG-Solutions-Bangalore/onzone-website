import React from "react";
import { Link, useParams } from "react-router-dom";
import { productsByCat } from "../data/products";

function normalizeSlug(slug) {
  if (!slug) return "";
  return (
    Object.keys(productsByCat).find(
      (k) => k.toLowerCase() === slug.toLowerCase(),
    ) || ""
  );
}

const CategoryProducts = () => {
  const { category } = useParams();
  const catKey = normalizeSlug(category);
  const products = catKey ? productsByCat[catKey] : [];

  return (
    <div className="max-w-[1180px] mx-auto px-6 md:px-10 pt-28 pb-16">
      <div className="mb-8" data-aos="fade-up">
        <h1 className="text-3xl font-serif-luxury">{catKey || "Products"}</h1>
        <p className="text-sm text-gray-600 mt-2">
          Showing all products for {catKey || "this category"}.
        </p>
      </div>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        {products.map((p) => (
          <Link
            key={p.id}
            to={`/product/${p.id}`}
            className="block border rounded overflow-hidden hover:shadow-lg bg-white"
          >
            <div
              className="w-full h-48 bg-cover bg-center"
              style={{ backgroundImage: `url('${p.img}')` }}
            />
            <div className="p-4">
              <div className="font-semibold">{p.name}</div>
              <div className="text-sm text-gray-500">{p.id}</div>
              <div className="mt-2 font-medium">{p.price}</div>
            </div>
          </Link>
        ))}
        {products.length === 0 && (
          <div className="text-gray-600">
            No products found for this category.
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryProducts;
