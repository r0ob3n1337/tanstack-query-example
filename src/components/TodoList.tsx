import { useCallback } from "react";
import { useTodos } from "../services/queries";
import { useUpdateTodo } from "../services/mutations";
import { Todo } from "../types/todo";

export const TodoList = () => {
  const { isLoading, data: todos } = useTodos();

  const { mutateAsync: updateTodo } = useUpdateTodo();

  const handleChange = useCallback(async (todo: Todo, checked: boolean) => {
    await updateTodo({...todo, checked});
  }, []);

  return (
    <div className="max-h-[300px] overflow-y-auto">
      {isLoading
        ? <div className="text-3xl font-bold underline">Loading...</div>
        : (
          <ul>
            {todos?.map((t) => (
              <li key={t.id}>
                <label className="flex gap-2">
                  <input
                    type="checkbox"
                    checked={t.checked}
                    onChange={(e) =>
                      handleChange(t, e.currentTarget.checked)}
                  />
                  {t.title}
                </label>
              </li>
            ))}
          </ul>
        )}
    </div>
  );
};
