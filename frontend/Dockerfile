# Utilisation de l'image Node.js officielle pour construire l'application
FROM node:18

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers package.json et package-lock.json
COPY package.json package-lock.json ./

# Installer les dépendances
RUN npm install

# Copier le reste des fichiers de l'application React
COPY . .

# Exposer le port utilisé par le serveur React (généralement 3000)
EXPOSE 3000

# Lancer le serveur de développement React
CMD ["npm", "start"]
