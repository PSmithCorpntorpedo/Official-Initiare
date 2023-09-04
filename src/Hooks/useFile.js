import { useContext } from "react";
import FileContext from "../Pages/jsx/UploadStages/FileContext/FileProvider";


const useAuth = () => {
    return useContext(FileContext);
}
//this is essentially a custom hook to use the AuthContext initialized in every single 
//children component by combining useContext with a global context
export default useAuth;