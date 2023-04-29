// 검색 react-hook-form에 사용
export interface ISearchField {
  search: string;
}

// 검색할 카테고리 타입
export type TSearchCategory = "educations" | "posts";
export type TSearchCategoryKor = "교육 정보 검색" | "자유게시판 검색";

// searchSlice에 사용
export interface ISearchState {
  isFocus: boolean;
  category: TSearchCategory;
  searchKeyword: string;
  keywords: string[];
}

// searchSlice에 사용
export interface ISearchCategory {
  searchCategory: TSearchCategory;
}

// searchSlice에 사용
export interface ISearchKeyword {
  searchKeyword: string;
}

// searchSlice에 사용
export interface IKeywordIndex {
  index: number;
}
