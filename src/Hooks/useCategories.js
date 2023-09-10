import { useContext } from "react";
import CategoryContext from "../Pages/jsx/UploadStages/UploadContext/CategoryProvider";


const useCategories = () => {
    return useContext(CategoryContext);
}

export default useCategories;