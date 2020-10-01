class ShowsController < ApplicationController
  before_action :set_show, only: [:show, :update, :destroy]

  def index
    @shows = Show
      .by_title(params[:title])
      .by_description(params[:description])
      .by_troupe(params[:troupe])
      .by_session_time(params[:time_from], params[:time_to])
      .by_session_date(params[:date_from], params[:date_to])

    render json: @shows
  end

  def show
    render json: @show
  end

  def create
    @show = Show.new(show_params)

    if @show.save
      render json: @show, status: :created, location: @show
    else
      render json: @show.errors, status: :unprocessable_entity
    end
  end

  def update
    if @show.update(show_params)
      render json: @show
    else
      render json: @show.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @show.destroy
  end

  private
    def set_show
      @show = Show.find(params[:id])
    end

    def show_params
      params.require(:show).permit(:title, :description, :price, :troupe, sessions_attributes: [:date, :time, :id, :destroy])
    end
end
