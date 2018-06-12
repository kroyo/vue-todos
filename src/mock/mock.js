import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import Mock from 'mockjs';

import { Todos } from './data/todoList';  //导入Todos数据

export default {
    start() {
        let mock = new MockAdapter(axios);   //创建 MockAdapter 实例
        //1.获取todo列表
        mock.onGet('/todo/list').reply(config => {
            let mockTodo = Todos.map(todo => { // 重组Todos数组
                return {
                    id: todo.id,
                    title: todo.title,
                    count: todo.record.filter((data) => {
                        if(data.checked === false) return true;
                        return false;
                    }).length,   // 过滤到record里面 ‘checked’ 为true的数据，因为它们已经被完成了
                    locked: todo.locked,
                    isDelete: todo.isDelete
                };
            }).filter(todo => {
                if (todo.isDelete === true) return false; // 过漏掉 ‘isDelete’ 为true, (即已经被软删除掉的数据)
                return true;
            });
            console.log(Todos);
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve([200,{
                        todos: mockTodo  // 返回状态为200, 并且返回todos数据
                    }]);
                },200);
            });
        });

        //2.新增一条todo
        mock.onPost('/todo/addTodo').reply(config => {
            Todos.push({
                id: Mock.Random.guid(),
                title: 'newList',
                isDelete: false,
                locked: false,
                record: []
            });
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve([200]);
                },200);
            });
        });
    }
}