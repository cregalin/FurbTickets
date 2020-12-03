class TicketMailer < ApplicationMailer
	def send_ticket(email, ticket)
    @ticket = ticket
		mail(to: email, subject: "FITUB Ticket")
	end
end
