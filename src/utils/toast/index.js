import {toast} from "material-react-toastify";
export const notify = (message,mode) => {
    if(mode==="error") toast.error(message, {
        position: "bottom-right",
        // autoClose: computeTimeToast(message),
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
    });
    else if (mode==="success") toast.success(message, {
        position: "bottom-right",
        // autoClose: computeTimeToast(message),
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
    });

}