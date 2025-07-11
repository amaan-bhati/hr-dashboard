
export interface User {
    id: number
    firstName: string
    lastName: string
    email: string
    age: number
    department: string
    rating: number
    [key: string]: any // allow additional fields
  }
  