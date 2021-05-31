import * as fireorm from "fireorm";
import * as admin from "firebase-admin";
import {
  Collection,
  getRepository,
  ISubCollection,
  SubCollection,
} from "fireorm";
import "reflect-metadata";
import { Rol } from "./roles.enum";
import { firestore as Firestore } from "firebase-admin";

admin.initializeApp();

const firestore = admin.firestore();
fireorm.initialize(firestore);

class Product {
  id!: string;
  name!: string;
  category!: string;
  imageUrl!: string;
  price!: string;
  provider!: string;
  companyId!: string;
  description!: string;
  updateAt!: Firestore.Timestamp;
  createdAt!: Firestore.Timestamp;
}

class Users {
  id!: string;
  name!: string;
  mail!: string;
  role!: Rol;
  companyId!: string;
  updateAt!: Firestore.Timestamp;
  createdAt!: Firestore.Timestamp;
}

@Collection()
class Company {
  id!: string;
  logo!: string;
  name!: string;
  updateAt?: Firestore.Timestamp;
  createdAt?: Firestore.Timestamp;
  usersAllowed!: number;

  @SubCollection(Product)
  products?: ISubCollection<Product>;

  @SubCollection(Users)
  users?: ISubCollection<Users>;
}

const companiesRepository = getRepository(Company);

export { Company, Product, Users, companiesRepository };
