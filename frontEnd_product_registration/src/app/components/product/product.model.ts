import { DateTime } from 'luxon'

export interface Product{
    id: number 
    name?: string
    price?: number | null
    description?: string
    quantity_in_stock?: number
    dateTime: DateTime
}