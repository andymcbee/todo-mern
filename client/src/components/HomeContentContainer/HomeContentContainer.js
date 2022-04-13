import { CurrentToDoList } from "../CurrentToDoList/CurrentToDoList";
import { SidebarToDoLists } from "../SidebarToDoLists/SidebarToDoLists";
import "./styles.css";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import { Box } from "@mui/material";
import { Modal } from "@mui/material";

import React from "react";

export const HomeContentContainer = ({
  data,
  handleSelectCurrentList,
  currentToDoList,
  handleListItemStatusChange,
}) => {
  const style = {
    position: "absolute",
    top: "25%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  const handleOpen = () => {};
  const handleClose = () => {};

  return (
    <div className="homeContentContainer">
      <div className="homeSidebar">
        <SidebarToDoLists
          data={data}
          handleSelectCurrentList={handleSelectCurrentList}
        />
      </div>
      <div className="homeMainContent">
        <CurrentToDoList
          currentToDoList={currentToDoList}
          handleListItemStatusChange={handleListItemStatusChange}
        />
      </div>
      <div className="homeContentSpacer"></div>

      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={false}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};
