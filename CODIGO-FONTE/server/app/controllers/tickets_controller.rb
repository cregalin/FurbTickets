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

    ticket_params[:chair_ids].each do |chair_id|
      ticket = Ticket.new({ session_id: ticket_params[:session_id], chair_id: chair_id, customer_id: customer.id })

      if ticket.save
        tickets << ticket
      else
        errors << ticket.errors
      end
    end

    if errors.present?
      render json: errors.joins('</br>'), status: :unprocessable_entity
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

  private
    def set_ticket
      @ticket = Ticket.find(params[:id])
    end

    def ticket_params
      params.permit(:session_id, :cpf, :email, chair_ids: [])
    end
end
