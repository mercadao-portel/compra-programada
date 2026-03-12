
fetch('numeros.json')
.then(response => response.json())
.then(data => {
    const lista = document.getElementById('lista-numeros');
    data.forEach(item => {
        if(item.disponivel){
            const btn = document.createElement('button');
            btn.textContent = item.numero;
            btn.onclick = () => {
                const nome = prompt('Digite seu nome completo:');
                const telefone = prompt('Digite seu telefone/WhatsApp:');
                const email = prompt('Digite seu e-mail:');
                if(nome && telefone && email){
                    fetch('https://api.telegram.org/bot7964707099:AAE-8OHBo374eZ3QfBhnRlKT2p6FnihVc2A/sendMessage',{
                        method:'POST',
                        headers:{'Content-Type':'application/json'},
                        body: JSON.stringify({
                            chat_id:'1410646523',
                            text:`Nova intenção de compra:\nNome: ${nome}\nTelefone: ${telefone}\nE-mail: ${email}\nNúmero escolhido: ${item.numero}\nData/Hora: ${new Date().toLocaleString()}`
                        })
                    }).then(()=>alert('Intenção registrada com sucesso!')).catch(()=>alert('Erro ao registrar intenção'));
                    btn.style.display='none';
                    item.disponivel=false;
                } else { alert('Preencha todos os dados!'); }
            };
            lista.appendChild(btn);
        }
    });
});
