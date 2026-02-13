import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { api, type InsertLink } from "@shared/routes";

export function useLinks() {
  return useQuery({
    queryKey: [api.links.list.path],
    queryFn: async () => {
      const res = await fetch(api.links.list.path);
      if (!res.ok) throw new Error("Failed to fetch links");
      return api.links.list.responses[200].parse(await res.json());
    },
  });
}

// Included for completeness if admin features are added later
export function useCreateLink() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: InsertLink) => {
      const res = await fetch(api.links.create.path, {
        method: api.links.create.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      
      if (!res.ok) {
        throw new Error("Failed to create link");
      }
      
      return api.links.create.responses[201].parse(await res.json());
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [api.links.list.path] });
    },
  });
}
