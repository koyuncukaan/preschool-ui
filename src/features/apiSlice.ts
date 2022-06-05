import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Player } from "../types";
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
              ...result.map(({ id }) => ({ type: "Players" as const, id })),
              { type: "Players", id: "LIST" },
            ]
          : [{ type: "Players", id: "LIST" }],
    }),
  }),
});
export const { useGetPlayersQuery } = apiSlice;