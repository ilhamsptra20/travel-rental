const DEFAULT_WHATSAPP_NUMBER = "6281222722663";

export function createWhatsAppUrl(
  message: string,
  phoneNumber = DEFAULT_WHATSAPP_NUMBER,
) {
  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
}

export type BookingDetails = {
  name: string;
  date: string;
  vehicle: string;
  route: string;
  passengers: string;
  notes: string;
  brandName?: string;
  phoneNumber?: string;
};

export function createBookingWhatsAppUrl(details: BookingDetails) {
  const message = [
    `Halo ${details.brandName ?? "Anjay Trans"}, saya ingin meminta penawaran sewa kendaraan.`,
    `Nama lengkap: ${details.name}`,
    `Tanggal: ${details.date}`,
    `Armada: ${details.vehicle}`,
    `Rute/tujuan: ${details.route}`,
    `Jumlah penumpang: ${details.passengers}`,
    `Catatan: ${details.notes || "-"}`,
  ].join("\n");

  return createWhatsAppUrl(message, details.phoneNumber);
}
