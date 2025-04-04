export interface UserAnswerRegister {
    error: boolean;
    type: number;
    user?: User;
    msgs?: any;
}

export interface User {
    fullName: string;
    email: string;
    dni: number,
    password: string,
    signature: string,
    terms:boolean

    status: Number;
    access_token: string;
    expires_at: string;
    
    roles: Role[]
}

export interface Role {
    id: Number,
    name: string;
    code: string;
    pivot: RolePivot
}

export interface RolePivot {
    role_id: string;
    user_id: string;
}