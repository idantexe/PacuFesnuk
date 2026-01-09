
export enum UserRole {
  CUSTOMER = 'CUSTOMER',
  STYLIST = 'STYLIST'
}

export type OrderStatus = 'Consultation' | 'Fabric Sourcing' | 'Cutting' | 'Sewing' | 'Finishing' | 'Shipping' | 'Delivered';

export interface UserProfile {
  name: string;
  weight: number;
  height: number;
  age: number;
  measurements?: {
    chest: number;
    waist: number;
    hips: number;
    armLength: number;
  };
}

export interface Order {
  id: string;
  customerName: string;
  stylistName: string;
  itemName: string;
  status: OrderStatus;
  price: number;
  date: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'stylist' | 'ai';
  text: string;
  timestamp: string;
  type?: 'text' | 'image' | 'sketch';
  imageUrl?: string;
}
