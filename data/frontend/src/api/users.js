import backend from "./backend";

export const store = async user => {
  const {
    data: { data = {} }
  } = await backend.post("/users", user);

  return data;
};

export default {
  store
};
