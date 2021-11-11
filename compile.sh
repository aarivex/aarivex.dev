#!/bin/bash

# Configuration
CSS_SOURCE_PATH="./src/css";
CSS_ASSETS_PATH="./assets/css";

CSS_DEST_FILE="./assets/css/app.css";
IMPORTS_FILE="$CSS_SOURCE_PATH/.imports";

# Colors and prefixes
DEFAULT="\e[0m";
SUCCESS="\e[0;32mSUCCESS: ";
ERROR="\e[0;31mERROR: ";

if ! [ $(find $CSS_SOURCE_PATH -name '.imports') ]; then
    echo -e "${ERROR}Imports file missing.$DEFAULT";
    exit;
fi

if ! [ -d $CSS_ASSETS_PATH ]; then
    mkdir $CSS_ASSETS_PATH;
fi

RESULT=$(cat "$CSS_SOURCE_PATH/app.css");
SECTION="";

for line in $(cat $IMPORTS_FILE); do

    if [ ${line:0:1} = "_" ]; then
        if ! [ -d $CSS_SOURCE_PATH/${line:1} ]; then
            echo -e "${ERROR}Missing section '$line'$DEFAULT";

            exit;
        else
            SECTION=${line:1};
        fi
        
        continue;
    fi

    if ! [ SECTION = "" ]; then
        FILE="$CSS_SOURCE_PATH/$SECTION/$line";

        if [ -f $FILE ]; then
            RESULT+=$(cat $FILE);
        else
            echo -e "${ERROR}Missing file '$FILE' ($SECTION).$DEFAULT";
        fi
    fi

done

echo $RESULT > $CSS_DEST_FILE;

echo -e "${SUCCESS}Compiled assets.${DEFAULT}";
