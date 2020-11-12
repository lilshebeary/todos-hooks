import React from 'react';
import useInputState from './hooks/useInputState';
import TextField from '@material-ui/core/TextField';

function EditTodoForm({ id, task, editTodo, toggleEditForm }) {
  const [value, handlechange, reset] = useInputState(task);
  return (
    <form onSubmit={(e) => {
        e.preventDefault();
        editTodo(id, value);
        reset();
        toggleEditForm();
        
      }}
      style={{ marginLeft: "2.6rem", width: "50%" }}
    >
      <TextField 
        margin='normal' 
        value={value} 
        onChange={handlechange} 
        fullWidth 
        autoFocus
      />
    </form> 
    
  );
}
export default EditTodoForm;
