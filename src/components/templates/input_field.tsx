import {
  Box,
  FormControl,
  FormHelperText,
  Input,
  InputAdornment,
  OutlinedInput,
  TextField,
} from "@mui/material";
import React from "react";

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

const InputField: React.FC<Props> = (props) => {
  return (
    <FormControl fullWidth>
      <Input
        disableUnderline
        startAdornment={
          <InputAdornment position="start">
            <Box className=" flex justify-center items-center">
              {props.startIcon}
            </Box>
          </InputAdornment>
        }
        placeholder={props.placeholder}
        sx={{
          width: props.width ?? "100%",
          height: props.height ?? '50px',
          border: "1px solid #D9D9D9",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          borderRadius: "15px",
          padding: 0,
        }}
        value={props.value}
        onChange={props.onChange}
        onFocus={props.onFocus}
        error={props.error}
        type={props.type}
      />
      {props.helperText && (
        <FormHelperText sx={{ color: "red", marginLeft: 0 }}>
          {props.helperText}
        </FormHelperText>
      )}
    </FormControl>
  );
};

export default InputField;
