class NegociacaoController{

	constructor(){
			
		// aqui o bind serve pra que o querySelector mantenha a associação com o document
		let $ = document.querySelector.bind(document);

		this.inputData = $("#data");
		this.inputQuantidade = $("#quantidade");
		this.inputValor = $("#valor") ;
	}

	adiciona(event){		

		event.preventDefault();

		console.log(this.inputData.value) ;
		console.log(this.inputQuantidade.value) ;

	}
}