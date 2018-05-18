import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import Mock from 'mockjs';
import { Todos } from './data/todoList';

export default {
    /**
     * mock start
     */
    start() {
        // 创建 MockAdapter 实例
        let mock = new MockAdapter(axios);
        
        // 模拟get请求 '/todo/list'  返回的参数   
        // 获取todo列表      
        mock.onGet('/todo/list').reply(config => {   // config 指 前台传过来的值
            let mockTodo = Todos.map(todo => {
                return {
                    id: todo.id,
                    title: todo.title,
                    count: todo.record.filter((data) => {
                        if(data.checked === false) return true;
                        return false;
                    }).length,    // 过滤到record里面 ‘checked’ 为true的数据，因为它们已经被完成了
                    locked: todo.locked,
                    isDelete: todo.isDelete
                };
            }).filter(todo => {
                if (todo.isDelete === true) return false;  // 过滤掉 ‘isDelete’为true，因为已经被删除了。
                return true;
            });
            return new Promise((resolve,reject) => {
                setTimeout(() => {
                    resolve([200,{
                        todos: mockTodo    // 返回状态为200，并且返回todos数据
                    }]);
                },200);
            });
        });

        // 新增一条todo
        mock.onPost('/todo/addTodo').reply(config => {
            Todos.push({
                id: Mock.Random.guid(),
                title: 'newList',
                isDelete: false,
                locked: false,
                record: []
            });
            return new Promise((resolve,reject) => {
                setTimeout(() => {
                    resolve([200]);
                },200);
            });
        });

        // 获取todo单个列表
        mock.onGet('/todo/listId').reply(config => {
            let { id } = config.params ;
            // id 是传进来的值
            // todo 是根据id和现有的Todos数据匹配，找出id相等的数据，在进行返回
            let todo = Todos.find(todo => {
                return id && todo.id === id;
            });
            // todo.count (等待完成数目)等于 todo.record（代办事项列表下面未被选择的数据
            todo ? todo.count = todo ? todo.record.filter((data) => {
                return data.checked === false;
            }).length : null : false;
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve([200, {
                        todo: todo
                    }]);
                }, 200);
            });
        });
    }
}

