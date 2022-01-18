function downloadPng(id_canvas){
    var canvas = document.getElementById(id_canvas);
    var image = canvas.toDataURL();
    var a_download_link = document.createElement('a');
    a_download_link.download = 'image.png';
    a_download_link.href = image;
    a_download_link.click();
}
