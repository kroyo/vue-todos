import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import Mock from 'mockjs';

import { Todos } from './data/todoList';  //导入Todos数据


export default {
    start() {
        let mock = new MockAdapter(axios);   //创建 MockAdapter 实例
        // 1.获取todo列表
        mock.onGet('/todo/list').reply(config => {
            console.log(Todos);
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
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve([200,{
                        todos: mockTodo  // 返回状态为200, 并且返回todos数据
                    }]);
                },200);
            });
        });

        // 2.新增一条todo
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

        // 3.获取todo单个的待办事项
        mock.onGet('/todo/recordList').reply(config => {
            let { id } = config.params ;
            // id 是传进来的值
            // todo 是根据id和现有的Todos进行匹配,找到id相等的数据，在进行返回
            let todo = Todos.find(todo => {
                return id && todo.id === id;
            });
            // todo.count (等待完成数目)等于 todo.record（代办事项列表下面未被选择的数据
            todo ? todo.count = todo ? todo.record.filter((data) => {
                return data.checked === false;
            }).length : null :false;
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve([200,{
                        todo : todo
                    }]);
                },200);
            });
        });

        // 4.新增一条代办事项
        mock.onPost('/todo/addRecord').reply(config => {
            let { id , text } = JSON.parse(config.data);
            // id 是传进来的值唯一代办项的id
            // text 用户新增输入的数据
            Todos.some((t,index) => {
                if(t.id === id){
                    t.record.push({
                        text : text,
                        isDelete : false,
                        checked : false
                    });
                    return true;
                }
            });
            return new Promise((resolve , reject) => {
                setTimeout(() => {
                    resolve([200]);
                }, 200);
            })
        }); 
    }
}