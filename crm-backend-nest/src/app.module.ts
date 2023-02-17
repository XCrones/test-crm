import { Module } from '@nestjs/common';
import { EssensesModule } from './essenses/essences.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [EssensesModule, ConfigModule.forRoot()],
})
export class AppModule {}
