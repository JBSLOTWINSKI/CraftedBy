# Étape 1: Build de l'application Vue.js
FROM node:16-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Étape 2: Serveur Nginx pour les fichiers statiques
FROM nginx:alpine

# Copier les fichiers construits depuis l'étape précédente
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY ./entrypoint.sh /docker-entrypoint.d/entrypoint.sh
RUN chmod +x /docker-entrypoint.d/entrypoint.sh
ENTRYPOINT ["/docker-entrypoint.d/entrypoint.sh"]

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
