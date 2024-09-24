"use client";

import { freelanceActions } from "@/store/reducers/freelanceSlice";
import { RootState, useAppDispatch } from "@/store/rootReducer";
import { Form, Input } from "antd";
import { useTranslations } from "next-intl";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import { useSelector } from "react-redux";

export default function Search() {
  const { searchValue, queryParams } = useSelector(
    (state: RootState) => state.freelance
  );
  const dispatch = useAppDispatch();
  const t = useTranslations();
  const [searchForm] = Form.useForm();
  const router = useRouter();
  const { replace } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams.toString());

  function search(values: any) {
    params.set("search", values?.search);
    let qParams: any = {};
    params.forEach((val, key) => {
      qParams[key] = val;
    });
    dispatch(freelanceActions.setQueryParams(qParams));
    dispatch(freelanceActions.setSearchValue(values.search));
    if (!pathname.split("/").includes("freelanceSearchAndCategory")) {
      router.push(
        `/freelance/freelanceSearchAndCategory?search=${values?.search}`
      );
    } else {
      replace(`${pathname}?${params.toString()}`);
    }
  }

  function clearSearch() {
    dispatch(freelanceActions.setSearchValue(null));
    dispatch(freelanceActions.setQueryParams({}));
    params.delete("search");
    replace(`${pathname}`);
  }

  useEffect(() => {
    searchForm.setFieldValue("search", searchValue);
  }, []);

  return (
    <div>
      <div className="w-full m-5 ">
        <Form onFinish={search} form={searchForm}>
          <Form.Item name="search">
            <Input
              className="h-[56px]"
              placeholder={t("search")}
              prefix={<CiSearch size={20} />}
            />
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
