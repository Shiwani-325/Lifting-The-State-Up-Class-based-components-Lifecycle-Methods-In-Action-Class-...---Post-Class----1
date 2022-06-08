import React, {useState} from 'react';
import TodoAdd from './TodoAdd';
import TodoList from './TodoList';

// function TodoContainer() {
//     const [todos, setTodos] = useState([]);

//     const getNewId = () => {
//         let id = 0;
//         todos.map((item) => {
//             if(item.id > id) {
//                 id = item.id;
//             }
//         });

//         id += 1;
//         return id;
//     }

//     const addTodo = newTodo => {
//         const newtodoObj = {
//             id: getNewId(),
//             value: newTodo,
//             isEditing: false
//         }
//     const addTodo() {
//             const text = prompt('TODO text please!');
//             // only do this if text has value
//             text && this.setState({
//                 todos: [...this.state.todos, { id: id++, text: text, checked: false }],
//               });
//           }

//         const updated_todos = [...todos, newtodoObj];
//         setTodos(updated_todos);
//         // console.log(updated_todos);
//     }

//     const deleteTodo = todo_id => {
//         const filtered_arr = todos.filter(todo => todo.id !== todo_id);
//         setTodos(filtered_arr);
//     }

//     const startEditing = todo_id => {
//         const editing_arr = todos.map((item) => {
//             if(item.id === todo_id) {
//                 item.isEditing = true;
//             }
//             return item;
//         });
        
//         setTodos(editing_arr);
//     }

//     const finishEditing = todo => {
//         const editing_arr = todos.map((item) => {
//             if(item.id == todo.id) {
//                 return todo;
//             }
//             return item;
//         });
//         setTodos(editing_arr);
//     }

//     return(
//         <div>
//             <h1>Todo App</h1>
//             <TodoAdd addTodo ={addTodo}/>
//             <TodoList todos={todos} deleteTodo={deleteTodo} startEditing={startEditing} finishEditing={finishEditing}/>
//         </div>
//     );
// }



let id = 0;
const Todo = (props) => (
   // style based on props
  <li style={{ textDecoration: props.todo.checked ? 'line-through' : ''}}>
    <input
      type='checkbox'
      checked={props.todo.checked}
      onChange={props.onToggle}
    />
    <button onClick={props.onDelete}>delete</button>
    <span>{props.todo.text}</span>
  </li>
);

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [],
    };
  }
  addTodo() {
    const text = prompt('TODO text please!');
    // only do this if text has value
    text && this.setState({
        todos: [...this.state.todos, { id: id++, text: text, checked: false }],
      });
  }
  removeTodo(id) {
    this.setState({
      todos: this.state.todos.filter((todo) => todo.id !== id),
    });
  }
  toggleTodo(id) {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id !== id) return todo;
        return {
          id: todo.id,
          text: todo.text,
          checked: !todo.checked,
        };
      }),
    });
  }
  render() {
    return (
      <div>
        <div>Todo count: {this.state.todos.length}</div>
        <div>
          Unchecked todo count:{' '}
          {this.state.todos.filter((todo) => !todo.checked).length}
        </div>
        <button onClick={() => this.addTodo()}>Add TODO</button>
        <ul>
          {this.state.todos.map((todo) => (
            <Todo
              key={todo.id} // need a unique key using id
              onToggle={() => this.toggleTodo(todo.id)}
              onDelete={() => this.removeTodo(todo.id)}
              todo={todo}
            />
          ))}
        </ul>
      </div>
    );
  }
}



export default TodoContainer;
