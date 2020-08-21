#!/bin/bash
#echo "Hack a News - Hack the Planet"
#echo "Criando um diretório"
#mkdir hack-a-Planet
#echo "Aguarde"; sleep 1; echo "."; sleep 1; echo ".";sleep 1; echo "."; sleep 01
#echo "Diretório criado com sucesso!!"

#VARIAVEL=`whoami`  #pra fazer uma variavel é so colocar o nome da variavel,simples assim kkk
#echo $VARIAVEL     #agora tem que estar colado no = tanto o nome da variavel como o conteudo
#VARIAVEL=whoami
#echo $VARIAVEL
#VARIAVEL="Eu sou um usuario"
#echo $VARIAVEL
#VARIAVEL="Eu estou logado como usuario `whoami`"
#echo $VARIAVEL
#VARIAVEL="Eu estou logado como usuario whoami"
#echo $VARIAVEL

#echo "Digite seu nome"
#read NOME  #o comando read deixa vc escrever alguma informação para ele e atribuir em seguida uma variavel
#echo "Digite sua idade:"
#read IDADE 
#USUARIO=`whoami`
#DIRETORIO=`pwd`
#echo "Meu nome é $NOME, minha idade é  $IDADE, meu usuário é $USUARIO, e meu diretório é $DIRETORIO" 

#echo "Digite o seu nome"
#read NOME
#if [ $NOME == "RAUL" ] #Praticamente igual ao JS, só tem esse then ai, fica mais organzado na vdd
#then 
#        echo "É você!"
#else    
#        echo "Não é você!"
#fi

# -lt é igual a <        -ge é igual a >=
# -gt é igual a >        -eq é igual a =
# -le é igual a <=       -ne é igual a != 

echo "Digite sua idade"
read IDADE
if [ $IDADE -ge "16" ] #Praticamente igual ao JS, só tem esse then ai, fica mais organzado na vdd
then 
        echo "Pode votar!"
else    
        echo "Não pode votar!"
fi