class AddTabelaEspetaculo < ActiveRecord::Migration[5.0]
  def change
    create_table :espetaculo do |e|
      e.string :titulo
      e.string :descricao
      e.decimal :preco, :precision => 10, :scale => 4
    end
  end
end
