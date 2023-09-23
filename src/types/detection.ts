export type Detection = {
  nama: string;
  usia_dalam_bulan: number;
  tanggal_deteksi: Date;
  rerata_intensitas_kiri?: number;
  rerata_intensitas_kanan?: number;
  hasil_analisa: string;
  type: string;
  skor?: number;
};
