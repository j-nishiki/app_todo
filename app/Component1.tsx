"use client";

import React, { useState } from "react";
import Component2 from "./Component2";

const Component1 = () => {
    const [todos, setTodos] = useState<Array<{ text: string; completed: boolean }>>([]);
    const [inp, setInput] = useState('');
  
    const addTodo = () => {
        if (inp.trim()) {
            setTodos([...todos, { text: inp, completed: false }]);
            setInput('');
        }
    };

    // タスクを削除する
    const removeTask = (index: number) => {
        // タスク配列のコピーを作成
        const newTasks = [...todos];
        // タスク配列から指定されたタスクを削除
        newTasks.splice(index, 1);
        // タスク配列のステートを更新
        setTodos(newTasks);
    };

    return (
        <div className="mt-2">
            <div className="flex">
                <div>
                    <input type="text" className="h-full p-2"
                        value={inp}
                        onChange={(e) => setInput(e.target.value)}
                    />
                </div>
                <div>
                    <button className="ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={addTodo}>追加</button>
                </div>
            </div>
            {todos.map((todo,index) => (
            <Component2 key={index} text={todo.text} 
            // removeTask関数をTodoItemに渡す
            toggleCompletion={() => removeTask(index)}/>
            ))}
        </div>
  );
};

export default Component1;