import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './user.model';

@Module({
  imports: [SequelizeModule.forFeature([User])],
  // Exportarlo para usarlo fuera de este módulo
  exports: [SequelizeModule],
})
export class UserModule {}
