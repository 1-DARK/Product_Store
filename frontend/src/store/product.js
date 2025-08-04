import { create } from "zustand";
export const useProductStore = create((set) => ({
  product: [],
  setProducts: (products) => set({ products }),
  createProduct: async (newProduct) => {
    if (!newProduct.name || !newProduct.image) {
    }
  },
}));
