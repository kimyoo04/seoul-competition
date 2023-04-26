export interface ISearchField {
  search: string;
}

export interface ISearchstate {
  isClicked: boolean;
  searchCategory: TSearchCategory;
}

export interface ISearchCategory {
  searchCategory: TSearchCategory;
}

export type TSearchCategory = "" | "educations" | "posts";
