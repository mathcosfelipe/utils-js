// Exemplo de requisição GET
var ajax = new XMLHttpRequest();

// Seta tipo de requisição e URL com os parâmetros
ajax.open("GET", "minha-url-api.com/?name=Henry&lastname=Ford", true);

// Envia a requisição
ajax.send();

// Cria um evento para receber o retorno.
ajax.onreadystatechange = function() {
  
  // Caso o state seja 4 e o http.status for 200, é porque a requisiçõe deu certo.
	if (ajax.readyState == 4 && ajax.status == 200) {
    
		var data = ajax.responseText;
		
    // Retorno do Ajax
		console.log(data);
	}
}
