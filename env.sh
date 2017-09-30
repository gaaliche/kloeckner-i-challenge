# env.sh (use "source" to run)

# get script location
if [[ -n $BASH_VERSION ]]; then
  _SOURCED_SCRIPT="${BASH_SOURCE[0]}"
elif [[ -n $ZSH_VERSION ]]; then
  _SOURCED_SCRIPT="${(%):-%N}"
else
  echo "Shell not supported"
  return
fi

export APP_HOME=$(cd $(dirname $_SOURCED_SCRIPT) ; pwd)

# Setup Node
export NODE_PATH=${APP_HOME}/node_modules:$NODE_PATH
export PATH=$NODE_HOME/bin:$APP_HOME/node_modules/.bin:$PATH