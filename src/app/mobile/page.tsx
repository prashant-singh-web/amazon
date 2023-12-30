"use client";
import MainNav_Section from "@/components/Navbar_section/MainNav_Section";
import Amezon_bottom from "@/components/bottom/Amezon-bottom";
import Mobile_Filter from "@/components/mobile/Mobile_Filter";
import Mobile_Home_details from "@/components/mobile/Mobile_Home_details";
import Mobile_nav from "@/components/mobile/Mobile_nav";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../Context/store";

function Page() {
  const [first, setFirst]: any = useState();
  const { setLoading }: any = useGlobalContext();
  const getData = async () => {
    try {
      await setLoading(true);
      await axios
        .get("/api/rest")
        .then((response) => {
          setFirst(response.data);
          setLoading(false);
        })
        .catch((error) => console.log(error));
    } catch (error) {console.log(error);}
  };
  useEffect(() => {
    getData();
  }, []);
 
  return (
    <div className="w-full flex flex-col">
      <MainNav_Section />
      <Mobile_nav />
      <div className="w-full grid grid-cols-[20%_80%] ">
        <Mobile_Filter />
        {first ? <Mobile_Home_details sendData={first} />: ""}
      </div>
      <Amezon_bottom />
    </div>
  );
}

export default Page;
