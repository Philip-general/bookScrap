export type mutationResult = {
  ok: Boolean;
  error?: string;
};

export interface EmailLoginData {
  email: string;
  password: string;
}

export type bookSearchForm = {
  bookName: string;
};

export type ScrapbookData  = {
  book :{
    title: string;
    authors: [string];
    thumbnail: string;
    contents: string;
    publisher: string;
    url: string;
  },
  star: boolean
  countScraps: number;
  
}
export type bookData = {
  title: string;
  authors: [string];
  thumbnail: string;
  contents: string;
  publisher: string;
  url: string;
};

export type signUpInfo ={
  password:string,
  repassword:string,
  email:string,
}
