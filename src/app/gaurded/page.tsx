"use client";
import AuthGuard from "@/components/authenticationHOC/authenticated";
import React from "react";
function Page() {
  return <div></div>;
}

export default AuthGuard(Page);
