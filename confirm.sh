#!/bin/bash

ENV_NAME=$1

function ConfirmExecution() {
    echo "「${ENV_NAME}」環境のデプロイを実行しますか？"
    echo "実行する場合は「${ENV_NAME}」と入力してください"
    read input

    if [ -z $input ]; then
        ConfirmExecution
    elif [ $input = ${ENV_NAME} ]; then
        echo "スクリプトを実行します。"
    else
        echo "スクリプトを終了します。"
        exit 1
    fi
}

ConfirmExecution