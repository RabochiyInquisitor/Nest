import { Column, DataType, Model, Table } from "sequelize-typescript";

interface IUserModal
{
    name : string
    password : string
}

@Table({tableName: "users"})
export class UserModel extends Model<UserModel, IUserModal>
{
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number
    @Column({type: DataType.INTEGER, unique: true, allowNull: false})
    name : string
    @Column({type: DataType.INTEGER, allowNull: false})
    password : string
    @Column({type: DataType.INTEGER})
    rule : string | undefined
}

