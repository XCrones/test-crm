import { IsNotEmpty } from 'class-validator';

export class CreateEssenceDto {
  @IsNotEmpty()
  readonly essence: {
    type: string;
  };
}
