const baseUrl = "https://norma.nomoreparties.space";
const andPointUrl = "/api/ingredients";

const API_URL = baseUrl + andPointUrl;

const isResponseOk = (result) => {
  return result.ok
    ? result.json()
    : result.json().then((error) => Promise.reject(error));
};

export const getDataFromApi = () => {
  return fetch(`${API_URL}`)
    .then(isResponseOk)
    .then((data) => {
      if (data?.success) return data.data;
      return Promise.reject(data);
    });
};
