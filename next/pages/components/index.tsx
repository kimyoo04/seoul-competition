import Alert from "@components/Alert";
import { alertActions } from "@features/alert/alertSlice";
import MainLayout from "@layouts/MainLayout";
import { useAppDispatch, useAppSelector } from "@toolkit/hook";

export default function BoardPage() {
  const dispatch = useAppDispatch();
  const isAlert = useAppSelector((state) => state.alert.isAlert);
  return (
    <MainLayout>
      <div className="flex-wrap w-screen h-screen gap-4 row-start">
        <div className="gap-4 col-center">
          <h1 className="font-bold text-h3">buttons</h1>
          <button className="">nomal_button</button>
          <button className="border_btn">border_btn</button>
          <button className="accent_btn_fill">accent_btn_fill</button>
          <button className="accent_btn_border">accent_btn_border</button>
          <button className="unaccent_btn_fill">unaccent_btn_fill</button>
          <button className="unaccent_btn_border">unaccent_btn_border</button>
          <button className="round_btn">round_btn</button>
        </div>

        <div className="gap-4 col-center">
          <h1 className="font-bold text-h3">inputs</h1>
          <input className="textfield" placeholder="텍스트를 입력해주세요." />
        </div>

        <div className="gap-4 col-center">
          <h1 className="font-bold text-h3">alert</h1>
          {isAlert && <Alert />}
          <button
            onClick={() =>
              dispatch(
                alertActions.alert({
                  alertType: "Success",
                  content:
                    "안녕하세요. 여기는 alert 컴포넌트 실험입니다. 더 길게 써보겠습니다.",
                })
              )
            }
          >
            Success 보기
          </button>
          <button
            onClick={() =>
              dispatch(
                alertActions.alert({
                  alertType: "Warning",
                  content:
                    "안녕하세요. 여기는 alert 컴포넌트 실험입니다. 더 길게 써보겠습니다.",
                })
              )
            }
          >
            Warning 보기
          </button>
          <button
            onClick={() =>
              dispatch(
                alertActions.alert({
                  alertType: "Danger",
                  content:
                    "안녕하세요. 여기는 alert 컴포넌트 실험입니다. 더 길게 써보겠습니다.",
                })
              )
            }
          >
            Danger 보기
          </button>
          <button
            onClick={() =>
              dispatch(
                alertActions.alert({
                  alertType: "Infomation",
                  content:
                    "안녕하세요. 여기는 alert 컴포넌트 실험입니다. 더 길게 써보겠습니다.",
                })
              )
            }
          >
            Infomation 보기
          </button>
        </div>
      </div>
    </MainLayout>
  );
}
