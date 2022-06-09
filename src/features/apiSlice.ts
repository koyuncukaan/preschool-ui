import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Player, User, Login, Response } from "../types";
export const apiSlice = createApi({
  reducerPath: "playerApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1/" }),
  tagTypes: ["Players"],
  endpoints: (build) => ({
    getPlayers: build.query<Player[], void>({
      query: () => `players`,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ _id }) => ({ type: "Players" as const, _id })),
              { type: "Players", id: "LIST" },
            ]
          : [{ type: "Players", id: "LIST" }],
    }),
    login: build.mutation<Response, Login>({
      query({ email, password }) {
        return {
          url: `auth/login`,
          method: "POST",
          body: {
            email,
            password,
          },
        };
      },
    }),
  }),
});
export const { useGetPlayersQuery, useLoginMutation } = apiSlice;
