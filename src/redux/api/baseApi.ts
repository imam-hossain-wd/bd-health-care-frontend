
import { createApi} from "@reduxjs/toolkit/query/react";
import { tagTypesList } from "../tagTypes";
import { axiosBaseQuery } from "@/helpers/axiosBaseQuery";


export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: axiosBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL as string }),
  endpoints: () => ({}),
  tagTypes: tagTypesList,
});