import React from "react";
import { Template } from "../../utils/types";
import {
  SubmitHandler,
  useForm,
  useFieldArray,
  Controller,
} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  Box,
  Button,
  Container,
  Typography,
  TextField,
  Card,
} from "@mui/material";
import MessageCard from "./MessageCard";

const validationSchema = yup.object().shape({
  title: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
  messages: yup
    .array()
    .min(1)
    .of(
      yup.object().shape({
        role: yup
          .string()
          .oneOf(["user", "system", "assistant"])
          .required("Role is required"),
        content: yup.string().required("Content is required"),
      })
    ),
});

function AddTemplateForm() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Template>({
    resolver: yupResolver(validationSchema),
  });
  const onSubmit: SubmitHandler<Template> = (data) => console.log(data);

  const { fields, append, remove } = useFieldArray({
    control,
    name: "messages",
  });

  return (
    <Box
      onSubmit={handleSubmit(onSubmit)}
      component={"form"}
      sx={{
        height: "100%",
        maxHeight: "80vh",
        width: "100%",
        padding: "4rem",
        display: "grid",
        gap: "1rem",
        overflow: "auto",
        border: "2px dotted blue",
      }}
    >
      <Typography variant="h4" component="h1" gutterBottom>
        Add Template
      </Typography>
      <Box>
        <TextField
          fullWidth
          label="Title"
          {...register("title")}
          error={!!errors.title}
          helperText={errors.title?.message}
        />
      </Box>
      <Box>
        <TextField
          fullWidth
          label="Description"
          {...register("description")}
          error={!!errors.description}
          helperText={errors.description?.message}
        />
      </Box>
      <Box sx={{ display: "grid", gap: "1rem" }}>
        {fields.map((field, index) => (
          <MessageCard
            key={field.id}
            field={field}
            index={index}
            control={control}
            errors={errors}
            remove={remove}
            register={register}
          />
        ))}
        <Button
          type="button"
          variant="outlined"
          onClick={() => append({ role: "user", content: "" })}
        >
          Add Message
        </Button>
        {errors.messages?.message && (
          <Typography sx={{ textTransform: "capitalize" }} color="error">
            {errors.messages?.message}
          </Typography>
        )}
      </Box>
      <Button type="submit" variant="contained">
        Submit
      </Button>
    </Box>
  );
}

export default AddTemplateForm;
