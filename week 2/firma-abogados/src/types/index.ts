export interface Client {
  id: number;
  name: string;
  email: string;
  phone: string;
}

export interface Case {
  id: number;
  title: string;
  description: string;
  clientId: number;
}