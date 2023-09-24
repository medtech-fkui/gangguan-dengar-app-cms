import { Button } from "@/components/ui/button";
import { Clinic } from "@/types";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { ClinicsDataTableRowAction } from "./clinics-data-table-row-actions";

export const columns: ColumnDef<Clinic>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Nama
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div>{row.getValue("name")}</div>,
  },
  {
    accessorKey: "address",
    header: () => <div>Alamat</div>,
    cell: ({ row }) => <div>{row.getValue("address")}</div>,
  },
  {
    accessorKey: "latitude",
    header: () => <div>Nama Latitude</div>,
    cell: ({ row }) => (
      <div className="lowercase">{row.getValue("latitude")}</div>
    ),
  },
  {
    accessorKey: "longitude",
    header: () => <div>Longitude</div>,
    cell: ({ row }) => (
      <div className="lowercase">{row.getValue("longitude")}</div>
    ),
  },
  {
    accessorKey: "children",
    header: () => <div>Anak</div>,
    cell: ({ row }) => (
      <div className="lowercase w-[6vw]">{`${row.getValue("children")}`}</div>
    ),
  },
  {
    accessorKey: "adults",
    header: () => <div>Dewasa</div>,
    cell: ({ row }) => (
      <div className="lowercase w-[6vw]">{`${row.getValue("adults")}`}</div>
    ),
  },
  {
    accessorKey: "clinic_type",
    header: () => <div>Layanan</div>,
    cell: ({ row }) => (
      <div className="lowercase">{row.getValue("clinic_type")}</div>
    ),
  },
  {
    accessorKey: "phone_number",
    header: () => <div>Nomor telepon</div>,
    cell: ({ row }) => (
      <div className="lowercase">{row.getValue("phone_number") || "-"}</div>
    ),
  },
  {
    id: "actions",
    cell: ({ row }) => <ClinicsDataTableRowAction clinic={row.original} />,
  },
];
