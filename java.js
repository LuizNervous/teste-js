let idiomaAtual='pt';

const traducoes = {
    pt:{

        titulo: 'Oi meu nome é Luiz Gustavo, tenho 15 ano e estou estudando programção',
        descricao:'A dora tem 12 anos e é minha irmã, ela é pequena e chata',
        final:'Site foi desenvolvido para o aprendizado do aluno Luiz Gustavo Castro Neves, para conseguir fazer no projeto integrador'
    },
    en:{
        titulo:'Hi my name is Luiz Gustavo, i have 15 years old and i am studying programming',
        descricao:'The dora has 12 years old and she is my sister, she is small and boring',
        final:'The website was developed for the learning of the student Luiz Gustavo Castro Neves, to be able to do the integrative project'
    }
}
function trocaridioma(){
    idiomaAtual= idiomaAtual === 'pt'? 'en':'pt';
    const t =traducoes[idiomaAtual];

    document.querySelectorAll('[data-translate]').forEach(el => {
        const chave = el.getAttribute('data-translate');
        el.textContent = t[chave];
    })
     document.getElementById('trocaridiomaBtn').textContent =
        idiomaAtual === 'pt' ? 'português' : 'English';
}
document.getElementById('trocaridiomaBtn').addEventListener('click', trocaridioma);
