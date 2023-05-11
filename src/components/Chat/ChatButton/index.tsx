import { chatActions } from "@features/chat/chatSlice";
import { useAppDispatch, useAppSelector } from "@toolkit/hook";
import { motion } from "framer-motion";

// 채팅창 토글 버튼
export default function ChatButton() {
  const dispatch = useAppDispatch();
  const isChat = useAppSelector((state) => state.chat.isChat);
  const chatBtnBg = isChat
    ? "bg-main_color shadow-main_color/50"
    : "bg-white shadow-gray-400";
  const chatBtnDot = isChat ? "bg-font_white" : "bg-font_black";

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{
        scale: 0.9,
        rotate: -10,
      }}
      className={`row-center fixed bottom-4 right-4 h-8  w-8 gap-0.5 rounded-2xl rounded-br-none shadow-sm  ${chatBtnBg}`}
      onClick={() => dispatch(chatActions.toggleChat())}
    >
      {/* 점 3개 표현 */}
      <div className={`h-1 w-1 rounded-full ${chatBtnDot}`}></div>
      <div className={`h-1 w-1 rounded-full ${chatBtnDot}`}></div>
      <div className={`h-1 w-1 rounded-full ${chatBtnDot}`}></div>
    </motion.button>
  );
}
