import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'


const baseUrl = 'http://localhost:3001/'

export const usersApp = createApi ({
    reducerPath: 'usersApp',
    tagTypes: ['Users'],
    baseQuery: fetchBaseQuery ({baseUrl: baseUrl}),
    endpoints: (build) => ({
        getUser: build.query({
            query: (limit='') => `users${limit && `?_limit=${limit}`}`,
            providesTags: (result) =>
            result
              ? [
                  ...result.map(({ id }) => ({ type: 'Users', id })),
                  { type: 'Users', id: 'LIST' },
                ]
              : [{ type: 'Users', id: 'LIST' }],

        }),
        addUser: build.mutation({
            query:(body) => ({
                url: 'users',
                method: 'POST',
                body

            }),
            invalidatesTags: [{ type: 'Users', id: 'LIST' }]
        })
    })
})

export const {useGetUserQuery, useAddUserMutation} = usersApp