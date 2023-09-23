import { z } from "zod";

const LoginSchema = z.object({
  email: z
    .string({
      required_error: "Email wajib diisi",
    })
    .regex(
      new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}"),
      "Alamat email tidak valid",
    )
    .email(),
  password: z
    .string({
      required_error: "Password wajib diisi",
    })
    .nonempty({
      message: "Password setidaknya harus diisi 1 karakter",
    }),
});

export { LoginSchema };
