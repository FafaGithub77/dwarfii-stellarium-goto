import { Button, ButtonGroup } from "@mui/material";
import React, { useState, useEffect } from "react";
import Grid2 from "@mui/material/Unstable_Grid2";
import { useApplication } from "@/components/witmotion/ApplicationProvider";
import { ArraySensorDataInterface } from "@/lib/witmotion/Interfaces";
import { SwitchSelector } from "@/components/witmotion/Switch";
import { Graphs } from "@/components/witmotion/Graphs";
import { dataFlowRestriction } from "@/lib/witmotion/DataFlowRestriction";
import MenuSettings from "./MenuSettings";

export const Inner: React.FC = () => {
  const inputDataInit = {
    axc: { x: [], y: [], z: [] },
    vel: { x: [], y: [], z: [] },
    ang: { x: [], y: [], z: [] },
    counter: [0],
  };

  const { connect, disconnect } = useApplication();
  const [disabled, setDisabled] = useState<boolean>(true);
  const [inputData, setInputData] =
    useState<ArraySensorDataInterface>(inputDataInit);

  const buttonLogic: any = [
    ["error", "Disconnect"],
    ["success", "Connect"],
  ];

  useEffect(() => {
    return () => {
      disconnect();
    };
  }, [disconnect]);

  return (
    <>
      <Grid2 xs={6}>
        <ButtonGroup>
          <Button
            onClick={() => {
              if (disabled) {
                connect((data) => {
                  setInputData(dataFlowRestriction(inputData, data));
                  setDisabled(!disabled);
                });
              } else {
                disconnect();
                setDisabled(!disabled);
              }
            }}
            variant="contained"
            color={buttonLogic[Number(disabled)][0]}
          >
            {buttonLogic[Number(disabled)][1]}
          </Button>
          <MenuSettings dis={disabled} />
        </ButtonGroup>
      </Grid2>
      <Grid2 xs={6}>
        <SwitchSelector />
      </Grid2>
      <Grid2 xs={12}>{!disabled && <Graphs inputData={inputData} />}</Grid2>
    </>
  );
};