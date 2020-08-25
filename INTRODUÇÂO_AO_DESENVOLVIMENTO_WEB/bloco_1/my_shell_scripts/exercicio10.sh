#!/bin/bash

FILE=$(date +%F) 
for INDEX in `ls *.png`
   do 
       mv $INDEX ${FILE}-${INDEX}
   done
          #OU PODE SER ASSIM PRA UMA PASTA ESPECIFICA
DATA=$(date +%F)
FILE=`ls ./teste | grep .png`
for INDEX in $FILE
    do
        mv teste/$INDEX ${DATA}-${INDEX} ./teste
        echo "O $INDEX está sendo renomeado para $DATA-$INDEX"
    done