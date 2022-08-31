#!/usr/bin/env bash

window=false
if [ "$OSTYPE" = "msys" ] ; then
  window=true;
elif [[ "$OSTYPE" == "cygwin" ]]; then
  window=true;
elif [[ "$OSTYPE" == "win32" ]]; then
  window=true;
elif [[ "$OSTYPE" == "darwin20.0" ]]; then
  window=true;
fi

PROJECT_DIR=`cd "$bin"; pwd`
ROOT_DIR="$PROJECT_DIR/../.."

if $window; then
  ROOT_DIR=`cygpath --absolute --windows "$ROOT_DIR"`
fi

CMD=$1
shift

if [ "$CMD" = "build" ] ; then
  rm -rf $PROJECT_DIR/build
  if $window; then
    echo "Start build.... delete folder build if exits"
    echo "Kill node...."
    #taskkill //F //IM node.exe
  fi
  yarn build
elif [ "$CMD" = "deploy" ] ; then
  if $window; then
    echo "Start deploy in github.io...."
    echo "Kill node...."
    #taskkill //F //IM node.exe
  fi
  yarn deploy
elif [ "$CMD" = "dev" ] ; then
  if $window; then
    echo "Kill node...."
    #taskkill //F //IM node.exe
  fi
  yarn start
else
  echo 'Usage: '
  echo "  ./dev-tool.sh build       build project "
  echo ""
  echo "  ./dev-tool.sh deploy      deploy project with gh-pages"
  echo ""
  echo "  ./dev-tool.sh dev   Run development mode with listen port 3000"
fi
