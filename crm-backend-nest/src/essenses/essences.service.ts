import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateEssenceDto } from './dto/create-essence.dto';
import { HttpService } from '@nestjs/axios';
import { catchError, firstValueFrom } from 'rxjs';
import { AxiosError } from 'axios';
import { IAuth, ICompanies, IContacts, ILeads } from './models/essences';

@Injectable()
export class EssensesService {
  constructor(private readonly httpService: HttpService) {}

  private authMeta = {
    base_domain: '',
    access_token: '',
    isAuth: false,
  };

  private async auth() {
    try {
      if (!this.authMeta.isAuth) {
        const { data } = await firstValueFrom(
          this.httpService
            .get<IAuth>(process.env.AUTH_URL, {
              headers: {
                'X-Client-Id': process.env.AUTH_ID,
              },
            })
            .pipe(
              catchError((error: AxiosError) => {
                throw error;
              }),
            ),
        );

        if (data) {
          this.authMeta.access_token = data.access_token;
          this.authMeta.base_domain = data.base_domain;
          this.authMeta.isAuth = true;
        }
      }

      return this.authMeta.isAuth;
    } catch (error) {
      const err = error as AxiosError;
      throw err.message;
    }
  }

  private async postData<T>(endPoint: string) {
    const emptyResData = [{}];

    try {
      const isAuth = await this.auth();

      if (isAuth) {
        const { data } = await firstValueFrom(
          this.httpService
            .post<T>(
              `https://${this.authMeta.base_domain}/api/v4/${endPoint}`,
              emptyResData,
              {
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: `Bearer ${this.authMeta.access_token}`,
                },
              },
            )
            .pipe(
              catchError((error: AxiosError) => {
                throw error;
              }),
            ),
        );
        return data;
      }

      throw 'err';
    } catch (error) {
      throw error as AxiosError;
    }
  }

  async createContact(createEssenseDto: CreateEssenceDto) {
    try {
      const data = await this.postData<IContacts>(
        String(createEssenseDto.essence),
      );
      return {
        id: data._embedded.contacts[0].id,
      };
    } catch (error) {
      const err = error as AxiosError;
      throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async createLead(createEssenseDto: CreateEssenceDto) {
    try {
      const data = await this.postData<ILeads>(
        String(createEssenseDto.essence),
      );
      return {
        id: data._embedded.leads[0].id,
      };
    } catch (error) {
      const err = error as AxiosError;
      throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async createCompany(createEssenseDto: CreateEssenceDto) {
    try {
      const data = await this.postData<ICompanies>(
        String(createEssenseDto.essence),
      );
      return {
        id: data._embedded.companies[0].id,
      };
    } catch (error) {
      const err = error as AxiosError;
      throw new HttpException(err.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
