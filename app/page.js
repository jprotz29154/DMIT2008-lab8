import { AddTaskForm } from "@/components/forms/AddTaskForm"

export default async function Home() {
	return (
		<>
			<header className="py-48 ">
				<h1 className="text-center text-3xl font-semibold">To Do List Home Page</h1>
			</header>
			<main>
				<AddTaskForm />
			</main>
		</>
	)
}
