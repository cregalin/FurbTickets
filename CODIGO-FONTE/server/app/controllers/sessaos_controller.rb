class SessaosController < ApplicationController
  before_action :set_sessao, only: [:show, :update, :destroy]

  def index
    @sessaos = Sessao.all

    render json: @sessaos
  end

  def show
    render json: @sessao
  end

  def create
    @sessao = Sessao.new(sessao_params)

    if @sessao.save
      render json: @sessao, status: :created, location: @sessao
    else
      render json: @sessao.errors, status: :unprocessable_entity
    end
  end

  def update
    if @sessao.update(sessao_params)
      render json: @sessao
    else
      render json: @sessao.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @sessao.destroy
  end

  private
    def set_sessao
      @sessao = Sessao.find(params[:id])
    end

    def sessao_params
      params.fetch(:sessao, {})
    end
end
