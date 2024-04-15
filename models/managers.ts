export interface Managers {
  name: string
  bio: string
  email: string
  phone: string
  rating: number
  company_id: number
}

export interface Manager extends Managers {
  id: number
}
