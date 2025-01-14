import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import i18n from "@/i18n";

import { useContext } from "react";

import GotoStellarium from "@/components/GotoStellarium";
import GotoLists from "@/components/GotoLists";
import GotoUserLists from "@/components/GotoUserLists";
import StatusBar from "@/components/shared/StatusBar";
import CalibrationDwarf from "@/components/shared/CalibrationDwarf";
import { useSetupConnection } from "@/hooks/useSetupConnection";
import { useLoadIntialValues } from "@/hooks/useLoadIntialValues";
import { ConnectionContext } from "@/stores/ConnectionContext";

import ResizablePIP from "@/components/ResizablePIP";
import DwarfCameras from "@/components/DwarfCameras";

export default function Goto() {
  let connectionCtx = useContext(ConnectionContext);
  useSetupConnection();
  useLoadIntialValues();

  const { t } = useTranslation();
  // eslint-disable-next-line no-unused-vars
  const [selectedLanguage, setSelectedLanguage] = useState<string>("en");

  useEffect(() => {
    const storedLanguage = localStorage.getItem("language");
    if (storedLanguage) {
      setSelectedLanguage(storedLanguage);
      i18n.changeLanguage(storedLanguage);
    }
  }, []);

  return (
    <section className="daily-horp d-inline-block w-100">
      <div className="container">
        <br />
        <br />
        <br />
        <br />

        <StatusBar />
        <hr></hr>
        <CalibrationDwarf />
        <hr />
        <ul className=" nav nav-tabs mb-2">
          <li
            className={`nav-item nav-link ${
              connectionCtx.gotoType === "lists" ? "active" : ""
            }`}
            onClick={() => connectionCtx.setGotoType("lists")}
          >
            {t("pObjectsList")}
          </li>
          <li
            className={`nav-item nav-link ${
              connectionCtx.gotoType === "userLists" ? "active" : ""
            }`}
            onClick={() => connectionCtx.setGotoType("userLists")}
          >
            {t("pObjectsCustomsList")}
          </li>
          <li
            className={`nav-item nav-link ${
              connectionCtx.gotoType === "stellarium" ? "active" : ""
            }`}
            onClick={() => connectionCtx.setGotoType("stellarium")}
          >
            Stellarium
          </li>
        </ul>
        <hr />
        {connectionCtx.connectionStatus && connectionCtx.PiPView && (
          <div className="float-right-align">
            <ResizablePIP
              width={320}
              height={180}
              minConstraints={[320, 180]}
              maxConstraints={[1280, 720]}
            >
              <DwarfCameras
                showWideangle={false}
                useRawPreviewURL={false}
                showControls={false}
              />
            </ResizablePIP>
          </div>
        )}
        {connectionCtx.gotoType === "lists" && <GotoLists />}
        {connectionCtx.gotoType === "stellarium" && <GotoStellarium />}
        {connectionCtx.gotoType === "userLists" && <GotoUserLists />}
        <br />
        <br />
        <br />
        <br />
      </div>
    </section>
  );
}
