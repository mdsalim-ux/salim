export class ILogin {
    userName!: string;
    password!: string;
}
export class IRegister {
    userName!: string;
    email!: string;
    password!: string;
    mobile!: string;
    roleId!: number;
}
export class IRefreshToken {
    jwtToken!: "string";
    refreshToken!: "string";
}