import java.util.Scanner;

public class MaiorSubstringPalindromica {

  public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);

    System.out.println("Digite uma string para encontrar a maior substring palindrômica:");
    String entrada = scanner.nextLine();

    String maiorPalindromo = encontrarMaiorPalindromo(entrada);

    System.out.println("Maior substring palindrômica: " + maiorPalindromo);

    scanner.close();
  }

  public static String encontrarMaiorPalindromo(String s) {
    if (s == null || s.length() < 1) {
      return "";
    }

    int inicio = 0, fim = 0;

    for (int i = 0; i < s.length(); i++) {

      int tamanho1 = expandirDoCentro(s, i, i);

      int tamanho2 = expandirDoCentro(s, i, i + 1);

      int tamanhoMax = Math.max(tamanho1, tamanho2);

      if (tamanhoMax > fim - inicio) {
        inicio = i - (tamanhoMax - 1) / 2;
        fim = i + tamanhoMax / 2;
      }
    }

    return s.substring(inicio, fim + 1);
  }

  private static int expandirDoCentro(String s, int esquerda, int direita) {
    while (esquerda >= 0 && direita < s.length() && s.charAt(esquerda) == s.charAt(direita)) {
      esquerda--;
      direita++;
    }
    return direita - esquerda - 1;
  }
}
