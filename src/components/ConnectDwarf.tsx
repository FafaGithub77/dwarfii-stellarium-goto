import { useContext, useState } from "react";
import type { FormEvent } from "react";

import {
  wsURL,
  statusTelephotoCmd,
  statusWideangleCmd,
  cameraSettings,
  socketSend,
} from "@/lib/dwarfii_api";
import { ConnectionContext } from "@/stores/ConnectionContext";
import {
  saveConnectionStatusDB,
  saveInitialConnectionTimeDB,
  saveIPDwarfDB,
} from "@/db/db_utils";

export default function ConnectDwarf() {
  let connectionCtx = useContext(ConnectionContext);

  const [connecting, setConnecting] = useState(false);

  function checkConnection(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setConnecting(true);

    const formData = new FormData(e.currentTarget);
    const formIP = formData.get("ip");
    let IPDwarf = formIP?.toString();

    if (IPDwarf == undefined) {
      return;
    }
    setConnecting(true);
    connectionCtx.setIPDwarf(IPDwarf);
    saveIPDwarfDB(IPDwarf);

    const socket = new WebSocket(wsURL(IPDwarf));

    socket.addEventListener("open", () => {
      console.log("start cameraSettings...");
      let options = cameraSettings();
      socketSend(socket, options);
    });

    // close socket is request takes too long
    let closeSocketTimer = setTimeout(() => {
      setConnecting(false);
      connectionCtx.setConnectionStatus(false);
      saveConnectionStatusDB(false);
      socket.close();
    }, 3000);

    socket.addEventListener("message", (event) => {
      clearTimeout(closeSocketTimer);
      setConnecting(false);

      let message = JSON.parse(event.data);
      if (
        message.interface === statusTelephotoCmd ||
        message.interface === statusWideangleCmd
      ) {
        console.log("cameraSettings:", message);
        connectionCtx.setConnectionStatus(true);
        connectionCtx.setInitialConnectionTime(Date.now());
        saveConnectionStatusDB(true);
        saveInitialConnectionTimeDB();
      } else {
        console.log(message);
      }
    });

    socket.addEventListener("error", (error) => {
      console.log("cameraSettings error:", error);
      clearTimeout(closeSocketTimer);
      setConnecting(false);
      connectionCtx.setConnectionStatus(false);
      saveConnectionStatusDB(false);
    });
  }

  function renderConnectionStatus() {
    if (connecting) {
      return <span>Connecting...</span>;
    }
    if (connectionCtx.connectionStatus === undefined) {
      return <></>;
    }
    if (connectionCtx.connectionStatus === false) {
      return <span>Connection failed.</span>;
    }

    return <span>Connection successful.</span>;
  }

  return (
    <div>
      <h2>Connect to Dwarf II</h2>

      <p>
        In order for this site to connect to the Dwarf II, both the Dwarf II and
        the website must use the same wifi network.
      </p>

      <ol>
        <li className="mb-2">
          Use the Dwarf II mobile app to connect to the telescope. You can use
          the Dwarf wifi or set the Dwarf II to STA mode and use your normal
          wifi network.
        </li>
        <li className="mb-2">
          Visit this site on a device that is connected to the same wifi network
          as the Dwarf II.
        </li>
        <li className="mb-2">
          Enter in IP for the Dwarf II. If you are using Dwarf wifi, the IP is
          192.168.88.1. If you are using STA mode, use the IP for your wifi
          network.
        </li>
        <li className="mb-2">
          Click Connect. This site will try to connect to Dwarf II.
        </li>
        <form onSubmit={checkConnection} className="mb-3">
          <div className="row mb-3">
            <div className="col-sm-1">
              <label htmlFor="ip" className="form-label">
                IP
              </label>
            </div>
            <div className="col-sm-11">
              <input
                className="form-control"
                id="ip"
                name="ip"
                placeholder="127.00.00.00"
                required
                defaultValue={connectionCtx.IPDwarf}
              />
            </div>
          </div>
          <button type="submit" className="btn btn-primary me-3">
            Connect
          </button>{" "}
          {renderConnectionStatus()}
        </form>
        <li className="mb-2">
          Use the Dwarf II mobile app from Dwarf Labs to focus the scope,
          calibrate the goto, and set gain, exposure, and IR.
        </li>
      </ol>
    </div>
  );
}