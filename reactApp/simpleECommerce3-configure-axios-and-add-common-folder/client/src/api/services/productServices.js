import { http } from '../../common/http';

export const getProducts = async () => {
  const response = await http.get('/api/products');
  return response.data;
};