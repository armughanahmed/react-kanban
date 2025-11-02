import { createApi } from "@reduxjs/toolkit/query/react";
import type { User } from "../../types";

const FAKE_USERS_API: User[] = [
  { id: 1, name: "Armughan (from API)", email: "armughan.ahmed@yahoo.com" },
  { id: 2, name: "Hassan (from API)", email: "hassan.ahmed@yahoo.com" },
  { id: 3, name: "Jamali (from API)", email: "jamali.ahmed@yahoo.com" },
];

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: async (args) => {
    console.log(`RTK Query: Faking API call...`, args);
    await new Promise((resolve) => setTimeout(resolve, 1000));

    if (args.method === "POST") {
      const partialUser = args.body as Pick<User, "name">;
      const newUser: User = {
        id: FAKE_USERS_API.length + 1,
        name: partialUser.name,
        email: `${partialUser.name.toLowerCase().replace(/\s/g, ".")}@api.com`,
      };
      FAKE_USERS_API.push(newUser);
      return { data: { ...newUser } };
    }

    return {
      data: [...FAKE_USERS_API],
    };
  },
  tagTypes: ["User"],
  endpoints: (builder) => ({
    getUsers: builder.query<User[], void>({
      query: () => ({ url: "/users", method: "GET" }),
      providesTags: ["User"],
    }),
    addUser: builder.mutation<User, Pick<User, "name">>({
      query: (newUser) => ({ url: "/users", method: "POST", body: newUser }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const { useGetUsersQuery, useAddUserMutation } = apiSlice;
