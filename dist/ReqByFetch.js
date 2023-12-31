var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export default class ReqByFetch {
    constructor() {
        this._url = 'http://37.220.80.108/tasks';
    }
    getTaskById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const props = {
                    method: 'GET',
                };
                const response = yield fetch(`${this._url}/${id}`, props);
                if (!response.ok) {
                    console.log('Ошибка получения данных');
                    return null;
                }
                return yield response.json();
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    patchTask(id, task) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const props = {
                    method: 'PATCH',
                    body: JSON.stringify(task),
                    headers: {
                        'Content-Type': 'application/json',
                    },
                };
                const response = yield fetch(`${this._url}/${id}`, props);
                if (!response.ok) {
                    console.log('Ошибка получения данных');
                    return null;
                }
                return yield response.json();
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    deleteTaskById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const props = {
                    method: 'DELETE',
                };
                const response = yield fetch(`${this._url}/${id}`, props);
                if (!response.ok) {
                    console.log('Ошибка получения данных');
                    return null;
                }
                return yield response.json();
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    getTasks() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const props = {
                    method: 'GET',
                };
                const response = yield fetch(`${this._url}`, props);
                if (!response.ok) {
                    console.log('Ошибка получения данных');
                    return null;
                }
                return yield response.json();
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    postNewTask(task) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const props = {
                    method: 'POST',
                    body: JSON.stringify(task),
                    headers: {
                        'Content-Type': 'application/json',
                    },
                };
                const response = yield fetch(`${this._url}`, props);
                if (!response.ok) {
                    console.log('Ошибка получения данных');
                    return null;
                }
                return yield response.json();
            }
            catch (error) {
                console.log(error);
            }
        });
    }
}
