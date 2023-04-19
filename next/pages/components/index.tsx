import MainLayout from "@layouts/MainLayout";

export default function BoardPage() {
  return (
    <MainLayout>
      <div className="w-screen h-screen gap-4 row-start">
        <div className="gap-4 col-center">
          <h1 className="text-h2">buttons</h1>
          <button className="">nomal_button</button>
          <button className="border_btn">border_btn</button>
          <button className="accent_btn_fill">accent_btn_fill</button>
          <button className="accent_btn_border">accent_btn_border</button>
          <button className="unaccent_btn_fill">unaccent_btn_fill</button>
          <button className="unaccent_btn_border">unaccent_btn_border</button>
          <button className="round_btn">round_btn</button>
        </div>

        <div className="gap-4 col-center">
          <h1 className="text-h2">inputs</h1>
          <input className="textfield" placeholder="텍스트를 입력해주세요." />
        </div>
      </div>
    </MainLayout>
  );
}
