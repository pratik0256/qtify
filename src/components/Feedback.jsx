import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import style from "./feedback.module.css";
import PropTypes from "prop-types";
import { useState } from "react";
import ButtonUI from "./ButtonUI";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));
const Feedback = ({ isFeedbackModalOpen, handleClose }) => {
  const [fullName, setFullName] = useState("");
  const [emailId, setEmailId] = useState("");
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    handleClose();
    setFullName('');
    setEmailId('');
    setSubject('');
    setDescription('');

  };
  return (
    <>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={isFeedbackModalOpen}
        className={style.modalWrapper}
      >
        <DialogTitle sx={{ mx: "auto", p: 2 ,fontWeight:"bold"}} id="customized-dialog-title">
          Feedback
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={(theme) => ({
            position: "absolute",
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent >
          <form onSubmit={handleSubmit} className={style.feedbackForm}>
            <input
              type="text"
              required
              className={style.fullName}
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Full name"
            />
            <input
              type="email"
              required
              className={style.emailId}
              value={emailId}
              onChange={(e) => setEmailId(e.target.value)}
              placeholder="Email ID"
            />
            <input
              type="text"
              required
              className={style.subject}
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Subject"
            />
            <textarea
              type="text"
              required
              className={style.description}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Description"
            />
            <ButtonUI className={style.feedbackBtn} buttonName={"Submit Feedback"} />
          </form>
        </DialogContent>
      </BootstrapDialog>
    </>
  );
};
Feedback.propTypes = {
  isFeedbackModalOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};
export default Feedback;
