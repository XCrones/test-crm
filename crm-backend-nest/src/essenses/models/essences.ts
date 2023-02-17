export interface IAuth {
  base_domain: string;
  access_token: string;
}

interface IReqDefault {
  _links: {
    self: {
      href: string;
    };
  };
}

interface IEssenceItem {
  id: number;
  request_id: string;
  is_deleted?: boolean;
  is_unsorted?: boolean;
  _links: {
    self: {
      href: string;
    };
  };
}

export interface IContacts extends IReqDefault {
  _embedded: {
    contacts: IEssenceItem[];
  };
}

export interface ICompanies extends IReqDefault {
  _embedded: {
    companies: IEssenceItem[];
  };
}

export interface ILeads extends IReqDefault {
  _embedded: {
    leads: IEssenceItem[];
  };
}
