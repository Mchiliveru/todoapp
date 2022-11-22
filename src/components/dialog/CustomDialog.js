import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Typography
} from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCaptchaModal } from "../../redux/common.slice";
import Recaptcha from "../recaptcha/Recaptcha";

const CustomDialog = () => {
  const { isRequireCaptchaModal } = useSelector((state) => state.commonState);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(updateCaptchaModal(false));
  };

  return (
    <Dialog open={isRequireCaptchaModal}>
      <DialogTitle>Are you human?</DialogTitle>
      <Divider />
      <DialogContent>
        <Recaptcha />
        <Typography paragraph mt={2} fontWeight="bold">
          Please wait After clicking the recaptcha, popup will close after successfull deletion
        </Typography>
      </DialogContent>
      <Divider />
      <DialogActions>
        <Button autoFocus onClick={handleClose}>
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CustomDialog;
