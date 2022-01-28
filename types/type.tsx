export interface EmailLoginData {
  email: string;
  password: string;
}

export type bookSearchForm = {
  bookName: string;
};

export type bookData = [
  {
    title: string;
    authors: [string];
    thumbnail: string;
  }
];
