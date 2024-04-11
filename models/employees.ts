export interface Employees {
  name: string
  bio: string
  email: string
  phone: string
  rating: number
  company_id: number
}

export interface Employee extends Employees {
  id: number
}
