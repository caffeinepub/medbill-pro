import { useMutation } from "@tanstack/react-query";
import type { Contact } from "../backend.d";
import { useActor } from "./useActor";

export function useSubmitContact() {
  const { actor } = useActor();
  return useMutation({
    mutationFn: async (contact: Omit<Contact, "id" | "timestamp">) => {
      if (!actor) throw new Error("Not connected");
      const fullContact: Contact = {
        ...contact,
        id: crypto.randomUUID(),
        timestamp: BigInt(Date.now()),
      };
      await actor.submitContact(fullContact);
    },
  });
}
