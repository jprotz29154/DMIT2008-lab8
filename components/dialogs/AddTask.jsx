import {Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger} from '@/components/ui/dialog'

import {cn} from '@/lib/utils/mergeCss'
import { AddTaskForm } from '../forms/AddTaskForm'

function AddTask({children, className, uid, pyload}) {
	return (
		<Dialog>
			<DialogTrigger className="bg-black text-white w-full py-2.5 rounded-lg font-semibold" >Add New</DialogTrigger>
			<DialogContent className="">
				<DialogHeader>
					<DialogTitle>Add New Task</DialogTitle>
					<AddTaskForm />
				</DialogHeader>
			</DialogContent>
		</Dialog>
	)
}

export {AddTask}
