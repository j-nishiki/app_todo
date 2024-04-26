import React, { FC } from "react";

interface Props2 {
    todo: {
        text: string;
        toggleCompletion: () => void;
    };
    toggleCompletion: () => void;
}

const Component2 = (todo: { text:string; toggleCompletion: () => void; } ) => {
    
    return (
        <div className="mt-6">
                <div className="flex">
                    <div className="w-1/2 bg-white p-2">
                        <p className="">
                            {todo.text}
                        </p>
                    </div>
                    <div>
                        <button onClick={todo.toggleCompletion} className="ml-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">削除</button>
                    </div>
                </div>
            </div>
    );
};

export default Component2;