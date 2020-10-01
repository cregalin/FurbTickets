class CreateTables < ActiveRecord::Migration[5.0]
  def change
    create_table :shows do |s|
      s.string :title
      s.string :description
      s.decimal :price, :precision => 10, :scale => 4
      s.string :troupe
    end

    create_table :sessions do |s|
      s.integer :show_id
      s.date :date
      s.time :time
    end

    create_table :rooms do |s|
      s.integer :type
      s.string :description
    end

    create_table :chairs do |c|
      c.string :number
      c.integer :room_id
      c.integer :status
    end

    create_table :tickets do |i|
      i.integer :session_id
      i.integer :show_id
      i.integer :customer_id
    end

    create_table :customers do |c|
      c.string :email
      c.string :cpf
    end
  end
end
