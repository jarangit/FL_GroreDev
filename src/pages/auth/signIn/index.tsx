import { Box, Typography } from "@mui/material";
import React from "react";
import Logo from "/public/assets/logo/logo.svg";
import AcceptButton from "@/components/templates/accept_button";
import InputField from "@/components/templates/input_field";
import Head from "next/head";
import { useRouter } from "next/router"; // for route page
interface Window {
  width: number;
  height: number;
}

export default function SignIn() {
  const navigate = useRouter(); // for route page
  const [windowSize, setWindowSize] = React.useState<Window>({
    width: 0,
    height: 0,
  });
  console.log("before: " + windowSize.height);

  React.useEffect(() => {
    if (windowSize.width === 0) {
      setWindowSize({
        width: global.window.innerWidth,
        height: global.window.innerHeight,
      });
    }
    window.addEventListener("resize", () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
      console.log("width: " + windowSize.height);
    });

    console.log("after" + windowSize.height);
  }, []);

  return (
    <>
      <Head>
        <title>เข้าสู่ระบบ</title>
      </Head>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          height: windowSize?.height,
        }}
      >
        <Box className="flex w-4/6 bg-blue items-center justify-center">
          <Logo className="scale-[3]" />
        </Box>
        <div className="relative flex w-2/6  h-full">
          <Box
            sx={{
              paddingX: "10%",
            }}
            className="flex flex-col w-full gap-8 items-center justify-center"
          >
            <Typography variant="h4" className=" mb-5">
              เข้าสู่ระบบ
            </Typography>
            <InputField placeholder="อีเมล์" />
            <InputField placeholder="รหัสผ่าน" />
            <AcceptButton
              label="เข้าสู่ระบบ"
              width="60%"
              onClick={() => {
                navigate.replace("/home"); // for route page
              }}
            ></AcceptButton>
            <Typography
              variant="overline"
              className="absolute bottom-0 right-[20px] text-[#727171]"
            >
              V 0.0.1
            </Typography>
          </Box>
        </div>
      </Box>
    </>
  );
}
