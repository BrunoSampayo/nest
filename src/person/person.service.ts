import { Injectable } from '@nestjs/common';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { error } from 'console';

@Injectable()
export class PersonService {

  constructor (private prisma:PrismaService){}
  
 async create(createPersonDto: CreatePersonDto) {
    try{
      const userAlreadyExists = await this.prisma.user.findFirstOrThrow({
        where:{cpf:createPersonDto.cpf}
      })
      if(userAlreadyExists.cpf){
        return {
          statusCode: 404,
          message:"User already exists"
        }
      }
      const user = await this.prisma.user.create({
        data:createPersonDto
      });
    }
    catch(err){

    }
    
    
    return user
    
  }

  findAll() {
    
    return `This action returns all person`;
  }

  findOne(id: number) {
    return `This action returns a #${id} person`;
  }

  update(id: number, updatePersonDto: UpdatePersonDto) {
    return `This action updates a #${id} person`;
  }

  remove(id: number) {
    return `This action removes a #${id} person`;
  }
}
