import { create } from "zustand";

interface ClinicsModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useCreateClinicModal = create<ClinicsModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
