"use client";

import Card from "@/components/atoms/card";

export type TClassTypeCard = {
  title: string;
  desc: string | React.ReactNode;
  icon: string | React.ReactNode;
  link: string;
};

const ClassTypeCard = ({ title, desc, icon }: TClassTypeCard) => (
  <Card>
    {icon}
    <div className="mt-4 text-lg text-[#07375C] font-semibold">{title}</div>
    <div className="min-h-[72px] mt-4">{desc}</div>
    <div className="flex justify-end"></div>
  </Card>
);

export default ClassTypeCard;
