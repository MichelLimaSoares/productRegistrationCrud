import { DateTime } from 'luxon'

export interface User {
    id: number 
    name: string
    password: string
    email: string
    createDateLogin: DateTime
    lastLogin: DateTime
    activeAccount: boolean
}
