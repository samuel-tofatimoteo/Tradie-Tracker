export interface Clients {
  name: string
  company_name: string
  email: string
  phone: string
}

export interface Client extends Clients {
  id: number
}
