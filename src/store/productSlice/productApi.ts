import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://667a9d05bd627f0dcc8fbfef.mockapi.io/api/v1/",
    // prepareHeaders: (headers) => {
    //   const token = localStorage.getItem("x-auth-token");
    //   if (token) {
    //     // Har so'rovda mana shu token headersda qo'shib jo'natiladi
    //     headers.set("Authorization", `Bearer ${token}`);
    //   }
    //   return headers;
    // },
  }),
  tagTypes: ["Product"],
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: (params) => ({
        url: "tasks",
        params,
      }),
      providesTags: ["Product"],
    }),
    createProducts: builder.mutation({
        query: (body) => ({
            url: "tasks",
            method: "POST",
            body,
        }),
        providesTags: ["Product"],
    }),
    getSingleProduct: builder.query({
      query: (id) => `tasks/${id}`,
      providesTags: ["Product"],
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `tasks/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Product"],
    }),
    updateProduct: builder.mutation({
      query: ({ id, body }) => ({
        url: `tasks/${id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["Product"],
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useCreateProductsMutation,
  useDeleteProductMutation,
  useGetSingleProductQuery,
  useUpdateProductMutation
} = productsApi;