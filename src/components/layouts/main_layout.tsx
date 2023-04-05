import Header from "@/components/templates/header";
import React from "react";

export default function MainLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
  return (
    <div >
      <Header />
      {children}
    </div>
  );
}
