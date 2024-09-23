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
  const { searchValue } = useSelector((state: RootState) => state.freelance);
  const dispatch = useAppDispatch();
  const t = useTranslations();
  const [searchForm] = Form.useForm();
  const router = useRouter();
  const { replace } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams.toString());

  function search(values: any) {
    dispatch(freelanceActions.setSearchValue(values?.search));
    params.append("search", values?.search);
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
              allowClear
              onClear={() => {
                searchForm.setFieldValue("search", "");
                clearSearch();
              }}
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
