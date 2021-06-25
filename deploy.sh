#!/bin/sh
export GIT_USER=steelywing
git config --global credential.helper "/mnt/c/Program\ Files/Git/mingw64/libexec/git-core/git-credential-manager-core.exe"
yarn deploy

