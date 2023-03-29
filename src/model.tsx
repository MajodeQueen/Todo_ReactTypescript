export interface todo{
    id:string;
    todoItem:string;
    isDone:boolean;
}

export type todoState ={
    Todos:todo[];
    
}

export interface UpdateTodo{
    payload:todo
    newName? :string
}



