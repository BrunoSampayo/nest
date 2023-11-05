import {IsString,Validate,IsNotEmpty, IsDate, ValidatorConstraint, ValidatorConstraintInterface, ValidationArguments} from 'class-validator'
import { IsCpf } from 'src/validators/cpf.custom.validador';



export class CreatePersonDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    @Validate(IsCpf)
    cpf:string;

    @IsDate()
    @IsNotEmpty()
    birthday:Date;

    @IsString()
    @IsNotEmpty()
    address_street:string;

    @IsString()
    @IsNotEmpty()
    address_number:number;

    @IsString()
    @IsNotEmpty()
    adrress_district:string;

}
