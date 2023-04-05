import { Control as RHFControl, UseFormRegister } from "react-hook-form";
import { Template } from "../../utils/types";
import { Box, Button, Card, CardContent, TextField } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import RoleSelect from "./RoleSelect";

interface MessageCardProps {
  field: Partial<Template["messages"][number]>;
  index: number;
  control: RHFControl<Template>;
  errors: any;
  remove: (index: number) => void;
  register: UseFormRegister<Template>;
}

function MessageCard({
  field,
  index,
  control,
  errors,
  remove,
  register,
}: MessageCardProps) {
  return (
    <Card
      sx={{
        marginBottom: "1rem",
        boxShadow: 1,
      }}
    >
      <CardContent sx={{ display: "grid", gap: "1rem" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <RoleSelect
            control={control}
            index={index}
            defaultValue={field.role ?? "system"}
            errors={errors}
          />
          <Button
            type="button"
            variant="text"
            size="small"
            onClick={() => remove(index)}
            sx={{ width: "1em", padding: 0, margin: 0 }}
          >
            <DeleteIcon></DeleteIcon>
          </Button>
        </Box>
        <TextField
          multiline
          minRows={4}
          maxRows={10}
          label="Content"
          {...register(`messages.${index}.content`)}
          defaultValue={field.content}
          error={!!errors.messages?.[index]?.content}
          helperText={errors.messages?.[index]?.content?.message}
          fullWidth
        />
      </CardContent>
    </Card>
  );
}

export default MessageCard;
