import React from "react";
import { useAddUserMutation } from "../../features/api/apiSlice";
import { useForm, type SubmitHandler } from "react-hook-form";

type formInputs = {
  name: string;
};

export function AddUserForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<formInputs>();

  const [addUser, { isLoading }] = useAddUserMutation();

  const onSubmit: SubmitHandler<formInputs> = async (data) => {
    try {
      await addUser(data).unwrap();
      reset();
    } catch (err) {
      console.log(`Failed to add user`, err);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="userName">User Name:</label>
      <input
        type="text"
        id="username"
        {...register("name", {
          required: "Username is required",
        })}
        disabled={isLoading}
      />
      {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}
      <button type="submit" disabled={isLoading}>
        {isLoading ? "Adding..." : "Add User"}
      </button>
    </form>
  );
}
