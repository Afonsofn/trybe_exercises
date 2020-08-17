#!/bin/bash

FILE=$@   #o @ faz com que a quantidade de parametros seja ilimitada
for INDEX in $FILE
   do
       if [ -f $INDEX ]
           then
               echo "O $INDEX um arquivo comum"
       elif [ -d $INDEX ]
           then
               echo "O $INDEX é um diretório"
       else 
           echo "O $INDEX é outra coisa"
       fi
    done
ls -l $FILE