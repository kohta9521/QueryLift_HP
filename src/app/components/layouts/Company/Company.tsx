"use client";

// hooks
import useAOS from "@/hooks/useAOS";

// components
import SecTitle from "../../ui/text/SecTitle";

// icon
import { AiFillProduct } from "react-icons/ai";

const Company = () => {
  useAOS();
  return (
    <section
      id="company-info"
      className="w-11/12 mx-auto py-30 md:py-40 md:w-7/12"
    >
      <SecTitle
        id="company-info"
        icon={<AiFillProduct />}
        jatitle="会社情報"
        entitle="Company"
      />
      <div className="flex flex-col md:flex-row gap-10"></div>
    </section>
  );
};

export default Company;
