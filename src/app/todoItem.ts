export class TodoItem {
	complete: boolean;
	task: string;

	constructor(task: string, complete: boolean = false) {
		this.complete = complete;
		this.task = task;
	} 
}
