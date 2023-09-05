import ConfirmUploadJSX from "./jsx/ConfirmUpload.jsx";
import { FileProvider } from "./jsx/UploadStages/UploadContext/FileProvider.js";
import { PCategoryProvider } from "./jsx/UploadStages/UploadContext/PrimaryCategoryProvider.js";
function ConfirmUpload() {
  return (
    <div>
      <FileProvider>
        <PCategoryProvider>
          <ConfirmUploadJSX />
        </PCategoryProvider>
      </FileProvider>
    </div>
  );
}

export default ConfirmUpload;
