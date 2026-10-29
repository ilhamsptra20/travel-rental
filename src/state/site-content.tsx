"use client";

import {
  createContext,
  useCallback,
  useMemo,
  useReducer,
  type ReactNode,
} from "react";

export const initialSiteContent = {
  brandName: "Anjay Trans",
  header: {
    announcement: "TEMUKAN PERJALANAN YANG LEBIH BERKESAN",
    announcementLink: "Lihat pilihan perjalanan",
    serviceName: "SEWA HIACE PREMIO LUXURY",
    fleetLink: "Pilihan Armada",
    benefitsLink: "Alasan Memilih Kami",
    faqLink: "FAQ",
    contactLink: "Hubungi Kami",
    mobileContactLink: "Hubungi",
    contactMessage: "saya ingin bertanya tentang sewa Hiace.",
  },
  hero: {
    eyebrow: "Sewa Hiace Premio",
    location: "Jabodetabek & sekitarnya",
    titleLine1: "Pilih Kendaraan",
    titleLine2: "Dengan Nyaman",
    titleAccent: "Setiap Perjalanan",
    description:
      "Perjalanan lebih nyaman dengan armada terawat dan sopir berpengalaman. Dari liburan keluarga, perjalanan kantor, hingga acara spesial — nikmati perjalanan, biar kami bantu urusan di jalan.",
    metrics: [
      { value: "2.000+", label: "Perjalanan" },
      { value: "Sopir", label: "Berpengalaman" },
      { value: "Layanan", label: "24 Jam*" },
    ],
    primaryAction: "Pesan via WhatsApp",
    secondaryAction: "Lihat Armada",
    bookingMessage: "saya ingin konsultasi sewa Hiace Premio.",
    availabilityNote:
      "*Konfirmasi jam layanan dan ketersediaan unit kepada tim kami.",
    maintainedFleet: "Armada Terawat",
    maintainedFleetNote: "Siap untuk perjalanan Anda",
    serviceArea: "Jabodetabek",
    serviceAreaNote: "dan sekitarnya",
    imageNote: "*Siap menemani setiap tujuan Anda",
    imageAlt: "Bus pariwisata untuk perjalanan rombongan",
  },
  trustStats: [
    { value: "2.000+", label: "Perjalanan terlayani*" },
    { value: "4.9 / 5", label: "Penilaian pelanggan*" },
    { value: "Sejak 2017", label: "Melayani pelanggan" },
    { value: "Jabodetabek", label: "Jangkauan Perjalanan" },
  ],
  promo: {
    eyebrow: "Temukan opsi yang sesuai rencana",
    title: "Ada Penawaran Menarik untuk Perjalanan Anda",
    description:
      "Ceritakan rencana perjalanan Anda. Tim kami akan membantu memeriksa penawaran yang tersedia sesuai tanggal dan kebutuhan.",
    note: "Ketersediaan penawaran dapat berubah. Konfirmasikan detailnya kepada tim kami sebelum memesan.",
    cards: [
      {
        badge: "Pilihan pelanggan",
        title: "Penawaran Cashback",
        description:
          "Hubungi tim kami untuk mengetahui apakah ada cashback yang berlaku untuk pemesanan Anda.",
        message: "Halo, saya ingin menanyakan promo cashback.",
      },
      {
        badge: "Untuk perjalanan keluarga",
        title: "Bonus Paket Sembako",
        description:
          "Tanyakan ketersediaan bonus dan ketentuan yang berlaku sebelum melakukan pemesanan.",
        message: "Halo, saya ingin menanyakan promo paket sembako.",
      },
      {
        badge: "Pilihan lebih hemat",
        title: "Penawaran Harga Khusus",
        description:
          "Kami bantu cek penawaran berdasarkan kendaraan, tujuan, dan tanggal keberangkatan Anda.",
        message: "Halo, saya ingin menanyakan promo diskon sewa.",
      },
    ],
    action: "Tanya Penawaran",
  },
  interior: {
    eyebrow: "Kenyamanan di Setiap Perjalanan",
    title: "Ruang Kabin untuk Menikmati Perjalanan",
    description:
      "Pilih kendaraan dengan konfigurasi kabin yang sesuai untuk perjalanan keluarga, tamu bisnis, maupun kegiatan perusahaan. Tanyakan fasilitas unit yang tersedia sebelum menentukan pilihan.",
    imageAlt: "Kendaraan untuk perjalanan",
    features: ["Captain Seat Kulit", "LCD TV", "Karaoke", "AC", "Coolbox*"],
    action: "Tanyakan Fasilitas",
    actionMessage: "Halo, saya ingin menanyakan fasilitas interior Hiace Premio Luxury.",
    note: "*Fasilitas dapat berbeda sesuai unit. Konfirmasi spesifikasi sebelum booking.",
  },
  fleet: {
    eyebrow: "Kendaraan pilihan",
    title: "Pilih Kendaraan yang Cocok untuk Anda",
    description:
      "Setiap perjalanan punya kebutuhan berbeda. Bandingkan pilihan berikut, lalu konsultasikan rute dan jadwal Anda dengan tim kami.",
    action: "Tanyakan Ketersediaan",
    vehicles: [
      {
        image:
          "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80",
        alt: "Hiace Premio Luxury",
        badge: "Pilihan perjalanan",
        name: "Hiace Premio Luxury · 9 Seat",
        description:
          "Pilihan nyaman untuk perjalanan keluarga, rombongan kecil, atau agenda bersama rekan kerja.",
        features: ["9 penumpang", "Captain seat", "LCD TV + karaoke"],
        message:
          "Halo, mohon cek harga dan ketersediaan Hiace Premio Luxury 9 Seat.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&w=800&q=80",
        alt: "Hiace Premio VIP",
        badge: "Kabin premium",
        name: "Hiace Premio Luxury · 8 Seat VIP",
        description:
          "Pilihan kabin premium untuk perjalanan privat, menerima tamu, atau acara spesial.",
        features: ["8 penumpang", "Reclining seat*", "Coolbox*"],
        message:
          "Halo, mohon cek harga dan ketersediaan Hiace Premio Luxury 8 Seat VIP.",
      },
      {
        image:
          "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80",
        alt: "Hiace Commuter",
        badge: "Untuk rombongan",
        name: "Hiace Commuter Luxury · 10 Seat",
        description:
          "Alternatif untuk rombongan wisata, kegiatan komunitas, dan kebutuhan antar-jemput acara.",
        features: ["10 penumpang", "AC", "Bagasi luas"],
        message:
          "Halo, mohon cek harga dan ketersediaan Hiace Commuter Luxury 10 Seat.",
      },
    ],
  },
  benefits: {
    eyebrow: "Alasan Memilih Kami",
    title: "Perjalanan Anda, Kami Bantu Persiapkan",
    description:
      "Mulai dari menentukan kendaraan hingga memastikan jadwal, komunikasi yang jelas membuat persiapan perjalanan lebih mudah.",
    items: [
      {
        title: "Biaya Lebih Jelas",
        description:
          "Ketahui komponen biaya sejak awal agar Anda bisa menyiapkan anggaran dengan lebih terukur.",
      },
      {
        title: "Lihat Kondisi Kendaraan",
        description:
          "Mintalah foto unit yang akan digunakan agar pilihan kendaraan sesuai dengan ekspektasi Anda.",
      },
      {
        title: "Pengemudi Berpengalaman",
        description:
          "Sampaikan rute dan jadwal sejak awal untuk membantu tim mempersiapkan perjalanan.",
      },
      {
        title: "Mudah Berkonsultasi",
        description:
          "Diskusikan kebutuhan Anda langsung dengan tim untuk mengecek jadwal dan pilihan kendaraan.",
      },
      {
        title: "Titik Jemput Fleksibel",
        description:
          "Sampaikan lokasi penjemputan dan tujuan agar rencana perjalanan dapat disesuaikan.",
      },
      {
        title: "Kunjungi Pool Kami",
        description:
          "Ingin melihat kendaraan secara langsung? Hubungi tim terlebih dahulu untuk mengatur jadwal kunjungan.",
      },
    ],
  },
  bookingTips: {
    eyebrow: "Pesan dengan Informasi yang Jelas",
    title: "Pastikan Semua Detail Siap Sebelum Berangkat",
    checklist: [
      "Pastikan rincian biaya dan layanan disepakati sebelum pembayaran.",
      "Konfirmasikan alamat pool dan jadwal jika ingin melihat unit.",
      "Minta invoice jika diperlukan untuk administrasi kantor.",
      "Simpan konfirmasi kendaraan, jadwal, dan ketentuan pemesanan.",
    ],
    action: "Tanya Invoice & Ketentuan",
    actionMessage: "Halo, saya ingin bertanya tentang invoice dan ketentuan booking.",
    documentTitle: "Perlu Dokumen untuk Perjalanan Dinas?",
    documentDescription:
      "Sampaikan kebutuhan administrasi perusahaan sejak awal. Tim kami dapat menjelaskan dokumen yang tersedia untuk pemesanan Anda.",
    documentAction: "Tanyakan invoice via WhatsApp",
    documentMessage: "Halo, saya membutuhkan invoice untuk perjalanan perusahaan.",
  },
  coverage: {
    eyebrow: "Jangkauan Perjalanan",
    title: "Berangkat dari Jabodetabek, Menuju Berbagai Tujuan",
    description:
      "Sampaikan titik awal dan tujuan perjalanan untuk memeriksa pilihan layanan yang sesuai.",
    cities: ["Jakarta", "Bogor", "Depok", "Tangerang", "Bekasi"],
    poolTitle: "Lokasi Pool",
    poolAddress:
      "Jl. H. Saan No. 98 A, Parigi, Pondok Aren, Kota Tangerang Selatan.",
    mapAction: "Buka Google Maps",
    outOfTownTitle: "Punya Rencana ke Luar Kota?",
    outOfTownDescription:
      "Ceritakan tujuan dan durasi perjalanan Anda. Kami bantu mengecek ketersediaan kendaraan serta rincian biaya.",
    outOfTownAction: "Rencanakan Perjalanan",
    outOfTownMessage: "Halo, saya ingin konsultasi sewa Hiace untuk perjalanan luar kota.",
  },
  faq: {
    eyebrow: "Informasi Sebelum Memesan",
    title: "Pertanyaan yang Sering Diajukan",
    items: [
      {
        question: "Bagaimana cara mengetahui harga sewa?",
        answer:
          "Kirimkan tanggal, rute, dan durasi perjalanan kepada tim kami untuk memperoleh penawaran yang sesuai.",
      },
      {
        question: "Apa saja yang termasuk dalam harga sewa?",
        answer:
          "Tanyakan apakah penawaran mencakup sopir, BBM, tol, parkir, serta biaya makan atau penginapan pengemudi.",
      },
      {
        question: "Apakah bisa memesan dalam waktu dekat?",
        answer:
          "Bisa ditanyakan kepada tim kami. Ketersediaan kendaraan bergantung pada jadwal pemesanan yang sudah masuk.",
      },
      {
        question: "Apakah tersedia perjalanan luar kota?",
        answer:
          "Sampaikan tujuan dan tanggal perjalanan agar tim dapat mengecek ketersediaan serta ketentuan perjalanan.",
      },
      {
        question: "Bisakah saya melihat kendaraan terlebih dahulu?",
        answer:
          "Bisa ditanyakan kepada tim kami. Silakan konfirmasi alamat pool dan buat janji sebelum berkunjung.",
      },
    ],
  },
  callToAction: {
    eyebrow: "Anjay Trans",
    title: "Mari Siapkan Perjalanan Anda",
    description:
      "Sampaikan rencana Anda. Kami bantu menemukan pilihan kendaraan dan layanan yang sesuai.",
    action: "Mulai Konsultasi",
    message: "Halo Anjay Trans, saya ingin konsultasi dan memesan armada.",
  },
  contact: {
    eyebrow: "Hubungi Tim Kami",
    title: "Ceritakan Rencana Perjalanan Anda",
    description:
      "Lengkapi detail singkat berikut agar tim kami bisa memahami kebutuhan perjalanan Anda.",
    businessDescription:
      "Sewa Hiace Premio Luxury untuk Jabodetabek dan perjalanan luar kota.",
    phoneLabel: "Telepon / WhatsApp",
    phone: "0812-2272-2663",
    whatsappNumber: "6281222722663",
    directMessage: "Halo Anjay Trans, saya ingin berkonsultasi.",
    poolLabel: "Alamat pool",
    directAction: "Hubungi langsung",
    form: {
      name: "Nama lengkap",
      namePlaceholder: "Nama lengkap Anda",
      date: "Tanggal perjalanan",
      vehicle: "Kendaraan pilihan",
      vehiclePlaceholder: "Pilih armada",
      vehicleOptions: [
        "Hiace Premio Luxury · 9 Seat",
        "Hiace Premio Luxury · 8 Seat VIP",
        "Hiace Commuter Luxury · 10 Seat",
      ],
      route: "Rute perjalanan",
      routePlaceholder: "Contoh: Bogor - Bandung",
      passengers: "Jumlah penumpang",
      passengersPlaceholder: "Jumlah orang",
      notes: "Detail tambahan",
      notesPlaceholder: "Durasi, lokasi jemput, kebutuhan khusus",
      submit: "Kirim Detail Perjalanan via WhatsApp",
      consult: "Ingin konsultasi armada",
    },
  },
  footer: {
    legal: "All rights reserved.",
    technology: "HTML · Tailwind CSS · JavaScript",
  },
  whatsapp: { label: "WhatsApp", message: "Halo Anjay Trans" },
};

