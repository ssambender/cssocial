let htmlCode = document.getElementById('htmlCode');
let cssCode = document.getElementById('codeEditor');
let mobileView = document.getElementById('mobileViewer');

function run() {
    mobileView.contentDocument.body.innerHTML = htmlCode.innerHTML + "<style>" + cssCode.value + "</style>";
}
run();

document.getElementById('codeEditor').addEventListener('keydown', function(e) {
    if (e.key === 'Tab') {
        e.preventDefault();
        let start = this.selectionStart;
        let end = this.selectionEnd;
        this.value = this.value.substring(0, start) +
            "    " + this.value.substring(end);
        this.selectionStart =
            this.selectionEnd = start + 4;
    }
});
