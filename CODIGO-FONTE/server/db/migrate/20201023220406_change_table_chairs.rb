class ChangeTableChairs < ActiveRecord::Migration[5.0]
  def change
    add_column :chairs, :position_x, :int
    add_column :chairs, :position_y, :int
    rename_column :chairs, :number, :reference
  end
end
