#!/bin/bash

echo "Digite o caminho de um arquivo ou diretório:"
read FILE
if [ -f "$FILE" ]  # O -f faz um teste no arquivo e vê se ele é um arquivo
    then
      echo "$FILE é um arquivo comum"
elif [ -d "$FILE" ]  #O -d faz um teste no arquivo e vê se ele é um diretório
    then
      echo "$FILE é um diretório"
else
      echo "$FILE é alguma outra coisa"
fi
ls -l $FILE
