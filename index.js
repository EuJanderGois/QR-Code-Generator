window.onload = () => {
    const input = document.getElementById("link");
    const sendBtn = document.getElementById("send");
    const downloadBtn = document.getElementById("download");
    const qrcode = document.getElementById("qrcode");

    if (sendBtn) {
        sendBtn.onclick = ()=> {
            if (input.value != "") {
                generateQRCode(input.value);
            } else {
                alert('Please enter a link');
            }
        }
    }

    if (downloadBtn) {
        downloadBtn.onclick = ()=> {
            downloadQRCode();
        }
    }

    function generateQRCode(url) {

        qrcode.innerHTML = "";

        var generated = new QRCode(qrcode, {
            text: url,
            width: 128,
            height: 128
        });

        downloadBtn.classList.remove('hidden');
        input.value = "";

        alert(`QRCode successfully generated for: "${url}"`);
    }

    function downloadQRCode() {

        const QRcodeImage = qrcode.querySelector('img');
        const imageUrl = document.createElement('a');
        imageUrl.href = QRcodeImage.src;
        imageUrl.download = 'QRCode.png';

        document.body.appendChild(imageUrl);
        imageUrl.click();

        document.body.removeChild(imageUrl);
    }
};