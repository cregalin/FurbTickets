class AddRoomIdIntoShow < ActiveRecord::Migration[5.0]
  def change
    add_column :shows, :room_id, :int
  end
end
