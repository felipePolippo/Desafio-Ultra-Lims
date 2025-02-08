import java.util.Scanner;

public class BuscaBinaria {
  public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);

    System.out.println("Digite os números da lista, separados por espaço:");
    String input = scanner.nextLine();
    String[] inputArray = input.split(" ");
    int[] lista = new int[inputArray.length];

    for (int i = 0; i < inputArray.length; i++) {
      lista[i] = Integer.parseInt(inputArray[i]);
    }

    System.out.println("Digite o número Alvo:");
    int alvo = scanner.nextInt();

    int indice = buscaBinaria(lista, alvo);

    if (indice != -1) {
      System.out.println("Número encontrado no índice: " + indice);
    } else {
      System.out.println("Número não encontrado na lista.");
    }

    scanner.close();
  }

  public static int buscaBinaria(int[] lista, int alvo) {
    int inicio = 0;
    int fim = lista.length - 1;

    while (inicio <= fim) {
      int meio = inicio + (fim - inicio) / 2;

      if (lista[meio] == alvo) {
        // Encontramos o alvo, agora verificamos a primeira ocorrência
        while (meio > 0 && lista[meio - 1] == alvo) {
          meio--;
        }
        return meio;
      } else if (lista[meio] < alvo) {
        inicio = meio + 1;
      } else {
        fim = meio - 1;
      }
    }

    return -1;
  }
}