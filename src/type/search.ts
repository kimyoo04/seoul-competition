// 검색 react-hook-form에 사용
export interface ISearchField {
  search: string;
}

// 검색할 카테고리 타입
export type TSearchCategory = "educations" | "posts";

// searchSlice에 사용
export interface ISearchState {
  searchCategory: TSearchCategory;
  searchName: string;
}

// searchSlice에 사용
export interface ISearchCategory {
  searchCategory: TSearchCategory;
}

// searchSlice에 사용
export interface ISearchName {
  searchName: string;
}
