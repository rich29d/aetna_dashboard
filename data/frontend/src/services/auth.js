import loginApi from "../api/login";
import userApi from "../api/users";
import { get } from "lodash";

export const login = async (email, senha) => {
  try {
    const { token, user, success, messages } = await loginApi.store({
      email,
      senha
    });

    if (token && user) {
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", token);
    }

    return { success, messages };
  } catch (err) {
    console.error(err);
    return get(err, "response.data", {});
  }
};

export const register = async user => {
  try {
    if (user.senha !== user.repitaSenha) {
      return {
        success: false,
        messages: ["Senhas não conferem."]
      };
    }

    return await userApi.store(user);
  } catch (err) {
    return get(err, "response.data", {});
  }
};

export const logout = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("token");
  window.location.assign("#/login");
};

export default {
  login,
  logout,
  register
};
