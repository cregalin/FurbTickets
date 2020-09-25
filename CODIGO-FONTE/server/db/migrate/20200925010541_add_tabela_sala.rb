class AddTabelaSala < ActiveRecord::Migration[5.0]
  def change
    create_table :sala do |s|
      s.integer :tipo
      s.string :descricao
    end
  end
end
