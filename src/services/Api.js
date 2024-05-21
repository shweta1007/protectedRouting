import ApiCaller from "../utils/Api";

export const LoginApi = ({ email, password }) => {
  return ApiCaller(
    "api/login",
    "POST",
    {
      email,
      password,
    },
    `https://dev.sequifi.com/sequifi_backend/public/`
  );
};

export const TableApi = () => {
  return ApiCaller(
    '',
    'GET',
    {},
    `https://dummyjson.com/carts`
  )
}
