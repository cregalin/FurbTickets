class Session < ApplicationRecord
  belongs_to :shows
  belongs_to :rooms

  validates :date, :time, presence: true
end
