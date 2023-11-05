import { IsString, IsNumber, IsNotEmpty } from 'class-validator'
export class CreateBookDto {

    @IsString()
    @IsNotEmpty()
    title: string;

    @IsString()
    @IsNotEmpty()
    author: string;

    @IsString()
    @IsNumber()
    ISNB: Number;

    
    image: Express.Multer.File;
}
