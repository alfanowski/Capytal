#!/bin/zsh
# Esegui questo script dalla root del progetto per aggiungere tutti i file a git
cd "$(dirname "$0")"

echo "📁 Aggiunta file a git (git add)..."
git add \
  src/ \
  public/ \
  package.json \
  pnpm-lock.yaml \
  pnpm-workspace.yaml \
  next.config.ts \
  tsconfig.json \
  postcss.config.mjs \
  eslint.config.mjs \
  README.md \
  .gitignore

echo ""
echo "✅ File aggiunti. Ecco lo stato:"
git status --short
echo ""
echo "Puoi ora fare: git commit -m 'il tuo messaggio'"

