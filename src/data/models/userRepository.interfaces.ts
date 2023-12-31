import TeamEntity from "../../domain/entities/Team";
import UserEntity from "../../domain/entities/User"
import { ApiFilter } from "../../domain/interfaces/interfaces"

export interface UserRepository{

    create(user:UserEntity):Promise<UserEntity>,
    deleteOne(uid:string):Promise<string>,
    update(uid:string,data:UserEntity):Promise<UserEntity>
    findByFilter(filter:ApiFilter):Promise<UserEntity | Error>
    updateTeam(data:Partial<UserEntity>,uid:string):Promise<UserEntity | Error>;
}