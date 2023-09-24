import { Clinic } from "@/types";
import { create } from "zustand";

interface ClinicsModalStore {
  isOpen: boolean;
  onOpenWithClinic: (clinic: Clinic) => void;
  onClose: () => void;
  clinic?: Clinic;
}

export const useUpdateClinicModal = create<ClinicsModalStore>((set) => ({
  isOpen: false,
  onOpenWithClinic: (clinic: Clinic) => set({ isOpen: true, clinic: clinic }),
  onClose: () => set({ isOpen: false, clinic: undefined }),
}));
