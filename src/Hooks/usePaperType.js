import { useContext } from "react";
import PaperTypeContext from "../Pages/jsx/UploadStages/UploadContext/PaperTypeProvider";


const usePaperType = () => {
    return useContext(PaperTypeContext);
}

export default usePaperType;