export interface User {
    id: string,
    name: string,
    username: string,
    email: string,
    address: UserAddress,
    phone: string,
    website: string,
    company: UserCompany,
}

export interface UserAddress {
    street: string
}

export interface UserCompany {
    name: string,
    catchPhrase: string,
    bs: string
}