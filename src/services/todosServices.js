import httpService from './httpServices';
import { GET_TODOS_URL } from 'constants/api';

class TodosService {
  getTodos({ cancelToken }) {
    return httpService.get(GET_TODOS_URL, { cancelToken });
  }
}

export default new TodosService();
