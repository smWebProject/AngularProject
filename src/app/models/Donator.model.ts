import { Gift } from "./Gift.model";

export class Donator{
    public code :string="";
    public name :string="";
    public adress :string="";
    public phone :number=0;
    public gifts :Gift[]=[];
}