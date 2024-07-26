#!/bin/sh

for file in /usr/share/nginx/html/assets/*.js*;
do
  sed -i 's|VITE_API_URL_PLACEHOLDER|'${VITE_API_URL}'|g' $file
done

exec "$@"
