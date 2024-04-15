export interface Jobs {
  title: string
  description: string
  location: string
  date: string
  time: string
  complete: boolean
  price: number
  review: string
  worked_hours: number
  employee_id: number
  client_id: number
  manager_id: number
}

export interface Job extends Jobs {
  id: number
}

export interface JobData {
  id: number
  data: Jobs
}
export interface JobReview {
  review: string
  data: Job
}
