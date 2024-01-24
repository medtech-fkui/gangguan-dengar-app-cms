export interface Doctor {
  name: string;
  institution: string;
  company: string;
  src: string;
}

export const doctors: Doctor[] = [
  {
    name: "Dr. dr. Fikri Mirza Putranto, Sp.THT-KL",
    institution: "FKUI - RSUI",
    company: "Universitas Indonesia",
    src: "/photos/fikri-mirza-putranto.png",
  },
  {
    name: "Nurul Aini MCI Aud.",
    institution: "MEDEL Indonesia",
    company: "PT. Medel Medikal Elektronik",
    src: "/photos/nurul-aini.png",
  },
  {
    name: "Azwien Niezam Hawalie M., S.Tr. Kes",
    institution: "FKUI",
    company: "Universitas Indonesia",
    src: "/photos/azwien.png",
  },
  {
    name: "Andi Iskandar",
    institution: "MEDEL Indonesia",
    company: "PT. Medel Medikal Elektronik",
    src: "/photos/andi-iskandar.png",
  },
  {
    name: "Prasandhya Astagiri Yusuf, S.Si., MT., Ph.D",
    institution: "FKUI",
    company: "Universitas Indonesia",
    src: "/photos/prasandhya.png",
  },
  {
    name: "Dr. dr. Tri Juda Airlangga Hardjoprawito, Sp.THT-KL",
    institution: "FKUI - RSCM",
    company: "Universitas Indonesia",
    src: "/photos/tri-juda.png",
  },
  {
    name: "dr. Amien Suharti, Sp.KFR",
    institution: "FKUI - RSUI",
    company: "Universitas Indonesia",
    src: "/photos/amien-suharti.png",
  },
];

export interface Pengguna {
  name: string;
  total: number;
  src: string;
}

export const penggunas: Pengguna[] = [
  {
    name: "Rumah Sakit",
    total: 2,
    src: "/illustrations/pengguna-rumah.svg",
  },
  {
    name: "Klinik",
    total: 2,
    src: "/illustrations/pengguna-klinik.svg",
  },
  {
    name: "Total",
    total: 4,
    src: "/illustrations/pengguna-total.svg",
  },
];

export interface Module {
  name: string;
  desc: string;
  src: string;
}

export const modules: Module[] = [
  {
    name: "Module Kuesioner",
    desc: "Module ini merupakan module evaluasi perkembangan pendengaran dan bahasa anak yang menggunakan kuesioner sejumlah 35 pertanyaan.",
    src: "/illustrations/modul-kuesioner.svg",
  },
  {
    name: "Module Audiometri",
    desc: "Module kedua ini digunakan untuk mengetahui fungsi pendengaran anak pada usia lebih dari 4 tahun atau yang koperatif untuk melakukan pemeriksaan.",
    src: "/illustrations/modul-audiometri.svg",
  },
  {
    name: "Module Lingsix",
    desc: "Module ketiga berguna untuk mengetahui ambang pendengaran anak yang menggunakan alat bantu dengar.",
    src: "/illustrations/modul-lingsix.svg",
  },
];

export interface Link {
  name: string;
  href: string;
}

export const links: Link[] = [
  {
    name: "MedTech IMERI FKUI",
    href: "https://medtech-imeri.id/",
  },
  {
    name: "RSUPN Dr. Cipto Mangunkusumo",
    href: "https://rscm.co.id/",
  },
  {
    name: "Med-el Indonesia",
    href: "https://www.medel.com/id",
  },
  {
    name: "RS Universitas Indonesia",
    href: "https://rs.ui.ac.id/umum/",
  },
  {
    name: "PP Perhati Indonesia",
    href: "https://perhati-kl.or.id/",
  },
];
