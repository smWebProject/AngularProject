import { User } from "./User.model";

export class Gift{
    public code :string="";
    public name :string="";
    public donator :string="";
    public price :number=0;
    public users :User[]=[];
}