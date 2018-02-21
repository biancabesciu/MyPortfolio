(function(document){
    //skill bar progress
    const _bars = [].slice.call(document.querySelectorAll('.progress-bar'));
    _bars.map(function (bar) {
        setTimeout(function () {
            bar.style.width = bar.dataset.percent;
        }, 0);
    })
})(document);


