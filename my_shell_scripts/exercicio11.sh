#!/bin/bash

DIRETORIO=$1
EXTENCAO=$2
DIA=$(date +%F)

cd $DIRETORIO

for INDEX in `ls *.$EXTENCAO`
    do
        echo "O $INDEX está sendo renomeado para ${DIA}-${INDEX}"
        mv $INDEX ${DIA}-${INDEX}
    done