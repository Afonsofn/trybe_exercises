#!/bin/bash

FILEPATH=exercicios_shellscript.sh
if [ -e "$FILEPATH" ]  # O -e faz um teste no arquivo e vê se ele existe
   then 
       echo "O caminho $FILEPATH está habilitado!"
fi
if [ -w $FILEPATH ]  # O -w faz um teste no arquivo e vê se ele tem permissão de escrita
   then
       echo "Você tem permissão para editar $FILEPATH"
else 
       echo "Você não tem permissão para editar $FILEPATH"
fi