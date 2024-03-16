import { z } from "zod";

const zod_createMessage = z.object({
  userId: z.string({ required_error: "Falta usuario" }),
  chatId: z.string({ required_error: "Falta chat" }),
  messageType: z.enum(["Text", "Audio", "Video", "Image"]),
  text: z.string().optional(),
  image: z.string().optional(),
  video: z.string().optional(),
  audio: z.string().optional(),
});

export { zod_createMessage };
