'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.addColumn('alunos', 'curso', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: { model: 'cursos', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
   })
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.removeColumn('alunos', 'curso');
    
  }
};
