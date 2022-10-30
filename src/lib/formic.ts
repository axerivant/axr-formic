import { writable, type Writable } from 'svelte/store'

export function formic() {
	const store = writable({})

	const form = (node: HTMLFormElement) => {
		node.addEventListener('change', (ev) => {
			ev.preventDefault()
			updateInnerStore(store, node)
		})
	}
	return { form, store }
}

const updateInnerStore = (store: Writable<any>, node: HTMLFormElement) => {
	const formData = new FormData(node)
	const dataObject: any = {}
	for (const [key, value] of formData) {
		dataObject[key] = value
	}
	store.set(dataObject)
}
