class Ticket < ApplicationRecord
	validates :session_id, :customer_id, :chair_id, presence: true

	belongs_to :customer
	belongs_to :session
	belongs_to :chair
	accepts_nested_attributes_for :customer

	# after_create :send_ticket

	# def send_ticket
	# 	TicketsMailer.send_email(customer.email, self)
	# end
end
