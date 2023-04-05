import {
  Box,
  FormControl,
  FormHelperText,
  Input,
  InputAdornment,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import Logo from "/public/assets/logo/logo.svg";

type Props = {
  width?: number | string;
  height?: number | string;
  startIcon?: JSX.Element;
  placeholder?: string;
  value?: string;
  type?: string;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
  helperText?: string;
  onFocus?: React.FocusEventHandler<HTMLTextAreaElement | HTMLInputElement>;
  error?: boolean;
};

const Header: React.FC<Props> = (props) => {
  return (
    <Box component="header" className="flex flex-col">
      <Box className="flex bg-blue w-full h-[100px] items-center">
        <Logo className=" ml-[50px]" />
      </Box>
      <Box component='nav' className="flex w-full h-[50px] bg-[#0E3A6D] text-white items-center">
      <Typography className="ml-[30px]">หมวดหมู่</Typography>
      </Box>
    </Box>
  );
};

export default Header;
