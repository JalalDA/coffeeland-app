import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }), // Sesuaikan dengan URL API Anda
  endpoints: (builder) => ({
    fetchData: builder.query<any, void>({
      query: () => '/api/product', // Sesuaikan dengan endpoint API Anda
    }),
  }),
});

export const { useFetchDataQuery } = api;
