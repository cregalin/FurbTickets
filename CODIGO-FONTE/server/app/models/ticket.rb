class Ticket < ApplicationRecord
	validates :session_id, :customer_id, :chair_id, presence: true

	belongs_to :customer
	belongs_to :session
	belongs_to :chair
	accepts_nested_attributes_for :customer

	before_create :set_code
	after_create :send_ticket

	def send_ticket
		TicketMailer.send_ticket(customer.email, self).deliver_now
	end

	private

  def set_code
    self.code = generate_code
  end

  def generate_code
    loop do
      code = SecureRandom.hex(3)
      break code unless Ticket.where(code: code).exists?
    end
  end
end
