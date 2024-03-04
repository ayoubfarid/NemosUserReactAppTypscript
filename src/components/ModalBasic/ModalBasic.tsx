import { Modal } from "@mui/base";
import { Box } from "@mui/material";

interface ModalBasicProps{
    open:boolean;
    onClick:()=>void;
    body:any;
}
const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    height: 500,
    bgcolor: "background.paper",
    borderRadius: 4,
    boxShadow: 10,
    p: 4,
  };
export const ModalBasic:React.FC<ModalBasicProps> = ({open,onClick,body}:ModalBasicProps)=>{
    return(
    <div>
        <Modal
            open={open}
            onClose={onClick}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}  >
                {body}
        
            </Box>
        </Modal>
        </div>
    );
}