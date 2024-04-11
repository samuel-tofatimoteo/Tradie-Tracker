export interface Companies {
  name: string
  gst: string
  web_link: string
}

export interface Company extends Companies {
  id: number
}
