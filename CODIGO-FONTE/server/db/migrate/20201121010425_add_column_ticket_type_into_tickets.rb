class AddColumnTicketTypeIntoTickets < ActiveRecord::Migration[5.0]
  def change
    add_column :tickets, :ticket_type, :int
  end
end
