export class User{
    id!:string;
    name!:string;
    address!:string;
    isAdmin!:boolean;
    userId!:number;
    username!:string;
    password!:string;
    fName!:string;
    mName!:string;
    lName!:string;
    email!:string;
    phone!:number;
    parentId!:number;
    authority!:string;
    roleId!:number;
    token!:string;
    city!:string;
    street!:string;
    enabled!:boolean;
    authorities!:[Roles];
  }

  class Roles{
      authority!:string
  }

