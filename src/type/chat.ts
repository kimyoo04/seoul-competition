export interface IChatState {
  isChat: boolean;
  isAlert: boolean;
  alertMsg: TMessage;
  messages: IMessage[];
}

export interface IMessage {
  id: number | "client";
  question?: TQuestion;
  answer?: TAnswer;
  message?: TMessage;
}

export interface ISendForm {
  question: TQuestion;
}
export interface IChatAlert {
  alertMsg: TMessage;
}

export type TQuestion = string;
export type TAnswer = string;
export type TMessage = string;
