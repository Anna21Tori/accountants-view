export type AccountantType = {
    cell: string; //phone number
    name: {
      first: string;
      last: string;
    };
    email: string;
    picture: { thumbnail: string; medium: string };
    login: {
      uuid: string;
    };
};

export type AccountantResponseType = {
    results: AccountantType[];
    info: {
      page: number;
      results: number;
    };
    isLoading: boolean,
    errors: ''
};