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
import Image from "next/image";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useRouter } from "next/router";
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
  const route = useRouter()
  return (
    <Box component="header" className="flex flex-col">
      <Box className="flex justify-between px-8  bg-blue w-full h-[100px] items-center">
        <Logo className="" />
        <div className="relative w-14 h-14 rounded-full overflow-hidden cursor-pointer" onClick={() => route.push("/profile")}>
          <Image
            src={"/assets/avatar.jpg"}
            fill
            alt=""
            style={{ objectFit: "cover" }}
          />
        </div>
      </Box>
      <Box component='nav' className="flex w-full h-[50px] bg-[#0E3A6D] text-white items-center justify-between px-6">
        <div className={`flex gap-2 items-center`}>
          <Typography className="">หมวดหมู่</Typography>
          <div>
            <ArrowDropDownIcon />
          </div>
        </div>
        <div className={`flex items-center gap-3`}>
          <div className={`flex items-center h-8  rounded-xl overflow-hidden`}>
            <div className={`bg-background pl-2 h-full flex justify-center items-center text-black cursor-pointer`}>
              <div>All</div>
              <div>
                <ArrowDropDownIcon />
              </div>
            </div>
            <input type="text" className="h-full px-2 w-[300px] text-black" placeholder="ค้นหา" />
            <div className={`bg-yellow px-3 h-full flex justify-center items-center text-black cursor-pointer`}>
              <SearchIcon />
            </div>
          </div>
          <div className={`cursor-pointer`}>
            <AddShoppingCartIcon />
          </div>
        </div>
      </Box>
    </Box>
  );
};

export default Header;
