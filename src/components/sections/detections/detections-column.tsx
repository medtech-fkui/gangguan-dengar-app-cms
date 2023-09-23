import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Detection } from "@/types";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";

export const columns: ColumnDef<Detection>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="flex items-center justify-center"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "nama",
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
    cell: ({ row }) => <div className="lowercase">{row.getValue("nama")}</div>,
  },
  {
    accessorKey: "umur_dalam_bulan",
    header: () => <div>Umur (Bulan)</div>,
    cell: ({ row }) => (
      <div className="lowercase">{row.getValue("umur_dalam_bulan")}</div>
    ),
  },
  {
    accessorKey: "jenis_deteksi",
    header: () => <div>Tipe Analisa</div>,
    cell: ({ row }) => (
      <div className="lowercase">{row.getValue("jenis_deteksi")}</div>
    ),
  },
  {
    accessorKey: "hasil_analisa",
    header: () => <div>Hasil Analisa</div>,
    cell: ({ row }) => (
      <div className="lowercase">{row.getValue("hasil_analisa")}</div>
    ),
  },
  {
    accessorKey: "tanggal_deteksi",
    header: () => <div>Tanggal Pemeriksaan</div>,
    cell: ({ row }) => {
      const date = new Date(row.getValue("tanggal_deteksi"));

      const formatted = new Intl.DateTimeFormat("en-US", {
        day: "2-digit",
        month: "long",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
      }).format(date);

      return <div className="lowercase w-[10vw]">{formatted}</div>;
    },
  },
  {
    accessorKey: "rerata_intensitas_kiri",
    header: () => <div>Rerata Intensitas Kiri</div>,
    cell: ({ row }) => (
      <div className="lowercase">
        {row.getValue("rerata_intensitas_kiri") ?? "-"}
      </div>
    ),
  },
  {
    accessorKey: "rerata_intensitas_kanan",
    header: () => <div>Rerata Intensitas Kanan</div>,
    cell: ({ row }) => (
      <div className="lowercase">
        {row.getValue("rerata_intensitas_kanan") ?? "-"}
      </div>
    ),
  },
  {
    accessorKey: "skor",
    header: () => <div>Skor</div>,
    cell: ({ row }) => (
      <div className="lowercase">{row.getValue("skor") ?? "-"}</div>
    ),
  },
];
