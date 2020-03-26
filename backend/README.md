Anotacoes node/npm
npm init -y # criar package dando sim para todas as perguntas
npm i package - D # instala para desenvolvimento


Ferramentas:
    insomnia

Biblitecas:
    express
    knex

Banco
    migrations, controle do versão do banco
        cria o arquivo de migracao
        npx knex migrate:make create_ongs
            arquivo contera metodo up(atualizacao) and down(caso necessario reverter migracao)
                alterar as funcoes
                executar migracao
                    npx knex migrate:latest
        npx knex migrate:rollback
Entidades
    ONG
    Casos

Funcionalidades:
    Login
    Logout
    Cadastro de ONG
    Cadastro de novos casos
    Listar casos
    Deletar casos
    Entrar em contato