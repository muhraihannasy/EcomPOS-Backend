import { IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class RegisterAuthDTO {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    tenant_name: string;

    @IsOptional()
    @IsString()
    tenant_address: string;

    @IsOptional()
    @IsString()
    phone: string;

    @IsEmail()
    @IsNotEmpty()
    @IsString()
    email: string;

    @IsNotEmpty()
    @IsString()
    password: string;
}
