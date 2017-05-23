import * as mongoose from 'mongoose';

export interface ICar extends mongoose.Document {
  id:number;
  name:string;
  make:'Chevy'|'Dodge'|'BMW'|'Ford'|'Tesla'|'Mini Cooper';
  Price:number;
  model:'Sedan'|'Coupe'|'Truck'|'SUV';

}

let carSchema = new mongoose.Schema({
  id:{
    type:Number,
    minLength:2,
    maxLength:5

  },
  name:{
    type:String,
    required:true,
    minLength:3
  },
  make:{
    enum:['Chevy','Dodge','BMW','Ford','Tesla','Mini Cooper'],
    type:String,
    required:true,
    minLength:3
  },
  Price:{
    type:Number,
    minLength:4,
    maxLength:8,
    required:true
  },
  model:{
    enum:['Sedan','Coupe','Truck','SUV'],
    type:String,
    required:true,
    minLength:3,
    maxLength:5
  }
});
export default mongoose.model<ICar>('Car',carSchema);
