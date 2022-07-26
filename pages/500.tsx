import CommonLayout from "../components/commonLayout";

export default function Custom500() {
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
        抱歉，服务器出现了错误。
      </h2>
    </>
  );
}
Custom500.getLayout = (page: any) => <CommonLayout>{page} </CommonLayout>;
