import backend from "./backend";

export const store = async info => {
  const {
    data: { data = {} }
  } = await backend.post("/login", info);

  return data;
};

export default {
  store
};
