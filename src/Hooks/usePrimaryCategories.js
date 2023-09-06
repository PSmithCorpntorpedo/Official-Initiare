import { useContext } from "react";
import PCategoryContext from "../Pages/jsx/UploadStages/UploadContext/PrimaryCategoryProvider";


const usePrimaryCategories = () => {
    return useContext(PCategoryContext);
}

export default usePrimaryCategories;