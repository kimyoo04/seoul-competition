export interface IUserForm {
  gender: TGender;
  ages: TAges;
  location: TLocation | "";
  interest: TInterest | "";
  confirm: Tconfirm;
}

export interface IUserFormState {
  showModal: boolean;
}

export interface IAgesData {
  agesStr: TAgesStr;
  ages: TAges;
}

export type TGender = string;
export type TAgesStr =
  | "49세 이하"
  | "50 - 54세"
  | "55 - 59세"
  | "60 - 64세"
  | "65 - 69세"
  | "70세 이상";
export type TAges = "0-49" | "50-54" | "55-59" | "60-64" | "65-69" | "70-100";
export type TLocation = string;
export type TInterest = "취업" | "교육" | "취미" | "모임";
export type Tconfirm = boolean;
