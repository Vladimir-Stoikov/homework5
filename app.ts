import RequestsControl from './RequestsControl.js';

type Task = {
  name: string;
  info: string;
  isImportant: boolean;
  isCompleted: boolean;
}

const controller = new RequestsControl();

const newTask: Task = {
  name: 'Go to store',
  info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  isImportant: false,
  isCompleted: false,
};

const completeTask: Partial<Task> = {
  isCompleted: true,
};

// controller.post(newTask);
// controller.get(id);
// controller.patch(id, completeTask);
// controller.get(id);
// controller.getAll();
// controller.delete(id);
