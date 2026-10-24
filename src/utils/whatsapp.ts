import { siteConfig } from "../data/siteConfig";

export interface BookingEnquiryPayload {
  name: string;
  phone?: string;
  service: string;
  eventDate: string;
  eventLocation: string;
  message?: string;
}

export function buildWhatsAppUrl(message: string): string {
  const cleanMessage = message.trim();
  const encodedText = encodeURIComponent(cleanMessage);
  return `${siteConfig.whatsappBaseUrl}?text=${encodedText}`;
}

export function getGeneralWhatsAppUrl(): string {
  const defaultMessage =
    "Hello Jinnu Makeup Artist, I would like to enquire about your makeup and hairstyling services. Please share the availability and details for my event.";
  return buildWhatsAppUrl(defaultMessage);
}

export function getServiceWhatsAppUrl(serviceTitle: string): string {
  const message = `Hello Jinnu Makeup Artist, I would like to enquire about your ${serviceTitle} service. Please share your availability and booking details for my upcoming event.`;
  return buildWhatsAppUrl(message);
}

export function getLookWhatsAppUrl(lookTitle: string, category: string): string {
  const message = `Hello Jinnu Makeup Artist, I loved the "${lookTitle}" (${category}) look in your portfolio and would like to enquire about booking a similar style for my event. Please share your availability.`;
  return buildWhatsAppUrl(message);
}

export function getBookingFormWhatsAppUrl(payload: BookingEnquiryPayload): string {
  const lines: string[] = [
    "Hello Jinnu Makeup Artist, I would like to enquire about booking your makeup and hairstyling services.",
    "",
    `Name: ${payload.name.trim()}`,
  ];

  if (payload.phone && payload.phone.trim()) {
    lines.push(`Contact Number: ${payload.phone.trim()}`);
  }

  lines.push(`Selected Service: ${payload.service.trim()}`);
  lines.push(`Event Date: ${payload.eventDate.trim()}`);
  lines.push(`Event Location / Venue: ${payload.eventLocation.trim()}`);

  if (payload.message && payload.message.trim()) {
    lines.push(`Additional Details: ${payload.message.trim()}`);
  }

  lines.push("");
  lines.push("Please let me know your availability and next steps.");

  return buildWhatsAppUrl(lines.join("\n"));
}
