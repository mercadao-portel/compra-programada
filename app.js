
document.getElementById('btnParticipar').addEventListener('click', function(){
    const nome = prompt('Digite seu nome completo:');
    const telefone = prompt('Digite seu telefone/WhatsApp:');
    const email = prompt('Digite seu e-mail:');
    if(nome && telefone && email){
        fetch('https://api.telegram.org/bot7964707099:AAE-8OHBo374eZ3QfBhnRlKT2p6FnihVc2A/sendMessage',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify({
                chat_id:'1410646523',
                text:`Nova intenção de compra:\nNome: ${nome}\nTelefone: ${telefone}\nE-mail: ${email}\nData/Hora: ${new Date().toLocaleString()}`
            })
        }).then(()=>alert('Intenção registrada com sucesso!')).catch(()=>alert('Erro ao registrar intenção'));
    }else{
        alert('Preencha todos os dados!');
    }
});
