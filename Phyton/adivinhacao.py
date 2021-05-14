import random


def jogar():

    print('**************************************')
    print("seja bem vindo ao jogo de adivinhações")
    print("**************************************")

    numero_secreto = round(random.randrange(1, 101))
    print(numero_secreto)
    tentativa = 0
    pontos = 1000

    print("qual nivel de dificuldade?: ")
    print("(1) facil, (2) medio, (3) dificil")
    nivel = int(input("qual deseja?:"))

    if (nivel == 1):
        tentativa = 20
    elif (nivel == 2):
        tentativa = 10
    else:
        tentativa = 5

    for rodada in range(1, tentativa + 1 ) :
        print("tentativa {} de {}".format(rodada, tentativa))
        numero_usuario = int(input('digite seu numero entre 1 e 100: '))
        print('você digitou: ', numero_usuario)

        if ( numero_usuario < 1 or numero_usuario > 100 ):
            print("Favor digitar numero entre 1 e 100!.")
            continue

        acertou = numero_usuario ==numero_secreto
        maior   = numero_usuario > numero_secreto
        menor   = numero_usuario < numero_secreto

        if (acertou):
            print('você acertou! e fez'+ str(pontos) +'pontos')
            break

        else:
            if (maior):
                print('você errou, seu chute foi maior que o numero secreto')
            elif (menor):
                print('você errou, seu chute foi menor que o numero secreto')
            pontos_perdidos = abs(numero_secreto - numero_usuario)
            pontos = pontos - pontos_perdidos


    print("fim de jogo")

if(__name__ == "__main__"):
    jogar()

