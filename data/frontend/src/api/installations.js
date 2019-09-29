import backend from "./backend";

export const index = async params => {
  const {
    data: { data = {} }
  } = await backend.get("/installations", { params });

  return data;
};

export default {
  index
};
