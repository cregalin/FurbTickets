class AddTabelaComprador < ActiveRecord::Migration[5.0]
  def change
    create_table :comprador do |c|
      c.string :email
      c.string :cpf
    end
  end
end
