import { z } from "zod";

const zod_createChat = z.object({
  name: z.string().optional(),
  image: z.string().optional(),
  type: z.enum(["Group", "Direct"]),
  users: z.string({ required_error: "Faltan usuarios" }).array(),
});

export { zod_createChat };
