class AddColumnCodeIntoTicket < ActiveRecord::Migration[5.0]
  def change
    add_column :tickets, :code, :string
  end
end
