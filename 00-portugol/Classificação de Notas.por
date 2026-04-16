programa
{
	funcao inicio()
	{
		// Declaração de variáveis
		real nota

		// Entrada de dados
		escreva("Digite a sua nota (0 a 100): ")
		leia(nota)

		// Processamento e Classificação
		escreva("\nResultado: ")

		se (nota < 0 ou nota > 100) {
			escreva("Nota inválida! Por favor, insira um valor entre 0 e 100.")
		}
		senao se (nota >= 81) {
			escreva("Classificação A")
		}
		senao se (nota >= 61) {
			escreva("Classificação B")
		}
		senao se (nota >= 41) {
			escreva("Classificação C")
		}
		senao se (nota >= 21) {
			escreva("Classificação D")
		}
		senao {
			escreva("Classificação E")
		}
		
		escreva("\n")
	}
}