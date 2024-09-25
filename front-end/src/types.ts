export interface Booking {
  location: string;
  startDate: string;
  endDate: string;
  guestCount: number;
}

export interface Listing {
  id: string;
  location: string;
  guestCapacity: number;
  rooms: number;
  photos: string[];
  features: string[];
  equipment: string[];
}
