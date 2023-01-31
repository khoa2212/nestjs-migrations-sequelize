import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class User extends Model<User> {
  @Column
  firstName: string;

  @Column
  lastName: string;

  @Column({ defaultValue: true })
  isActive: boolean;
}

// User.init(
//   {
//     firstName: { type: DataType.STRING },
//     lastName: { type: DataType.STRING },
//     isActive: { type: DataType.BOOLEAN },
//   },
//   { timestamps: true },
// );
