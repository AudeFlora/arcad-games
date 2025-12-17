# Étape de build
FROM nginx:alpine as builder

# Copier les fichiers de l'application
COPY src/ /usr/share/nginx/html/

# Étape finale
FROM nginx:alpine

# Métadonnées
LABEL maintainer="Votre Nom <votre.email@example.com>"
LABEL description="Arcade Games - Collection de jeux HTML5"
LABEL version="1.0"

# Copier depuis le builder
COPY --from=builder /usr/share/nginx/html/ /usr/share/nginx/html/

# Exposer le port 80
EXPOSE 80

# Santé de conteneur (optionnel)
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --quiet --tries=1 --spider http://localhost/ || exit 1

# Démarrer Nginx
CMD ["nginx", "-g", "daemon off;"]