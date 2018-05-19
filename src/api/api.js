import Vue from 'vue';
import axios from 'axios';
 

export const getTodoList = params => {
    return axios.get('/todo/list',{
        params: params
    });
};

export const addTodo = params => {
    return axios.post('/todo/addTodo',params).then(res => res.data);
};

//新增一个请求查询代办单项列表的数据的接口函数
export const getListId = params => {
    return axios.get('/todo/listId',{
        params: params
    });
};

//新增一个请求新增代办单的接口函数
export const addRecord = params => {
    return axios.post('/todo/addRecord',params).then(res => res.data);
};