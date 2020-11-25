class Session < ApplicationRecord
  belongs_to :show
  belongs_to :room

  validates :date, :time, presence: true
end
