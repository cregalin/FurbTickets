class TicketsController < ApplicationController
  before_action :set_ticket, only: [:show, :update, :destroy]

  def index
    @tickets = Ticket.all
  end

  def show
  end

  def create
    customer = Customer.find_or_create_by({ cpf: ticket_params[:cpf], email: ticket_params[:email] })
    tickets = []
    errors = []

    ticket_params[:tickets].each do |ticket|
      ticket = Ticket.new({ session_id: ticket_params[:session_id], chair_id: ticket[:chair_id], ticket_type: ticket[:ticket_type], customer_id: customer.id })

      if ticket.save
        tickets << ticket
      else
        errors << ticket.errors
      end
    end

    if errors.present?
      render json: errors.map(&:full_messages).join('</br>'), status: :unprocessable_entity
    else
      render json: { ticket_ids: tickets.pluck(:id).join(',') }, status: :ok
    end
  end

  def update
    if @ticket.update(ticket_params)
      render :show, status: :ok, location: @ticket
    else
      render json: @ticket.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @ticket.destroy
  end

  def validate
    ticket = Ticket.where(code: params[:code])

    if ticket.count > 0
      render json: { message: 'Ticket validado com sucesso' }, status: :ok
    else
      render json: { message: 'Esse ticket não é válido'}, status: :unprocessable_entity
    end
  end

  private
    def set_ticket
      @ticket = Ticket.find(params[:id])
    end

    def ticket_params
      params.permit(:session_id, :cpf, :email, tickets: [:chair_id, :ticket_type])
    end
end
