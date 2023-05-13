export interface IChatState {
  isChat: boolean;
  isAlert: boolean;
  alertMsg: TAlertMsg;
  messages: IMessage[];
}

export interface IMessage {
  id: number | "client";
  question?: TQuestion;
  answer?: TAnswer;
}

export interface ISendForm {
  question: TQuestion;
}
export interface IChatAlert {
  alertMsg: TAlertMsg;
}

export type TQuestion = string;
export type TAnswer = string;
export type TAlertMsg = string;
