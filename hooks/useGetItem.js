import React from "react";
import { get } from "../api";

const useGetItem = (id, delay = 1000) => {
  const [item, setItem] = React.useState({});
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    if (id) {
      const getItem = async (id) => {
        const response = await get(`/api/products/${id}`);
        return response;
      };

      getItem(id).then((res) => {
        setTimeout(() => {
          setItem(res.data.product);
          setLoading(false);
        }, delay);
      });
    }
  }, [id]);

  return [item, loading, setItem];
};

export default useGetItem;
