import ConfirmUploadJSX from './jsx/ConfirmUpload.jsx';
import { FileProvider } from './jsx/UploadStages/FileContext/FileProvider.js';
function ConfirmUpload() {
    return (
        <div>
            <FileProvider>
                <ConfirmUploadJSX />
            </FileProvider>
        </div>
    )
}

export default ConfirmUpload