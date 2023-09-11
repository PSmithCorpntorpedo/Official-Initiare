import ConfirmUploadJSX from "./jsx/ConfirmUpload.jsx";
import { FileProvider } from "./jsx/UploadStages/UploadContext/FileProvider.js";
import { CategoryProvider } from "./jsx/UploadStages/UploadContext/CategoryProvider.js";
import { SubCategoryProvider } from "./jsx/UploadStages/UploadContext/SubCategoryProvider.js";
import { PaperTypeProvider } from "./jsx/UploadStages/UploadContext/PaperTypeProvider.js";
function ConfirmUpload() {
  return (
    <div>
      <FileProvider>
        <CategoryProvider>
          <SubCategoryProvider>
            <PaperTypeProvider>
              <ConfirmUploadJSX />
            </PaperTypeProvider>
          </SubCategoryProvider>
        </CategoryProvider>
      </FileProvider>
    </div>
  );
}

export default ConfirmUpload;
