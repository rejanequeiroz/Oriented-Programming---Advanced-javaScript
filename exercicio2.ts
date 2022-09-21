//Crie uma classe conta bancária e apresente os atributos e métodos referentes a esta classe, em seguida crie um objeto conta bancária, defina as instâncias deste objeto e apresente as informações deste objeto no console.

class contaBancaria{

    nome: string
    ag: number
    conta: number

    

    informação(){
        console.log(`qualo seu nome? ${bancoB.nome}, qual sua ag? ${bancoB.ag}, qual o numero da sua conta? ${bancoB.conta}`)
    }



}
var bancoB = new contaBancaria
bancoB.nome = "rejane"
bancoB.ag = 24
bancoB.conta = 1025


bancoB.informação();