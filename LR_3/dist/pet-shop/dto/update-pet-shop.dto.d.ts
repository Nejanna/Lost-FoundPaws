import { Pets, Users } from './create-pet-shop.dto';
declare const UpdatePets_base: import("@nestjs/mapped-types").MappedType<Partial<Pets>>;
export declare class UpdatePets extends UpdatePets_base {
    Pet_id: string;
    Pet_Name: string;
    Pet_Sex: string;
    Pet_Age: string;
    Pet_Images: string;
    Pet_Documents: string;
    Pet_Species: string;
    Pet_Breed: string;
}
declare const UpdateUsers_base: import("@nestjs/mapped-types").MappedType<Partial<Users>>;
export declare class UpdateUsers extends UpdateUsers_base {
    User_id: string;
    User_Username: string;
    User_Email: string;
    User_Password: string;
    User_Sex: string;
}
export {};
