function downloadAndRedirect(url, redirectUrl) {
    fetch(url)
    .then(response => response.blob())
    .then(blob => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', ''); // Adiciona o atributo 'download' para forçar o download
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);

        setTimeout(function () {
            window.location.href = redirectUrl;
        }, 1000); // Aumenta o tempo de espera para garantir que o download seja iniciado
    });
}
