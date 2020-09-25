class AddTabelaIngresso < ActiveRecord::Migration[5.0]
  def change
    create_table :ingresso do |i|
      i.integer :id_sessao
      i.integer :id_espetaculo
      i.integer :id_comprador
    end
  end
end
