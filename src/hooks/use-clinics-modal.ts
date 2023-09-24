import { Clinic } from "@/types";
import { create } from "zustand";

interface ClinicsModalStore {
  isOpen: boolean;
  onOpenForCreate: () => void;
  onOpenForEdit: (clinic: Clinic) => void;
  onClose: () => void;
  clinic?: Clinic;
}

export const useClinicsModal = create<ClinicsModalStore>((set) => ({
  isOpen: false,
  onOpenForCreate: () => set({ isOpen: true }),
  onOpenForEdit: (clinic: Clinic) => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
