"use client";

import type { FieldValues } from "react-hook-form";
import { useForm } from "react-hook-form";
export default function WithHookFormPage() {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
		reset,
		getValues,
	} = useForm();

	const onSubmit = (data: FieldValues) => {
		// call fetch POST on API
		reset();
	};

	return (
		<>
			<h1 className="text-center text-2xl font-bold mt-10">Form With React Hook Forms</h1>
			<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-2 w-1/2 mx-auto mt-5">
				<input {...register("name", { required: "Name is required" })} type="text" placeholder="Name" className="text-input" />
				<input {...register("email", { required: "Email is required" })} type="email" placeholder="Email" className="text-input" />
				{errors.email && <p className="text-red-500">{`${errors.email.message}`}</p>}
				<input
					{...register("password", {
						required: "Password is required",
						minLength: { value: 10, message: "Password must be at least 10 characters" },
					})}
					type="password"
					placeholder="Password"
					className="text-input"
				/>
				{errors.password && <p className="text-red-500">{`${errors.password.message}`}</p>}
				<input
					{...register("confirmPassword", {
						required: "Please confirm your password",
						validate: (value) => value === getValues("password") || "Passwords must match",
					})}
					type="password"
					placeholder="Confirm Password"
					className="text-input"
				/>
				{errors.confirmPassword && <p className="text-red-500">{`${errors.confirmPassword.message}`}</p>}

				<button disabled={isSubmitting} type="submit" className="btn">
					Submit
				</button>
			</form>
		</>
	);
}
