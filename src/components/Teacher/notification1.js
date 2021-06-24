// import Swal from 'sweetalert2';

import '../style.css'
import { FaTrashAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from "@material-ui/core/styles";



const useStyles = makeStyles(theme => ({
  labelRoot: {
    right: 0
  },
  shrink: {
    transformOrigin: "top right"
  }
}));

const Notification1 = () => {
    const classes = useStyles();
    return (
        <div className="app-com">
          <div className="turkiz">התראות</div>
        <TextField
            label='חפש לפי תלמיד'
            margin="dense"
            variant="standard"
            style={{ direction: "rtl" }}
            type =  'search'
            InputLabelProps={{
                classes: { root: classes.labelRoot, shrink: classes.shrink }
              }}
          />
        </div>
    );
}
export default Notification1
