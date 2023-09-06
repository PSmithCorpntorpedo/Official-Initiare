import { useContext } from "react";
import FileContext from "../Pages/jsx/UploadStages/UploadContext/FileProvider";


const useFile = () => {
    return useContext(FileContext);
}
//this is essentially a custom hook to use the FileContext initialized in every single 
//children component by combining useContext with a global context
//also how tf did this code previously worked with useAuth as the exported hook lmao
export default useFile;