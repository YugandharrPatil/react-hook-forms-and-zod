"use client";
import { useState } from "react";

export default function WithoutHookFormPage() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmpassword, setConfirmPassword] = useState("");

	// other states
	const [isSubmitting, setIsSubmitting] = useState(false); // to show a loading spinner
	const [errors, setErrors] = useState<string[]>([]);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setIsSubmitting(true);

		if (password !== confirmpassword) {
			setErrors(["Password and confirm password must match"]);
			setIsSubmitting(false);
			return;
		}

		// fetch (POST) to API

		setName("");
		setEmail("");
		setPassword("");
		setConfirmPassword("");

		setIsSubmitting(false);
	};

	return (
		<>
			<h1 className="text-center text-2xl font-bold mt-10">Form Without React Hook Forms</h1>
			<form onSubmit={handleSubmit} className="flex flex-col gap-y-2 w-1/2 mx-auto mt-5">
				{errors.length > 0 && (
					<ul>
						{errors.map((error) => (
							<li key={error} className="bg-red-100 text-red-500 py-2 rounded">
								{error}
							</li>
						))}
					</ul>
				)}
				<input required onChange={(e) => setName(e.target.value)} value={name} type="text" placeholder="Name" className="text-input" />
				<input required onChange={(e) => setEmail(e.target.value)} value={email} type="email" placeholder="Email" className="text-input" />
				<input
					minLength={10}
					required
					onChange={(e) => setPassword(e.target.value)}
					value={password}
					type="password"
					placeholder="Password"
					className="text-input"
				/>
				<input
					minLength={10}
					required
					onChange={(e) => setConfirmPassword(e.target.value)}
					value={confirmpassword}
					type="password"
					placeholder="Confirm Password"
					className="text-input"
				/>

				<button disabled={isSubmitting} type="submit" className="btn">
					Submit
				</button>
			</form>
		</>
	);
}
