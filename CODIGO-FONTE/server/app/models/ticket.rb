class Ticket < ApplicationRecord

	belongs_to :customer
	belongs_to :session
	belongs_to :chair

	accepts_nested_attributes_for :customer

	enumerize :ticket_type, :in => { half: 1, entire: 2 }

	before_create :set_code
	after_create :send_ticket
	validates :session_id, :customer_id, :chair_id, :ticket_type, presence: true
	validate :can_be_purchased

	def send_ticket
		TicketMailer.send_ticket(customer.email, self).deliver_later
	end

	def can_be_purchased
		if Ticket.where(chair_id: chair_id, session_id: session_id).count > 0
			errors.add(:error, "Não é possível comprar o ingresso para a cadeira id: #{ chair_id }, essa cadeira já está ocupada.")
			return false
		end

		true
	end

	private

  def set_code
    self.code = generate_code
  end

  def generate_code
		loop do
			code = SecureRandom.hex(4)
      break code unless Ticket.where(code: code).exists?
    end
  end
end
