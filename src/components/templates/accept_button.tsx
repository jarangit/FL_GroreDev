import { acceptButtonTheme } from "@/styles/material_style";
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  InputAdornment,
  OutlinedInput,
  ThemeProvider,
} from "@mui/material";
import React from "react";

type Props = {
  width?: number | string;
  height?: number | string;
  label: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const AcceptButton: React.FC<Props> = (props) => {
  return (
    <ThemeProvider theme={acceptButtonTheme}>
      <Button
        variant="contained"
        color="primary"
        sx={{
          width: props.width ?? "100%",
          height: props.height ?? "45px",
        }}
        className="bg-yellow text-[#606060] rounded-[10px] drop-shadow-[rgba(0, 0, 0, 0.25)]"
        onClick={props.onClick}
      >
        {props.label}
      </Button>
    </ThemeProvider>
  );
};

export default AcceptButton;
