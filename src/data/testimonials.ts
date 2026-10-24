export interface TestimonialItem {
  id: string;
  clientName: string;
  occasion: string;
  location: string;
  quote: string;
}

export const verifiedTestimonials: TestimonialItem[] = [];

export interface StudioStandard {
  id: string;
  label: string;
  value: string;
  detail: string;
}

export const verifiedStudioStandards: StudioStandard[] = [
  {
    id: "experience",
    label: "Professional Experience",
    value: "5 Years",
    detail: "Stated experience in bridal makeup and hairstyling artistry",
  },
  {
    id: "qualification",
    label: "Professional Training",
    value: "Certified",
    detail: "Certified makeup artist and hairstylist (@makeupby_jinnu)",
  },
  {
    id: "base",
    label: "Studio Base",
    value: "Jodhpur",
    detail: "Near Somani College, Jodhpur, Rajasthan",
  },
  {
    id: "travel",
    label: "Destination Availability",
    value: "Worldwide",
    detail: "Available for destination weddings and events globally",
  },
];
