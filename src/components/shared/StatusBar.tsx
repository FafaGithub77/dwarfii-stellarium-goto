import { useContext } from "react";
import { ConnectionContext } from "@/stores/ConnectionContext";
import { IRCut } from "dwarfii_api";
import { getExposureNameByIndex, getGainNameByIndex } from "@/lib/data_utils";

export default function StatusBar() {
  let connectionCtx = useContext(ConnectionContext);

  let connection =
    connectionCtx.connectionStatus && !connectionCtx.connectionStatusSlave ? (
      <i className="bi bi-check-circle" style={{ color: "green" }}></i>
    ) : connectionCtx.connectionStatus &&
      connectionCtx.connectionStatusSlave ? (
      <i className="bi bi-check-circle" style={{ color: "orange" }}></i>
    ) : (
      <i className="bi bi-x-circle" style={{ color: "red" }}></i>
    );

  let connectionStellarium = connectionCtx.connectionStatusStellarium ? (
    <i className="bi bi-check-circle" style={{ color: "green" }}></i>
  ) : (
    <i className="bi bi-x-circle" style={{ color: "red" }}></i>
  );

  return (
    <div className="mb-2">
      {/* {JSON.stringify(connectionCtx.astroSettings, null, 2)}
      <br />
      {JSON.stringify(connectionCtx.imagingSession, null, 2)}
      <br /> */}
      <span className="me-3">Dwarf II: {connection}</span>
      <span className="me-3">Stellarium: {connectionStellarium}</span>
      {connectionCtx.astroSettings.gain !== undefined && (
        <span className="me-3">
          Gain: {getGainNameByIndex(connectionCtx.astroSettings.gain)}
        </span>
      )}
      {connectionCtx.astroSettings.exposure !== undefined && (
        <span className="me-3">
          Exp: {getExposureNameByIndex(connectionCtx.astroSettings.exposure)}
        </span>
      )}
      {connectionCtx.astroSettings.IR !== undefined && (
        <span className="me-3">
          IR: {connectionCtx.astroSettings.IR === IRCut ? "Cut" : "Pass"}
        </span>
      )}
      {connectionCtx.astroSettings.binning !== undefined && (
        <span className="me-3">
          Bin: {connectionCtx.astroSettings.binning == 0 ? "1x1" : "2x2"}
        </span>
      )}
      {connectionCtx.astroSettings.count !== undefined && (
        <span className="me-3">Count: {connectionCtx.astroSettings.count}</span>
      )}
      {connectionCtx.astroSettings.quality !== undefined && (
        <span className="me-3">
          Quality: {connectionCtx.astroSettings.quality}
        </span>
      )}
      {Object.keys(connectionCtx.imagingSession).length > 0 && (
        <>
          <span className="me-3">
            Taken: {connectionCtx.imagingSession.imagesTaken}
          </span>
          <span className="me-3">
            Stacked: {connectionCtx.imagingSession.imagesStacked}
          </span>
          <span className="me-3">
            Time: {connectionCtx.imagingSession.sessionElaspsedTime}
          </span>
        </>
      )}
    </div>
  );
}
