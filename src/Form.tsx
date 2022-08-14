import React, { useMemo } from "react";
import TextField from "@mui/material/TextField";
import { Button, Typography } from "@mui/material";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

interface FormProps {
  mode: string;
}

function Form({ mode }: FormProps) {
  const validationSchema = Yup.object().shape({
    fullname: Yup.string().required("Fullname is required"),
    username: Yup.string()
      .required("Username is required")
      .min(6, "Username must be at least 6 characters")
      .max(20, "Username must not exceed 20 characters"),
    email: Yup.string().required("Email is required").email("Email is invalid"),
    address: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters")
      .max(40, "Password must not exceed 40 characters"),
  });

  const initialValues = useMemo(() => {
    if (mode === "edit") {
      return {
        fullname: "Nguyễn Hữu Linh",
        username: "linh.nh",
        email: "tunglinh2332000@gmail.com",
        address: "Chương Mỹ Hà Nội",
      };
    }
    return {
      fullname: "",
      username: "",
      email: "",
      address: "",
    };
  }, [mode]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    defaultValues: initialValues,
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data: any) => console.log(data);

  return (
    <div className="top">
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          id="outlined-basic"
          label="Full Name"
          variant="outlined"
          {...register("fullname")}
          error={errors.fullname ? true : false}
          helperText={errors.fullname?.message}
        />
        <TextField
          id="outlined-basic"
          label="username"
          variant="outlined"
          {...register("username")}
          error={errors.username ? true : false}
          helperText={errors.username?.message}
        />
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          {...register("email")}
          error={errors.email ? true : false}
          helperText={errors.email?.message}
        />
        <TextField
          id="outlined-basic"
          label="Address"
          variant="outlined"
          {...register("address")}
          error={errors.address ? true : false}
          helperText={errors.address?.message}
        />
        <div>
          <Button type="submit" variant="outlined">
            Submit
          </Button>
          <Button variant="outlined">Cancel</Button>
        </div>
      </form>
    </div>
  );
}

export default Form;
