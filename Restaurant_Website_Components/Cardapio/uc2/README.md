# uc2 - Cardapio

## Marcos Diaz 221525

### Instruções:
1. Caso nao tenha criado ainda, cria um rede entre os containers: docker network create ea202
2. Rode ./scripts/init.sh (pode ser necessario dar permissão ao script com chmod +x)
3. Acesse http://localhost:3000/
4. É possível filtrar os items do cardapio com a lista da esquerda e selecionar a quantidade a ser pedida nos cards
5. Ao finalizar o caso de uso, rodar ./scripts/endCase.sh para finalizar os containers e zerar o banco de dados

OBS: caso o codigo do front end mude, é necessário fazer o build novamente (npm run build na raiz)
