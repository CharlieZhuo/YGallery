import { ReactElement } from "react";
import LoginOrUser from "./(components)/LoginOrUser";

import Links from "./(components)/Links";

import DynamicHeaderLayout from "./(components)/DynamicHeaderLayout";

export default function LayoutWithRegularHeader({
  children,
}: {
  children: ReactElement;
}) {
  return (
    <>
      <DynamicHeaderLayout>
        <>
          <Links></Links>
          {/* @ts-expect-error Server Component */}
          <LoginOrUser></LoginOrUser>
        </>
      </DynamicHeaderLayout>
      {children}
    </>
  );
}
