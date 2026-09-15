import { checkUpload } from "./check-upload.js";

type Upload = {
    fileName: string;
    sizeMB: number;
    isProcessed: boolean;
};

type UploadSummary = {
    allowedCount: number;
    blockedCount: number;
    allowedSizeMB: number;
};

const uploads: Upload[] = [
    {fileName: "january.csv", sizeMB: 8, isProcessed: false},
    {fileName: "february.csv", sizeMB: 12, isProcessed: false},
    {fileName: "march.csv", sizeMB: 5, isProcessed: false}
];

function summariseUploads(uploads: Upload[], maxUploadSizeMB: number, isLoggedIn: boolean): UploadSummary {
    
    let allowedCount = 0;
    let blockedCount = 0;
    let allowedSizeMB = 0;

        for (const upload of uploads) {

            const result = checkUpload(upload.sizeMB, maxUploadSizeMB, isLoggedIn);

            if(result) {
                allowedCount += 1;
                allowedSizeMB += upload.sizeMB;
            }  
            else {
                blockedCount += 1;
            }

    }

    return {
        allowedCount: allowedCount,
        blockedCount: blockedCount,
        allowedSizeMB: allowedSizeMB,
    };

}

const result = summariseUploads(uploads, 10, true);

console.log(result);