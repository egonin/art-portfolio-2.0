FROM python:3.10-slim

# Crée un répertoire pour l'application
WORKDIR /app

# Copie les fichiers de l'application dans le conteneur
COPY . /app

# Installe les dépendances
RUN pip install --no-cache-dir -r requirements.txt

# Expose le port
EXPOSE 8000

# Démarrer Uvicorn en utilisant l'environnement virtuel
CMD ["uvicorn", "api.main:app", "--reload"]