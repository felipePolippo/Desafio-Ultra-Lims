function limpa_formulário_cep() {
            
            document.getElementById('rua').value=("");
            document.getElementById('bairro').value=("");
            document.getElementById('cidade').value=("");
            document.getElementById('uf').value=("");
            
    }

    function meu_callback(conteudo) {
        if (!("erro" in conteudo)) {
            
            document.getElementById('rua').value=(conteudo.logradouro);
            document.getElementById('bairro').value=(conteudo.bairro);
            document.getElementById('cidade').value=(conteudo.localidade);
            document.getElementById('uf').value=(conteudo.uf);
            
        } 
        else {
            
            limpa_formulário_cep();
            alert("CEP não encontrado.");
        }
    }
        
    function pesquisacep(valor) {

        
        var cep = valor.replace(/\D/g, '');

      
        if (cep != "") {

            
            var validacep = /^[0-9]{8}$/;

            
            if(validacep.test(cep)) {

                
                document.getElementById('rua').value="...";
                document.getElementById('bairro').value="...";
                document.getElementById('cidade').value="...";
                document.getElementById('uf').value="...";
                

                
                var script = document.createElement('script');

                
                script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=meu_callback';

                
                document.body.appendChild(script);

            } 
            else {
                
                limpa_formulário_cep();
                alert("Formato de CEP inválido.");
            }
        } 
        else {
            
            limpa_formulário_cep();
        }

        var arr = [];


function addItem() {
  
  if (localStorage.meuArr) {
    arr = JSON.parse(localStorage.getItem('meuArr'));
  }

  
  let novoCep = document.getElementById("cep").value;
  let novoRua = document.getElementById("rua").value;
  let novoBairro = document.getElementById("bairro").value;
  let novoCidade = document.getElementById("cidade").value;
  let novoUf = document.getElementById("uf").value;

  
  if (!novoCep) {
    alert("Por favor, preencha o CEP.");
    return;
  }

  
  arr.push({
    cep: novoCep,
    rua: novoRua,
    bairro: novoBairro,
    cidade: novoCidade,
    uf: novoUf
  });

  
  localStorage.meuArr = JSON.stringify(arr);

  
  document.getElementById('cep').value = "";
  document.getElementById('rua').value = "";
  document.getElementById('bairro').value = "";
  document.getElementById('cidade').value = "";
  document.getElementById('uf').value = "";

  alert("CEP salvo com sucesso!");
}


function showItems() {
  let resultDIV = document.getElementById('result');
  resultDIV.innerHTML = ""; 

  
  if (localStorage.meuArr) {
    arr = JSON.parse(localStorage.getItem('meuArr'));
  }

  
  arr.forEach((item, index) => {
    let p = document.createElement("p");
    p.innerHTML = `CEP: ${item.cep}, Rua: ${item.rua}, Bairro: ${item.bairro}, Cidade: ${item.cidade}, Estado: ${item.uf}`;
    resultDIV.append(p);
  });

  if (arr.length === 0) {
    resultDIV.innerHTML = "<p>Nenhum CEP salvo.</p>";
  }
}


function clearItems() {
  arr = [];
  localStorage.meuArr = JSON.stringify(arr);
  document.getElementById('result').innerHTML = "<p>Todos os itens foram removidos.</p>";
}

window.addItem = addItem;
window.showItems = showItems;
window.clearItems = clearItems;
      
    } 