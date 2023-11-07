import ReqByFetch from './ReqByFetch.js';

type Task = {
  name: string;
  info: string;
  isImportant: boolean;
  isCompleted: boolean;
}

export default class RequestsControl {
  readonly _fetchReq = new ReqByFetch();

  get(id: number) {
      this._fetchReq
        .getTaskById(id)
        .then(data => console.log(`GET Задание получено `, data))
        .catch(error => console.log(error));
  }

  patch(id: number, task: Partial<Task>) {
      this._fetchReq
        .patchTask(id, task)
        .then(data => console.log(`PATCH Задание №${id} изменено `, data))
        .catch(error => console.log(error));
  }

  delete(id: number) {
      this._fetchReq
        .deleteTaskById(id)
        .then(data => console.log(`PATCH Задание №${id} удалено `, data))
        .catch(error => console.log(error))
  }

  getAll() {
      this._fetchReq
        .getTasks()
        .then(data => console.log(`GET Получены все задания `, data))
        .catch(error => console.log(error));
  }
  post(task: Task) {
      this._fetchReq
        .postNewTask(task)
        .then(data => console.log(`POST Добавлено новое задание `, data))
        .catch(error => console.log(error));
  }

}
