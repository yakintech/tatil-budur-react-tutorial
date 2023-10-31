
export interface CustomerModel{
    id? : string
    companyName? : string
    contactName? : string
    contactTitle? : string
    address?: CustomerAddress
}


export interface CustomerAddress{
    street? : string
    city? : string
    region? : string
}
