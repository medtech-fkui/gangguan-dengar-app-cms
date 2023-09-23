import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Child } from "@/types";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";

export const columns: ColumnDef<Child>[] = [
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
    accessorKey: "nama_akun",
    header: ({ column }) => {
      return (
        <div className="w-[10vw] py-2">
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Nama Akun
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => (
      <div className="lowercase w-[10vw]">{row.getValue("nama_akun")}</div>
    ),
  },
  {
    accessorKey: "nama_ortu",
    header: () => <div>Nama Ortu</div>,
    cell: ({ row }) => (
      <div className="lowercase w-[10vw]">{row.getValue("nama_ortu")}</div>
    ),
  },
  {
    accessorKey: "nama_anak",
    header: () => <div>Nama anak</div>,
    cell: ({ row }) => (
      <div className="lowercase w-[10vw]">{row.getValue("nama_anak")}</div>
    ),
  },
  {
    accessorKey: "tanggal_lahir",
    header: () => <div>Tanggal Lahir</div>,
    cell: ({ row }) => {
      const date = new Date(row.getValue("tanggal_lahir"));

      const formatted = new Intl.DateTimeFormat("en-US", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }).format(date);

      return <div className="lowercase w-[10vw]">{formatted}</div>;
    },
  },
  {
    accessorKey: "umur_dalam_bulan",
    header: () => <div>Umur (Bulan)</div>,
    cell: ({ row }) => (
      <div className="lowercase w-[6vw]">
        {row.getValue("umur_dalam_bulan")}
      </div>
    ),
  },
  {
    accessorKey: "anak_ke",
    header: () => <div>Anak ke</div>,
    cell: ({ row }) => (
      <div className="lowercase w-[6vw]">{row.getValue("anak_ke")}</div>
    ),
  },
  {
    accessorKey: "pendidikan_ortu",
    header: () => <div>Pendidikan Ortu</div>,
    cell: ({ row }) => (
      <div className="lowercase w-[10vw]">
        {row.getValue("pendidikan_ortu")}
      </div>
    ),
  },
  {
    accessorKey: "alat_bantu",
    header: () => <div>Alat Bantu</div>,
    cell: ({ row }) => (
      <div className="lowercase w-[10vw]">{row.getValue("alat_bantu")}</div>
    ),
  },
  {
    accessorKey: "tanggal_alat_bantu",
    header: () => <div>Tanggal Alat Bantu</div>,
    cell: ({ row }) => {
      const date = new Date(row.getValue("tanggal_lahir"));

      const formatted = new Intl.DateTimeFormat("en-US", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }).format(date);

      return <div className="lowercase w-[10vw]">{formatted}</div>;
    },
  },
  {
    accessorKey: "bisa_berjalan",
    header: () => <div>Bisa Berjalan</div>,
    cell: ({ row }) => (
      <div className="lowercase w-[6vw]">{`${row.getValue(
        "bisa_berjalan",
      )}`}</div>
    ),
  },
  {
    accessorKey: "umur_bisa_berjalan",
    header: () => <div>Umur Bisa Berjalan</div>,
    cell: ({ row }) => (
      <div className="lowercase w-[6vw]">
        {row.getValue("umur_bisa_berjalan")}
      </div>
    ),
  },
  {
    accessorKey: "rutin_checkup",
    header: () => <div>Rutin Checkup</div>,
    cell: ({ row }) => (
      <div className="lowercase w-[6vw]">{`${row.getValue(
        "rutin_checkup",
      )}`}</div>
    ),
  },
  {
    accessorKey: "konsumsi_jamu",
    header: () => <div>Konsumsi Jamu</div>,
    cell: ({ row }) => (
      <div className="lowercase w-[6vw]">{`${row.getValue(
        "konsumsi_jamu",
      )}`}</div>
    ),
  },
  {
    accessorKey: "sakit_saat_hamil",
    header: () => <div>Sakit Saat Hami</div>,
    cell: ({ row }) => (
      <div className="lowercase w-[6vw]">{`${row.getValue(
        "sakit_saat_hamil",
      )}`}</div>
    ),
  },
  {
    accessorKey: "infeksi_saat_hamil",
    header: () => <div>Infeksi Saat Hamil</div>,
    cell: ({ row }) => (
      <div className="lowercase w-[6vw]">{`${row.getValue(
        "infeksi_saat_hamil",
      )}`}</div>
    ),
  },
  {
    accessorKey: "cukup_bulan",
    header: () => <div>Cukup Bulan</div>,
    cell: ({ row }) => (
      <div className="lowercase w-[6vw]">{`${row.getValue(
        "cukup_bulan",
      )}`}</div>
    ),
  },
  {
    accessorKey: "berat_normal",
    header: () => <div>Berat Normal</div>,
    cell: ({ row }) => (
      <div className="lowercase w-[6vw]">{`${row.getValue(
        "berat_normal",
      )}`}</div>
    ),
  },
  {
    accessorKey: "lahir_normal",
    header: () => <div>Lahir Normal</div>,
    cell: ({ row }) => (
      <div className="lowercase w-[6vw]">{`${row.getValue(
        "lahir_normal",
      )}`}</div>
    ),
  },
  {
    accessorKey: "sakit_kuning",
    header: () => <div>Sakit Kuning</div>,
    cell: ({ row }) => (
      <div className="lowercase w-[6vw]">{`${row.getValue(
        "sakit_kuning",
      )}`}</div>
    ),
  },
  {
    accessorKey: "rutin_imunisasi",
    header: () => <div>Rutin Imunisasi</div>,
    cell: ({ row }) => (
      <div className="lowercase w-[6vw]">{`${row.getValue(
        "rutin_imunisasi",
      )}`}</div>
    ),
  },
  {
    accessorKey: "sering_pilek",
    header: () => <div>Sering Pilek</div>,
    cell: ({ row }) => (
      <div className="lowercase w-[6vw]">{`${row.getValue(
        "sering_pilek",
      )}`}</div>
    ),
  },
  {
    accessorKey: "alat_bantu_nafas",
    header: () => <div>Sering Pilek</div>,
    cell: ({ row }) => (
      <div className="lowercase w-[6vw]">{`${row.getValue(
        "alat_bantu_nafas",
      )}`}</div>
    ),
  },
  {
    accessorKey: "riwayat_kejang",
    header: () => <div>Riwayat Kejang</div>,
    cell: ({ row }) => (
      <div className="lowercase w-[6vw]">{`${row.getValue(
        "riwayat_kejang",
      )}`}</div>
    ),
  },
];
