#!/bin/sh

for file in /usr/share/nginx/html/assets/*.js*;
do
  sed -i 's|VITE_API_ENDPOINT_PLACEHOLDER|'${VITE_API_ENDPOINT}'|g' $file
done

exec "$@"
