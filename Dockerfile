# Étape 1: Builder
FROM nginx:alpine as builder

# Copier les fichiers de l'application
COPY src/ /usr/share/nginx/html/

# Étape 2: Image finale
FROM nginx:alpine

# Copier depuis le builder
COPY --from=builder /usr/share/nginx/html/ /usr/share/nginx/html/

# Métadonnées
LABEL maintainer="Votre Nom"
LABEL description="Arcade Games - Collection de jeux HTML5"
LABEL version="1.0"

# Exposer le port 80
EXPOSE 80

# Démarrer Nginx
CMD ["nginx", "-g", "daemon off;"]