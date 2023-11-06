import { Type } from 'class-transformer';
import {IsString,Validate,IsNotEmpty, IsDate, IsNumber} from 'class-validator'
import { IsCpf } from 'src/validators/cpf.custom.validador';



export class CreatePersonDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    @Validate(IsCpf)
    cpf:string;

    @Type(() => Date)
    @IsDate()
    @IsNotEmpty()
    birthday:Date;

    @IsString()
    @IsNotEmpty()
    address_street:string;

    @Type(() => Number)
    @IsNumber()
    @IsNotEmpty()
    address_number:number;

    @IsString()
    @IsNotEmpty()
    address_district:string;

}
