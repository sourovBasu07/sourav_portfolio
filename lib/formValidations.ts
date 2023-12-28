import * as z from "zod";

export const formValidation = z.object({
  name: z
    .string()
    .min(3, { message: "Must contain more than 3 characters" })
    .max(30, { message: "Must contain less than 30 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  message: z
    .string()
    .min(5, { message: "Message must be more than 5 charcters long" })
    .max(1000, { message: "Message can't more than 1000 characters long" }),
});
