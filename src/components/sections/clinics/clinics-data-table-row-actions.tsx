"use client";

import { DotsHorizontalIcon } from "@radix-ui/react-icons";

import { Clinic } from "@/types";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useAxios, useClinics, useUpdateClinicModal } from "@/hooks";
import toast from "react-hot-toast";

interface ClinicsDataTableRowActionProps {
  clinic: Clinic;
}

export const ClinicsDataTableRowAction = ({
  clinic,
}: ClinicsDataTableRowActionProps) => {
  const { refetch } = useClinics();
  const { delete: onDelete } = useAxios();
  const modal = useUpdateClinicModal();

  const handleDelete = async () => {
    const promise = onDelete(`/clinician/clinic/delete/${clinic.id}`);
    toast.promise(promise, {
      loading: "Mencari klinik...",
      success: "Klinik berhasil dihapus!",
      error: "Terjadi kesalahan",
    });
    await promise.then(() => {
      refetch();
    });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
        >
          <DotsHorizontalIcon className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[160px]">
        <DropdownMenuItem onClick={() => modal.onOpenWithClinic(clinic)}>
          Edit
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleDelete}>
          Delete
          <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
