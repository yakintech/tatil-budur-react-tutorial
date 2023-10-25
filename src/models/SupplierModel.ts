export interface SupplierModel {
    id?: number
    companyName?: string
    contactName?: string
    contactTitle?: string
    address?: Address
}


export interface Address{
    street? : string
    city? : string
    region? : string,
    postalCode? : string | number,
    country? : string
    phone? : string
}