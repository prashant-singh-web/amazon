"use client";
import { useGlobalContext } from "@/app/Context/store";
import Main_page from "@/components/Item_details/Main_page";
import Loading from "@/components/Navbar_section/Loading";
import MainNav_Section from "@/components/Navbar_section/MainNav_Section";
import Amezon_bottom from "@/components/bottom/Amezon-bottom";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";


import React, { useEffect, useState } from "react";

function Page() {
  const isLoading = false;
  const { setLoading }: any = useGlobalContext();
  const [data, setData]: any = useState();
  const router = useParams();
  const { mobileId } = router;
  const routerPage = useRouter();

  const getDataByMobileId = async (Id: any) => {
    try {
      await setLoading(true);
      await axios
        .get(`/api/query?id=${Id}`)
        .then((response) => {
          setData(response?.data);
          setLoading(false);
        })
        .catch((error) => {
          routerPage.push("/err");
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getDataByMobileId(mobileId);
  }, [mobileId]);

  console.log(data);
  const formatter = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  });

  return (
    <div className="flex flex-col w-full">
      <MainNav_Section />
       {data ? <Main_page data={data} /> : <Loading/>}
      <Amezon_bottom />
    </div>
  );
}

export default Page;
