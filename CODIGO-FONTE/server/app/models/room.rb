class Room < ApplicationRecord
  enumerize :room_type, :in => { indoor: 1, outdoor: 2 }
  validates :description, :room_type, presence: true
  validates :quantity_chairs, numericality: { only_integer: true }, allow_blank: true

  has_many :chairs, dependent: :destroy
  has_many :shows
  accepts_nested_attributes_for :chairs
end
