while True:
    try:
        valor = int(input("Qual valor você quer sacar? R$"))
        if valor > 0:
            break
        else:
            print("Digite um valor maior que zero.")
    except ValueError:
        print("Por favor, digite um número inteiro válido.")


total = valor
cédulas = [100, 50, 20, 10, 5, 1] 
indice = 0  


while total > 0:
    céd = cédulas[indice]  
    totcéd = total // céd  
    total %= céd  

    if totcéd > 0:
        print(f"Total de {totcéd} cédulas de R${céd}")

    indice += 1 

print("Saque realizado com sucesso!")


