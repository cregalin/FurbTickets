class Session < ApplicationRecord
  belongs_to :shows

  validates :date, :time, presence: true
end