export type SiteContent = typeof initialSiteContent;

type DeepPartial<T> = T extends unknown[]
  ? T
  : T extends object
    ? { [Key in keyof T]?: DeepPartial<T[Key]> }
    : T;

export type SiteContentPatch = DeepPartial<SiteContent>;

type ContentAction =
  | { type: "replace"; content: SiteContent }
  | { type: "update"; patch: SiteContentPatch };

export type SiteContentContextValue = {
  content: SiteContent;
  replaceContent: (content: SiteContent) => void;
  updateContent: (patch: SiteContentPatch) => void;
};

export const SiteContentContext =
  createContext<SiteContentContextValue | null>(null);

function mergeContent(
  current: Record<string, unknown>,
  patch: Record<string, unknown>,
): Record<string, unknown> {
  const merged = { ...current };

  for (const [key, value] of Object.entries(patch)) {
    const previous = current[key];
    const canMerge =
      value !== null &&
      typeof value === "object" &&
      !Array.isArray(value) &&
      previous !== null &&
      typeof previous === "object" &&
      !Array.isArray(previous);

    merged[key] = canMerge
      ? mergeContent(
          previous as Record<string, unknown>,
          value as Record<string, unknown>,
        )
      : value;
  }

  return merged;
}

function contentReducer(
  current: SiteContent,
  action: ContentAction,
): SiteContent {
  if (action.type === "replace") return action.content;

  return mergeContent(
    current,
    action.patch as Record<string, unknown>,
  ) as SiteContent;
}

export function SiteContentProvider({ children }: { children: ReactNode }) {
  const [content, dispatch] = useReducer(contentReducer, initialSiteContent);
  const replaceContent = useCallback(
    (nextContent: SiteContent) =>
      dispatch({ type: "replace", content: nextContent }),
    [],
  );
  const updateContent = useCallback(
    (patch: SiteContentPatch) => dispatch({ type: "update", patch }),
    [],
  );
  const value = useMemo(
    () => ({
      content,
      replaceContent,
      updateContent,
    }),
    [content, replaceContent, updateContent],
  );

  return (
    <SiteContentContext.Provider value={value}>
      {children}
    </SiteContentContext.Provider>
  );
}

