import React from 'react'
import { useSession } from "next-auth/react";
import Skeleton from "react-loading-skeleton";
import useSWR from "swr";
import Head from "next/head";

const Categories = () => {
    const {data:session,status} = useSession();
    //const loading = status = "loading";
    const {data: categories,error} = useSWR(session && session.admin ? "/api/admin/categories" : null); 
  return (
    <div>
        <Head>
        <title>Zeal | categoriess</title>
      </Head>
      <div className="heightFixAdmin bg-gray-100 py-10 md:px-6">
        <div className="max-w-screen-xl mx-auto bg-white  shadow rounded-md my-6">
          <div className="flex flex-col md:p-8  p-6  bg-white gap-2">
            <h1 className="sm:text-2xl text-xl  font-semibold border-b-2 border-gray-200 pb-4 text-gray-700">Categories</h1>
            <div className="space-y-4 overflow-auto flex-grow hideScrollBar">
              {!error && !categories ? (
                <Skeleton count={10} />
              ) : (
                <table className="w-full sm:text-base text-sm">
                  <thead>
                    <tr>
                      <th className="text-left w-2/5 py-4 px-4 font-semibold">Name</th>
                    </tr>
                  </thead>
                  <tbody className="sm:text-sm text-xs">
                    {categories?.map((categories) => (
                      <tr key={`categories-${categories?._id}`}>
                        <td className="table_col px-4">{categories?.name}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

Categories.admin = true;
export default Categories;
