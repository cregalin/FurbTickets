class Chair < ApplicationRecord
	belongs_to :rooms

	enumerize :status, :in => { avaible: 1, busy: 2, wear_out: 3 }

	validates :reference, :position_x, :position_y, presence: true
	validates :position_x, :position_y, numericality: { only_integer: true }
end
