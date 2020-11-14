class ChangeRoomAssociation < ActiveRecord::Migration[5.0]
  def change
    remove_column :shows, :room_id, :int
    add_column :sessions, :room_id, :int
  end
end
