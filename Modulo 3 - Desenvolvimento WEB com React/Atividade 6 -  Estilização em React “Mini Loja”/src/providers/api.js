import axios from "axios";

const api = axios.create({
  baseURL: "https://dummyjson.com/products",
});

export const getProductsByCategory = async (category) => {
  try {
    const response = await api.get(`/category/${category}`);
    return response.data.products || [];
  } catch (error) {
    console.error("Erro ao buscar produtos:", error);
    return [];
  }
};

export const getProductById = async (id) => {
  try {
    const response = await api.get(`/${id}`);
    console.log(response.data);
    return response.data || null;
  } catch (error) {
    console.error("Erro ao buscar produto:", error);
    return null;
  }
};
