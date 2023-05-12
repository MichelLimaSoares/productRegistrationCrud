

export interface Product{
    id: number // ? significa opcional
    name: string
    price?: number | null
    description?: string
    quantity_in_stock?: number
    dateTime?: Date
}