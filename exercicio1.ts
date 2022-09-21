//Crie uma classe patinete e apresente os atributos e métodos referentes a esta classe, em seguida crie um objeto patinete, defina as instâncias deste objeto e apresente as informações deste objeto no console.

class patinete{

    marca: string
    modelo: string
    preço: number

    transporta: string

    informação(){
        console.log(`a marca do patinete é ${patinetiA.marca}, qual o modelo? ${patinetiA.modelo}, qual o valor? ${patinetiA.preço}`)
    }



}
var patinetiA = new patinete
patinetiA.marca = "rihapyy"
patinetiA.modelo = "esporte"
patinetiA.preço = 2.000
patinetiA.transporta = "levamos ate vc"

patinetiA.informação();

