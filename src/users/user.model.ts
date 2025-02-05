import { Column, DataType, Model, Table } from "sequelize-typescript";

interface IUserModal
{
    phoneNumber : string
    Email : string
}

@Table({tableName: "users", timestamps: false})
export class UserModel extends Model<UserModel, IUserModal>
{
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number
    @Column({type: DataType.TEXT, unique: true, allowNull: false})
    phoneNumber : string
    @Column({type: DataType.TEXT, allowNull: false, unique: true})
    Email : string
    
}

