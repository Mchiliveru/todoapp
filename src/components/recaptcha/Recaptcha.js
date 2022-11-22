import { useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { doc, deleteDoc } from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import { db } from "../../firebase";
import { updateCaptchaModal } from "../../redux/common.slice";

const Recaptcha = () => {
  const { selectedItemId } = useSelector((state) => state.commonState);
  const dispatch = useDispatch();
  const captchaRef = useRef(null);

  const handleOnchange = (value) => {
    if (value) {
      setTimeout(() => {
        captchaRef.current.reset();
        dispatch(updateCaptchaModal(false));
        deleteDoc(doc(db, "todo", selectedItemId));
      }, 1000);
    }
  };

  return (
    <ReCAPTCHA
      sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
      onChange={handleOnchange}
      ref={captchaRef}
    />
  );
};

export default Recaptcha;
