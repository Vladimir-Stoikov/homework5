type Task = {
  name: string;
  info: string;
  isImportant: boolean;
  isCompleted: boolean;
}

export default class ReqByFetch {

  readonly _url: string = 'http://37.220.80.108/tasks';

  async getTaskById(id: number) {
    try {
      const props = {
        method: 'GET',
      };
      const response = await fetch(`${this._url}/${id}`, props);
      if (!response.ok) {
        console.log('Ошибка получения данных');
        return null;
      }
      return await response.json();
    } catch (error) {
      console.log(error);
    }
  }

  async patchTask(id: number, task: Partial<Task>) {
    try {
      const props = {
        method: 'PATCH',
        body: JSON.stringify(task),
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const response = await fetch(`${this._url}/${id}`, props);
      if (!response.ok) {
        console.log('Ошибка получения данных');
        return null;
      }
      return await response.json();
    } catch (error) {
      console.log(error);
    }
  }

  async deleteTaskById(id: number) {
    try {
      const props = {
        method: 'DELETE',
      };
      const response = await fetch(`${this._url}/${id}`, props);
      if (!response.ok) {
        console.log('Ошибка получения данных');
        return null;
      }
      return await response.json();
    } catch (error) {
      console.log(error);
    }
  }

  async getTasks() {
    try {
      const props = {
        method: 'GET',
      };
      const response = await fetch(`${this._url}`, props);
      if (!response.ok) {
        console.log('Ошибка получения данных');
        return null;
      }
      return await response.json();
    } catch (error) {
      console.log(error);
    }
  }

  async postNewTask(task: Task) {
    try {
      const props = {
        method: 'POST',
        body: JSON.stringify(task),
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const response = await fetch(`${this._url}`, props);
      if (!response.ok) {
        console.log('Ошибка получения данных');
        return null;
      }
      return await response.json();
    } catch (error) {
      console.log(error);
    }
  }
}
