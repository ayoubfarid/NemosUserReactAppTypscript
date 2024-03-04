export class User {
    public prenom: string;
    public id?: string;
    public nom: string;
    public email: string;
    public dateCreation?: string;
    public status?: string;
    constructor() {
      this.prenom = "";
      this.nom = "";
      this.email = "";
    }
  }
  
export interface UserInfo {
    id?:number;
     prenom: string;
     nom: string;
     email: string;
     dateCreation?: string;
     status?: string;
  }
  