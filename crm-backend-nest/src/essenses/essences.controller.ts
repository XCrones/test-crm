import {
  Body,
  Controller,
  Header,
  HttpCode,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { EssensesService } from './essences.service';
import { CreateEssenceDto } from './dto/create-essence.dto';

@Controller('essences')
export class EssensesController {
  constructor(private readonly essencesService: EssensesService) {}

  @Post('contacts')
  @HttpCode(HttpStatus.CREATED)
  @Header('Content-type', 'application/json')
  createContact(@Body() createEssenceDto: CreateEssenceDto) {
    return this.essencesService.createContact(createEssenceDto);
  }

  @Post('leads')
  @HttpCode(HttpStatus.CREATED)
  @Header('Content-type', 'application/json')
  createLead(@Body() createEssenceDto: CreateEssenceDto) {
    return this.essencesService.createLead(createEssenceDto);
  }

  @Post('companies')
  @HttpCode(HttpStatus.CREATED)
  @Header('Content-type', 'application/json')
  createCompany(@Body() createEssenceDto: CreateEssenceDto) {
    return this.essencesService.createCompany(createEssenceDto);
  }
}
