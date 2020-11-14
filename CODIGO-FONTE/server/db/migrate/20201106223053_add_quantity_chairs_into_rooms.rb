class AddQuantityChairsIntoRooms < ActiveRecord::Migration[5.0]
  def change
    add_column :rooms, :quantity_chairs, :int
  end
end
