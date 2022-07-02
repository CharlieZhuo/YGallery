import CommonLayout from "../components/commonLayout";

export default function Custom404() {
  return (
    <>
      <h2
        style={{
          fontSize: "3rem",
          fontWeight: 400,
          textAlign: "center",
          marginBlockStart: "8rem",
          marginBlockEnd: "10rem",
        }}
      >
        抱歉，我找不到您查找的页面。
      </h2>
    </>
  );
}
Custom404.getLayout = (page: any) => <CommonLayout>{page} </CommonLayout>;
