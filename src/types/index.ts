// Local type definitions (replaces @prisma/client imports)
// These match the Supabase database schema

export interface DashboardStats {
  totalRevenue: number;
  totalOrders: number;
  totalGuests: number;
  averageOrderValue: number;
  activeReservations: number;
}

export interface NavItem {
  title: string;
  href: string;
  icon?: string;
  disabled?: boolean;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}
