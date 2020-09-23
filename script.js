function verificar() {
    let data = new Date();
    let ano = data.getFullYear();
    let formularioAno = document.querySelector('input#txtano');
    let resultado = document.querySelector('div#resultado');
    if(formularioAno.value.length == 0 ||Number(formularioAno.value) > ano) {
        alert("[ERRO] Verifique os dados e tente novamente.");
    } else {
        let fsex = document.getElementsByName('radsex');
        let idade = ano - Number(formularioAno.value);
        let genero = '';
        let img = document.createElement('img');
        img.setAttribute('id', 'foto');
        if(fsex[0].checked) {
            genero = 'Homem';
            if (idade >=0 && idade <= 4) {
                //criança
                img.setAttribute('src', 'bebe_m.png');
            } else if (idade < 15) {
                // Jovem
                img.setAttribute('src', 'criança_m.png');
            } else if(idade < 50) {
                //Adulto
                img.setAttribute('src', 'homem.png');
            } else {
                //idoso
                img.setAttribute('src', 'idoso.png');
            }
            
             } else if(fsex[1].checked) {
            genero = 'Mulher';
            if (idade >=0 && idade <= 4) {
                //criança
                img.setAttribute('src', 'bebe_f.png');
            } else if (idade < 15) {
                // Jovem
                img.setAttribute('src', 'criança_f.png');
            } else if(idade < 50) {
                //Adulto
                img.setAttribute('src', 'mulher.png');
            } else {
                //idoso
                img.setAttribute('src', 'idosa.png');
            }
        }
        resultado.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
        resultado.appendChild(img);
    }
        
        
}