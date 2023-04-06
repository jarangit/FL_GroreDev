import Header from "@/components/templates/header";
import React from "react";

export default function MainLayout({
  children,
}: {
  children: JSX.Element;
}) {
  console.log(children?.type?.layout);
  return (
    <>
      {children.type?.layout === "login" ? (
        <div>
          {children}
        </div>
      ) : (
        <div className=" mb-10">
          <Header />
          <div className={``}>
            {children}
          </div>
        </div>
      )}
    </>
  );
}
