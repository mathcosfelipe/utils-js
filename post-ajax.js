// Exemplo de requisição POST
var ajax = new XMLHttpRequest();

// Seta tipo de requisição: Post e a URL da API
ajax.open("POST", "minha-url-api", true);
ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

// Seta paramêtros da requisição e envia a requisição
ajax.send("email=teste@teste.com");

// Cria um evento para receber o retorno.
ajax.onreadystatechange = function() {
  
  // Caso o state seja 4 e o http.status for 200, é porque a requisiçõe deu certo.
	if (ajax.readyState == 4 && ajax.status == 200) {
    
		var data = ajax.responseText;
		
    // Retorno do Ajax
		console.log(data);
	}
}
