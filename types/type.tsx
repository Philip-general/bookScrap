export type mutationResult {
  ok: Boolean;
  error?: string;
}

export interface EmailLoginData {
  email: string;
  password: string;
}

export type bookSearchForm = {
  bookName: string;
};

export type ScrapbookData = {
  title: string;
  authors: [string];
  thumbnail: string;
  contents: string;
  publisher: string;
  url: string;
  scrapbookId:number,
};

export type signUpInfo ={
  id:string,
  password:string,
  repassword:string,
  email:string,
}