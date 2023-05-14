import { chatActions } from "@features/chat/chatSlice";
import { useAppDispatch, useAppSelector } from "@toolkit/hook";

// 채팅창 토글 버튼
export default function ChatButton() {
  const dispatch = useAppDispatch();
  const isChat = useAppSelector((state) => state.chat.isChat);
  const chatBtnBg = isChat
    ? "bg-main_color shadow-main_color/50"
    : "bg-white shadow-gray-400";
  const chatBtnDot = isChat ? "bg-font_white" : "bg-main_color";

  return (
    <button
      className={`row-center fixed bottom-6 right-4 h-10  w-10 gap-0.5 rounded-full  rounded-br-none shadow-sm transition-all hover:scale-125 ${chatBtnBg}`}
      onClick={() => dispatch(chatActions.toggleChat())}
    >
      {/* 점 3개 표현 */}
      <div className={`h-1.5 w-1.5 rounded-full ${chatBtnDot}`}></div>
      <div className={`h-1.5 w-1.5 rounded-full ${chatBtnDot}`}></div>
      <div className={`h-1.5 w-1.5 rounded-full ${chatBtnDot}`}></div>
    </button>
  );
}
