class AddTabelaCadeira < ActiveRecord::Migration[5.0]
  def change
    create_table :cadeira do |c|
      c.string :numero
      c.integer :sala_id
      c.integer :status
    end
  end
end
