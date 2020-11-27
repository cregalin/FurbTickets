class Room < ApplicationRecord
  validates :description, presence: true
  validates :quantity_chairs, numericality: { only_integer: true }, allow_blank: true

  has_many :chairs, dependent: :destroy
  has_many :sessions
  accepts_nested_attributes_for :chairs
end
