import Link from "next/link";

export default function Home() {
	return (
		<>
			<h1 className="text-center text-2xl font-bold mt-10">Learning React Hook Form & Zod</h1>
			<div className="flex gap-4 w-fit mx-auto mt-5">
				<Link href="without-hook-form" className="btn">
					Without Hook Form + Controlled Inputs
				</Link>
				<Link href="with-hook-form" className="btn">
					With Hook Form
				</Link>
				<Link href="with-hook-form-zod" className="btn">
					With Hook Form & Zod
				</Link>
			</div>
		</>
	);
}
