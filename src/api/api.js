import axios from 'axios';  // 导出axios模块
 
export const getTodoList = params => {  // 封装一个函数，名为getTodoList
    return axios.get('/todo/list',{
        params: params
    });
};

export const addTodo = params => {
    return axios.post('/todo/addTodo',params).then(res => res.data);
};

export const getRecordList = params => {
    return axios.get('/todo/recordList',{
        params : params
    });
};

export const addRecord = params => {
    return axios.post('/todo/addRecord',params).then(res => res.data)
};
