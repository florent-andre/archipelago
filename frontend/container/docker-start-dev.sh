#!/bin/sh

# start waiting process
nodemon --ignore "/apps/*" /container/devapp/echo.js

ls -la
yarn run start 

## @TODO: adapt "missing deps" script with yarn ? 
# cresult=$(npm ls -parseable 2>&1)

# # source : https://stackoverflow.com/a/24753942
# case "$cresult" in
# *ERR\!\ missing*)
# 	echo "docker-start-.sh : Fresh start or a least one lib is missing. 'npm install' will run to init the environment"
#     npm install
#     echo "docker-start.sh : End of initial install"
# 	;;
# esac

# # minimal http waiting serveur
# echo "docker-start.sh : Starting the HTTP server with Nodemon"
# echo "-> excluding gatsby generated files from watch"
# nodemon --ignore "/apps/gatsby/public/*" container/devapp/server.js
