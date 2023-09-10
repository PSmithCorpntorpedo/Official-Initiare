import ConfirmUploadJSX from "./jsx/ConfirmUpload.jsx";
import { FileProvider } from "./jsx/UploadStages/UploadContext/FileProvider.js";
import { CategoryProvider } from "./jsx/UploadStages/UploadContext/CategoryProvider.js";
import { SubCategoryProvider } from "./jsx/UploadStages/UploadContext/SubCategoryProvider.js";
function ConfirmUpload() {
  return (
    <div>
      <FileProvider>
        <CategoryProvider>
          <SubCategoryProvider>
            <ConfirmUploadJSX />
          </SubCategoryProvider>
        </CategoryProvider>
      </FileProvider>
    </div>
  );
}

export default ConfirmUpload;
