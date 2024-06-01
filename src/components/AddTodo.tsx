import { SubmitHandler, useForm } from "react-hook-form"
import { Todo } from "../types/todo";
import { useCreateTodo } from "../services/mutations";

export const AddTodo = () => {
  const { register, handleSubmit } = useForm<Todo>();

  const { mutateAsync: createTodo } = useCreateTodo();
  
  const handleCreateTodoSubmit: SubmitHandler<Todo> = (data) => {
    createTodo(data);
  }

  return (
    <form className="grid grid-cols-2 max-w-[400px] gap-2" onSubmit={handleSubmit(handleCreateTodoSubmit)}>
      <input className="px-2 py-1 border rounded" type='text' {...register('title')} />
      <input className="px-2 py-2 border rounded" type='text' {...register('description')} />
      <button type="submit" className="px-2 py-1 border rounded col-span-2">Add todo</button>
    </form>
  )
}
