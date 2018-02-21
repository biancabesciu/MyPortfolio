(function(document){
    //skill bar progress
    const _bars = [].slice.call(document.querySelectorAll('.progress-bar'));
    _bars.map(function (bar, index) {
        //animate the progress bar
        setTimeout(function () {
            bar.style.width = bar.dataset.percent;
        //    cascadian progress
        }, index * 1000);
    })
})(document);


