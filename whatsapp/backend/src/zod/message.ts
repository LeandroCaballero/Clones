import { z } from "zod";

const zod_createMessage = z.object({
  name: z.string({ required_error: "Este campo no puede estar vacío" }),
});

export { zod_createMessage };
