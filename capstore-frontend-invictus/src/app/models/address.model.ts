import { user } from './user.model';

export class address{
    addressId:number;
    addressLineOne:String;
    addressLineTwo:String;
    district:String
    state:String;
    landmark:String;
    deleted:boolean;
    user:user;
    
}