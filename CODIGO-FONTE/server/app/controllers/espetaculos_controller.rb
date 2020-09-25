class EspetaculosController < ApplicationController
  before_action :set_espetaculo, only: [:show, :update, :destroy]

  def index
    @espetaculos = Espetaculo.all

    render json: @espetaculos
  end

  def show
    render json: @espetaculo
  end

  def create
    @espetaculo = Espetaculo.new(espetaculo_params)

    if @espetaculo.save
      render json: @espetaculo, status: :created, location: @espetaculo
    else
      render json: @espetaculo.errors, status: :unprocessable_entity
    end
  end

  def update
    if @espetaculo.update(espetaculo_params)
      render json: @espetaculo
    else
      render json: @espetaculo.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @espetaculo.destroy
  end

  private
    def set_espetaculo
      @espetaculo = Espetaculo.find(params[:id])
    end

    def espetaculo_params
      params.fetch(:espetaculo, {})
    end
end
