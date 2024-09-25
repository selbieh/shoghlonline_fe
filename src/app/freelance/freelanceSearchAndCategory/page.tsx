"use client";
import SearchAndFiltersSide from "@/components/freelance/homePage/searchAndFiltersSide";
import SearchAndCategoryGigs from "@/components/freelance/homePage/searchOrCategoryGigs";
import { getVacancies } from "@/store/reducers/freelanceSlice";
import { RootState, useAppDispatch } from "@/store/rootReducer";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

export default function FreelanceSearchAndCategory() {
  const { queryParams } = useSelector((state: RootState) => state.freelance);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getVacancies({ params: queryParams }));
  }, [queryParams, dispatch]);

  return (
    <div className="flex flex-row w-full">
      <SearchAndFiltersSide />
      <div className="w-full">
        <SearchAndCategoryGigs />
      </div>
    </div>
  );
}
