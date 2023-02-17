import { Module } from '@nestjs/common';
import { EssensesController } from './essences.controller';
import { EssensesService } from './essences.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 1,
    }),
  ],
  controllers: [EssensesController],
  providers: [EssensesService],
})
export class EssensesModule {}
