# uc2 - Entrega

## Marcos Diaz 221525

### Instruções:
1. Caso nao tenha criado ainda, cria um rede entre os containers: docker network create ea202
2. Rode ./scripts/init.sh (pode ser necessario dar permissão ao script com chmod +x)
3. Acesse http://localhost:3000/
4. Selecione uma entrega e avance no processo
5. Ao finalizar o caso de uso, rodar ./scripts/endCase.sh para finalizar os containers e zerar o banco de dados

OBS: caso o codigo do front end mude, é necessário fazer o build novamente (npm run build na raiz)
