class AddTabelaSessao < ActiveRecord::Migration[5.0]
  def change
    create_table :sessao do |s|
      s.integer :id_espetaculo
      s.date :data
      s.time :horario
    end
  end
end
