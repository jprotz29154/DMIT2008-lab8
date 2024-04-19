import {Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger} from '@/components/ui/dialog'

import {cn} from '@/lib/utils/mergeCss'
import { EditTaskForm } from '../forms/EditTaskForm'

function EditTask({children, className, uid, payload}) {
	return (
		<Dialog>
			<DialogTrigger className="bg-black text-white w-full py-2.5 rounded-lg font-semibold" >Edit</DialogTrigger>
			<DialogContent className="">
				<DialogHeader>
					<DialogTitle>Edit Task</DialogTitle>
					<EditTaskForm uid={uid} payload={payload} />
				</DialogHeader>
			</DialogContent>
		</Dialog>
	)
}

export {EditTask}
