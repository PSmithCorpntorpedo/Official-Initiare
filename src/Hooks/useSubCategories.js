import { useContext } from "react";
import SubCategoryContext from "../Pages/jsx/UploadStages/UploadContext/SubCategoryProvider";


const useSubCategories = () => {
    return useContext(SubCategoryContext);
}

export default useSubCategories;