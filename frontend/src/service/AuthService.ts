import axios, {AxiosPromise} from "axios";
import { variables } from "../utils/variable.ts";
import {SignUpDTO, Token, User} from "../types/User";

const { BASE_API } = variables;

export const register = (signUpDTO: SignUpDTO) => {
  return axios.post(`${BASE_API}/register`, signUpDTO);
}

export const login = (user: User): AxiosPromise<Token> => {
  return axios.post(`${BASE_API}/login`, user);
}
