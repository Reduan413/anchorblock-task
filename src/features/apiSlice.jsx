import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const apiUrl = "https://reqres.in/api";

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({ baseUrl: apiUrl }),
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: (pageNo) => `users?page=${pageNo}`,
    }),
    getUser: builder.query({
      query: (userId) => `/users/${userId}`,
    }),
  }),
});
export const { useGetAllUsersQuery, useGetUserQuery } = usersApi;
