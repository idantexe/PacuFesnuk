
import React from 'react';
import { ShoppingBag, Ruler, MessageSquare, Truck, LayoutDashboard, Users, Calendar, PieChart, Sparkles } from 'lucide-react';

export const COLORS = {
  berry: '#701a75',
  softPink: '#fce7f3',
  champagne: '#f7e7ce',
  maroon: '#800000',
  teal: '#008080',
  primaryGradient: 'bg-gradient-to-r from-purple-700 via-pink-500 to-purple-800',
};

export const MOCK_STYLISTS = [
  { id: '1', name: 'Fitri Belle', category: 'Premium Kebaya', rating: 5.0, img: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=200' },
  { id: '2', name: 'Atelier BRB', category: 'Bridal & Graduation', rating: 4.9, img: 'https://images.unsplash.com/photo-1594161834235-e60da39b6403?q=80&w=200' },
  { id: '3', name: 'Modern Kurung', category: 'Casual Chic', rating: 4.8, img: 'https://images.unsplash.com/photo-1621184455862-c163dfb30e0f?q=80&w=200' },
];

export const INSPIRATION_FEED = [
  { id: 'f1', title: 'Teal Elegance', category: 'Graduation', img: 'https://images.unsplash.com/photo-1621184455862-c163dfb30e0f?q=80&w=400&h=600' },
  { id: 'f2', title: 'Champagne Pearls', category: 'Wedding', img: 'https://images.unsplash.com/photo-1594161834235-e60da39b6403?q=80&w=400&h=500' },
  { id: 'f3', title: 'Maroon Lace', category: 'Formal Event', img: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=400&h=700' },
  { id: 'f4', title: 'Unboxing Joy', category: 'Packaging', img: 'https://images.unsplash.com/photo-1512909006721-3d6018887383?q=80&w=400&h=400' },
];

export const ORDER_STEPS = [
  { label: 'Consultation', description: 'Design & measurement' },
  { label: 'Fabric Selection', description: 'Premium sourcing' },
  { label: 'Tailoring', description: 'Precision sewing' },
  { label: 'Beading & Decor', description: 'Handmade details' },
  { label: 'Packaging', description: 'Luxury unboxing experience' },
  { label: 'Metamorphosis', description: 'Shipped to you' }
];

export const CUSTOMER_NAV = [
  { name: 'Atelier', icon: <ShoppingBag size={20} />, id: 'home' },
  { name: 'My Profile', icon: <Ruler size={20} />, id: 'profile' },
  { name: 'Consult', icon: <MessageSquare size={20} />, id: 'chat' },
  { name: 'Metamorphosis', icon: <Sparkles size={20} />, id: 'orders' },
];

export const STYLIST_NAV = [
  { name: 'Dashboard', icon: <LayoutDashboard size={20} />, id: 'dashboard' },
  { name: 'Clients', icon: <Users size={20} />, id: 'clients' },
  { name: 'Orders', icon: <PieChart size={20} />, id: 'reports' },
];
