class AddChairIdIntoTickets < ActiveRecord::Migration[5.0]
  def change
    add_column :tickets, :chair_id, :int
  end
end
