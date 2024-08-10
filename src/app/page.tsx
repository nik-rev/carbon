"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useFormState } from "react-dom";

/* eslint functional/prefer-immutable-types: "off" */
export default function Home() {
  const name = Math.random() > 0.5 ? "hehe" : "";
  if (name !== "") {
    useEffect(() => {
      localStorage.setItem("formData", name);
    });
  }

  return (
    <div className="-top-[5px]">
      <p />

      <img />
    </div>
  );
}
