"use client";
import SearchAndCategoryServices from "@/components/client/searchAndCategoryServices";
import SearchAndFiltersSide from "@/components/freelance/homePage/searchAndFiltersSide";
import SearchAndCategoryGigs from "@/components/freelance/homePage/searchOrCategoryGigs";
import React from "react";

export default function search({ params }: { params: { search: string } }) {
  return (
    <div className="flex flex-row">
      <SearchAndFiltersSide />
      <div>
        <SearchAndCategoryServices />
      </div>
    </div>
  );
}
