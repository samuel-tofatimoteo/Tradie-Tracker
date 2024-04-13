export interface Employees {
  name: string
  bio: string
  email: string
  phone: string
  rating: number
  company_id: number
  // title: string
  // description: string
  // location: string
  // date: string
  // time: string
  // complete: boolean
  // price: string
  // review: string
  // worked_hours: string
  // employee_id: number
  // client_id: number
  // manager_id: number
}

export interface Employee extends Employees {
  id: number
}
