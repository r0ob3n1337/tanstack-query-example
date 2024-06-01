import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTodo, updateTodo } from "./api";

export const useUpdateTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateTodo,
    onSettled: async () => {
      await queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });
};

export const useCreateTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createTodo,
    onSettled: async () => {
      queryClient.invalidateQueries({queryKey: ['todos']})
    },
  });
};
