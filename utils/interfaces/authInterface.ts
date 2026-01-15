export interface IRegister {
    fullName: string;
    username: string;
    phoneNumber: string;
    email: string;
    password: string;
    role: string;
}

export interface ILogin {
    email: string;
    password: string;
}