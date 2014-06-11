class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :nome
      t.date :nascimento
      t.string :email
      t.string :senha
      t.string :matricula

      t.timestamps
    end
  end
end
