import installationsApi from "../api/installations";
import { get } from "lodash";

export const sumSystemSizeByPeriod = async (period = 'ano') => {
  try {
    const querys = {
      dia: ["dataInstalacao.ano", "dataInstalacao.mes", "dataInstalacao.dia"],
      semana: ["dataInstalacao.ano", "dataInstalacao.mes", "dataInstalacao.semana"],
      mes: ["dataInstalacao.ano", "dataInstalacao.mes"],
      ano: ["dataInstalacao.ano"],
    }
    
    const params = {
      fields: [...querys[period], "potenciaSistema.soma"],
      groupBy: querys[period] || querys.ano,
      orderBy: querys[period] || querys.ano,
      limit: 10,
    };

    return await installationsApi.index(params);
  } catch (err) {
    console.error(err);
    return get(err, "response.data", {});
  }
};

export const countInstallations = async () => {
  try {
    const params = {
      fields: ["id.conta"]
    };

    return await installationsApi.index(params);
  } catch (err) {
    console.error(err);
    return get(err, "response.data", {});
  }
};

export const biggerCostInstallations = async () => {
  try {
    const params = {
      fields: ["cep", "custo"],
      orderBy: ["custo"],
      limit: 1,
    };

    return await installationsApi.index(params);
  } catch (err) {
    console.error(err);
    return get(err, "response.data", {});
  }
};

export const biggersSumInstallations = async () => {
  try {
    const params = {
      fields: ["custo.soma", "dataInstalacao.mes", "dataInstalacao.ano"],
      groupBy: ["dataInstalacao.mes", "dataInstalacao.ano"],
      orderBy: ["dataInstalacao.ano", "custo.soma"],
      limit: 3,
    };

    return await installationsApi.index(params);
  } catch (err) {
    console.error(err);
    return get(err, "response.data", {});
  }
};

export default {
  sumSystemSizeByPeriod,
  countInstallations,
  biggerCostInstallations,
  biggersSumInstallations,
};
