import { z } from "zod";

const CreateClinicSchema = z.object({
  name: z.string({
    required_error: "Nama wajib diisi",
  }),
  address: z.string({
    required_error: "Alamat wajib diisi",
  }),
  latitude: z.coerce.number({
    required_error: "Latitude wajib diisi",
  }),
  longitude: z.coerce.number({
    required_error: "Longitude wajib diisi",
  }),
  phone_number: z.coerce.string().optional(),
  children: z.boolean().optional(),
  adults: z.boolean().optional(),
  clinic_type: z.enum(["ALL", "GENERAL", "LINGSIX"], {
    required_error: "Tipe wajib diisi",
  }),
});

const UpdateClinicSchema = z.object({
  name: z.string({}).optional(),
  address: z.string({}).optional(),
  latitude: z.coerce.number({}).optional(),
  longitude: z.coerce.number({}).optional(),
  phone_number: z.coerce.string().optional(),
  children: z.boolean().optional(),
  adults: z.boolean().optional(),
  clinic_type: z.enum(["ALL", "GENERAL", "LINGSIX"]).optional(),
});

export { CreateClinicSchema, UpdateClinicSchema };
