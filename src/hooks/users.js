import { createUser, loginUser } from "../api/user";

import { useMutation } from "react-query";

export const useCreateUser = () => {
  return useMutation(createUser);
};

export const useLoginUser = () => {
  return useMutation(loginUser);
};
