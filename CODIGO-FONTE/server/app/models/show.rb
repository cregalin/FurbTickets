class Show < ApplicationRecord
  validates :title, :description, :price, :troupe, presence: true
  validates :price, numericality: { greater_than: 0, less_than: 10000 }

  has_many :sessions, dependent: :destroy
  accepts_nested_attributes_for :sessions

  scope :by_title, -> (title) {
    where("title LIKE '%#{ title }%'") if title.present?
  }

  scope :by_description, -> (description) {
    where("description LIKE '%#{ description }%'") if description.present?
  }

  scope :by_troupe, -> (troupe) {
    where("troupe LIKE '%#{ troupe }%'") if troupe.present?
  }

  scope :by_session_time, -> (time_from, time_to) {
    joins(:sessions).where(sessions: { time: time_from..time_to }).distinct if time_from.present? && time_to.present?
  }

  scope :by_session_date, -> (date_from, date_to) {
    joins(:sessions).where(sessions: { date: date_from..date_to }).distinct if date_from.present? && date_to.present?
  }
end
