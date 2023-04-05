import React from "react";
import { Controller, Control as RHFControl } from "react-hook-form";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { Template } from "../../utils/types";

interface RoleSelectProps {
  index: number;
  control: RHFControl<Template>;
  defaultValue: "user" | "system" | "assistant";
  errors: any;
}

const RoleSelect: React.FC<RoleSelectProps> = ({
  control,
  index,
  defaultValue,
  errors,
}) => {
  return (
    <FormControl fullWidth variant="outlined">
      <InputLabel id={`messages.${index}.role-label`}>Role</InputLabel>
      <Controller
        render={({ field }) => (
          <Select
            labelId={`messages.${index}.role-label`}
            {...field}
            label="Role"
          >
            <MenuItem value="user">User</MenuItem>
            <MenuItem value="system">System</MenuItem>
            <MenuItem value="assistant">Assistant</MenuItem>
          </Select>
        )}
        control={control}
        name={`messages.${index}.role`}
        defaultValue={defaultValue}
      />

      {errors.messages?.[index]?.role && (
        <Typography>{errors.messages?.[index]?.role?.message ?? ""}</Typography>
      )}
    </FormControl>
  );
};

export default RoleSelect;
