import { ListTodo } from './components/ListTodo'
import { TodoAdd } from './components/TodoAdd'
import { useTodo } from '../hooks/useTodo'

export const TodoApp = () => {

    const {
        todos,
        countTodo,
        pendingTodo,
        handleNewTodo,
        handleRemoveTodo,
        handleToggleTodo
    } = useTodo();

    return (
        <>
            <h1>TodoApp: {countTodo} <small>pendientes: {pendingTodo}</small></h1>
            <hr />
            <div className="row">
                <div className="col-7">
                    <ListTodo todos={todos} onDeleteTodo={handleRemoveTodo} onToggleTodo={handleToggleTodo} />
                </div>
                <div className="col-5">
                    <h4>Agregar Todo</h4>
                    <hr />
                    <TodoAdd onNewTodo={handleNewTodo} />
                </div>
            </div>
        </>
    )
}
