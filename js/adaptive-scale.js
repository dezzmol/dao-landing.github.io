document.addEventListener("resize", function () {
    if (window.devicePixelRatio !== 1) { // Костыль для определения иных устройств, с коэффициентом отличным от 1
        var dpt = window.devicePixelRatio;
        var widthM = window.screen.width * dpt;
        var widthH = window.screen.height * dpt;
        document.write('<meta name="viewport" content="width=' + widthM+ ', height=' + widthH + '">');
    }
})

// function resetZoom() {
//     console.log(document.body.style.zoom)
//     var scale = 'scale(1)';
//     document.body.style.zoom = 1.0;
//     document.body.style.transform = scale;
// }
//
// window.onload = resetZoom