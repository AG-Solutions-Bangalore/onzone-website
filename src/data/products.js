import { img } from "../lib/utils.js";

export const productsByCat = {
  Formal: [
    { id: 'F101', name: 'Navy Wool Suit', price: '₹12,500', img: img('img_6.jpeg') },
    { id: 'F102', name: 'Charcoal Blazer', price: '₹8,900', img: img('img_1.jpeg') },
    { id: 'F103', name: 'Crisp White Shirt', price: '₹2,700', img: img('img_2.jpeg') },
  ],
  Casual: [
    { id: 'C201', name: 'Linen Shirt', price: '₹3,200', img: img('img_7.jpeg') },
    { id: 'C202', name: 'Chino Trousers', price: '₹3,800', img: img('img_8.jpeg') },
    { id: 'C203', name: 'Relaxed Blazer', price: '₹6,400', img: img('img_4.jpeg') },
  ],
  Bottoms: [
    { id: 'B301', name: 'Tailored Trousers', price: '₹4,200', img: img('img_8.jpeg') },
    { id: 'B302', name: 'Slim Denims', price: '₹3,600', img: img('img_9.jpeg') },
    { id: 'B303', name: 'Corduroy Pants', price: '₹3,900', img: img('img_10.jpeg') },
  ],
  Premium: [
    { id: 'P401', name: 'Velvet Jacket', price: '₹14,800', img: img('img_12.jpeg') },
    { id: 'P402', name: 'Silk Shirt', price: '₹5,200', img: img('img_11.jpeg') },
  ],
};

export function getProductById(id) {
  for (const cat of Object.keys(productsByCat)) {
    const found = productsByCat[cat].find((p) => p.id === id);
    if (found) return { ...found, category: cat };
  }
  return null;
}
