//Crie uma classe paciente e apresente os atributos e métodos referentes a esta classe, em seguida crie um objeto paciente, defina as instâncias deste objeto e apresente as informações deste objeto no console.

class paciente{

    nome: string
    idade: number
    sexo: string

    estado:string

    

    informação(){
        console.log(`qualo seu nome? ${paciente1.nome}, qual sue sexo? ${paciente1.sexo}, qual a sua idade? ${paciente1.idade}, como vc esta? ${paciente1.estado}`)
    }



}
var paciente1= new paciente
paciente1.nome = "clara"
paciente1.sexo = "feminino"
paciente1.idade = 30
paciente1.estado = "feliz"



paciente1.informação();
