"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("8cbe020c-4ef2-4239-8520-6f742241120c");
  }, []);

  return null;
};
