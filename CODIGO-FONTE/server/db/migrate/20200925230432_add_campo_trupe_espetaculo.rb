class AddCampoTrupeEspetaculo < ActiveRecord::Migration[5.0]
  def change
    add_column :espetaculo, :trupe, :string
  end
end
