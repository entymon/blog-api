#!/bin/bash



MIGRATION_NAME=
while getopts 'n:,' opt; do
    case $opt in
        n) MIGRATION_NAME=$OPTARG;;
    esac
done

if [ -z "$MIGRATION_NAME" ]; then
    echo "option n was NOT given, exit."
    exit 1;
fi
echo $MIGRATION_NAME
