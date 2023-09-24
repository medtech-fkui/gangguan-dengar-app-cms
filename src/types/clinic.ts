export type Clinic = {
  id: string;
  name: string;
  address: string;
  latitude: number;
  longitude: number;
  children: boolean;
  adults: boolean;
  clinic_type: "GENERAL" | "LINGSIX" | "ALL";
  phone_number?: string;
};
