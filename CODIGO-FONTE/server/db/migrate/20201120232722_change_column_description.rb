class ChangeColumnDescription < ActiveRecord::Migration[5.0]
  def change
    change_column :shows, :description, :text
  end
end
