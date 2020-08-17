#!/bin/bash

FILE=$1   # Pra definir um parametro é só enumerar assim e no terminal ao lado do nome dor arquivo escrever o parametro que vc quer
if [ -f $FILE ]
   then
       echo "Este é um arquivo comum"
elif [ -d $FILE ]
   then 
       echo "Este é um diretório"
else
       echo "Este é outro tipo de arquivo"
fi
ls -l $FILE
