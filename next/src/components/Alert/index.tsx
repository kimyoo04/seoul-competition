import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { useAppDispatch, useAppSelector } from "@toolkit/hook";
import { alertActions } from "@features/alert/alertSlice";
import Overlay from "./Overlay";
import Portal from "@components/Portal";
import classNames from "classnames";

//--------------------------------------------------------------------------------
// isAlert - 알림 활성 / 알림 비활성
// alertType - 알림의 종류, 제목, 아이콘, 색깔을 설정
// content - 알림의 내용을 설정
//--------------------------------------------------------------------------------

export const AlertComponent = () => {
  const dispatch = useAppDispatch();
  const { isAlert, alertType, content } = useAppSelector(
    (state) => state.alert
  );
  const [alertIcon, setAlertIcon] = useState(<div></div>);

  // message.alertType 별 분기 처리 및 컴포넌트 할당
  useEffect(() => {
    switch (alertType) {
      case "Success":
        setAlertIcon(
          <i
            className={`text-3xl ri-checkbox-circle-fill ${alertTextColor}`}
          ></i>
        );
        break;
      case "Warning":
        setAlertIcon(
          <i className={`text-3xl ri-error-warning-fill ${alertTextColor}`}></i>
        );
        break;
      case "Danger":
        setAlertIcon(
          <i className={`text-3xl ri-close-circle-fill ${alertTextColor}`}></i>
        );
        break;
      case "Infomation":
        setAlertIcon(
          <i className={`text-3xl ri-information-fill ${alertTextColor}`}></i>
        );
        break;
      default:
        setAlertIcon(<i className="text-3xl">?</i>);
    }
  }, [alertType]);

  const alertShadowColor = classNames(
    { "shadow-alert_success": alertType == "Success" },
    { "shadow-alert_warning": alertType == "Warning" },
    { "shadow-alert_danger": alertType == "Danger" },
    { "shadow-alert_info": alertType == "Infomation" },
    { "": alertType == "" }
  );

  const alertTextColor = classNames(
    { "text-alert_success": alertType == "Success" },
    { "text-alert_warning": alertType == "Warning" },
    { "text-alert_danger": alertType == "Danger" },
    { "text-alert_info": alertType == "Infomation" },
    { "": alertType == "" }
  );

  return (
    <div className="relative w-screen h-screen">
      {isAlert ? (
        <>
          {/* 오버레이 영역 */}
          <Overlay />

          {/* 알람 영역 */}
          <div className="absolute px-4 transform -translate-y-1/2 top-1/2 md:-translate-x-1/2 md:left-1/2">
            <div className="max-w-xl ">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className={`gap-4 px-4 py-3 bg-white shadow-md row-center rounded-2xl ${alertShadowColor}`}
              >
                <div className="row-center">{alertIcon}</div>

                <div className="col-start">
                  <span className={`text-xl font-semibold ${alertTextColor}`}>
                    {alertType}
                  </span>
                  <span className="text-sm">{content}</span>
                </div>
                <div className="">
                  <i
                    className="text-2xl ri-close-fill"
                    onClick={() => dispatch(alertActions.alertClose())}
                  ></i>
                </div>
              </motion.div>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
};

// HOC 적용
export default Portal(AlertComponent);
