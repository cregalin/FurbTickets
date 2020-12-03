class TicketsController < ApplicationController
  before_action :set_ticket, only: [:show, :update, :destroy]

  def index
    @tickets = Ticket.all
  end

  def show
  end

  def confirm
    tickets_amount = 0
    tickets = []

    ticket_params[:tickets].each do |ticket|
      show = Show.joins(:sessions).where(sessions: { id: ticket_params[:session_id] } ).first
      tickets_amount += ticket[:ticket_type] == 1 ? show.price / 2 : show.price
    end

    render json: { tickets_amount: tickets_amount }, status: :ok
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
      render json: errors.map { |error| error.messages[:error] }.join('</br>'), status: :unprocessable_entity
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

    render json: { valid: ticket.count > 0 }, status: :ok
  end

  private
    def set_ticket
      @ticket = Ticket.find(params[:id])
    end

    def ticket_params
      params.permit(:session_id, :cpf, :email, tickets: [:chair_id, :ticket_type])
    end
end
