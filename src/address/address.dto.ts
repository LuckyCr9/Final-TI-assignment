import { IsString } from 'class-validator';

class CreateAddressDto {
  @IsString()
    public street!: string;
  @IsString()
    public city!: string;
  @IsString()
    public country!: string;
}

export default CreateAddressDto;

function IsEmail() {
    throw new Error('Function not implemented.');
}


function IsOptional() {
    throw new Error('Function not implemented.');
}


function IsEnum(Permissions: { new(): Permissions; prototype: Permissions; }, arg1: { each: boolean; }) {
    throw new Error('Function not implemented.');
}
