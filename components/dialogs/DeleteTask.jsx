import {Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger} from '@/components/ui/dialog'
import { DeleteTaskForm } from '../forms/DeleteTaskForm'
import {cn} from '@/lib/utils/mergeCss'


function DeleteTask({children, className, uid, payload}) {
	return (
		<Dialog>
			<DialogTrigger className="bg-black text-white w-full py-2.5 rounded-lg font-semibold" >Delete</DialogTrigger>
			<DialogContent className="">
				<DialogHeader>
					<DialogTitle>Delete Task</DialogTitle>
				</DialogHeader>
				<DeleteTaskForm uid={uid} payload={payload} />
			</DialogContent>
		</Dialog>
	)
}

export {DeleteTask}
