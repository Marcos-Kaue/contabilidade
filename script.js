function abrirWhatssap () {
    let name = document.getElementById('name').value;
    let subject = document.getElementById('subject').value;
    let message = document.getElementById('message').value;
    let formulario = document.getElementById('formulario')

    if(!name || !subject || !message){
        alert('Preencha todos os campos');
        return;
    }

    let mensagem = `Olá me chamo ${name}!%0A`;
    mensagem += `Preciso da sua ajuda com: *${subject}*.%0A`;
    mensagem += `Detalhes: ${message}.`;

    const numeroWhatssap = "558899144483";
    const url = `https://wa.me/${numeroWhatssap}/?text=${mensagem}`;
    formulario.reset();
    window.open(url,"_blank");

}
document.querySelectorAll(".faq-question").forEach(item => {
    item.addEventListener("click", () => {
        const answer = item.nextElementSibling;
        answer.style.display = answer.style.display === "block" ? "none" : "block";
    });
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.nav-links').classList.remove('nav-active');
    });
});



