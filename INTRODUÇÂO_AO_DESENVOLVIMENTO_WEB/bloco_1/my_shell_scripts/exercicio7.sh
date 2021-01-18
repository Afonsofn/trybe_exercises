#!/bin/bash

DIRETORIO=$1
if [ -d $DIRETORIO ]
    then
        ARQ=`ls -l $DIRETORIO | wc -l`
        echo "O $DIRETORIO tem $ARQ arquivos."
    else 
        echo "O $DIRETORIO não é um diretório"
fi 