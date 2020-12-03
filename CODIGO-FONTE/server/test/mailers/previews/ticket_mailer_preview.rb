# Preview all emails at http://localhost:3000/rails/mailers/ticket_mailer/send_ticket
class TicketMailerPreview < ActionMailer::Preview
	def send_ticket
    TicketMailer.send_ticket
  end
end
