/// <reference types="@types/google.maps" />
import { User } from "./User";
import { Company } from "./Company";
import { CustomMap } from "./CustomMap";


const user = new User()
const company = new Company()
const newMap = new CustomMap('map')

newMap.addMarker(user);
newMap.addMarker(company);
