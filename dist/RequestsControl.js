import ReqByFetch from './ReqByFetch.js';
export default class RequestsControl {
    constructor() {
        this._fetchReq = new ReqByFetch();
    }
    get(id) {
        this._fetchReq
            .getTaskById(id)
            .then(data => console.log(`GET Задание получено `, data))
            .catch(error => console.log(error));
    }
    patch(id, task) {
        this._fetchReq
            .patchTask(id, task)
            .then(data => console.log(`PATCH Задание №${id} изменено `, data))
            .catch(error => console.log(error));
    }
    delete(id) {
        this._fetchReq
            .deleteTaskById(id)
            .then(data => console.log(`PATCH Задание №${id} удалено `, data))
            .catch(error => console.log(error));
    }
    getAll() {
        this._fetchReq
            .getTasks()
            .then(data => console.log(`GET Получены все задания `, data))
            .catch(error => console.log(error));
    }
    post(task) {
        this._fetchReq
            .postNewTask(task)
            .then(data => console.log(`POST Добавлено новое задание `, data))
            .catch(error => console.log(error));
    }
}
