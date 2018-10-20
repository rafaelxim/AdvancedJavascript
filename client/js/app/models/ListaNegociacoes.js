class ListaNegociacoes{

	constructor(contexto, armadilha){

		this._negociacoes = [] ;
		this._armadilha = armadilha ;
		this._contexto = contexto ;
	}

	adiciona(negociacao){

		this._negociacoes.push(negociacao);
		Reflect.apply(this._armadilha, this._contexto, [this]);
	}

	get negociacoes(){

		// Aqui eu crio uma nova lista de negociações através do concat, para que quando alguém tente fazer o push de uma nova lista pelo negociacoes.push, não conseguir acessar o this._negociações, e sim uma cópia do mesmo.
		return [].concat(this._negociacoes) ;
	}

	esvazia(){
		this._negociacoes = [];
		Reflect.apply(this._armadilha, this._contexto, [this]);
		

	}
}