#!/bin/bash 

echo 'Running buuld command from development directory'

cd client/development

sencha app build testing

cd ..

echo 'Clearing old build contents from default directory...'

rm -rf default/*

cd default

echo 'Copying new build into client/default'

cp -R ../development/build/testing/Xpoit/* .

echo 'Boom!! your new build code is now in client/default, Cye...!' 