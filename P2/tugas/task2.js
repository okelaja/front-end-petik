/**
 * Fungsi untuk menampilkan hasil download
 * @param {string} result 
 */
const showDownload = (result) => {
    console.log(`Download result: ${result}`);
  };
  
  /**
   * Function to download a file
   * @param {function} callback - Callback function to show 
   */
  const download = async (callback) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      const result = "Windows 10";
      callback(result);
    } catch (error) {
      console.error(`Download failed: ${error.message}`);
    }
  };
  
  download(showDownload);
  /**
 * TODO:
 * - Refactor callback ke Promise atau Async Await
 * - Refactor function ke ES6 Arrow Function
 * - Refactor string ke ES6 Template Literals
 */
