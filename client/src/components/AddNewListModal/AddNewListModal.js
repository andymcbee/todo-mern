import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./styles.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export const AddNewListModal = ({ showAddNewListModal, NewListData }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleAddNewList = () => {
    const newList = {
      listTitle: "New List",
      id: "s4fe4f23f3ss34",
      toDoItems: [],
    };

    //  console.log(newList);

    NewListData(newList);
  };

  return (
    <div>
      <button onClick={handleOpen}>Add New List</button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Add New To Do List
            </Typography>
            <input placeholder="List name" />
            <div>
              <button
                className="createNewListButton"
                onClick={() => {
                  handleAddNewList();
                }}
              >
                Create
              </button>
              <button
                className="createNewListButton"
                onClick={() => setOpen(false)}
              >
                Cancel
              </button>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};
