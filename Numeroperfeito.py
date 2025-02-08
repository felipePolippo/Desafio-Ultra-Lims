N = int(input("Digite um número: "))
d = 1
soma = 0

while d <= N / 2:
    if N % d == 0:
        soma += d
    d += 1

if N == soma:
    print(f"{N} é perfeito.")
else:
    print(f"{N} não é perfeito.")