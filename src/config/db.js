module.exports = {
    dialect: 'mysql',
    host: 'localhost',
    username: 'root',
    password: '',
    database: 'projeto-node',
    define: {
        timestamps: true,
        //nome das tabelas e colunas no formato snake case
        underscored: true,
    }
}