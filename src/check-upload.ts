export function checkUpload(userUploadSizeMB: number, maxUploadSizeMB: number, isLoggedIn: boolean): boolean {
    
    const uploadTooLarge = (userUploadSizeMB > maxUploadSizeMB);
    const uploadTooSmall = (userUploadSizeMB <= 0);
    const canUpload = ( !uploadTooLarge && !uploadTooSmall && isLoggedIn );

    return (canUpload);
    
}