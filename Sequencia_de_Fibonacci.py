print("="*30)

print("DASAFIO DE FIBONACCI")

print("="*30)
n = int(input('qual numero você quer mostrar?'))
t1 = 0
t2 = 1
print('{} -> {}'.format(t1, t2), end="")
cont = 3
while cont <= n:
  t3 = t1  + t2
  print(' -> {}'.format(t3), end="")
  t1 = t2
  t2 = t3
  cont += 1
print(" -> fim")