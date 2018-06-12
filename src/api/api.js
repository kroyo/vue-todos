import axios from 'axios';  // 导出axios模块
 
export const getTodoList = params => {  // 封装一个函数，名为getTodoList
    return axios.get('/todo/list',{
        params: params
    });
};

export const addTodo = params => {
    return axios.post('/todo/addTodo',params).then(res => res.data);
};
