class Session < ApplicationRecord
  belongs_to :shows
  belongs_to :room_id

  validates :date, :time, presence: true
end
