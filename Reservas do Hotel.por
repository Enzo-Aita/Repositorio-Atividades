programa
{
	funcao inicio()
	{
		cadeia hospedes[11]
		inteiro opcao
    inteiro numeroQuarto
		cadeia tipoQuarto
		real preco = 0.0

		// Inicializando quartos vazios
		para (inteiro i = 1; i <= 10; i++) {
			hospedes[i] = "vazio"
		}

		faca {
			escreva("\n--- HOTEL BEM-VINDO ---\n")
			escreva("1. Reservar Quarto\n")
			escreva("2. Listar Ocupação\n")
			escreva("3. Sair\n")
			escreva("Escolha uma opção: ")
			leia(opcao)

			limpa()

			escolha(opcao) {
				caso 1:
					escreva("Tipos de Quarto: (S)imples - R$100 | (D)uplo - R$180 | (Su)íte - R$350\n")
					escreva("Escolha o tipo (S/D/Su): ")
					leia(tipoQuarto)

					// Define o preço baseado no tipo
					se (tipoQuarto == "S" ou tipoQuarto == "s") { preco = 100.0 }
					senao se (tipoQuarto == "D" ou tipoQuarto == "d") { preco = 180.0 }
					senao se (tipoQuarto == "Su" ou tipoQuarto == "su") { preco = 350.0 }
					senao { 
						escreva("Tipo inválido!\n")
						pare 
					}

					escreva("Digite o número do quarto (1 a 10): ")
					leia(numeroQuarto)

					// Validação de intervalo e disponibilidade
					se (numeroQuarto < 1 ou numeroQuarto > 10) {
						escreva("Erro: Número de quarto inexistente.\n")
					}
					senao se (hospedes[numeroQuarto] != "vazio") {
						escreva("ALERTA: O quarto " + numeroQuarto, " já está ocupado por: " + hospedes[numeroQuarto] + ".\n")
					}
					senao {
						escreva("Digite o nome do hóspede: ")
						leia(hospedes[numeroQuarto])
						escreva("Reserva confirmada! Total: R$ ", preco, "\n")
					}
					pare

				caso 2:
					escreva("--- STATUS DOS QUARTOS ---\n")
					para (inteiro i = 1; i <= 10; i++) {
						escreva("Quarto " + i + ": " + hospedes[i]+  "\n")
					}
					pare

				caso 3:
					escreva("Encerrando sistema...")
					pare

				caso contrario:
					escreva("Opção inválida!")
			}

		} enquanto (opcao != 3)
	}
}
