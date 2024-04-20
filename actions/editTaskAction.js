'use server'
import {revalidatePath} from 'next/cache'

import {ref, set, push, update} from 'firebase/database'

import { db } from '@/lib/firebaseInit'
// formData  = formData object name/value pairs from the form
export async function editAction(prevState, formData) {
	const task = formData.get('task')
	const category = formData.get('category')
	const uid = formData.get('uid')

	const newObj = {
		task,
		category,
	}
	const response = await editTask(newObj, uid)
	//call edit task function
	revalidatePath('/demo')
	return {message: response}
}

async function editTask(task, uid) {
	const path = `todos/${uid}`
	const dbRef = ref(db, path)

	try {
		await update(dbRef, task)
		return 'success'
	} catch (error) {
		return 'failure'
	}
}
