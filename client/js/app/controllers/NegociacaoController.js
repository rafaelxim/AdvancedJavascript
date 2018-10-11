class NegociacaoController{

	adiciona(event){

		event.preventDefault();

		// aqui o bind serve pra que o querySelector mantenha a associação com o document
		let $ = document.querySelector.bind(document);
		
		let inputData = $("#data");
		let inputQuantidade = $("#quantidade");
		let inputValor = $("#valor") ;

		console.log(inputData.value) ;
	}
}