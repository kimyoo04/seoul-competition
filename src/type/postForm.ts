//게시글 업로드 폼
export interface IPostForm {
  nickname: string;
  password: string;
  title: string;
  content: string;
}

//   onSubmit: (post: {
//     nickname: string;
//     password: string;
//     title: string;
//     content: string;
//   }) => void;
//   initialValue: {
//     nickname?: string;
//     password?: string;
//     title?: string;
//     content?: string;
//   };
// }

// // 게시글 수정 폼
// export interface IUpdatePostForm {
//   id: number;
//   nickname: string;
//   password: string;
//   title: string;
//   content: string;
// }
