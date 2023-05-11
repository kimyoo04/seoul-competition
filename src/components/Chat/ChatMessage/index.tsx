import { IMessage } from "@type/chat";
import Image from "next/image";

export default function ChatMessage({ message }: { message: IMessage }) {
  const isChatbot = message.id !== "client"; // 챗봇인지 유저인지
  const messagePos = isChatbot ? "received-text" : "sent-text"; // 메세지 위치
  const messageBg = isChatbot ? "received-bg" : "sent-bg"; // 메세지 배경

  return (
    <div className={`${messagePos} px-2 py-1`}>
      {/* 챗봇의 프로필 이미지 */}
      {isChatbot && (
        <Image
          className="rounded-xl"
          width={36}
          height={36}
          src={"/images/chatbot.png"}
          alt={"chatbot"}
        />
      )}

      {/* 메시지 */}
      <div className={`chat-textbox ${messageBg}`}>
        <p className="text-sm">
          {isChatbot ? message.answer : message.question}
        </p>
      </div>
    </div>
  );
}
